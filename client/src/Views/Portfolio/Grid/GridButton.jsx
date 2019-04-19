import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class GridButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggleActiveKey: this.props.toggleActiveKey
    };
  }

  componentDidMount(){
    this.setState({
      className: this.props.className,
      item: this.props.item,
      index: this.props.index,
      activeKey: this.props.activeKey,
      style: this.props.style
    })
  }

  componentDidUpdate(){
    if(this.state.activeKey !== this.props.activeKey ){
      this.setState({
        style: this.props.style,
        activeKey: this.props.activeKey,
        className: this.props.className,
        item: this.props.item
      })
    }
  }

  capitalize(word){
    let strArray = word.split(" ");
    let split;
    if(strArray[0] === undefined){ return word}
    for(let item in strArray){
      split = strArray[item].split("");
      split[0] = split[0].toUpperCase();
      strArray[item]= split.join("")
    }
    return strArray.join(" ");
  }

  render(){
    if(this.state.item){
      return(
        <Button
          className={this.state.className}
          onClick={()=>{this.props.toggleActiveKey(this.state.item)}}
          style={this.state.style}
        >
          <div className={"project-button-filter"}/>
          {this.capitalize(this.state.item)}
        </Button>
      )
    }
    return null
  }
}
