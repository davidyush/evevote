import React from 'react'
import { css } from 'aphrodite/no-important'
import person from '../styles/person_styl'

const PersonCart = (props) => {
  function removeUser() {
    props.removePerson(props.id);
  }
  return (
    <div className={css(person.cart)}>
      <img className={css(person.img)} alt={props.name} src={props.photo}/>
      <h4 className={css(person.title)}>
        {props.name} {props.lastName}
      </h4>
      <button className={css(person.btnDelete)} onClick={removeUser}>
        X
      </button>
    </div>
  );
}


export default PersonCart
