import "./FriendList.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((item, index) => {
        return (
          <li key={item.id} data-key={item.id} className="friend-list-item">
            {/* [{item.id}] - {item.name} */}
            <FriendListItem
              item={item}
              //   avatar={item.avatar}
              //   name={item.name}
              //   isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
