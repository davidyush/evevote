import React from 'react'
import { css } from 'aphrodite/no-important'
import person from '../styles/person_styl'

const PersonCart = (props) => (
  <div className={css(person.cart)}>
    <img className={css(person.img)} alt={props.name} src={props.photo}/>
    <h4 className={css(person.title)}>{props.name} {props.lastName}</h4>
  </div>
)


export default PersonCart
