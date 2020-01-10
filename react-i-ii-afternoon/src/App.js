import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';
import Header from './Components/Header';
import PersonInfo from './Components/PersonInfo'; 
// import EditPage from './Components/EditPage';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <PersonInfo/>
        {/* <EditPage/> */}
      </div>
    );
  }
}

export default App;
