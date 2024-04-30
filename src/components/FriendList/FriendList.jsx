import FriendListItem from "../FriendListItem/FriendListItem";
import friends from "../friends.json";
import css from "../FriendList/FriendList.module.css";

export default function FriendList() {
  return (
    <>
      <ul className={css.ulContainer}>
        {friends.map((friend) => (
          <li className={css.liContainer} key={friend.id}>
            <FriendListItem key={friend.id} friend={friend} />
          </li>
        ))}
      </ul>
    </>
  );
}
