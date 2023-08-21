import React, { useContext } from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import GlobalContext from "../resources/GlobalContext";

function NextLoginPage() {
    const [selected, setSelected] = React.useState("login");
    const {setUserName} = useContext(GlobalContext);
    const doLogin = () => {
        setUserName("dylan");
    }
    return (
        <div className="flex flex-col w-full">
            <Card className="max-w-full w-[340px] h-[400px]">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        <Tab key="login" title="登录">
                            <form className="flex flex-col gap-4">
                                <Input isRequired label="邮箱" placeholder="Enter your email" type="email" />
                                <Input
                                    isRequired
                                    label="密码"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <p className="text-center text-small">
                                    需要创建新用户?{" "}
                                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                                        注册
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary" onPress={doLogin}>
                                        登录
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                        <Tab key="sign-up" title="注册">
                            <form className="flex flex-col gap-4 h-[300px]">
                                <Input isRequired label="用户名" placeholder="Enter your name" type="password" />
                                <Input isRequired label="邮箱" placeholder="Enter your email" type="email" />
                                <Input
                                    isRequired
                                    label="密码"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <p className="text-center text-small">
                                    已经有账户?{" "}
                                    <Link size="sm" onPress={() => setSelected("login")}>
                                        登录
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary">
                                        注册
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}

export default NextLoginPage;