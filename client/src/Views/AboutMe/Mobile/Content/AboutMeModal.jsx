import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { AboutMeModalNav } from './AboutMeModalNav';

export class AboutMeModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      closeModal: this.props.closeModal
    };
    this.updateActiveSubsection = this.updateActiveSubsection.bind(this);
  }

  componentDidMount(){
    this.setState({
      activeSubsection: Object.keys(this.props.content)[0],
      subsectionKeys: Object.keys(this.props.content),
      content: this.props.content,
      body: this.props.content[Object.keys(this.props.content)[0]].body,
      title: this.props.title,
      visible: this.props.visible
    })
  }

  componentDidUpdate(){
    if(this.props.content !== undefined && this.state.content !== this.props.content){
      this.setState({
        subsectionKeys: Object.keys(this.props.content),
        title: this.props.title,
        body: this.props.content[Object.keys(this.props.content)[0]].body,
        content: this.props.content,
      })
    }
    if(this.props.visible !== undefined && this.state.visible !== this.props.visible){
      this.setState({
        visible: this.props.visible
      })
    }
    if(this.props.activeSubsection !== undefined && this.state.activeSubsection !== this.props.activeSubsection){
      this.setState({
        activeSubsection: this.props.activeSubsection
      })
    }
  }

  updateActiveSubsection(subsection){ //subsection = this.props.content key [string]
    this.setState({
      activeSubsection: subsection,
      body: this.state.content[subsection].body
    })
  }

  render(){
    return(
      <Modal
        className="about-me-modal"
        isOpen={this.state.visible}
        toggle={this.state.closeModal}
      >
        <Button
          className="about-me-modal-close-button"
          close aria-label="Cancel"
          size="lg"
        />
        <ModalHeader className={"about-me-modal header"}>
        {this.state.title ? this.state.title : null }
        </ModalHeader>
        {this.state.subsectionKeys
          ? <AboutMeModalNav
              activeSubsection={this.state.activeSubsection}
              items={this.state.subsectionKeys}
              updateActiveSubsection={this.updateActiveSubsection}
            />
          : null
        }
        <ModalBody >
          { this.state.content
            ? this.state.body
            : null
          }
        </ModalBody>
      </Modal>
    );
  }
}
