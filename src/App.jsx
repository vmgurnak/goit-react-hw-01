import './App.css';
import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/FriendList/FriendList.jsx';

import userData from './userData.json';
import friends from './friends.json';

const App = () => {
  return (
    <div>
      <section>
        <div>
          <h2>Prifile</h2>
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
          />
        </div>
      </section>
      <section>
        <div>
          <h2>FriendList</h2>
          <FriendList friends={friends} />
        </div>
      </section>
    </div>
  );
};

export default App;
