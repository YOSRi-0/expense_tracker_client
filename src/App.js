import React, { lazy, Suspense } from 'react';

import './App.css';
// import TrackerPage from './pages/trackerpage/trackerPage.component.jsx/tracker-page.component';

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from '@speechly/react-ui';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { Navigate, Route, Routes } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';
const TrackerPageContainer = lazy(() =>
  import(
    './pages/trackerpage/trackerPage.component.jsx/tracker-page.container.jsx'
  )
);
const Login = lazy(() => import('./components/login/login.component'));
const Signup = lazy(() => import('./components/signup/signup.component'));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <Suspense fallback={<Spinner />}>
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
                  <TrackerPageContainer />
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
      </Suspense>
    </>
  );
};

export default App;
