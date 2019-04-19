import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';

export class ContactContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggleModal: this.props.toggleModal
    }
  }

  componentDidMount(){

  }

  render(){
    return(
      <Col
        xl={{ size: 10, offset: 1 }}
        lg={{ size: 10, offset: 1 }}
        md={{ size: 10, offset: 1 }}
        sm={{ size: 10, offset: 1 }}
        xs={{ size: 10, offset: 1 }}
        className={"container"}
      >
        <Row className={"header"}>
          <p>Get In Touch</p>
        </Row>

        <Row className={"content"}>
          <Col
            xl={{ size: 6, offset: 1 }}
            lg={{ size: 6, offset: 1 }}
            md={{ size: 6, offset: 1 }}
            sm={{ size: 6, offset: 1 }}
            xs={{ size: 10, offset: 1 }}
            className={"left"}
          >
            <p>Email - taymosier@gmail.com</p>
            <p>GitHub -  github.com/taymosier</p>
            <p>LinkedIn - www.linkedin.com/in/taylormosier</p>
            <p>Raleigh-Durham, NC</p>
          </Col>
          <Col
            xl={{ size: 4, offset: 1 }}
            lg={{ size: 4, offset: 1 }}
            md={{ size: 4, offset: 1 }}
            sm={{ size: 4, offset: 1 }}
            xs={{ size: 10, offset: 1 }}
            className={"right"}
          >
            <p className="blob">
              Have an idea for an app or want to discuss a full-time, part-time, or freelance opportunity?
            </p>
            <Button
              onClick={this.state.toggleModal}
              className="contact-modal-button"
            >
              Contact Me
            </Button>
          </Col >
        </Row>
      </Col>
    );
}}
