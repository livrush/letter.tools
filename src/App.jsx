import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, LetterPage, ListPage, } from './pages';
import { Header } from './components';

function mapStateToProps(state) {
  console.log(state);
  return {
    letter: state.letter,
    variables: state.variables,
  };
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={null} />
          <Route component={Header} />
        </Switch>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/create" component={connect(mapStateToProps)(LetterPage)} />
          <Route path="/list" component={ListPage} />
        </Switch>
      </Router>
      <footer className="footer">
        Built by&nbsp;
        <a
          className="link"
          href="http://pafiu.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Olivia Sabo-Rush
        </a>
      </footer>
    </div>
  );
}

export default App;
