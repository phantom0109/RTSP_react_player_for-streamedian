import React from "react";

export default class InputBufferDuration extends React.Component {
  constructor(props) {
    super(props);
    this.changeDuration = this.changeDuration.bind(this);
  }
  
  changeDuration(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div>
        <div>
            <input
              className="input"
              value={this.props.duration}
              onChange={this.changeDuration}
              type="range" 
              min="10" 
              max="200" 
            />
            <span id="buffer_value">{this.props.duration}sec.</span>
            <p>Change buffer duration</p>
        </div>
      </div>
    );
  }
}