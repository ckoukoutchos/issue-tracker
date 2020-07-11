import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from '../../redux/actions';
import styles from './Login.module.css';
import Button from '../button/Button';
import Form from '../form/Form';
import Input from '../input/Input';
import Spinner from '../spinner/Spinner';

const Login = ({ apiError, loading, getRepos }) => {
  const [githubApiKey, setGithubApiKey] = useState('');

  const inputHandler = (event) => {
    const value = event.target.value;
    setGithubApiKey(value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    getRepos(githubApiKey);
  }

  if (loading) {
    return <Spinner />
  } else {
    return <Form onSubmit={submitHandler} >
      {apiError && <p className={styles.error}>{apiError}</p>}

      <Input
        onChange={inputHandler}
        label="GitHub API Key"
        name="apikey"
        placeHolder="API Key"
        type="text"
        value={githubApiKey}
      />
      <Button type="Submit">Submit</Button>
    </Form>
  }
}

const mapStateToProps = state => ({
  apiError: state.repos.error,
  loading: state.repos.loading
});

const mapDispatchToProps = dispatch => ({
  getRepos: (apiKey) => dispatch(fetchRepos(apiKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
