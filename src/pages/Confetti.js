import React, { useContext, useEffect, useState } from "react";
import MyAccordion from "../components/MyAccordion/MyAccordion";
import GlobalContext from "../resources/GlobalContext";
import NeedLoginButton from "../components/NeedLoginButton";
import { getUrlByEnv } from "../resources/utils";

function Confetti() {
    const { userName, userId } = useContext(GlobalContext);
    const [confettiData, setConfettiData] = useState({});
    useEffect(() => {
        console.log("userId=" + userId);
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
            console.log("data=" + JSON.stringify(data,null, 2));
            setConfettiData(data);
        }
        fetchData();
    }, [userId]);

    return (
        <div className="w-5/6">
            <p>{userName}</p>
            {userName ? (
                confettiData && confettiData.data && confettiData.data.length > 0 && (
                    <MyAccordion items={confettiData.data} />
                )
            ) : (
                <NeedLoginButton />
            )}
        </div>
    );

}

export default Confetti;