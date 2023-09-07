import React from "react";
import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography,
} from "@material-tailwind/react";
import {
    PlusIcon,
    HomeModernIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";


function MaterialFloatButton(props) {

    const { jumpUrl } = props;
    const labelProps = {
        variant: "small",
        color: "blue-gray",
        className:
            "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
    };
    return (
        <div className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center">
            <SpeedDial>
                <SpeedDialHandler>
                    <IconButton color="white" size="lg" className="rounded-full">
                        <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                    </IconButton>
                </SpeedDialHandler>
                <SpeedDialContent>
                    <SpeedDialAction className="relative">
                        <HomeModernIcon
                            onClick={() => {
                                window.location.href = '/home';
                            }}
                            color="blue-gray"
                            className="h-5 w-5" />
                        <Typography {...labelProps}>Home</Typography>
                    </SpeedDialAction>
                    <SpeedDialAction className="relative">
                        <Cog6ToothIcon
                            onClick={() => {
                                window.location.href = '/settings';
                            }}
                            color="blue-gray"
                            className="h-5 w-5" />
                        <Typography {...labelProps}>Settings</Typography>
                    </SpeedDialAction>
                    <SpeedDialAction className="relative">
                        <PlusIcon
                            onClick={() => {
                                window.location.href = jumpUrl;
                            }}
                            color="blue-gray"
                            className="h-5 w-5" />
                        <Typography {...labelProps}>Add</Typography>
                    </SpeedDialAction>
                </SpeedDialContent>
            </SpeedDial>
        </div>
    );

}

export default MaterialFloatButton;
