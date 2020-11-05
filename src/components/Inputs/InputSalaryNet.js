import React, { Component } from "react";
import { calculateSalaryFrom } from "../../libs/salary.js";
export default class InputSalaryNet extends Component {
  render() {
    const { fullSalary } = this.props;
    const salary = calculateSalaryFrom(fullSalary);

    return (
      <div nameClass="row">
        <label>Salário Líquido</label>
        <input
          style={{ color: "#16a085", fontWeight: "bolder" }}
          value={`R$ ${salary.netSalary.toFixed(2)} (${(
            (salary.netSalary * 100) /
            fullSalary
          ).toFixed(2)}%)`}
          id="ReadOnly"
          type="text"
          readOnly
        />
      </div>
    );
  }
}
