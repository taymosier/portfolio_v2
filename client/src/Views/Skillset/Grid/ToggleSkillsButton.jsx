import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class ToggleSkillsButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      setActiveSkill: this.props.setActiveSkill
    }
  }

  componentDidMount(){
    this.setState({
      activeSkill: this.props.activeSkill
    })
  }

  componentDidUpdate(){
    if(this.state.activeSkill !== this.props.activeSkill){
      this.setState({
        activeSkill: this.props.activeSkill
      })
    }
  }

  render(){
    return(
      <Button
        onClick={()=>{this.props.setActiveSkill(this.state.activeSkill)}} //this.props.setActiveSkill will be null if it is .hidden
        className={"card-close-button"}
      >
      {"Close"}
      </Button>
    )
  }
}
