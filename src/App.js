import { Route, BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import Header from './Header/Header';
import Main from './Main/Main';
//import Modal from './Modal/Modal';
import Quiz from './Quiz/Quiz';

function App(props) {

  /*const [showModal, updateModal] = useState(false);

  const handleModal = () => {
		updateModal(true);
	}*/

  return (
    <>
      <Helmet>
        <title>Quiz Master</title>
      </Helmet>
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
      
      {/*{showModal ? <Modal scores={scores} /> : null}*/}
    </>
  );
}

export default App;
