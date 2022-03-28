import React, { useEffect, useRef } from 'react';
import { Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import TrackerPage from './pages/trackerpage/trackerPage.component.jsx/tracker-page.component';

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from '@speechly/react-ui';

const App = () => {
  return (
    <>
      <Header />
      <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer>
      <TrackerPage />
    </>
  );
};

export default App;
