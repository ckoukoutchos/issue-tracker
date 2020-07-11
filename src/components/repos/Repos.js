import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from '../../redux/actions';
import Card from '../card/Card';
import Link from '../link/Link';
import styles from './Repos.module.css';

const Repos = ({ repos }) => {
  console.log(repos)
  const repoCards = repos.map((repo) => {
    return <Card key={repo.id}>
      <Link onClick={() => console.log('')}>
        {`${repo.owner}/${repo.name}`}
      </Link>
    </Card>;
  });

  return (
    <div>{repoCards}</div>
  );
}

const mapStateToProps = state => ({
  repos: state.repos.repos
});

const mapDispatchToProps = dispatch => ({
  getRepos: (apiKey) => dispatch(fetchRepos(apiKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
