import NeedLoginButton from "../components/NeedLoginButton";
import GlobalContext from "../resources/GlobalContext";
import { useContext } from "react";

function Chat() {

    const { userName } = useContext(GlobalContext);
    console.log(userName);
    return (
        <div className="w-5/6 text-center">
        <p>{userName}</p>
            {userName ? (
                <p>Chat Component Here</p>
            ) : (
                <NeedLoginButton />
            )}
        </div>
    );
}

export default Chat;