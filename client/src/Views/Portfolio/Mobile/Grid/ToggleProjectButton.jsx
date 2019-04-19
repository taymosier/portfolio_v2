import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class ToggleProjectButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleActiveKey: this.props.toggleActiveKey
    }
  }

  componentDidMount(){
    this.setState({
      activeProject: this.props.activeProject,
      className: this.props.className
    })
  }

  componentDidUpdate(){
    if(this.state.activeKey !== this.props.activeKey){
      this.setState({
        activeKey: this.props.activeKey
      })
    }
  }

  render(){
    return(
      <Button
        onClick={()=>{this.props.toggleActiveKey(this.state.activeKey)}} //this.props.setActiveSkill will be null if it is .hidden
        className={this.state.className}
      >
        {"Close"}
      </Button>
    )
  }
}
