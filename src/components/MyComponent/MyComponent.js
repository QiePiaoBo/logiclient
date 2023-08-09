import React from "react";
import { Button } from '@nextui-org/button';
import { Link } from "@nextui-org/react";
import './MyComponent.css'

const Component = () => <Button color="primary" variant="shadow">Click Me</Button>;
function MyComponent(props) {

    return (
        <div className="my-div">
            <Component />
            <Link href="#" size="lg">{props.name}</Link>
        </div>
    );

}

export default MyComponent;