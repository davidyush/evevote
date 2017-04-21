import { StyleSheet } from 'aphrodite/no-important'
import { mainColor, grey, cartShadow, containerShadow } from './style_consts'

const VotePerson = StyleSheet.create({
  container: {
    marginTop: '40px',
    boxShadow: cartShadow,
    transition: 'all .25s ease',
    ':hover': {
      cursor: 'pointer',
      boxShadow: containerShadow,
      transform: 'scale(1.01)'
    }
  },
  img: {
    display: 'block',
    borderTopRightRadius: '3px',
    borderTopLeftRadius: '3px'
  },
  name: {
    textAlign: 'center',
    backgroundColor: mainColor,
    color: grey,
    margin: '0',
    paddingTop: '5px',
    paddingBottom: '5px',
    borderBottomLeftRadius: '3px',
    borderBottomRightRadius: '3px'
  }
});

export default VotePerson;
