import React, { Component } from 'react';
import { Nav, Navbar } from 'reactstrap';
import { ContentTab } from './ContentTab';

export class ContentNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      updateActiveChildTab: this.props.updateActiveChildTab,
    };
  }

  componentDidMount(){
    this.setState({
      activeChild: this.props.activeChild,
      tabItems: this.props.tabs,
      tabs: this.generateTabs(this.props.tabs)
    })
  }

  componentDidUpdate(){
    if(this.state.tabItems !== this.props.tabs){
      this.setState({
        tabItems: this.props.tabs,
        tabs: this.generateTabs(this.props.tabs)
      })
    }
    if(this.state.activeChild !== this.props.activeChild){
      this.setState({
        activeChild: this.props.activeChild
      })
    }
  }

  generateTabs(subsections){
    let index = 0;
    let tabs = [];
    for(let item in subsections){
      tabs.push(
        <ContentTab
          index={index}
          text={subsections[item]}
          updateActiveChildTab={this.state.updateActiveChildTab}
        />
      )
      index = index + 1;
    }
    return tabs;
  }

  render(){
    return(
      <Navbar className="section-tabs-container">
        <Nav tabs className={"section-tabs"}>
          {this.state.tabItems !== undefined ? this.state.tabs : null}
        </Nav>
      </Navbar>
    );
  }
}
