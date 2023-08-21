import React from "react";
import { Link as JumpLink } from "react-router-dom";
import { Link } from "@nextui-org/react";
function Footer(props) {
    return (
            <div className="h-full w-full text-center" >
                <Link className="" size="lg">
                    <JumpLink to="/#">Connect Me</JumpLink>
                </Link>
                <br />
                <Link className="text-inherit" size="sm">
                    <JumpLink to="https://beian.miit.gov.cn/">鲁ICP备19003359号</JumpLink>
                </Link>
                
            </div>
    );
}

export default Footer;