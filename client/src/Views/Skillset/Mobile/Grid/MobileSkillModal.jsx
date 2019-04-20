import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';


export class MobileSkillModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      card: {
          "icon": "modal icon",
          "title": "modal title",
          "text": "modal text"
      },
      visible: false,
      closeModal: this.props.closeModal
    };
  }

  componentDidMount(){
    if(this.props.card !== null && this.props.card !== undefined){
      this.setState({
        card: {
          "icon": this.props.card.icon,
          "title": this.props.card.title,
          "text": this.props.card.text
        },
        visible: this.props.visible
      })
    }
  }

  componentDidUpdate(){
    if(this.props.card === null){
      this.setState({
        visible: this.props.visible,
        card: this.props.card
      })
    }
  }

  render(){
    return(
      <Modal isOpen={this.state.visible}  className="skill-modal" id="skillModal">
        <Button
          className="skills-modal-close-button"
          close aria-label="Cancel"
          size="lg"
          onClick={this.state.closeModal}
        />
        <ModalHeader className="project-modal-header">{this.state.card.title}</ModalHeader>
          <ModalBody >
            <div>{this.state.card.icon}</div>
            <div>{this.state.card.text}</div>
          </ModalBody>
      </Modal>
    )
  }
}
