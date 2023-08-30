import NeedLoginButton from "../components/NeedLoginButton";
import GlobalContext from "../resources/GlobalContext";
import { useContext } from "react";

function Chat() {

    const { userName } = useContext(GlobalContext);
    return (
        <div className="w-5/6 ">
            <div className="text-2xl font-extrabold mb-4 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                    Chat
                </span>
            </div>
            {userName ? (
                <p>Chat Component Here</p>
            ) : (
                <NeedLoginButton />
            )}
        </div>
    );
}

export default Chat;