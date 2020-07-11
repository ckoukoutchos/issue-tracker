import React from 'react';
import styles from './App.module.css';
import Login from './components/login/Login';
import Spinner from './components/spinner/Spinner';
import TopBar from './components/top-bar/TopBar';

const App = () => {
  return (
    <div>
      <TopBar />
      <Spinner />
      <Login />
    </div>
  );
}

export default App;
