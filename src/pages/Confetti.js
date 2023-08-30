import React, { useContext, useEffect, useState } from "react";
import MyAccordion from "../components/MyAccordion/MyAccordion";
import GlobalContext from "../resources/GlobalContext";
import NeedLoginButton from "../components/NeedLoginButton";
import { getUrlByEnv } from "../resources/utils";
import FloatButton from "../components/FloatButton";

function Confetti() {
    const { userName, userId } = useContext(GlobalContext);
    const [confettiData, setConfettiData] = useState({});
    useEffect(() => {
        const requestData = { userId: userId };
        async function fetchData() {
            const response = await fetch(getUrlByEnv("/blog/confetti/get-confetti"), {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });
            const data = await response.json();
            setConfettiData(data);
        }
        if (userId) {
            fetchData();
        }
    }, [userId]);

    return (
        <div className="w-11/12 ">
            <div className="text-2xl font-extrabold mb-4 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                    Confetti
                </span>
            </div>
            {userName ? (
                confettiData && confettiData.data && confettiData.data.length > 0 && (
                    <MyAccordion items={confettiData.data} />
                )
            ) : (
                <NeedLoginButton />
            )}
            <FloatButton jumpUrl="/main/edit/confetti"/>
        </div>
    );

}

export default Confetti;