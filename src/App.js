import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from './redux/actions';
import styles from './App.module.css';
import Issues from './components/issues/Issues';
import Login from './components/login/Login';
import TopBar from './components/top-bar/TopBar';
import Repos from './components/repos/Repos';

const App = ({ apiKey, selectedRepo, getRepos }) => {
  useEffect(() => {
    const apiKey = sessionStorage.getItem('key');
    if (apiKey) {
      getRepos(apiKey);
    }
  }, [getRepos]);

  return (
    <div>
      <TopBar />
      {!apiKey && <Login />}
      <div className={styles.container}>
        {apiKey && <Repos />}
        {selectedRepo && <Issues />}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  apiKey: state.session.apiKey,
  selectedRepo: state.repos.selectedRepo
});

const mapDispatchToProps = dispatch => ({
  getRepos: (apiKey) => dispatch(fetchRepos(apiKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
