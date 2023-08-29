import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Textarea, Input, Button, ButtonGroup } from "@nextui-org/react";
import { getUrlByEnv } from "../resources/utils"
import CommonModal from "../components/CommonModal";
import GlobalContext from "../resources/GlobalContext";

function Editor() {

    const params = useParams();
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [checkError, setCheckError] = useState(false);
    const [fileTypeError, setFileTypeError] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [responseData, setResponseData] = useState({});
    const { userId } = useContext(GlobalContext);


    // 选择文件上传组件
    const fileInput = document.querySelector('input[type="file"]');
    // 清空选择的文件
    const handleClearFile = () => {
        fileInput.value = '';
    };
    // 监听文件选择
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    // 重置
    const handleReset = () => {
        setDesc("");
        setTitle("");
        setFile(null);
        setSubTitle("");
        setCheckError(false);
        setFileTypeError(false);
        handleClearFile();
    };
    // 提交
    const handleSubmit = async () => {
        if (params.type === "blog") {
            if (!title | !subTitle | !desc | !file) {
                setCheckError(true);
                return;
            }
            if (file && !file.name.endsWith('.md')) {
                setFileTypeError(true);
                return;
            }
            await uploadFile(title, subTitle, desc, file);
            setUploadSuccess(true);
        } else if (params.type === "confetti") {
            if (!title | !desc) {
                setCheckError(true);
                return;
            }
            await uploadConfetti(title, desc);
            setUploadSuccess(true);
        }
    };
    // 发送文件上传请求
    async function uploadFile(title, subTitle, desc, file) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("subTitle", subTitle);
        formData.append("description", desc);
        formData.append("file", file);
        formData.append("fileType", "笔记");
        const response = await fetch(getUrlByEnv("/blog/article/upload"), {
            method: "POST",
            credentials: 'include',
            body: formData,
        });
        const data = await response.json();
        setResponseData(data);
    }

    // 发送纸屑添加请求
    async function uploadConfetti(title, content) {
        const requestData = { userId: userId, title: title, content: content }
        const response = await fetch(getUrlByEnv("/blog/confetti/add-confetti"), {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData)
        });
        const data = await response.json();
        setResponseData(data);
    }


    return (
        <div className="w-5/6">
            <div className="text-center text-2xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-400">
                    《{params.type}》
                </span>
            </div>
            {checkError
                &&
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
                    错误！必填项缺失
                </span>
            }
            {fileTypeError
                &&
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
                    错误！文件类型必须为md
                </span>
            }
            {uploadSuccess && responseData && responseData.status === 100014 &&
                <CommonModal
                    isOpen={uploadSuccess}
                    onOpenChange={() => setUploadSuccess(false)}
                    title={responseData.message}
                    content={JSON.stringify(responseData, null, 2)}
                    btnUrl1={"/login"}
                    btnName1="登录"
                />
            }
            {uploadSuccess && responseData && responseData.status !== 100014 &&
                <CommonModal
                    isOpen={uploadSuccess}
                    onOpenChange={() => setUploadSuccess(false)}
                    title={responseData.message}
                    content={JSON.stringify(responseData, null, 2)}
                />
            }
            {uploadSuccess && responseData && responseData.data && params.type === "blog" &&
                <CommonModal
                    isOpen={uploadSuccess}
                    onOpenChange={() => setUploadSuccess(false)}
                    title="上传Article成功"
                    content={JSON.stringify(responseData, null, 2)}
                    btnUrl1={"/main/article/" + responseData.data.id}
                    btnName1="详情"
                    btnUrl2="/main/blog"
                    btnName2="主页"
                />
            }
            {uploadSuccess && responseData && responseData.data && params.type === "confetti" &&
                <CommonModal
                    isOpen={uploadSuccess}
                    onOpenChange={() => setUploadSuccess(false)}
                    title="上传Confetti成功"
                    content={JSON.stringify(responseData, null, 2)}
                    btnUrl1={"/tool/confetti"}
                    btnName1="查看结果"
                />
            }
            <Input
                isRequired
                className="w-full mt-2"
                key="title"
                label="标题"
                radius="none"
                value={title}
                onValueChange={setTitle}
                variant="underlined"
            />

            {params.type && params.type === "blog" &&
                <Input
                    isRequired
                    className="w-full mt-2"
                    key="subTitle"
                    label="副标题"
                    radius="none"
                    value={subTitle}
                    onValueChange={setSubTitle}
                    variant="underlined"
                />
            }
            <Textarea
                isRequired
                variant="underlined"
                label="描述/内容"
                labelPlacement="outside"
                placeholder="输入描述信息/内容"
                value={desc}
                onValueChange={setDesc}
                className="w-full mt-4"
            />
            {params.type && params.type === "blog" &&
                <label className="mt-4 block">
                    <input
                        type="file"
                        className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"
                        onChange={handleFileChange}
                    />
                </label>
            }
            <ButtonGroup className="w-full mt-6">
                <Button className="bg-gradient-to-tr from-green-300 to-cyan-300 shadow-lg w-1/5" onClick={handleSubmit}>提交</Button>
                <Button className="bg-gradient-to-tr from-pink-300 to-yellow-300 shadow-lg w-1/5" onClick={handleReset}>重置</Button>
            </ButtonGroup>
        </div>
    )
}

export default Editor;