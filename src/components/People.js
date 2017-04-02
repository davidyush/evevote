import React, { Component } from 'react'
import people from '../styles/people_styl'
import { css } from 'aphrodite/no-important'

import { connect } from 'react-redux'
import PersonCart from './PersonCart'

class People extends Component {
  render() {
    return (
      <div className={css(people.container)}>
        { this.props.vkUsers.length > 0 ?
          this.props.vkUsers.map(user => (
            <PersonCart key={user.uid} name={user.first_name} lastName={user.last_name} photo={user.photo_200}/>
          )) :
          <h2>There are no people yet</h2>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    vkUsers: state.people.vkUsers
  }
}

export default connect(mapStateToProps, null)(People)
