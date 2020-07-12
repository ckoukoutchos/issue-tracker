import React from 'react';
import { connect } from 'react-redux';
import Avatar from '../avatar/Avatar';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
// import styles from './Issues.module.css';

const Issues = ({ issues, loading }) => {
  const issuesCards = issues.map((issue) => {
    return <Card key={issue.id}>
      <Avatar url={issue.avatar} />
      <p>{issue.title}</p>
      <p>Created: {issue.created}</p>
      <p>Last Updated: {issue.updated}</p>
    </Card>;
  });

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div>{issuesCards}</div>
    );
  }
}

const mapStateToProps = state => ({
  issues: state.issues.issues,
  loading: state.issues.loading
});

export default connect(mapStateToProps)(Issues);
