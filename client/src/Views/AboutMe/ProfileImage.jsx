import React, {Component} from 'react';

export class ProfileImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      "style": {
        "backgroundSize": "cover",
        "backgroundImage": `url(${require("../../data/canoe.png")})`
      }
    }
  }

  render(){
    return(
      <div className={"profile-image"} style={this.state.style}/>
    )
  }
}
