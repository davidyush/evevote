import { StyleSheet } from 'aphrodite/no-important'
import { mainColor, grey, mainHover } from './style_consts'

const voteGame = StyleSheet.create({
  container: {
    minHeight: '600px'
  },
  twoPersons: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  btn: {
    padding: '10px',
    backgroundColor: mainColor,
    border: 'none',
    borderRadius: '3px',
    color: grey,
    width: '100px',
    display: 'block',
    margin: '0 auto',
    marginTop: '40px',
    fontSize: '16px',
    transition: 'all .25s ease',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: mainHover
    },
    ':focus': {
      outline: 'none'
    }
  }
});

export default voteGame;
