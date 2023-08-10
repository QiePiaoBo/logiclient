import React from "react";


function Header(props) {
    return (
        <header>
            <h1>This is Header.{props.children}</h1>
        </header>
    );
}

export default Header;