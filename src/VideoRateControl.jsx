import React from "react";

export default class VideoRateControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playbackRate: 1.0,
      playbackRateText: 'live',
    }

    this.video = null;
    this.updatePlaybackRate = this.updatePlaybackRate.bind(this);
    this.livePlaybackRate = this.livePlaybackRate.bind(this);
  }

  componentDidMount() {
    this.video = document.getElementById(this.props.video);
    this.setState({playbackRate: this.video.playbackRate});
    this.setState({playbackRateText: this.video.playbackRate});
  }

  componentWillUpdate(nextProps, nestState) {
    this.video.playbackRate = this.state.playbackRate
  }

  updatePlaybackRate(event) {
    this.setState({playbackRate: event.target.value});
    this.setState({playbackRateText: event.target.value});
  }

  livePlaybackRate(event) {
    this.setState({playbackRate: 1});
    this.setState({playbackRateText: 'live'});
    if (this.video.buffered.length) {
      this.video.currentTime = this.video.buffered.end(0);
    }
  }

  render() {
    return (
      <div className="controls form">
        <div>
            Playback rate:&nbsp;
            <input 
              className="input"
              value={this.state.playbackRate}
              onChange={this.updatePlaybackRate}
              type="range" 
              min="0.5" 
              max="5.0" 
              step="0.5"
            />
            <output>{this.state.playbackRateText}</output>
        </div>
        <div>
            <button 
              className="btn btn-success"
              onClick={this.livePlaybackRate}
            >live</button>
        </div>
    </div>
    );
  }
}