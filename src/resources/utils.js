import { useContext } from "react";
import GlobalContext from "./GlobalContext";

export function getUrlByEnv(url) {
    // 检查当前环境
    const isLocal = window.location.hostname === 'localhost';
    // 拼接完整的URL
    if (isLocal) {
        url = url.replace('/blog', 'http://172.26.0.152:9002');
        url = url.replace("/licence", "http://172.26.0.151:9000");
        return url;
    } else {
        return url;
    }
}
// 登出时清理资源
export function CleanCurUser() {
    const {setUserId, setUserName} = useContext(GlobalContext);
    const doCleanCurUser = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
        setUserId(null);
        setUserName(null);
    };
    return doCleanCurUser;
}
// 发送登出请求
export async function doLogout() {
    const response = await fetch(getUrlByEnv("/licence/act/logout"),{
        method: 'GET',
        credentials: 'include',
    });
    console.log("response=" + JSON.stringify(response, null, 2));
}

// 发送登录请求
export async function doLogin (username, password) {
    // 在这里使用username和password
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
    
    return resData;
}
// 简化字符串
export function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    console.log("res=" + `${year}-${month}-${day} ${hour}:${minute}`);
    const dayStr = `${year}-${month}-${day}`;
    return dayStr;
  }