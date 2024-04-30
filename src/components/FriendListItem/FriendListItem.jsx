import css from "../FriendListItem/FriendListItem.module.css";
import clsx from "clsx";

export default function FriendsListItem({
  friend: { avatar, name, isOnline },
}) {
  return (
    <div className={css.div}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.username}>{name}</p>
      <p
        className={clsx(
          css.usernameColored,
          isOnline ? css.online : css.offline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
