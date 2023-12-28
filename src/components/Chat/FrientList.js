import React from 'react';

const FriendList = ({ friends, onSelectFriend }) => {
  return (
    <div className="flex-shrink-0 w-1/4 bg-gray-200 p-4">
      <div className="font-bold mb-4">Friends</div>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} className="cursor-pointer mb-2 text-blue-500" onClick={() => onSelectFriend(friend)}>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;