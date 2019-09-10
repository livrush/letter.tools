import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { updateLetterContent } from './redux';
import { Header } from './components';
import {
  HomePage,
  CreatePage,
  ListPage,
  OopsPage
} from './pages';

const mapStateToProps = (state) => {
  return {
    letter: state.letter,
  };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ updateLetterContent }, dispatch)
);

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
          <Route path="/create" component={connect(mapStateToProps, mapDispatchToProps)(CreatePage)} />
          <Route path="/list" component={ListPage} />
          <Route component={OopsPage} />
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
