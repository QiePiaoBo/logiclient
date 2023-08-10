import React from "react";


function Footer(props) {
    return (
        <div>
            <h1>This is Footer.{props.children}</h1>
        </div>
    );
}

export default Footer;