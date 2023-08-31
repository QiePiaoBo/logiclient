import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { PowerIcon, StopIcon, StarIcon } from "@heroicons/react/24/solid";
import Link from "@mui/material/Link";
import {formatDate} from "../resources/utils"

function HomeTimeline(props) {
  const { items = [] } = props;
  return (
    <div className="w-full">
      <Timeline>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon className="p-3" variant="ghost" color="cyan">
              <PowerIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                始于
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                2019-07-15
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        {props && props.items && props.items.map((item) => (
          <TimelineItem className="h-28">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="green">
                <StarIcon className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Link href={"/main/article/" + item.id} color="inherit">
                  <Typography variant="h6" color="blue-gray" className="line-clamp-1">
                    {item.title}
                  </Typography>
                </Link>
                <Typography variant="small" color="gray" className="font-normal line-clamp-1">
                {String.toString(formatDate(item.createTime),null,2)}
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        ))}
        <TimelineItem className="h-28">
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon className="p-3" variant="ghost" color="cyan">
              <StopIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                终于
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                ······
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default HomeTimeline;