import React, { useEffect, useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import TrackerPage from './pages/trackerpage/trackerPage.component.jsx/tracker-page.component';

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from '@speechly/react-ui';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';

import { useDispatch } from 'react-redux';
import { setCurrentUser, signInStart } from './redux/user/user.actions';
import Login from './components/login/login.component';

const userMock = { email: 'yosri@gmail.com', password: 'yo' };
const App = () => {
  const dispatch = useDispatch();
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
