import { StyleSheet } from 'aphrodite/no-important'
import { green, red} from './style_consts'

const voteLadder = StyleSheet.create({
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '3px',
    margin: '0',
    padding: '10px'
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px'
  },
  image: {
    borderRadius: '50%',
    display: 'block',
    marginRight: '10px'
  },
  status: {
    alignSelf: 'center',
    display: 'flex',
    marginLeft: '5px',
  },
  elemStatus: {
    borderRadius: '50%',
    width: '25px',
    height: '25px',
    lineHeight: '25px',
    backgroundColor: green,
    color: 'white',
    fontSize: '14px',
    textAlign: 'center',
    margin: '0',
    ':first-child': {
      marginRight: '5px',
      backgroundColor: red
    }

  }
});

export default voteLadder;
