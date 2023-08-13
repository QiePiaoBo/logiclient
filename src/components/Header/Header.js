import React from "react";
import { Link as JumpLink } from "react-router-dom";
import { Link } from "@nextui-org/react";

function Header(props) {
    return (
        <div className="h-full w-5/6">
            <div className="h-full w-full flex justify-between" >
                <Link  size="lg">
                    <JumpLink to="/">Basic </JumpLink>
                </Link>
                <Link  size="lg">
                    <JumpLink to="/home">Home </JumpLink>
                </Link>
                <Link  size="lg">
                    <JumpLink to="/chat">Chat </JumpLink>
                </Link>
                <Link  size="lg">
                    <JumpLink to="/confetti">Confetti </JumpLink>
                </Link>
                <Link  size="lg">
                    <JumpLink to="/nothing-here">NothingHere</JumpLink>
                </Link>
            </div>
        </div>
    );
}

export default Header;