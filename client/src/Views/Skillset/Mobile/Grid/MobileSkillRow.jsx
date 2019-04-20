import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { MobileSkillButton } from './MobileSkillButton';

export class MobileSkillRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      setActiveSkill: this.props.setActiveSkill
    };
  }

  componentDidMount(){
    if(this.props.skills !== undefined){
      this.setState({
        activeSkills: this.props.activeSkill,
        skills: this.props.skills, //subset of SkillGrid.state.skills, contains only the skills being generated in a given row
        className: this.props.className,
        buttons: this.generateSkillButton()
      })
    }
  }

  componentDidUpdate(){
    if(this.state.activeSkill !== this.props.activeSkill && this.props.activeSkill !== undefined){
      this.setState({
        activeSkill: this.props.activeSkill,
        skills: this.props.skills,
        className: this.props.className,
        buttons: this.generateSkillButton()
      })
    }
  }

  determineClass(skill, activeSkill){ //conditionally appends .active or .hidden class to button
    if(activeSkill !== '' && activeSkill !== undefined){
      return "grid-button hidden"
    }
    return "grid-button"
  }

  generateSkillButton(){
    let style = this.calculateStyleValues(this.props.skills)
    let skill = this.props.skills;
    let className = this.determineClass(skill, this.props.activeSkill)

    return  <MobileSkillButton
              style={style}
              activeSkill={this.props.activeSkill} //set from props rather than state because this function is called within setState() and returns a state attribute value
              className={className}
              label={skill}
              setActiveSkill={className === "skill-grid-button hidden" ? null : this.state.setActiveSkill}
            />
  }

  calculateStyleValues(skills){  //Calculates the attribute values for the style object that will be passed to
    return {
            "minWidth": `90%`,
            "maxWidth": `90%`,
            "width": `90%`,
            "margin": `1vh 5vw`,
            "visibility": this.props.activeSkill ? "hidden" : "visible"
          }
  }

  render(){
    if(this.state.buttons){
      return(
        <Row className={this.state.className}>
          {this.state.buttons}
        </Row>
      )
    }
    return null
  }
}
