import React, { Component } from "react";
import { calculateSalaryFrom } from "../../libs/salary.js";
export default class InputBaseInss extends Component {
  render() {
    const { fullSalary } = this.props;
    const salary = calculateSalaryFrom(fullSalary);

    return (
      <div nameClass="row">
        <label>Base INSS:</label>
        <input
          size="10"
          value={`R$ ${salary.baseINSS.toFixed(2)}`}
          id="ReadOnly"
          type="text"
          readOnly
        />
      </div>
    );
  }
}
