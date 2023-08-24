import React from "react";
import {Button, Link} from "@nextui-org/react";

function NeedLoginButton() {

  return (
    <>
       <Button
      href="/login"
      as={Link}
      color="primary"
      showAnchorIcon
      variant="solid"
    >
      未登录
    </Button>
    </>
  );
}
export default NeedLoginButton;
