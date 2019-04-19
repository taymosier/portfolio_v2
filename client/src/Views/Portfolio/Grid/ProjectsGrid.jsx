import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { GridRow } from './GridRow';
import { ProjectCard } from './ProjectCard';
import { ToggleProjectButton } from './ToggleProjectButton';

export class ProjectsGrid extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggleActiveKey: this.props.toggleActiveKey
    };
  }

  componentDidMount(){
    this.setState({
      className: this.props.className,
      activeKey: this.props.activeKey,
      items: this.props.items,
      rows: this.generateProjectButtons(),
      card: this.props.card,
    })
  }

  componentDidUpdate(){
    if(this.state.activeKey !== this.props.activeKey){
      this.setState({
        activeKey: this.props.activeKey,
        rows: this.generateProjectButtons()
      })
    }
    if(this.state.card !== this.props.card){
      this.setState({
        card: this.props.card
      })
    }
  }

  generateProjectButtons(){
    let items = this.props.items;
    let projectRows = [];
    let startIndex = 0;
    let endIndex = 3;
    projectRows.push(
      <GridRow
        activeKey={this.props.activeKey}
        className={"projects-row"}
        items={items.slice(startIndex, endIndex)}
        key={`${startIndex}_${endIndex}`}
        toggleActiveKey={this.state.toggleActiveKey}
      />
    )
    while(endIndex < items.length && items !== undefined){
      startIndex = endIndex;
      (endIndex+3) > items.length
        ? endIndex = startIndex + (items.length-startIndex)
        : endIndex = endIndex+3
      projectRows.push(
        <GridRow
          activeKey={this.props.activeKey}
          className={"projects-row"}
          items={items.slice(startIndex, endIndex)}
          key={`${startIndex}_${endIndex}`}
          toggleActiveKey={this.state.toggleActiveKey}
        />
      )
    }
    return projectRows.reverse(); //reversed so that incomplete row will be on top, if projects.length % (numberOfItemsInRow) !== 0
  }

  render(){
    if(this.state.rows){
      return(
        <Col
          xl={{ size: 10, offset: 1 }}
          lg={{ size: 10, offset: 1 }}
          md={{ size: 10, offset: 1 }}
          sm={{ size: 10, offset: 1 }}
          xs={{ size: 10, offset: 1 }}
          className={"projects-grid"}
        >
          <div className={"grid-filter"}></div>
          {this.state.card !== null
            ? <ProjectCard
                visible={this.state.card !== null}
                card={this.state.card ? this.state.card : null}
              />
            : null
          }
          {this.state.rows}
          {this.state.activeKey !== null && this.state.activeKey !== undefined
            ? <ToggleProjectButton
                activeKey={this.state.activeKey}
                className={"card-close-button"}
                toggleActiveKey={this.state.toggleActiveKey}
              />
            : null
          }
        </Col>
      )
    } else {
      return null
    }
  }
}
