import React from "react";
import NumPredictComponent from "../components/NumPredictComponent";
import WordEncode from "../components/WordEnCode";
import WordDecode from "../components/WordDecode";

function Util() {
    return (
        <div className="w-5/6">
            <div className="text-2xl font-extrabold mb-4 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                    Util
                </span>
            </div>
            <NumPredictComponent utilName="双色球预测" />
            <WordEncode utilName="字符串二级加密 " />
            <WordDecode utilName="字符串二级解密 " />
        </div>
    );
}

export default Util;