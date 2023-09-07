import React, { useEffect, useState } from "react";
import MyAccordion from "../components/MyAccordion/MyAccordion";
import { getUrlByEnv } from "../resources/utils";
import MaterialFloatButton from "../components/MaterialFloatButton";

function Confetti() {
    const [confettiData, setConfettiData] = useState({});
    useEffect(() => {
        const requestData = { userId: 0 };
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
        fetchData();
    }, []);

    return (
        <div className="w-11/12 ">
            <div className="text-2xl font-extrabold mb-4 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                    Confetti
                </span>
            </div>
            {confettiData && confettiData.data && confettiData.data.length > 0 && (
                <MyAccordion items={confettiData.data} />
            )}
            <MaterialFloatButton jumpUrl="/main/edit/confetti" />
        </div>
    );

}

export default Confetti;