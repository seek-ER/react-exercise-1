import React, { Component } from 'react';
import './App.scss';
import Avatar from './components/avatar';
import BasicInfo from './components/basicInfo';
import Description from './components/description';
import Education from './components/education/education';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Avatar />
        <BasicInfo />
        <div id={'details'}>
          <Description />
          <Education />
        </div>
      </main>
    );
  }
}

export default App;
