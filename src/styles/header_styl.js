import { StyleSheet } from 'aphrodite/no-important'
import { mainColor, grey, mainWidth, mainHover, headerHeight } from './style_consts'

const header = StyleSheet.create({
  header: {
    margin: 0,
    marginBottom: '20px',
    padding: '0px 25px',
    backgroundColor: mainColor,
    color: grey,
    display: 'flex'
  },
  container: {
    width: mainWidth,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    height: '100%'
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
    margin: '0',
    height: headerHeight
  },
  navLink: {
    transition: 'all .2s ease-in-out',
    fontSize: '18px',
    padding: '0px 20px',
    width: '80px',
    textAlign: 'center',
    lineHeight: headerHeight
  },
  linkHead: {
    textDecoration: 'none',
    color: grey
  },
  hoverLink: {
    ':hover': {
      textShadow: '0px 1px 1px #222429',
      cursor: 'pointer',
      backgroundColor: mainHover
    }
  }
});

export default header;
