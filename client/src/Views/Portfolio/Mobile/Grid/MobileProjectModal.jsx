import React, { Component } from 'react';
import { Button, Col, Form, Modal, ModalHeader, ModalBody} from 'reactstrap';


export class MobileProjectModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeKey: this.props.activeKey,
      card: null,
      closeModal: this.props.closeModal,
      visible: this.props.visible
    };
  }

  componentDidMount(){
    this.setState({
      activeKey: this.props.activeKey,
      visible: this.props.visible,
      card: null,
    })
  }

  componentDidUpdate(){
    if(this.state.visible !== this.props.visible){
      this.setState({
        visible: this.props.visible
      })
    }
    if(this.props.card !== undefined && this.state.title !== this.props.card.title){
      this.setState({
        activeKey:  this.props.activeKey,
        tags: this.props.card.tags,
        title: this.props.card.title,
        text: this.props.card.text
      })
    }
  }

  render(){
    return(
      <Modal isOpen={this.state.visible}  className="project-modal" id="projectModal">
      <Button
        className="project-modal-close-button"
        close aria-label="Cancel"
        size="lg"
        onClick={this.state.closeModal}
      />
        <ModalHeader className="project-modal-header">{this.state.title}</ModalHeader>
          <ModalBody >
            <div>{this.state.tags}</div>
            <div>{this.state.text}</div>
          </ModalBody>
      </Modal>
    )
  }
}
