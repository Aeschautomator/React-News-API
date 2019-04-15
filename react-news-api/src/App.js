import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/index.js';
import Results from './components/Results/Results';
import History from './components/History/History';

class App extends Component {
  render() {
    
    <Navbar />
      <div className="container mt-5 text-center">
       <div className="row">
        <div className="col-6 border-right border-left border-dark">
          <Results />
          <div className="col-6 border-right border-dark">
              <History />
         </div>
      
      
       </div>
    </div>
 

  }
}

export default App;
