import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateWinerLoser } from '../actions/vote_actions'
import { css } from 'aphrodite/no-important'
import votePerson from '../styles/votePerson_styl'

class VotePerson extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { uid, carts, chooseHandlerClick, updateWinerLoser } = this.props;
    let winer = carts.filter(person => person.uid === uid)[0];
    let loser = carts.filter(person => person.uid !== uid)[0];
    updateWinerLoser(winer, loser);
    chooseHandlerClick();
  }

  render() {
    return (
      <div className={css(votePerson.container)} onClick={this.clickHandler}>
        <img className={css(votePerson.img)} alt='person' src={this.props.photo}/>
        <h3 className={css(votePerson.name)}>
          {this.props.firstName} {this.props.lastName}
        </h3>
      </div>
    )
  }
}

export default connect(null, { updateWinerLoser })(VotePerson);
