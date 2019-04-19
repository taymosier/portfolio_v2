import React, { Component } from 'react';
import { Card,  CardText, CardBody, CardTitle } from 'reactstrap';

//TODO
// implement skill modal functionality
// implement project detail view components
// style projects view
// design structure of contact view
// make contact form view functional

export class SkillCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      image: '',
      title: '',
      text: ''
    };
  }

  componentDidMount(){
    this.setState({
      visible: this.props.visible
    })
  }

  componentDidUpdate(){
    if(!this.props.visible){
      this.setState({
        visible: this.props.visible
      })
    }
    if(this.props.card !== null && this.state.title !== this.props.card.title){
      this.setState({
        image: this.props.card.image,
        title: this.props.card.title,
        text: this.props.card.text
      })
    }
  }

  render(){
    return(
      this.state.visible
      ? <Card className="skill-card">
          <CardBody>
            <CardTitle>{this.state.title}</CardTitle>
            <CardText>{this.state.text}</CardText>
          </CardBody>
        </Card>
      : null
    );
  }
}
