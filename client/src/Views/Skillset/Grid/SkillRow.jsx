import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { SkillButton } from './SkillButton';

export class SkillRow extends Component {
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
        buttons: this.generateSkillButtons()
      })
    }
  }

  componentDidUpdate(){
    if(this.state.activeSkill !== this.props.activeSkill && this.props.activeSkill !== undefined){
      console.log(this.props.skills)
      this.setState({
        activeSkill: this.props.activeSkill,
        skills: this.props.skills,
        className: this.props.className,
        buttons: this.generateSkillButtons()
      })
    }
  }

  determineClass(skill, activeSkill){ //conditionally appends .active or .hidden class to button
    if(activeSkill !== '' && activeSkill !== undefined){
      return "grid-button hidden"
    }
    return "grid-button"
  }

  generateSkillButtons(){
    let buttons = [];
    let skill, className;
    let style = this.calculateStyleValues(this.props.skills)
    while(this.props.skills.length > 0){
      skill = this.props.skills.pop();
      className = this.determineClass(skill, this.props.activeSkill)
      buttons.push(
        <SkillButton
          style={style}
          activeSkill={this.props.activeSkill} //set from props rather than state because this function is called within setState() and returns a state attribute value
          className={className}
          label={skill}
          setActiveSkill={className === "skill-grid-button hidden" ? null : this.state.setActiveSkill}
        />
      )
    }
    return buttons;
  }

  calculateStyleValues(skills){  //Calculates the attribute values for the style object that will be passed to
    let buttonWidth = `${(90/skills.length)}`; //the SkillButton components being generated
    return {
            "minWidth": `${buttonWidth}%`,
            "maxWidth": `${buttonWidth}%`,
            "width": `${buttonWidth}%`,
            "margin": `1vh ${(100-(buttonWidth*skills.length))/(skills.length*2)}%`,
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
