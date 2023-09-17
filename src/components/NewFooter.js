import React from "react";
import { Typography } from "@material-tailwind/react"
import { Link } from "@nextui-org/link";
import {Link as JumpLink} from "react-router-dom";


function NewFooter() {
  return (
    <footer className="w-full bg-white p-8 mt-12">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        {/* <Image src="../resources/images/logo225.png" alt="logo" className="w-10"  /> */}
        <img src="../logo225.png" alt="logo" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="http://logicer.top/main/article/18"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://github.com/QiePiaoBo/logicer"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              GitHub
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Logicer Dylan
      </Typography>
      <Typography color="blue-gray" className="text-center font-normal">

        <Link className="text-inherit" size="sm">
          <JumpLink to="https://beian.miit.gov.cn/">鲁ICP备19003359号</JumpLink>
        </Link>
      </Typography>

    </footer>
  );
}

export default NewFooter;
