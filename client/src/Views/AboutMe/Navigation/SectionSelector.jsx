import React, {Component} from 'react';
import { SectionOption } from './SectionOption';


export class SectionSelector extends Component {
  constructor(props){
    super(props);
    this.state = {
      updateActiveSection: this.props.updateActiveSection
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
      let buttonHeight = `${(35/this.state.keys.length)-1}vh`;
      for(let item in this.state.keys){
        optionButtons.push(
          <SectionOption
            index={index}
            style={{"minHeight": `${buttonHeight}`, "maxHeight": `${buttonHeight}`}}
            option={this.state.keys[item]}
            updateActiveSection={this.state.updateActiveSection}
          />
        )
        index++;
      }
    }
    return(optionButtons);
  }
}
