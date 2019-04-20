import React, {Component} from 'react';
import { MobileSectionOption } from './MobileSectionOption';


export class MobileSectionSelector extends Component {
  constructor(props){
    super(props);
    this.state = {
      updateActiveSectionBy: this.props.updateActiveSectionBy
    };
  }

  componentDidMount(){
    this.setState({
      sections: this.props.sections,
      keys: Object.keys(this.props.sections)
    });
  }

  render(){
    let optionButtons = [];
    let index = 0;
    if(this.state.keys){
      for(let item in this.state.keys){
        optionButtons.push(
          <MobileSectionOption
            key={index}
            index={index}
            option={this.state.keys[item]}
            updateActiveSectionBy={this.state.updateActiveSectionBy}
          />
        )
        index++;
      }
    }
    return(optionButtons);
  }
}
