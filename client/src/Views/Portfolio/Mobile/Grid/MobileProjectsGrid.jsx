import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { MobileGridRow } from './MobileGridRow';
import { MobileProjectCard } from './MobileProjectCard';
import { ToggleProjectButton } from './ToggleProjectButton';

export class MobileProjectsGrid extends Component{
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
    for(let item in items){
      projectRows.push(
        <MobileGridRow
          activeKey={this.props.activeKey}
          className={"projects-row"}
          item={items[item]}
          key={`${item}`}
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
          xl={{ size: 12, offset: 0 }}
          lg={{ size: 12, offset: 0 }}
          md={{ size: 12, offset: 0 }}
          sm={{ size: 12, offset: 0 }}
          xs={{ size: 12, offset: 0 }}
          className={"projects-grid"}
        >
          <div className={"grid-filter"}></div>
          {this.state.rows}
        </Col>
      )
    } else {
      return null
    }
  }
}
