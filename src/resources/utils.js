import { useContext } from "react";
import GlobalContext from "./GlobalContext";

export function getUrlByEnv(url) {
    // 检查当前环境
    const isLocal = window.location.hostname === 'localhost';
    // 拼接完整的URL
    if (isLocal) {
        url = url.replace('/blog', 'http://172.26.0.152:9002');
        url = url.replace("/licence", "http://127.0.0.1:9000");
        return url;
    } else {
        return url;
    }
}
// 登出时清理资源
export function CleanCurUser() {
    const {setUserId, setUserName} = useContext(GlobalContext);
    const cleanCurUser = () => {
        setUserId(null);
        setUserName(null);
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
    };
    return cleanCurUser;
}
// 发送登出请求
export async function doLogout() {
    const response = await fetch(getUrlByEnv("/licence/act/logout"),{
        method: 'GET',
        credentials: 'include',
    });
    console.log("logout = " + JSON.stringify(response, null, 2));
}

// 发送登录请求
export async function doLogin (username, password) {
    // 在这里使用username和password
    console.log(username + "@" + password);
    const requestData = {userName: username, userPassword: password};
    const response = await fetch(getUrlByEnv("/licence/act/login"),{
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    }); 
    const resData = await response.json();
    console.log("Headers="+JSON.stringify(response.headers, null, 2));
    console.log("resData=" + JSON.stringify(resData,null,2));
    
    return resData;
}