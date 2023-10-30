import React from "react";
import ViewTunnelClient from "./ViewTunnelClient";

export default class ViewInfo extends React.Component {
  render() {
    return (
      <div>
        { Object.values(this.props.info.clients || []).map((client, index) =>
          <ViewTunnelClient key={index} client={client} onClick={this.props.onClick} />
        )}
      </div>
    );
  }
}