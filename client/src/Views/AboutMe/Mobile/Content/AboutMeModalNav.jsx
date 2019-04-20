import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';

export class AboutMeModalNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      updateActiveSubsection: this.props.updateActiveSubsection
    }
    this.generateButtons = this.generateButtons.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
  }

  componentDidMount(){
    this.setState({
      items: this.props.items,
      activeSubsection: this.props.activeSubsection,
      buttons: this.generateButtons()
    })
  }

  componentDidUpdate(){
    if(this.props.activeSubsection !== undefined && this.state.activeSubsection !== this.props.activeSubsection){
      this.setState({
        activeSubsection: this.props.activeSubsection,
        buttons: this.generateButtons()
      })
    }
  }

  getNavItemStyle(currentItem, activeItem){
    console.log(`Current Item : ${currentItem} | Active Item : ${activeItem}\n`)
    if(currentItem === activeItem){
      return {
        "background": `gray`,
        "minWidth": `${100/this.props.items.length}%`,
        "maxWidth": `${100/this.props.items.length}%`,
        "width": `${100/this.props.items.length}%`
      }
    } else {
      return {
        "minWidth": `${100/this.props.items.length}%`,
        "maxWidth": `${100/this.props.items.length}%`,
        "width": `${100/this.props.items.length}%`
      }
    }
  }

  setActiveItem(subsection){
    this.setState({
      activeSubsection: subsection
    })
  }

  generateButtons(){
    let buttons = [];
    let style;

    for(let item in this.props.items){
      style = this.getNavItemStyle(this.props.items[item], this.props.activeSubsection);
      buttons.push(
        <NavItem
          key={item}
          style={style}
          onClick={() => {this.state.updateActiveSubsection(this.props.items[item])}}>{this.props.items[item]}
        </NavItem>
      )
    }
    return buttons;
  }

  render(){
    return(
      <Navbar className={"about-me-section-nav"}>
        <Nav>
          {this.state.buttons}
        </Nav>
      </Navbar>
    )
  }
}
