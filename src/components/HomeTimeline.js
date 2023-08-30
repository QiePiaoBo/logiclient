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

function HomeTimeline() {
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
                开端
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                22 DEC 7:20 PM
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        {Array.from({ length: 8 }).map((_, index) => (
          <TimelineItem className="h-28">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="green">
                <StarIcon className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  过程
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  21 DEC 11 PM
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
                终局
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                20 DEC 2:20 AM
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
    // <div className="w-full">
    //   <Timeline>
    //     <TimelineItem>
    //       <TimelineConnector />
    //       <TimelineHeader>
    //         <TimelineIcon className="p-2">
    //           <PowerIcon className="h-4 w-4" />
    //         </TimelineIcon>
    //         <Typography variant="h5" color="blue-gray">
    //           开端
    //         </Typography>
    //       </TimelineHeader>
    //       <TimelineBody className="pb-8">
    //         <Typography color="gary" className="font-normal text-gray-600">
    //           The key to more success is to have a lot of pillows. Put it this way, it took me
    //           twenty five years to get these plants, twenty five years of blood sweat and tears, and
    //           I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
    //           luv.
    //         </Typography>
    //       </TimelineBody>
    //     </TimelineItem>
    //     {Array.from({ length: 8 }).map((_, index) => (
    //       <TimelineItem>
    //         <TimelineConnector />
    //         <TimelineHeader>
    //           <TimelineIcon className="p-2">
    //             <StarIcon className="h-4 w-4" />
    //           </TimelineIcon>
    //           <Typography variant="h5" color="blue-gray">
    //             Timeline Title Here.
    //           </Typography>
    //         </TimelineHeader>
    //         <TimelineBody className="pb-8">
    //           <Typography color="gary" className="font-normal text-gray-600">
    //             The key to more success is to have a lot of pillows. Put it this way, it took me
    //             twenty five years to get these plants, twenty five years of blood sweat and tears, and
    //             I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
    //             luv.
    //           </Typography>
    //         </TimelineBody>
    //       </TimelineItem>
    //     ))}
    //     <TimelineItem>
    //       <TimelineHeader>
    //         <TimelineIcon className="p-2">
    //           <StopIcon className="h-4 w-4" />
    //         </TimelineIcon>
    //         <Typography variant="h5" color="blue-gray">
    //           终局
    //         </Typography>
    //       </TimelineHeader>
    //       <TimelineBody>
    //         <Typography color="gary" className="font-normal text-gray-600">
    //           The key to more success is to have a lot of pillows. Put it this way, it took me
    //           twenty five years to get these plants, twenty five years of blood sweat and tears, and
    //           I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
    //           luv.
    //         </Typography>
    //       </TimelineBody>
    //     </TimelineItem>
    //   </Timeline>
    // </div>
  );
}

export default HomeTimeline;