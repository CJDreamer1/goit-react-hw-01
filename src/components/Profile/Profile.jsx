import css from "../Profile/Profile.module.css";

export default function Profile({
  profile: { username, tag, location, avatar, stats },
}) {
  return (
    <div className={css.container}>
      <div className={css.pictureContainer}>
        <span className={css.spanContainer}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
        </span>
        <p className={css.blackText}>{username}</p>
        <p className={css.grayText}>@{tag}</p>
        <p className={css.grayText}>{location}</p>
      </div>

      <ul className={css.statsContainer}>
        <li className={css.liContainer}>
          <span>
            Followers<br></br>
          </span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.liContainer}>
          <span>
            Views<br></br>
          </span>
          <span>{stats.views}</span>
        </li>
        <li className={css.liContainer}>
          <span>
            Likes<br></br>
          </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
