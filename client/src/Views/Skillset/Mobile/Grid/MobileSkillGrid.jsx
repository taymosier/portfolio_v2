import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { MobileSkillRow } from './MobileSkillRow';

export class MobileSkillGrid extends Component {
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
    for(let skill in this.props.keys){
      skills.push(this.props.keys[skill])
    }
    for(let skill in skills){
        skillRows.push(
          <MobileSkillRow
            activeSkill={this.props.activeSkill}
            className={"skill-grid-row"}
            skills={skills[skill]}
            key={`${skill}`}
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
        md={{ size: 12, offset: 0 }}
        sm={{ size: 12, offset: 0 }}
        xs={{ size: 12, offset: 0 }}
      >
        {this.state.rows !== undefined
          ? <div className={"grid-filter"} style={{"minHeight": `${this.state.rows.length*15}vh`}}></div>
          : null
        }
        {this.state.rows !== undefined
          ? this.state.rows
          : null
        }
      </Col>
    )
  }
}
