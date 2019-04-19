import React, {Component} from 'react';
import { NavItem, NavLink} from 'reactstrap';

export class ContentTab extends Component {
  constructor(props){
    super(props);
    this.state = {
      updateActiveChildTab: this.props.updateActiveChildTab
    };
  }

  componentDidMount(){
    this.setState({
      index: this.props.index,
      text: this.props.text,
    })
  }

  componentDidUpdate(){
    if(this.state.text !== this.props.text){
      this.setState({
        index: this.state.index,
        text: this.props.text
      })
    }
  }

  render(){
    return(
      <NavItem>
        <NavLink
          className={"content-tab"} //classnames({ active: this.state.activeTab === '1' })
          onClick={() => {this.state.updateActiveChildTab(this.state.index)}}
        >
          {this.state.text}
        </NavLink>
      </NavItem>
    )
  }
}
