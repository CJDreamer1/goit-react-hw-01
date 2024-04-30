import transactions from "../transactions.json";
import userData from "../userData.json";
import friends from "../friends.json";

import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile profile={userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
