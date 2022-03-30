import React from 'react';

import './App.css';
import Header from './components/header/header.component';
import TrackerPage from './pages/trackerpage/trackerPage.component.jsx/tracker-page.component';

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from '@speechly/react-ui';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';

import Login from './components/login/login.component';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <Header />
      {currentUser ? (
        <>
          <PushToTalkButtonContainer>
            <PushToTalkButton />
          </PushToTalkButtonContainer>
          <TrackerPage />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
