import React, {Component} from 'react';
import './App.css'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import AboutMe from './AboutMe'
import { Route } from 'react-router-dom';
import Contact from './Contact'
import Routes from "./Routes";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isAboutMeOpen : false
    }
  }
  
  handleAboutMeButtonClick() {
      this.setState(prevState => ({
        isAboutMeOpen: !prevState.isAboutMeOpen
      }));  
    
  }

  render() {
    
    return (
      <div className="App">
        <Nav className="navComponent" handleAboutMe={this.handleAboutMeButtonClick.bind(this)} />
        <Contact isOpen ={this.state.isAboutMeOpen}
          handleClose={this.handleAboutMeButtonClick.bind(this)} />
        <Routes />
        <Main className="mainComponent" />
        <Footer className="footerComponent" />
      </div>
    );
  }
}

export default App;
