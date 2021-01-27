import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <>
     <Router basename='/react'>
       <Navbar />
       <Switch>
         <Route path='/'  component={Home}
         />
       </Switch>
     </Router>
      
    </>
  );
}

export default App;
