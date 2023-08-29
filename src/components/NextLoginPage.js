import React, { useContext, useState } from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import GlobalContext from "../resources/GlobalContext";
import { doLogin } from "../resources/utils";
import CommonModal from "./CommonModal";

function NextLoginPage() {
    const [selected, setSelected] = React.useState("login");
    const { setUserId, setUserName } = useContext(GlobalContext);
    const [needAlert, setNeedAlert] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [responseData, setResponseData] = useState({});
    const [alertTitle, setAlertTitle] = useState('');

    const login = async () => {
        const resData = await doLogin(username,password);
        setResponseData(resData);
        if (resData && resData.status !== 100000) {
            setAlertTitle("错误");
            setNeedAlert(true);
        } else {
            setAlertTitle("成功");
            setNeedAlert(true);
            setUserId(resData.data.id);
            setUserName(resData.data.userName);
        }
    }
    
    return (
        <div className="flex flex-col w-full">

            {needAlert &&
                <CommonModal
                    isOpen={needAlert}
                    onOpenChange={() => setNeedAlert(false)}
                    title={alertTitle}
                    content={JSON.stringify(responseData, null, 2)}
                />
            }
            <Card className="max-w-full w-[340px] h-[400px]">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        <Tab key="login" title="登录">
                            <form className="flex flex-col gap-4">
                                <Input
                                    isRequired
                                    label="用户名"
                                    placeholder="Enter your name."
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <Input
                                    isRequired
                                    label="密码"
                                    placeholder="Enter your password."
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <p className="text-center text-small">
                                    需要创建新用户?{" "}
                                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                                        注册
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary" onPress={login}>
                                        登录
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                        <Tab key="sign-up" title="注册">
                            <form className="flex flex-col gap-4 h-[300px]">
                                <Input isRequired label="用户名" placeholder="Enter your name" type="password" />
                                <Input isRequired label="邮箱" placeholder="Enter your email" type="email" />
                                <Input
                                    isRequired
                                    label="密码"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <p className="text-center text-small">
                                    已经有账户?{" "}
                                    <Link size="sm" onPress={() => setSelected("login")}>
                                        登录
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary">
                                        注册
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}

export default NextLoginPage;