import React, { Component } from 'react'
import { css } from 'aphrodite/no-important'
import mainForm from '../styles/mainForm'
import { getPeople } from '../actions/user_actions'
import { connect } from 'react-redux'

class MainForm extends Component {
  constructor() {
    super();
    this.state = { text: '' };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      text: event.target.value
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.getPeople(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className={css(mainForm.form)}>
        <input onChange={this.changeHandler} value={this.state.text} className={css(mainForm.input)}/>
        <button onClick={this.submitHandler} className={css(mainForm.button)}>Search</button>
      </form>
    )
  }
}

export default connect(null, { getPeople })(MainForm)
