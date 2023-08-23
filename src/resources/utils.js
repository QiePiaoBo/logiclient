export function getUrlByEnv(url) {
    // 检查当前环境
    const isLocal = window.location.hostname === 'localhost';
    // 拼接完整的URL
    if (isLocal) {
        url = url.replace('/blog', 'http://172.26.0.152:9002');
        return url;
    } else {
        return url;
    }
}