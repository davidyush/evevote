import { StyleSheet } from 'aphrodite/no-important'
import { mainColor, grey, cartShadow } from './style_consts'

const person = StyleSheet.create({
  cart: {
    boxShadow: cartShadow,
    marginBottom: '10px',
    borderRadius: '3px',
    marginRight: '15px',
    position: 'relative',
    ':nth-child(5n)': {
      marginRight: '0px'
    }
  },
  title: {
    backgroundColor: mainColor,
    color: grey,
    textAlign: 'center',
    padding: '5px',
    marginTop: '0px',
    marginBottom: '0px',
    borderBottomLeftRadius: '3px',
    borderBottomRightRadius: '3px'
  },
  img: {
    display: 'block',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px'
  },
  btnDelete: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    width: '20px',
    height: '20px',
    display: 'block',
    borderRadius: '50%',
    border: 'none',
    textAlign: 'center',
    backgroundColor: '#ec3a3a',
    color: 'white',
    opacity: '0.2',
    transition: 'opacity .25s ease',
    ':hover': {
      cursor: 'pointer',
      opacity: '1',
      outline: 'none'
    },
    ":focus": {
      outline: 'none'
    }

  }
});

export default person;
