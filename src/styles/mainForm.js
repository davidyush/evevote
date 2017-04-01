import { StyleSheet } from 'aphrodite/no-important'

const mainForm = StyleSheet.create({
  form: {
    display: 'flex',
    backgroundColor: '#e0e0e0',
    borderRadius: '3px',
    padding: '17px 20px',
  },
  input: {
    border: '1px solid #0ca170',
    borderRadius: '3px',
    padding: '6px 10px',
    width: '75%',
    fontSize: '16px',
    marginRight: '15px',
    transition: 'box-shadow .25s ease',
    ':focus': {
      outline: 'none',
      boxShadow: '1px 1px 1px #0ca170, -1px -1px 1px #0ca170'
    }
  },
  button: {
    backgroundColor: '#0ca170',
    color: '#ffffff',
    border: 'none',
    borderRadius: '3px',
    fontSize: '16px',
    padding: '6px 10px',
    width: '20%',
    transition: 'background-color .25s ease',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: '#0cbb72'
    },
    ':focus': {
      outline: 'none'
    }
  }
});

export default mainForm;
