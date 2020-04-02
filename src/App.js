import { Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Quiz from './Quiz/Quiz';

function App(props) {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Router>
          <Route exact path='/' component={Main} />
          <Route path='/quiz' component={Quiz} />
          {/*<Route path='/modal' component={Modal} /> just to create modal first */}
        </Router>
      </main>
      
    </>
  );
}

export default App;
