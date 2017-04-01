import React, { Component } from 'react'
import MainForm from './MainForm'
import People from './People'

class Home extends Component {
  render() {
    return (
      <div>
        <MainForm/>
        <People/>
      </div>
    )
  }
}

export default Home
