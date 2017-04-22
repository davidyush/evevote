import React, { Component } from 'react'
import { connect } from 'react-redux'
import { copyPeople } from '../actions/vote_actions'
import { css } from 'aphrodite/no-important'
import vote from '../styles/vote_styl'
import VoteLadder from './VoteLadder'
import VoteGame from './VoteGame'


class Vote extends Component {
  componentDidMount() {
    const { vkUsers, copyPeople } = this.props;
    let users = vkUsers.map(user => {
      return { ...user, wins: [], loses: [], count: 0 };
    });
    copyPeople(users);
  }

  render() {
    const { gameUsers } = this.props;
    return (
      <div className={css(vote.container)}>
        <div className={css(vote.gameZone)}>
          <VoteGame gameUsers={gameUsers}/>
        </div>
        <div className={css(vote.ladder)}>
          <VoteLadder users={gameUsers}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    vkUsers: state.people.vkUsers,
    gameUsers: state.vote.gameUsers
  }
}

export default connect(mapStateToProps, { copyPeople })(Vote);
