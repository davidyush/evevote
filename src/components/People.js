import React, { Component } from 'react'
import { connect } from 'react-redux'

class People extends Component {
  render() {
    return (
      <div>{JSON.stringify(this.props.vkUsers)}</div>
    )
  }
}



function mapStateToProps(state) {
  return {
    vkUsers: state.people.vkUsers
  }
}

export default connect(mapStateToProps, null)(People)
