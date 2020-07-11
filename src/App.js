import React from 'react';
import styles from './App.module.css';
import Login from './components/login/Login';
import TopBar from './components/top-bar/TopBar';

const App = () => {
  return (
    <div>
      <TopBar />
      <Login />
    </div>
  );
}

export default App;
