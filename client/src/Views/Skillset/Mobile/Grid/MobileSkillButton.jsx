import React, { Component } from 'react';
import { Button } from 'reactstrap';


export class MobileSkillButton extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.setState({
      label: this.props.label,
      className: this.props.className,
      activeSkill: this.props.activeSkill,
      style: this.props.style
    })
  }

  componentDidUpdate(){
    if(this.state.activeSkill !== this.props.activeSkill && this.props.activeSkill !== undefined){
      this.setState({
        activeSkill: this.props.activeSkill,
        className: this.props.className,
        style: this.props.style
      })
    }
  }

  capitalize(word){
    if(word === undefined){ return word}
    let strArray = word.split(" ");
    let split;
    for(let item in strArray){
      split = strArray[item].split("");
      split[0] = split[0].toUpperCase();
      strArray[item]= split.join("")
    }
    return strArray.join(" ");
  }

  render(){
    return(
      <Button
        style={this.state.style}
        onClick={this.props.setActiveSkill !== null ? ()=>{this.props.setActiveSkill(this.state.label)} : null} //this.props.setActiveSkill will be null if it is .hidden
        className={this.state.className}
      >
        {this.capitalize(this.state.label)}
      </Button>
    );
  }
}
