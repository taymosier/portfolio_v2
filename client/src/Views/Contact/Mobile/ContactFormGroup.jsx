import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export class ContactFormGroup extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.setState({
      name: this.props.field.name,
      value: this.props.field.value,
      type: this.props.field.type,
      hasLabel: this.props.field.hasLabel,
      label: this.props.field.label,
      placeholder: this.props.field.placeholder !== undefined ? this.props.field.placeholder : null
    })
  }

  render(){
    return(
      <FormGroup>
        {this.state.hasLabel !== undefined
          ? <Label for={this.state.name}>{this.state.label}</Label>
          : null
        }
        <Input
          name={this.state.name}
          value={this.state.value}
          type={this.state.type}
          onChange={this.props.onChange}
          placeholder={this.state.placeholder !== null ? this.state.placeholder : null}
        >
        </Input>
      </FormGroup>
    )
  }
}
