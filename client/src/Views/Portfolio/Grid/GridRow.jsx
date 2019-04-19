import React, { Component } from 'react';
import { Row } from 'reactstrap';

import { GridButton } from './GridButton';

export class GridRow extends Component{
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
      buttons: this.generateProjectButtons()
    })
  }

  componentDidUpdate(){
    if(this.state.activeKey !== this.props.activeKey ){
      this.setState({activeKey: this.props.activeKey, buttons: this.generateProjectButtons()})
    }
  }

  generateProjectButtons(){ //generates the buttons that will be contained in GridRow.state.buttons array
    let projectKeys = Object.keys(this.props.items);
    let projectButtons = [];
    let index = 0;
    let item;
    while(projectKeys.length >= projectButtons.length){
      item = this.props.items[projectKeys[index]];
      projectButtons.push(
        <GridButton
          style={this.calculateStyleValues(projectKeys)}
          className={"grid-button"}
          toggleActiveKey={this.state.toggleActiveKey}
          key={index}
          item={item}
          index={index}
          activeKey={this.props.activeKey ? this.props.activeKey : null}
        />
      )
      index = index +1;
    }
    console.log(projectButtons)
    return projectButtons
  }

  calculateStyleValues(projectKeys){  //Calculates the attribute values for the style object that will be passed to
    let buttonWidth = `${(90/projectKeys.length)}`; //the GridButton components being generated
    return {
            "minWidth": `${buttonWidth}%`,
            "maxWidth": `${buttonWidth}%`,
            "width": `${buttonWidth}%`,
            "margin": `2.5vh ${(100-(buttonWidth*projectKeys.length))/(projectKeys.length*2)}%`,
            "minHeight": `${((8*(3/projectKeys.length))/(3.75-projectKeys.length))}vh`, //calculated using a base of 8vh, multiply by 3/(#items) in row, then divide by 3.75-(#items in row)
            "maxHeight": `${((8*(3/projectKeys.length))/(3.75-projectKeys.length))}vh`,
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
