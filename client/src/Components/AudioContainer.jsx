import React, { Component } from 'react';

export class AudioContainer extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <iframe width="500" height="200"
        className="audioContainer"
        volume=".001"
        src="https://www.youtube.com/embed/PErqizZqLjI?rel=0;&autoplay=1&volume=50"
        frameBorder="0"
        allowFullScreen>
      </iframe>
    )
  }
}
