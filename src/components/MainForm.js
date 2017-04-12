import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPeople } from '../actions/people_actions'
import { css } from 'aphrodite/no-important'
import mainForm from '../styles/mainForm_styl'

class MainForm extends Component {
  constructor() {
    super();
    this.state = { request: '' };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      request: event.target.value
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.getPeople(this.state.request);
    this.setState({
      request: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className={css(mainForm.form)}>
        <input onChange={this.changeHandler} value={this.state.request} className={css(mainForm.input)}/>
        <button onClick={this.submitHandler} className={css(mainForm.button)}>Search</button>
      </form>
    )
  }
}

export default connect(null, { getPeople })(MainForm)
