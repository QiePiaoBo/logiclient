import React from "react";

function HomeTitle(props) {

    return (
        <div className="text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {props.title ? props.title : '学海无涯' }
            </span>
        </div>
    );
}

export default HomeTitle;