import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { ContactContent } from './ContactContent';
import  { ContactModal } from './ContactModal';


export class ContactView extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount(){

  }

  componentDidUpdate(){

  }

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    })
  }

  render(){
    return(
      <Row className={"contact-view"}>
        <div className={"contact-filter"}/>
        <ContactModal
          visible={this.state.modal}
          toggleModal={this.toggleModal}
        />
        <ContactContent toggleModal={this.toggleModal}/>
      </Row>
    )
  }
}
