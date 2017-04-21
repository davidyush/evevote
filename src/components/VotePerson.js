import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateWinerLoser } from '../actions/vote_actions'
import { css } from 'aphrodite/no-important'
import votePerson from '../styles/votePerson_styl'

class VotePerson extends Component {
  constructor() {
    super();
    this.state = {
      currentPerson: null,
      anotherPerson: null
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const { uid, carts } = this.props;
    this.setState({
      currentPerson: carts.filter(person => person.uid === uid)[0],
      anotherPerson: carts.filter(person => person.uid !== uid)[0]
    })
  }

  clickHandler() {
    const { chooseHandlerClick, updateWinerLoser } = this.props;
    updateWinerLoser(this.state.currentPerson, this.state.anotherPerson);
    chooseHandlerClick();
  }

  render() {
    return (
      <div className={css(votePerson.container)} onClick={this.clickHandler}>
        <img className={css(votePerson.img)} alt='person' src={this.props.photo}/>
        <h3 className={css(votePerson.name)}>{this.props.firstName} {this.props.lastName}</h3>
      </div>
    )
  }
}

export default connect(null, { updateWinerLoser })(VotePerson);
