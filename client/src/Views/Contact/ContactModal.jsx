import React, { Component } from 'react';
import { Button, Col, Form, Modal, ModalHeader, ModalBody} from 'reactstrap';

import { ContactFormGroup } from './ContactFormGroup';

export class ContactModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: this.props.visible,
      toggle: this.props.toggleModal,
      formFields: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        toggleContactForm: this.props.toggleContactForm
      }
    }
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  componentDidUpdate(){
    if(this.state.isOpen !== this.props.visible){
      this.setState({
        isOpen: this.props.visible
      })
    }
  }

  onFieldChange(e){
    e.preventDefault();
    let newForm = this.state.formFields;
    newForm[`${e.target.name}`] = e.target.value
    console.log(e.target.name);
    this.setState({
      formFields: newForm
    })
  }

  render(){
    return(
        <Modal isOpen={this.state.isOpen} toggle={this.state.toggleContactForm} className="contact-form" id="contactForm">
          <div className={"contact-form-filter"} />
          <Button className="contact-form-close-button" onClick={this.state.toggle} close aria-label="Cancel" size="lg"/>
          <ModalHeader toggle={this.state.toggleContactForm} className="contact-form-header">Start The Conversation!</ModalHeader>
          <ModalBody >
            <Form className="contact-form-fields-container" action="https://formspree.io/taymosier@gmail.com" method="POST">
              <Col
              className="contact-form-col"
                xl={{ size: 10, offset: 1 }}
                lg={{ size: 10, offset: 1 }}
                md={{ size: 12, offset: 0 }}
                sm={{ size: 12, offset: 0 }} 
                xs={{ size: 12, offset: 0 }}
              >
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "firstName",
                      type: "text",
                      hasLabel: false,
                      label: "",
                      placeholder: "First Name"
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "lastName",
                      type: "text",
                      hasLabel: false,
                      placeholder: "Last Name",
                      label: ""
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "email",
                      type: "email",
                      hasLabel: false,
                      placeholder: "Email",
                      label: ""
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "phone",
                      type: "number",
                      hasLabel: false,
                      placeholder: "Phone Number",
                      label: ""
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "message",
                      type: "textarea",
                      hasLabel: false,
                      placeholder: "Write Your Message Here",
                      label: ""
                    }
                  }
                />
              </Col>
            </Form>
            <Button type="submit" value="Send" id="contactFormSubmitButton">Submit</Button>
          </ModalBody>
        </Modal>
    );
  }
}
