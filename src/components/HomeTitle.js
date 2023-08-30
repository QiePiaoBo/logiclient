import React from "react";

function HomeTitle(props) {

    return (
        <div className="text-5xl text-center font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                {props.title ? props.title : '学海无涯' }
            </span>
        </div>
    );
}

export default HomeTitle;