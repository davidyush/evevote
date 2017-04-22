import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTwoPersons } from '../actions/vote_actions'
import { css } from 'aphrodite/no-important'
import voteGame from '../styles/voteGame_styl'
import VotePerson from './VotePerson'

class VoteGame extends Component {
  constructor() {
    super();

    this.state = {
      steps: 0
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.chooseHandlerClick = this.chooseHandlerClick.bind(this);
  }

  clickHandler() {
    const { getTwoPersons, gameUsers } = this.props;
    getTwoPersons(gameUsers, 'uid');
  }

  chooseHandlerClick() {
    const { getTwoPersons, gameUsers } = this.props;

    this.setState({
      steps: this.state.steps + 1
    });

    getTwoPersons(gameUsers, 'uid');
  }

  render() {
    return (
      <div className={css(voteGame.container)}>
        <h2>Steps: {this.state.steps}</h2>
        { this.props.twoPersons[0] ?
          <div className={css(voteGame.twoPersons)}>
            { this.props.twoPersons.map((person, i, array) => (
              <VotePerson
                key={person.uid}
                uid={person.uid}
                carts={array}
                photo={person.photo_200}
                firstName={person.first_name}
                lastName={person.last_name}
                chooseHandlerClick={this.chooseHandlerClick}
              />
            )) }
          </div> :
          <button className={css(voteGame.btn)} onClick={this.clickHandler}>Start</button>
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
