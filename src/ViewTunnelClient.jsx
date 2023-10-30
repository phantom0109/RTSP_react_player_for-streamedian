import React from "react";

export default class ViewTunnelClient extends React.Component {
  constructor(props) {
    super(props);

    this.setSource = this.setSource.bind(this);
  }

  setSource(event) {
    let source = event.target.dataset['src'];
    this.props.onClick(source);
  }

  render() {
    return (
      <div>
        { this.props.client.map((source, index) =>
           <button 
            key={index}
            onClick={this.setSource}
            data-src={source.url}>
            {source.description}
          </button>
        )}
      </div>
    );
  }
}