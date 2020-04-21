import React from 'react';
import './App.css'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

class App extends React.Component {
  constructor(props){
    super(props)
  }



  render() {
    
    return (
      <div className="App">
        <Nav className="navComponent"
          
        />
        <Main className="mainComponent" />
        <Footer className="footerComponent" />
      </div>
    );
  }
}

export default App;
