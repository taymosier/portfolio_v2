import React, { Component } from 'react';
import { ContentPane } from './ContentPane';

export class TabbedContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      "content": {
        "header": "",
        "body": ""
      }
    };
  }

  componentDidMount(){
    this.setState({
      content: this.props.content,
      panes: this.generateContentPanes(this.props.content)
    })
  }

  componentDidUpdate(){
    if(this.state.content !== this.props.content){
      console.log('content updating')
      this.setState({
        content: this.props.content,
        panes: this.generateContentPanes(this.props.content)
      })
    }
  }

  generateContentPanes(content){
    let contentPanes = [];
    if(content){
      let index = 0;
      let contentKeys = Object.keys(content);
      for(let item in contentKeys){
        contentPanes.push(
          <ContentPane
            key={contentKeys[item]}
            index={index}
            content={content[contentKeys[item]]}
            updateActiveChildTab={this.state.updateActiveChildTab}
          />
        )
        index = index+1;
      }
    }
    return contentPanes;
  }

  render(){
    return(this.state.panes !== undefined ? this.state.panes : null)
  }
}
