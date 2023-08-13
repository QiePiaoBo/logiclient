import React from "react";
import { Link as JumpLink } from "react-router-dom";
import { Link } from "@nextui-org/react";
function Footer(props) {
    return (
        <div className="">
            <div className="my-8 flex justify-between" >
                <Link  size="lg">
                    <JumpLink to="/#">This is Footer. </JumpLink>
                </Link>
            </div>
            {/* <hr /> */}
        </div>
    );
}

export default Footer;