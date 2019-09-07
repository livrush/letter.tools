import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, LetterPage, ListPage, } from './pages';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/letter" component={LetterPage} />
          <Route path="/list" component={ListPage} />
        </Switch>
      </Router>
      <footer className="footer">Built by Olivia Sabo-Rush</footer>
    </div>
  );
}

export default App;
