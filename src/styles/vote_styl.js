import { StyleSheet } from 'aphrodite/no-important'
import { containerShadow, grey } from './style_consts'

const vote = StyleSheet.create({
  container: {
    display: 'flex'
  },
  gameZone: {
    width: '65%',
    marginRight: '5%',
    backgroundColor: grey,
    boxShadow: containerShadow
  },
  ladder: {
    width: '30%',
    backgroundColor: grey,
    boxShadow: containerShadow
  }
});

export default vote;
