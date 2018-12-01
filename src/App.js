import React, { Component } from 'react';
import './App.css';
import Roll from './Roll'
class App extends Component {
  render() {
    return (
      
       <div className='container'>
          <div className='left'>
              Left
          </div>
          <div className='right'>
            Right
          </div>
          <Roll/>
       </div>
    );
  }
}

export default App;
