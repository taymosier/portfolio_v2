import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

export class MobileProjectCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount(){
    this.setState({
      visible: this.props.visible,
      card: this.props.card
    })
  }

  componentDidUpdate(){
    if(this.state.card !== this.props.card){
      this.setState({
        visible: this.props.visible,
        card: this.props.card
      })
    }
  }

  render(){
    for(let item in this.state.card){
      console.log(this.state.card[item])
    }
    return(
      this.state.visible
      ? <Card className="project-card">
          <CardBody>
            <CardTitle>Title</CardTitle>
            <CardText>Text</CardText>
          </CardBody>
        </Card>
      : null
    );
  }
}
