import React from "react";
import {Button, Link} from "@nextui-org/react";

function NextLoginModal() {

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
export default NextLoginModal;
