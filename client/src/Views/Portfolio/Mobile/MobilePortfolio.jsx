import React, {Component} from 'react';
import { Row } from 'reactstrap';
import portfolio from '../portfolio.json';

import { MobileProjectsGrid } from './Grid/MobileProjectsGrid';
import { MobileProjectModal } from './Grid/MobileProjectModal';

export class MobilePortfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      projectKeys: Object.keys(portfolio),
      card: null,
      projects: portfolio
    };
    this.toggleActiveKey = this.toggleActiveKey.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    this.setState({
      activeKey: null
    })
  }

  componentDidUpdate(){
    if(this.props.card === null){
      this.setState({
        card: null
      })
    }
  }

  toggleActiveKey(key){
    if(this.state.activeKey === key){                //if the key value passed from the button is equal to
      this.setState({ activeKey: null, card: null }) // Portfolio.state.activeKey, resets activeKey and state.card to null
    } else {
      this.setState({   //if Portfolio.state.activeKey === null, sets Portfolio.state.activeKey and sets Portfolio.state.card object values from the values
        activeKey: key, //found in Portfolio.state.projects
        card: {
          tags: this.state.projects[key].tags,
          title: "title",
          text: "text"
        }
      })
    }
  }

  closeModal(){
    this.setState({
      activeKey: null,
      card: null
    })
  }

  render(){
    return(
      <Row>
        {this.state.card !== undefined && this.state.card !== null
          ? <MobileProjectModal
              visible={this.state.card !== null && this.state.card !== undefined}
              card={this.state.card !== null && this.state.card !== undefined ? this.state.card : null}
              closeModal={this.closeModal}
            />
          : null
        }
        <MobileProjectsGrid
          className={"projects-grid"}
          items={this.state.projectKeys}
          activeKey={this.state.activeKey}
          card={null}
          toggleActiveKey={this.toggleActiveKey}
        />
      </Row>
    )
  }
}
