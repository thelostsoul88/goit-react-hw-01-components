import css from './Profile.module.css';
import PropTypes from 'prop-types';

export default function Profile(props) {
  const {
    username,
    tag,
    location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    stats: { followers, views, likes },
  } = props;

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
          <p className={css.label}>Followers</p>
          <p className={css.quantity}>{followers}</p>
        </li>
        <li className={css.statsItem}>
          <p className={css.label}>Likes</p>
          <p className={css.quantity}>{likes}</p>
        </li>
        <li className={(css.statsItem, css.lastChild)}>
          <p className={css.label}>Views</p>
          <p className={css.quantity}>{views}</p>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
