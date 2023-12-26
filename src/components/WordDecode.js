import React, { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { getUrlByEnv } from "../resources/utils";


function WordDecode(props) {

    const [text, setText] = React.useState("");

    const [result, setResult] = React.useState("");

    const onChange = ({ target }) => setText(target.value);




    const fetchData = async () => {
        const response = await fetch(getUrlByEnv(`/licence/logicer/word-decode?word=${text}`), {
            method: "GET",
            credentials: 'include'
        });
        const responseJson = await response.json();
        if (response && responseJson.data) {
            setResult(responseJson.data);
        }
    };

    const getDecodeResult = () => {
        fetchData();
    }

    return (
        <div className="w-full mt-10">
            <div className="w-full">
                <div className="text-xl font-medium text-black"> {props.utilName}: </div>
            </div>
            <div className="w-full columns-1 mt-6">
                <div className="relative flex w-full max-w-[24rem]">
                    <Input
                        type="text"
                        label="待解密字符串"
                        value={text}
                        onChange={onChange}
                        className="pr-20"
                        containerProps={{
                            className: "min-w-0",
                        }}
                    />
                    <Button
                        size="sm"
                        color={text ? "gray" : "blue-gray"}
                        disabled={!text}
                        onClick={getDecodeResult}
                        className="!absolute right-1 top-1 rounded"
                    >
                        Decode
                    </Button>
                </div>
            </div>
            <div className="w-full columns-1 mt-6">
                {result}
            </div>
        </div>
    );
}
export default WordDecode;