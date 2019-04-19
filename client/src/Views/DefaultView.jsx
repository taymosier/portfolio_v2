import React, {Component} from 'react';
import { Container } from 'reactstrap';
import { ChangeViewBlock } from '../Components/ChangeViewBlock.jsx';

export class DefaultView extends Component {
  constructor(props){
    super(props);
    this.state = {
      setActiveView: this.props.setActiveView
    };
  }

  render(){
    let buttons = []
    let items = [
      {
        "view": "AboutMeView",
        "text": "About Me"
      },
      {
        "view": "SkillView",
        "text": "What I Can Do"
      },
      {
        "view": "PortfolioView",
        "text": "Portfolio"
      },
      {
        "view": "ContactView",
        "text": "Contact Me"
      }
    ]
    for(let item in items){
      buttons.push(
        <ChangeViewBlock
          view={items[item].view}
          text={items[item].text}
          setActiveView={this.props.setActiveView}
        />
      );
    }
    return (
      <Container className="default-view-container">
        {buttons}
      </Container >
    )
  }
}
