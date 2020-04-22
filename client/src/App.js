import React from 'react';
import './App.css'
import { Helmet } from 'react-helmet'
import Contact from './Contact'
import AboutMe from "./AboutMe"
import Main from "./Main"
import Footer from "./Footer"
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAboutMeOpen: false,
      currentpage: "Home"
    }
  }

  handleContactButtonClick() {
    this.setState(prevState => ({
      isAboutMeOpen: !prevState.isAboutMeOpen
    }));

  }

  updatePageTitle(title) {
    this.setState({
      currentpage: title
    })
  }

  render() {

    return (
      <Router>
      <div className="App">
        <Helmet>
          <title>{this.state.currentpage}</title>
        </Helmet>
        <nav className="navbar">
          <div className={"home"}>
            <Link to="/" onClick={() => this.updatePageTitle("Home")}>Home</Link>
          </div>
          <div className={"contact " + "eachMenu"} 
          onClick={() => this.handleContactButtonClick(this.state.isAboutMeOpen)}>
            Contact
        </div>
          <div className={"aboutMe " + "eachMenu"}>
            <Link to="./aboutMe" onClick={() => this.updatePageTitle("About Me")}>About Me</Link>
          </div>
        </nav>
        <Contact isOpen={this.state.isAboutMeOpen}
          handleClose={this.handleContactButtonClick.bind(this)} />
        <Switch>
          <Route path="/aboutMe">
            <AboutMe />
          </Route>
          <Route path="/">
            <Main className="mainComponent"/>
            <Footer className="footerComponent"/>
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
