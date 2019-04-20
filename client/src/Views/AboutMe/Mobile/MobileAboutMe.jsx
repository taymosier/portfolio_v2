import React, {Component} from 'react';
import { Row } from 'reactstrap';
import { MobileSectionSelector } from './Navigation/MobileSectionSelector';
import { AboutMeModal } from './Content/AboutMeModal';

import sections from '../aboutme.json';

export class MobileAboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeSectionContent: null,
      activeSection: null,
      keys: Object.keys(sections),
      sections: sections
    }
    this.closeModal = this.closeModal.bind(this);
    this.updateActiveSectionBy = this.updateActiveSectionBy.bind(this);
  }

  componentDidMount(){
    if(this.props.activeSectionIndex !== undefined && this.state.activeSectionIndex !== this.props.activeSectionIndex){
      this.setState({
        activeSectionIndex: this.props.activeSectionIndex,
        activeSectionContent:  this.state.sections[this.state.keys[this.props.activeSectionIndex]].body,
      })
    }
  }

  render(){
    if(this.state.activeSectionIndex){
      this.getActiveSectionChildKeys(this.state.sections, this.state.activeSectionIndex, this.state.keys)
    }

    return(
      <Row className={"about-me-view"}>
        <div className={"about-me-filter"} />
        {this.state.activeSection !== null && this.state.activeSection !== undefined
          ? <AboutMeModal
              activeSubsectionBy={this.state.activeSubsectionBy}
              closeModal={this.closeModal}
              content={this.state.activeSectionContent}
              title={this.state.activeSection}
              visible={this.state.activeSection !== null}
            />
          : null
        }
        <Row className={"section-options-container"}>
          <MobileSectionSelector
            sections={this.state.sections}
            updateActiveSectionBy={this.updateActiveSectionBy}
          />
        </Row>
      </Row>
    )
  }

  componentDidUpdate(){

  }

  closeModal(){
    this.setState({
      activeSection: null
    })
  }

  updateActiveSectionBy(index){
    console.log(this.state.sections[this.state.keys[index]].body)
    this.setState({
      activeSectionContent: this.state.sections[this.state.keys[index]].body,
      activeSection: this.state.keys[index],
      modal: true
    })
  }


}
