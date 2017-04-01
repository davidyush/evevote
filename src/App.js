import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import { css } from 'aphrodite/no-important'
import app from './styles/app'

import Header from './components/Header'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header/>
          <div className={css(app.container)}>
            <Route exact={true} path='/' component={Home}/>
          </div>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
