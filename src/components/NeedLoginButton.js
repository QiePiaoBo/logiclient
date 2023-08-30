import React from "react";
import {Button, Link} from "@nextui-org/react";

function NeedLoginButton() {

  return (
    <div className="w-full flex justify-center">
       <Button
      href="/login"
      as={Link}
      color="primary"
      showAnchorIcon
      variant="solid"
    >
      未登录
    </Button>
    </div>
  );
}
export default NeedLoginButton;
