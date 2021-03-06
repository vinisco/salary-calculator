import React from "react";

export default class ProgressiveBar extends React.Component {
  render() {
    const { value, color = "black" } = this.props;

    return (
      <div
        style={{
          marginTop: "40px",
          width: value + "%",
          height: "25px",
          backgroundColor: color,
        }}
      />
    );
  }
}
