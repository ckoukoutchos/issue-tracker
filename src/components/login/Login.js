import React, { useState } from 'react';
import styles from './Login.module.css';
import Button from '../button/Button';
import Form from '../form/Form';
import Input from '../input/Input';

const Login = (props) => {
  const [githubApiKey, setGithubApiKey] = useState('');

  const inputHandler = (event) => {
    const value = event.target.value;
    setGithubApiKey(value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
  }

  return <Form onSubmit={submitHandler} >
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

export default Login;