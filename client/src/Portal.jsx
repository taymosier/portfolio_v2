import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DefaultView } from './Views/DefaultView';
import { AboutMe } from './Views/AboutMe/AboutMe.jsx';
import { MobileAboutMe } from './Views/AboutMe/Mobile/MobileAboutMe.jsx';
import { SkillView } from './Views/Skillset/SkillView.jsx';
import { MobileSkillView } from './Views/Skillset/Mobile/MobileSkillView.jsx';
import { Portfolio } from './Views/Portfolio/Portfolio.jsx';
import { MobilePortfolio } from './Views/Portfolio/Mobile/MobilePortfolio.jsx';
import { ContactView} from './Views/Contact/ContactView';

export class Portal extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeView: this.props.activeView,
      setActiveView: this.props.setActiveView
    }
  }

  componentDidUpdate(){
    if(this.state.activeView !== this.props.activeView){
      this.setState({
        activeView: this.props.activeView
      });
    }
    if(this.state.screenSize !== this.props.screenSize){
      this.setState({
        screenSize: this.props.screenSize
      });
    }
  }

  render(){
    if(this.props.activeView){
      switch(`${this.props.activeView}`){
        case "DefaultView":
          return <DefaultView setActiveView={this.state.setActiveView}/>;
        case "AboutMeView":
          if(this.props.screenSize === "medium" || this.props.screenSize === "small" || this.props.screenSize === "xsmall"){
            return <MobileAboutMe />
          }
          return <AboutMe />;
        case "SkillView":
          if(this.props.screenSize === "medium" || this.props.screenSize === "small" || this.props.screenSize === "xsmall"){
            return <MobileSkillView />
          }
          return <SkillView />
        case "PortfolioView":
          if(this.props.screenSize === "medium" || this.props.screenSize === "small" || this.props.screenSize === "xsmall"){
            return <MobilePortfolio />
          }
          return <Portfolio />
        case "ContactView":
          return <ContactView />
        default:
          return <div>Something broke</div>
      }
    }
  }
}

Portal.propTypes = {
  activeView: PropTypes.string.isRequired
}
