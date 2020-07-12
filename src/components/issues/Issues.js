import React from 'react';
import { connect } from 'react-redux';
import { updateIssuesOrder } from '../../redux/actions';
import Avatar from '../avatar/Avatar';
import Card from '../card/Card';
import DragContainer from '../drag-container/DragContainer';
import Spinner from '../spinner/Spinner';
import styles from './Issues.module.css';

const Issues = ({ issues, loading, selectedRepo, updateIssuesOrder }) => {
  const issueCards = issues.map((issue) => {
    return <Card key={issue.id}>
      <div className={styles.container}>
        <Avatar url={issue.avatar} />
        <p className={styles.title}>{issue.title}</p>
      </div>
      <p className={styles.text}>Created: {issue.created}</p>
      <p className={styles.text}>Last Updated: {issue.updated}</p>
    </Card>;
  });

  const updateOrderHandler = (issues) => {
    updateIssuesOrder(issues, selectedRepo.id);
  }

  if (loading) {
    return <>
      <div className={styles.placeholder} />
      <Spinner />
    </>;
  } else {
    return (
      <div>
        <Card>
          <h3 className={styles.header}>{`${selectedRepo.owner}/${selectedRepo.name}`}</h3>
        </Card>
        <DragContainer items={issues} updateOrder={updateOrderHandler} />

        {!issueCards.length && <Card>
          <p className={styles.title}>No Issues</p>
        </Card>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  issues: state.issues.issues,
  loading: state.issues.loading,
  selectedRepo: state.repos.selectedRepo
});

const mapDispatchToProps = dispatch => ({
  updateIssuesOrder: (issues, repoId) => dispatch(updateIssuesOrder(issues, repoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
