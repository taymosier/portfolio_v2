import React, {Component} from 'react';
import { Col, Row } from 'reactstrap';
import { ProfileImage } from './ProfileImage';
import { SectionSelector } from './Navigation/SectionSelector';
import { TabbedContentContainer } from './Content/TabbedContentContainer';


import sections from './aboutme.json';

export class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      keys: Object.keys(sections),
      activeSectionContent: sections[Object.keys(sections)[0]].body,
      activeChild: 0,
      activeSectionIndex: 0,
      sections: sections
    }
    this.updateActiveSection = this.updateActiveSection.bind(this);
  }

  componentDidMount(){
    this.setState({
      activeSectionIndex: 0,
      activeSectionContent: this.state.sections[this.state.keys[0]].body,
      activeChildKeys: Object.keys(sections[this.state.keys[0]].body),
      activeChild: this.props.activeChild,
    })
  }

  getActiveSectionChildKeys(sections, activeSectionIndex, keys){
    let children = Object.keys(sections[keys[activeSectionIndex]].body);
    let childKeys = Object.keys(children);
    for(let item in childKeys){
      console.log(`Child Key: ${children[childKeys[item]]}`)
    }
  }

  updateActiveSection(sectionIndex){
    this.setState({
      activeChild: this.props.activeChild,
      activeSectionIndex: sectionIndex,
      activeChildKeys: Object.keys(sections[this.state.keys[sectionIndex]].body),
      activeSectionContent: this.state.sections[this.state.keys[sectionIndex]].body,
    })
  }

  render(){
    if(this.state.activeSectionIndex){
      this.getActiveSectionChildKeys(this.state.sections, this.state.activeSectionIndex, this.state.keys)
    }

    return(
      <Row className={"about-me-view"}>
        <div className={"about-me-filter"} />
        <TabbedContentContainer
          keys={this.state.keys}
          activeSectionContent={this.state.activeSectionContent}
          activeSectionIndex={this.state.activeSectionIndex}
          activeChildKeys={this.state.activeChildKeys}
          activeChild={this.state.activeChild}
          updateActiveSection={this.updateActiveSection}
          sections={this.state.sections}
        />
        <Col
          xl={{ size: 5, offset: 0 }}
          lg={{ size: 5, offset: 0 }}
          md={{ size: 5, offset: 0 }}
          sm={{ size: 5, offset: 0 }}
          xs={{ size: 5, offset: 0 }}
          className={"about-me-right-col"}
        >
          <Row className={"profile-image-container"}>
            <ProfileImage />
          </Row>
          <Row className={"section-options-container"}>
            <SectionSelector
              sections={this.state.sections}
              updateActiveSection={this.updateActiveSection}
            />
          </Row>
        </Col>
      </Row>
    )
  }
}
