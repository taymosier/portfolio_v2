import React, {Component} from 'react';
import { Row } from 'reactstrap';
import portfolio from './portfolio.json';

import { ProjectsGrid } from './Grid/ProjectsGrid';

export class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      projectKeys: Object.keys(portfolio),
      card: null,
      projects: portfolio
    };
    this.toggleActiveKey = this.toggleActiveKey.bind(this);
  }

  componentDidMount(){
    this.setState({
      activeKey: null
    })
  }

  toggleActiveKey(key){
    if(this.state.activeKey === key){                //if the key value passed from the button is equal to
      this.setState({ activeKey: null, card: null }) // Portfolio.state.activeKey, resets activeKey and state.card to null
    } else {
      this.setState({   //if Portfolio.state.activeKey === null, sets Portfolio.state.activeKey and sets Portfolio.state.card object values from the values
        activeKey: key, //found in Portfolio.state.projects
        card: {
          tags: this.state.projects[key].tags[0],
          title: this.state.projects[key].content.header,
          text: this.state.projects[key].content.text
        }
      })
    }
  }

  render(){
    return(
      <Row>
        <ProjectsGrid
          className={"projects-grid"}
          items={this.state.projectKeys}
          activeKey={this.state.activeKey}
          card={this.state.card !== null ? this.state.card : null}
          toggleActiveKey={this.toggleActiveKey}
        />
      </Row>
    )
  }
}
