import React, { Component } from 'react';
import { TabPane, Row, Col } from 'reactstrap';

export class ContentPane extends Component {
  constructor(props){
    super(props);
    this.state={
      index: this.props.index,
      columnSize: 12,
      content: {
        "header": "",
        "body": ""
      },
    };
  }

  componentDidMount(){
    this.setState({
      content: {
        "header": this.props.content.header,
        "body": this.props.content.body
      },
    })
  }

  componentDidUpdate(){
    if(this.state.content.body !== this.props.content.body){
      this.setState({
        index: this.props.index,
        content: {
          "header": this.props.content.header,
          "body": this.props.content.body
        },
      })
    }
  }

  render(){
    return(
      <TabPane tabId={this.state.index} className={"section-content"}>
        <Row>
          <Col sm={this.state.columnSize}>
            <h4>{this.state.content.header}</h4>
            <p >{this.state.content.body}</p>
          </Col>
        </Row>
      </TabPane>
    )
  }
}
