import React from 'react';
import {
  BrowserRouter as Router, Switch, Route 
} from 'react-router-dom';
import Home from './Home';
import ItalianiceDetail from './views/ItalianiceDetail';
import ItalianiceList from './views/ItalianiceList';
import PopcornDetail from './views/PopcornDetail';
import PopcornList from './views/PopcornList';
import About from './About';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <About />
          </Route>
          <Route>
            <PopcornList />
          </Route>
          <Route>
              <PopcornDetail />
          </Route>
          <Route>
            <ItalianiceList />
          </Route>
          <Route>
            <ItalianiceDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
