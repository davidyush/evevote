import { StyleSheet } from 'aphrodite/no-important'
import { grey, mainColor, containerShadow } from './style_consts'

const people = StyleSheet.create({
  container: {
    boxShadow: containerShadow,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: grey
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    borderRadius: '3px',
    color: mainColor,
    maxWidth: '1060px'
  }
});

export default people
