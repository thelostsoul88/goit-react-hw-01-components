import user from '../base/user.json';
import css from './Profile.module.css';

export function Profile() {
  const { username, tag, location, stats, avatar } = user;
  return (
    <div className={css.profile}>
      <div className={css.dscr}>
        <img className={css.avatar} src={avatar} alt="avatar" width="150" />
        <h2 className={css.name}>{username}</h2>
        <h4 className={css.tag}>@{tag}</h4>
        <h4 className={css.location}>{location}</h4>
      </div>
      <ul className={css.stats}>
        <li className={(css.statsItem, css.firstChild)}>
          <p className={css.statsP}>Followers</p>
          <p className={css.statsP}>{stats.followers}</p>
        </li>
        <li className={css.statsItem}>
          <p className={css.statsP}>Likes</p>
          <p className={css.statsP}>{stats.likes}</p>
        </li>
        <li className={(css.statsItem, css.lastChild)}>
          <p className={css.statsP}>Views</p>
          <p className={css.statsP}>{stats.views}</p>
        </li>
      </ul>
    </div>
  );
}
