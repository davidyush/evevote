import React, { Component } from 'react'
import people from '../styles/people_styl'
import { css } from 'aphrodite/no-important'

import { connect } from 'react-redux'
import { removePerson } from '../actions/people_actions'
import PersonCart from './PersonCart'

class People extends Component {
  render() {
    const nothing = <h2>Try to request something man</h2>

    return (
      <div className={css(people.container)}>
        <div className={css(people.wrapper)}>
          { this.props.vkUsers.length > 0 ?
            this.props.vkUsers.map(user => (
              <PersonCart
                key={user.uid}
                id={user.uid}
                name={user.first_name}
                lastName={user.last_name}
                removePerson={this.props.removePerson}
                photo={user.photo_200}/>
            )) :
            nothing
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    vkUsers: state.people.vkUsers
  }
}

export default connect(mapStateToProps, { removePerson })(People)
