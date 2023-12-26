import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { getUrlByEnv } from "../resources/utils";


function NumPredictComponent(props) {

    const [nums, setNums] = useState('3 14 22 31 8 18 21');


    const fetchData = async () => {
        const response = await fetch(getUrlByEnv("/licence/logicer/get-nums?size=7&min=1&max=32"), {
          method: "GET",
          credentials: 'include'
        });
        const responseJson = await response.json();
        if(response && responseJson.data){
            setNums(responseJson.data);
        }
      };

    useEffect(() => {
      fetchData();
    }, [])

    const getPredictNums = () =>{
        fetchData();
    }

    return (
        <div className="w-full mt-10">
            <div className="w-full">
                <div className="text-xl font-medium text-black"> {props.utilName}: </div>
            </div>
            <div className="w-full columns-1 mt-6">
                <div className="flex justify-center text-cyan-800">{nums}</div>
                <div className="flex justify-center mt-8"> 
                    <Button color="blue" onClick={getPredictNums}>预测</Button>
                </div>
            </div>
        </div>
    );
}
export default NumPredictComponent;