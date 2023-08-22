import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import RJPG from '../resources/images/R.jpg'
import { useNavigate } from "react-router-dom";

function NextCard(props) {

  const navigate = useNavigate();

  function handlePress(href, id, common) {
    console.log(href, id, common);
    navigate(href + "/" + id + "/" + (common?common : "Hello World"));
  }

  return (
    <Card className="py-4" isHoverable isPressable onPress={()=> handlePress(props.href, props.id, props.common)}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className=" py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={RJPG}
        />
      </CardBody>
    </Card>
  );
}
export default NextCard;