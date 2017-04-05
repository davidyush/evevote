import React, { Component } from 'react'
import { connect } from 'react-redux'
import { copyPeople } from '../actions/vote_actions'
import { css } from 'aphrodite/no-important'
import vote from '../styles/vote_styl'
import LadderVote from './LadderVote'

class Vote extends Component {
  componentDidMount() {
    let gameUsers = this.props.vkUsers.map(user => {
      return {...user, wins: [], loses: [], count: 0};
    });
    this.props.copyPeople(gameUsers);
  }
  render() {
    const { gameUsers } = this.props;
    return (
      <div className={css(vote.container)}>
        <div className={css(vote.gameZone)}>
        </div>
        <div className={css(vote.ladder)}>
          <LadderVote users={gameUsers}/>
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
