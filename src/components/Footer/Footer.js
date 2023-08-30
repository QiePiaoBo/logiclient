import React from "react";
import { Link as JumpLink } from "react-router-dom";
import { Link } from "@material-tailwind/react";
function Footer(props) {
    return (
            <nav className="bg-white h-full w-full text-center shadow-lg " >
                <br />
                <Link className="text-inherit" size="sm">
                    <JumpLink to="https://beian.miit.gov.cn/">鲁ICP备19003359号</JumpLink>
                </Link>
                
            </nav>
    );
}

export default Footer;