// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "../public/vite.svg";
// import "modern-normalize";
import "./App.css";

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import friends from "./data/friends.json";
import userData from "./data/userData.json";
import transactions from "./data/transactions.json";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
