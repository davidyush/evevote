import { StyleSheet } from 'aphrodite/no-important'
import { green, grey, cartShadow } from './style_consts'

const person = StyleSheet.create({
  cart: {
    boxShadow: cartShadow,
    marginBottom: '10px',
    borderRadius: '3px'
  },
  title: {
    backgroundColor: green,
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
  }
});

export default person;
