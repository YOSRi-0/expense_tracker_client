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
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/signup/signup.component';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            currentUser ? (
              <div>
                <PushToTalkButtonContainer>
                  <PushToTalkButton />
                </PushToTalkButtonContainer>
                <TrackerPage />
              </div>
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          exact
          path="/login"
          element={currentUser ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          exact
          path="/signup"
          element={currentUser ? <Navigate replace to="/" /> : <Signup />}
        />
      </Routes>
    </>
  );
};

export default App;
