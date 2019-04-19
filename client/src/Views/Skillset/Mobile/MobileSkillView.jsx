import React, {Component} from 'react';
import { Row } from 'reactstrap';

import {SkillGrid} from './Grid/SkillGrid';


import skills from '../skillset.json';

//TODO style rows

export class MobileSkillView extends Component {
  constructor(props){
    super(props);
    this.state = {
      skillSet: skills,
      card: null,
      skillKeys: Object.keys(skills)
    };
    this.setActiveSkill = this.setActiveSkill.bind(this);
  }

  componentDidMount(){
    this.setState({
      activeSkill: '',
      modal: false
    })
  }

  componentDidUpdate(){

  }

  setActiveSkill(skill){
    if(this.state.activeSkill === skill){
      this.setState({
        activeSkill: '',
        card: null
      })
    } else {
      this.setState({
        activeSkill: skill,
        card: {
          image: this.state.skillSet[skill].content.icon,
          title: this.state.skillSet[skill].content.header,
          text: this.state.skillSet[skill].content.text
        }
      })
    }
  }





  render(){
    return(
      <Row className={"skillset-view-container"}>
        MOBILE
        <SkillGrid
          skills={this.state.skillSet}
          keys={this.state.skillKeys}
          activeSkill={this.state.activeSkill}
          setActiveSkill={this.setActiveSkill}
          card={this.state.card !== null ? this.state.card : null}
        />
      </Row>
    )
  }
}
