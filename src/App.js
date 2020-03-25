import { Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import Header from './Header/Header';
import Main from './Main/Main';
import Modal from './Modal/Modal';
import Quiz from './Quiz/Quiz';

function App() {
  return (
    <div>
      <Helmet>
        <title>Quiz Master</title>
      </Helmet>
      <header>
        <Header />
      </header>
      <main>
        <Router>
          <Route exact path='/main' component={Main} />
          <Route path='/quiz' component={Quiz} />
          <Route path='/modal' component={Modal} /> {/* just to create modal first */}
        </Router>
      </main>
    </div>
  );
}

export default App;
