import React from 'react'
import { css } from 'aphrodite/no-important'
import ladderVote from '../styles/ledderVote_styl'

const LadderVote = (props) => (
  <ul className={css(ladderVote.list)}>
  { props.users.map(user => (
    <li className={css(ladderVote.item)} key={user.uid}>
      <img className={css(ladderVote.image)} alt={user.first_name} src={user.photo_50}/>
      <p>{user.first_name} {user.last_name}</p>
      <div className={css(ladderVote.status)}>
        <p className={css(ladderVote.elemStatus)}>{user.wins.length}</p>
        <p className={css(ladderVote.elemStatus)}>{user.loses.length}</p>
      </div>
    </li>
  ))}
  </ul>
);

export default LadderVote;
