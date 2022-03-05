import { Route, Routes } from 'react-router';

import Header from './components/header/Header';
import RocketsList from './components/rockets/RocketsList';
import MissionsList from './components/missions/MissionsList';
import MyProfile from './components/my-profile/MyProfile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RocketsList />} />
        <Route path="/missions" element={<MissionsList />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
