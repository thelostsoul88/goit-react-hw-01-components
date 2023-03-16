import Profile from './profile/Profile';
import user from '../path/to/user.json';

export const App = () => {
  return (
    <div className="container">
      <h2>Profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        foto={user.avatar}
        stats={user.stats}
      />
      <h2>Statistics</h2>
    </div>
  );
};
