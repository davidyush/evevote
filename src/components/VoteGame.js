import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTwoPersons } from '../actions/vote_actions'

class VoteGame extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { getTwoPersons, gameUsers } = this.props;
    getTwoPersons(gameUsers, 'uid');
  }

  render() {
    return (
      <div>
        {this.props.twoPersons[0] ?
          <div>{JSON.stringify(this.props.twoPersons)}</div> :
          <button onClick={this.clickHandler}>Start</button>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    twoPersons: state.vote.twoPersons
  }
}

export default connect(mapStateToProps, { getTwoPersons })(VoteGame);
