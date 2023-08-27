import React, { useContext } from "react";
import { Link as JumpLink } from "react-router-dom";
import { Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import GlobalContext from "../../resources/GlobalContext";
import NextUserMenu from "../NextUserMenu";
import { doLogout,CleanCurUser } from "../../resources/utils";

function Header(props) {

    const { userName } = useContext(GlobalContext);
    const doCleanCurUser = CleanCurUser();
    const variant = "menu";
    const color = "primary";
    return (
        <nav
            className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
            data-te-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div className="flex items-center lg:hidden">
                    <Dropdown className="bg-transparent">
                        <DropdownTrigger>
                            <Button
                                color={color}
                                variant={variant}
                                className="capitalize"
                            >
                                {variant}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Dropdown Variants"
                            color={color}
                            variant={variant}
                        >
                            <DropdownItem >
                                <JumpLink to="/home">Home </JumpLink>
                            </DropdownItem>
                            <DropdownItem >
                                <JumpLink to="/main/blog">Blog </JumpLink>
                            </DropdownItem>
                            <DropdownItem >
                                <JumpLink to="/tool/chat">Chat </JumpLink>
                            </DropdownItem>
                            <DropdownItem >
                                <JumpLink to="/tool/confetti">Confetti </JumpLink>
                            </DropdownItem>
                            <DropdownItem >
                                {userName ? (
                                    <JumpLink onClick={()=>{doCleanCurUser();doLogout();}}> Logout </JumpLink>
                                ) : (
                                    <JumpLink to="/login"> Login </JumpLink>
                                )}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div
                    className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
                    id="navbarSupportedContentY"
                    data-te-collapse-item>
                    <ul
                        className="mr-auto flex flex-col lg:flex-row"
                        data-te-navbar-nav-ref>
                        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                            <Link size="lg" href="/home">
                                Home
                                {/* <JumpLink to="/home">Home </JumpLink> */}
                            </Link>
                        </li>
                        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>

                            <Link size="lg" href="/main/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>

                            <Link size="lg" href="/tool/chat">
                                Chat
                            </Link>
                        </li>
                        <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>

                            <Link size="lg" href="/tool/confetti">
                                Confetti
                            </Link>
                        </li>
                        <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                            {userName ? (
                                <NextUserMenu name={userName} />
                            ) : (
                                <Link size="lg" href="/login">
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;