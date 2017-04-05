import { StyleSheet } from 'aphrodite/no-important'
import { mainColor, grey, greenHover, containerShadow } from './style_consts'

const mainForm = StyleSheet.create({
  form: {
    display: 'flex',
    backgroundColor: '#F2F1EF',
    borderRadius: '3px',
    marginBottom: '20px',
    padding: '15px 20px',
    boxShadow: containerShadow
  },
  input: {
    border: `1px solid ${mainColor}`,
    borderRadius: '3px',
    padding: '6px 10px',
    width: '75%',
    fontSize: '16px',
    marginRight: '15px',
    transition: 'box-shadow .25s ease',
    ':focus': {
      outline: 'none',
      boxShadow: `1px 1px 2px ${mainColor}, -1px -1px 2px ${mainColor}`
    }
  },
  button: {
    backgroundColor: mainColor,
    color: grey,
    border: 'none',
    borderRadius: '3px',
    fontSize: '16px',
    padding: '6px 10px',
    width: '20%',
    transition: 'background-color .25s ease',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: greenHover
    },
    ':focus': {
      outline: 'none'
    }
  }
});

export default mainForm;
