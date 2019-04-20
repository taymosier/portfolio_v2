import React, {Component} from 'react';
import { Button, Row } from 'reactstrap';


export class MobileSectionOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      updateActiveSectionBy: this.props.updateActiveSectionBy
    };
  }

  componentDidMount(){
    this.setState({
      index: this.props.index,
      option: this.props.option
    })
  }

  render(){
    return(
      <Row className={"section-option"}>
        <Button onClick={() => {this.state.updateActiveSectionBy(this.state.index)}} >
          {this.props.option}
        </Button>
      </Row>
    );
  }

}
