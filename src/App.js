import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import Banners from './components/Banners.js'
import Drawings from './components/Drawings.js'
import Paintings from './components/Paintings.js'
import Collages from './components/Collages.js'
import NavBar from './components/NavBar.js'
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-123791717-1');
    ReactGA.pageview('/homepage');
}

function App() {
    return (
      <div className="App">
      <NavBar />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/banners' component={Banners} />
          <Route path='/paintings' component={Paintings} />
          <Route path='/drawings' component={Drawings} />
          <Route path='/collages' component={Collages} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    )
    
  }
  initializeReactGA()

export default App;
