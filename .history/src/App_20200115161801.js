import React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Cursor from "./components/Cursor/Cursor"
import Info from './components/Info/Info';
import Loader from './components/Loader/Loader';
import Mandala from './components/Mandala/Mandala';
import Music from './components/Music/Music';
import { HashRouter, Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <div className="App" id="App">

      <Cursor />
      <HashRouter basename="/">
      <Nav />
        <Switch>
          <Route exact path="/info" component={Info} />
          <Route path="/slider" component={Gallery} />
          <Route path="/loader" component={Loader} />
          <Route path="/music" component={Music} />
          <Route path="/" component={Mandala} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
