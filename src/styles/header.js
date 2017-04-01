import { StyleSheet } from 'aphrodite/no-important'

const header = StyleSheet.create({
  header: {
    margin: 0,
    padding: '15px 25px',
    backgroundColor: '#0ca170',
    color: '#ffffff',
    display: 'flex'
  },
  container: {
    width: '1000px',
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
    color: '#ffffff'
  },
  hoverLink: {
    ':hover': {
      textShadow: '0px 1px 1px #222429',
      cursor: 'pointer'
    }
  }
});

export default header;
