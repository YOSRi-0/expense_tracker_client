import React from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import TrackerPage from './pages/trackerpage/trackerPage.component.jsx/tracker-page.component';

function App() {
  return (
    <>
      <Header />
      <TrackerPage />
    </>
  );
}

export default App;
