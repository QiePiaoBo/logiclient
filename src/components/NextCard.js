import React from "react";
import {Card, CardHeader, CardBody,CardFooter, Divider, Link, Image} from "@nextui-org/react";

function NextCard() {

  return (
    <Card className="max-w-[600px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          showAnchorIcon
          href="/#"
        >
          点击跳转
        </Link>
      </CardFooter>
    </Card>
  );
}
export default NextCard;