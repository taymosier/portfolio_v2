import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class MobileGridButton extends Component{
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

  componentWillReceiveProps(nextProps){
      if(nextProps.style !== this.state.style){
          this.setState({style: nextProps.style});
      }
    }

  componentDidUpdate(){
    if(this.state.activeKey !== this.props.activeKey ){
      this.setState({
        activeKey: this.props.activeKey,
        className: this.props.className,
        item: this.props.item
      })
    }
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
          {this.state.item}
        </Button>
      )
    }
    return null
  }
}
