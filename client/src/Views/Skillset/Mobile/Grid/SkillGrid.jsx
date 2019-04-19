import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { SkillCard } from './SkillCard';
import { SkillRow } from './SkillRow';
import { ToggleSkillsButton } from './ToggleSkillsButton';

export class SkillGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
      setActiveSkill: this.props.setActiveSkill
    };
  }

  componentDidMount(){
    this.setState({
      skills: this.props.skills,
      activeSkill: this.props.activeSkill,
      skillKeys: this.props.keys,
      rows: this.generateSkillRows()
    })
  }

  componentDidUpdate(){
    if(this.state.activeSkill !==  this.props.activeSkill && this.props.activeSkill !== undefined){
      this.setState({
        activeSkill: this.props.activeSkill,
        card: this.props.card,
        rows: this.generateSkillRows()
      })
    }
  }

  generateSkillRows(){                    // pushes each skill object in props to an array, will be
    let skills = [];                      // iterated through when pushing objects to SkillRow components
    let skillRows = [];                   // stores the generated SkillRow components, will be returned
    let startIndex = 0;                   // ending index of objects being passed to SkillRow component
    let endIndex = 5;                     // ending index of objects being passed to SkillRow component
    for(let skill in this.props.keys){
      skills.push(this.props.keys[skill])
    }
    if(this.props.keys.length < 4){               // If there are not enough objects to fill a full row,
      skillRows.push(                             // we insert what objects are there and return them.
        <SkillRow
          activeSkill={this.props.activeSkill}
          className={"skill-grid-row"}
          skills={skills.slice(startIndex, skills.length)}
          key={`${startIndex}_${endIndex}`}
          setActiveSkill={this.state.setActiveSkill}
        />
      )
      return skillRows
    } else { // otherwise we push the initial row
      skillRows.push(
        <SkillRow
          activeSkill={this.props.activeSkill}
          className={"skill-grid-row"}
          skills={skills.slice(startIndex, endIndex)}
          key={`${startIndex}_${endIndex}`}
          setActiveSkill={this.state.setActiveSkill}
        />
      )
    }
    while(endIndex < skills.length && skills !== undefined){       // After the first row is inserted,
      startIndex =  endIndex                                       // we iterate through the remaining objects
      endIndex+5 > skills.length                                   // and make sure the end index !> skills.length
    ? endIndex = skills.length                                     // if it is, we make the end index === skills.length
      : endIndex = endIndex+5                                      // (which will be the number of items to a row)
      skillRows.push(
        <SkillRow
          activeSkill={this.props.activeSkill}
          className={"skill-grid-row"}
          skills={skills.slice(startIndex, endIndex)}         //pushing generated component to skillRows.array
          key={`${startIndex}_${endIndex}`}
          setActiveSkill={this.state.setActiveSkill}
        />
      )
    }
    return skillRows.reverse();
  }


  render(){
    if(this.state.skillRows){
      return (this.state.skillRows)
    }
    return(
      <Col
        className={"skill-grid"}
        xl={{ size: 10, offset: 1 }}
        lg={{ size: 10, offset: 1 }}
        md={{ size: 10, offset: 1 }}
        sm={{ size: 10, offset: 1 }}
        xs={{ size: 10, offset: 1 }}
      >
        <div className={"grid-filter"}></div>
        {this.state.card !== null
          ? <SkillCard
              visible={this.state.card !== null}
              card={this.state.card ? this.state.card : null}
            />
          : null
        }
        {this.state.rows}
        {this.state.activeSkill !== ""
          ? <ToggleSkillsButton
                activeSkill={this.state.activeSkill}
                className={"card-close-button"}
                setActiveSkill={this.state.setActiveSkill}
              />
          : null
        }
      </Col>
    )
  }
}
