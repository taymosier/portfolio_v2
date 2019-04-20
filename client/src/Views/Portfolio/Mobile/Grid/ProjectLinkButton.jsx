import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class ProjectLinkButton extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    if(this.props){
      this.setState({

      };
    }
  }

  componentDidUpdate(){

  }

  render(){
    return(
      <Button>{this.state.label}</Button>
    )
  }
}
