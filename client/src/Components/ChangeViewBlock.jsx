import React, { Component } from 'react'
import { Button, Col, Row } from 'reactstrap'


export class ChangeViewBlock extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  componentDidMount(){
    this.setState({
      view: this.props.view,
      text: this.props.text,
      setActiveView: this.props.setActiveView
    })
  }
  render(){
    return(
      <Row className={"main-row"} >
        <Col className={"main-row-col"}
          xl={{ size: 8, offset: 2 }}
          lg={{ size: 8, offset: 2 }}
          md={{ size: 8, offset: 2 }}
          sm={{ size: 8, offset: 2 }}
          xs={{ size: 10, offset: 1 }}
        >
          <Button
            onClick={() => {this.props.setActiveView(this.props.view)}}
          >
            <p>{this.state.text}</p>
          </Button>
        </Col>
        <Col className={"main-row-col-filter"}
          xl={{ size: 8, offset: 2 }}
          lg={{ size: 8, offset: 2 }}
          md={{ size: 8, offset: 2 }}
          sm={{ size: 8, offset: 2 }}
          xs={{ size: 10, offset: 1 }}
        ></Col>
      </Row>
    )
  }
}
