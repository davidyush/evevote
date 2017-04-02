import { StyleSheet } from 'aphrodite/no-important'
import { grey, green, containerShadow } from './style_consts'

const people = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: grey,
    padding: '15px',
    borderRadius: '3px',
    color: green,
    boxShadow: containerShadow
  }
});

export default people
