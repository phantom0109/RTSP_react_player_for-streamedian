import React from "react";

export default class InputSource extends React.Component {
  constructor(props) {
    super(props);

    this.changeSource = this.changeSource.bind(this);
    this.setSource = this.setSource.bind(this);
  }

  changeSource(event) {
    this.setState({source: event.target.value});
  }

  setSource(event) {
    if (this.state) {
      this.props.onClick(this.state.source);
    }
  }

  render() {
    return (
      <div>
        <input  onChange={this.changeSource} size="36" />
        <button onClick={this.setSource}>Set</button>
        <p>Enter your rtsp link to the stream, for example: "rtsp://192.168.1.1:554/h264"</p>
      </div>
    );
  }
}