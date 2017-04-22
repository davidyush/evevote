import React from 'react'
import { css } from 'aphrodite/no-important'
import voteLadder from '../styles/voteLadder_styl'
import sorter from '../helpers/sorter'

const VoteLadder = (props) => (
  <ul className={css(voteLadder.list)}>
  { props.users.sort(sorter).map(user => (
    <li className={css(voteLadder.item)} key={user.uid}>
      <img className={css(voteLadder.image)} alt={user.first_name} src={user.photo_50}/>
      <p>
        {user.first_name} {user.last_name}
      </p>
      <div className={css(voteLadder.status)}>
        <p className={css(voteLadder.elemStatus)}>
          {user.wins.length}
        </p>
        <p className={css(voteLadder.elemStatus)}>
          {user.loses.length}
        </p>
      </div>
    </li>
  ))}
  </ul>
);

export default VoteLadder;
