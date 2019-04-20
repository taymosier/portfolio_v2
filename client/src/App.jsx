import React, { Component } from 'react';
import {Container } from 'reactstrap';
import './index.css';

import { Portal } from './Portal';

const helpers = require('./helpers.js');

//TODO
// Prepend class names of about me main right column with "about"
// add skill logos to button/objects
// Home: mobile styling
// About Me: add content / style mobile
// *** Skills: add content to skill objects
// Portfolio: style modal elements / create generateLinkButtons function / add content
// Contact: replace github and linkedin text with icons

class App extends Component {
  // MAKE SURE YOU PASS PROPS IF YOU LOAD FROM SERVER.....dumbass...
  constructor(){
    super()
    this.state = {
      activeView: "DefaultView",
      isHome: true,
      classes: "App",
      filter: "body-filter filter-on",
      pulse: "pulse",
      screenSize: helpers.determineScreenSize()
    }
    this.setActiveView = this.setActiveView.bind(this);
    this.checkSize = this.checkSize.bind(this);
  }


  setActiveView(view){
    let isHome = (view === "DefaultView")
    let classes, pulse, filter;

    if(isHome){
      classes = `App transition`;
      filter = "body-filter filter-on";
      pulse = "pulse"
    } else {
      classes="App";
      filter = "body-filter";
      pulse = ""
    }
    this.setState({
      activeView: `${view}`,
      isHome: isHome,
      classes: classes,
      filter: filter,
      pulse: pulse
    });
  }

  checkSize(){
    console.log("resize")
    let screenSize = helpers.determineScreenSize();
    if(screenSize !== this.state.screenSize){
      this.setState({
        screenSize: screenSize
      })
    }
  }

  componentDidMount(){
    window.onresize = this.checkSize;
  }

  componentDidUpdate(){

  }

  render() {
    return (
      <Container className={this.state.classes}>
        <div className={this.state.filter}/>
        <div className={`header-container`} onClick={()=>{this.setActiveView("DefaultView")}}>
          <header className={`App-header ${this.state.pulse}`}>
          taylor mosier
          </header>
        </div>

        <Portal
          screenSize={this.state.screenSize}
          activeView={this.state.activeView}
          setActiveView={this.setActiveView}
        />
      </Container>
    );
  }
}

export default App;
