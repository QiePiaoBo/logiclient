class WebSocketWrapper {
  constructor(baseURL, path, queryParams) {
    // 构建完整的 WebSocket URL

    const url = `${baseURL}${path}/${queryParams.curUser}/${queryParams.aimUser}/${queryParams.chatType}`;

    // 修改这里，传递 protocol 作为第二个参数
    this.ws = new WebSocket(url);

    this.messageCallbacks = [];
    this.closeCallbacks = [];

    this.ws.onopen = () => {
      // 在 WebSocket 连接建立时，发送自定义的请求头
      console.log("Connected...")
      // 处理 WebSocket 连接建立时的逻辑
    };

    this.ws.onmessage = (event) => {
      this.messageCallbacks.forEach((callback) => {
        callback(event.data);
      });
    };

    this.ws.onclose = () => {
      this.closeCallbacks.forEach((callback) => {
        callback();
      });
    };
  }

  onMessage(callback) {
    this.messageCallbacks.push(callback);
  }

  onClose(callback) {
    this.closeCallbacks.push(callback);
  }

  send(message) {
    this.ws.send(message);
  }

  close() {
    this.ws.close();
  }
}

export default WebSocketWrapper;
