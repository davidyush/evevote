import { StyleSheet } from 'aphrodite/no-important'
import { green, grey, mainWidth } from './style_consts'

const header = StyleSheet.create({
  header: {
    margin: 0,
    marginBottom: '20px',
    padding: '15px 25px',
    backgroundColor: green,
    color: grey,
    display: 'flex'
  },
  container: {
    width: mainWidth,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    margin: 0,
    padding: 0,
    fontFamily: 'Jaapokki subtract'
  },
  navLinks: {
    listStyle: 'none',
    fontFamily: 'PT Sans',
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  navLink: {
    transition: 'all .2s ease-in-out',
    fontSize: '18px',
    marginRight: '20px',
    textDecoration: 'none',
    color: grey
  },
  hoverLink: {
    ':hover': {
      textShadow: '0px 1px 1px #222429',
      cursor: 'pointer'
    }
  }
});

export default header;
