import React, { Component } from "react";

export default class InputFullSalary extends Component {
  handleInputChange = (event) => {
    const newSalary = event.target.value;
    this.props.onChangeSalary(newSalary);
  };

  render() {
    return (
      <div style={{ marginBottom: "40px" }} nameClass="conteiner">
        <label>Salário Bruto</label>
        <input
          onChange={this.handleInputChange}
          id="FullSalary"
          type="number"
        />
      </div>
    );
  }
}
