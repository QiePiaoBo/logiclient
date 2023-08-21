import React, { useContext } from "react";
import { Link as JumpLink } from "react-router-dom";
import { Link } from "@nextui-org/react";
import GlobalContext from "../../resources/GlobalContext";
import NextUserMenu from "../NextUserMenu";

function Header(props) {

    const { userName } = useContext(GlobalContext);

    return (
        <div className="h-full w-5/6">
            <div className="h-full w-full flex justify-between" >
                <Link size="lg">
                    <JumpLink to="/home">Home </JumpLink>
                </Link>
                <Link size="lg">
                    <JumpLink to="/chat">Chat </JumpLink>
                </Link>
                <Link size="lg">
                    <JumpLink to="/blog">Blog </JumpLink>
                </Link>
                <Link size="lg">
                    <JumpLink to="/confetti">Confetti </JumpLink>
                </Link>
                {userName ? (
                        <NextUserMenu name={userName} />
                ) : (
                    <Link size="lg">
                        <JumpLink to="/login"> Login </JumpLink>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;