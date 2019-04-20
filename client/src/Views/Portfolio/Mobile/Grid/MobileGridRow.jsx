import React, { Component } from 'react';
import { Row } from 'reactstrap';

import { MobileGridButton } from './MobileGridButton';

export class MobileGridRow extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggleActiveKey: this.props.toggleActiveKey
    };
  }

  componentDidMount(){
    this.setState({
      className: this.props.className,
      activeKey: this.props.activeKey,
      item: this.props.item,
      buttons: this.generateProjectButtons()
    })
  }

  componentDidUpdate(){
    if(this.state.activeKey !== this.props.activeKey ){
      this.setState({activeKey: this.props.activeKey, buttons: this.generateProjectButtons()})
    }
  }

  generateProjectButtons(){ //generates the buttons that will be contained in GridRow.state.buttons array
    let projectKeys = Object.keys(this.props.item);
    let projectButtons = [];
    let index = 0;
    let item;
      item = this.props.item;
      projectButtons.push(
        <MobileGridButton
          style={this.calculateMobileStyleValues(projectKeys)}
          className={"mobile-grid-button"}
          toggleActiveKey={this.state.toggleActiveKey}
          key={index}
          item={item}
          index={index}
          activeKey={this.props.activeKey ? this.props.activeKey : null}
        />
      )
      index = index +1;
    return projectButtons
  }

  calculateMobileStyleValues(projectKeys){  //Calculates the attribute values for the style object that will be passed to
    return {
            "minWidth": `90%`,
            "maxWidth": `90%`,
            "width": `90%`,
            "margin": `.5vh 5%`,
            "minHeight": `10vh`,
            "maxHeight": `fit-content`,
            "visibility": this.props.activeKey !== null && this.props.activeKey !== undefined ? "hidden" : "visible"
          }
  }

  render(){
    if(this.state.buttons){
      return(
        <Row className={this.state.className}>{this.state.buttons}</Row>
      )
    } else {
      return null
    }
  }
}
