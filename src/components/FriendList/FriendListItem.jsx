import "./FriendListItem.css";

export default function FriendListItem({ item }) {
  console.log("item:", item);
  return (
    <div>
      <img src={item.avatar} alt="Avatar" width="48" />
      <p className="friend-list-item-name">{item.name}</p>
      <p className={item.isOnline ? "online" : "offline"}>
        {item.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
/*
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className="friend-list-item-name">{name}</p>
      <p className={isOnline ? "online" : "offline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
*/
