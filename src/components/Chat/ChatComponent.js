import React, { useState, useEffect, useContext } from 'react';
import WebSocketWrapper from './WebSocketWrapper';
import FriendList from './FrientList';
import GlobalContext from '../../resources/GlobalContext';

const ChatComponent = () => {

  
  const { userName } = useContext(GlobalContext);

  const [friends, setFriends] = useState([
    { id: 1, name: 'duke', messages: [], ws: null },
    { id: 2, name: 'lucifer', messages: [], ws: null },
    { id: 3, name: 'patrick', messages: [], ws: null },
    // Add more friends as needed
  ]);
  const [messageInput, setMessageInput] = useState('');
  const [selectedFriend, setSelectedFriend] = useState(null);

  useEffect(() => {
    if (selectedFriend) {
      console.log('I choosed ' + selectedFriend.name + ' ' + JSON.stringify(selectedFriend));
      // If selected friend doesn't have a WebSocket connection, create one
      if (!selectedFriend.ws) {
        const ws = new WebSocketWrapper('ws://localhost:9003', '/chat', {
          curUser: userName,
          aimUser: selectedFriend.name,
          chatType: 0,
        });
        setFriends((prevFriends) =>
          prevFriends.map((friend) =>
            friend.id === selectedFriend.id ? { ...friend, ws: ws } : friend
          )
        );

        ws.onMessage((message) => {
          let realMsg = message;
          let sender = '';
          let text = '';
          if (realMsg.includes(':')) {
            sender = realMsg.split(':')[0];
            text = realMsg.split(':')[1];
          } else {
            text = realMsg;
            sender = 'Server';
          }
          setFriends((prevFriends) =>
            prevFriends.map((friend) =>
              friend.id === selectedFriend.id
                ? { ...friend, messages: [...friend.messages, { text: text, sender: sender }] }
                : friend
            )
          );
          console.log(JSON.stringify(selectedFriend));
        });

        ws.onClose(() => {
          console.log('ws closed.')
          // If the WebSocket is closed, set the friend's WebSocket to null
          setFriends((prevFriends) =>
            prevFriends.map((friend) =>
              friend.id === selectedFriend.id ? { ...friend, ws: null } : friend
            )
          );
        });
      }
    }
  }, [selectedFriend,userName]);

  const sendMessage = () => {
    if (messageInput.trim() === '' || !selectedFriend || !selectedFriend.ws) {
      return;
    }
    const realMsg = messageInput + "<@" + selectedFriend.name + ">";
    // Send message using the selected friend's WebSocket
    selectedFriend.ws.send(realMsg);

    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, messages: [...friend.messages, { text: messageInput, sender: 'You' }] }
          : friend
      )
    );
    setMessageInput('');
  };

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
  };

  return (
    <div className="flex">
      <FriendList friends={friends} onSelectFriend={handleSelectFriend} />
      <div className="flex-grow p-4">
        {selectedFriend ? (
          <div>
            <div className="text-lg font-bold mb-4">{selectedFriend.name}</div>
            <div className="h-40 overflow-y-auto border-b border-gray-300 mb-4">
              {selectedFriend.messages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <strong className="text-blue-500">{msg.sender}:</strong> {msg.text}
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-grow px-2 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-1 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <div className="text-lg font-bold">Select a friend to start chatting</div>
        )}
      </div>
    </div>
  );
};

export default ChatComponent;
