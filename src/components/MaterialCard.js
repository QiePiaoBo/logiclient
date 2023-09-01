import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faArrowRight } from '@fortawesome/free-solid-svg-icons'


function MaterialCard(props) {

    return (
        <Card className="h-64 my-6 mx-2 py-2 transform transition-transform duration-300 hover:scale-105">
            <CardBody className="h-40">
                <FontAwesomeIcon className="text-blue-500" size="2x" icon={faCloud} />
                <Typography
                    className="overflow-hidden mb-2"
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                    }}
                    variant="h5" color="blue-gray">
                    {props.title}
                </Typography>
                <Typography
                    className="overflow-hidden"
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {props.description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <a href={props.href + "/" + props.id} className="inline-block">
                    <Button size="sm" variant="text" className="flex items-center gap-2">
                        详情
                        <FontAwesomeIcon className="text-blue-500" size="x" icon={faArrowRight} />
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );

}

export default MaterialCard;