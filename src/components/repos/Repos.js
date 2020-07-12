import React from 'react';
import { connect } from 'react-redux';
import { fetchRepos, fetchIssues } from '../../redux/actions';
import Card from '../card/Card';
import Link from '../link/Link';

const Repos = ({ apiKey, repos, selectedRepo, getIssues }) => {
  const onRepoClick = (repo) => {
    getIssues(apiKey, repo);
  }

  const repoCards = repos.map((repo) => {
    const selected = selectedRepo ? selectedRepo.id === repo.id : false;

    return <Card key={repo.id} selected={selected}>
      <Link onClick={() => onRepoClick(repo)}>
        {`${repo.owner}/${repo.name}`}
      </Link>
    </Card>;
  });

  return (
    <div>{repoCards}</div>
  );
}

const mapStateToProps = state => ({
  repos: state.repos.repos,
  selectedRepo: state.repos.selectedRepo,
  apiKey: state.session.apiKey
});

const mapDispatchToProps = dispatch => ({
  getRepos: (apiKey) => dispatch(fetchRepos(apiKey)),
  getIssues: (apiKey, repo) => dispatch(fetchIssues(apiKey, repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
