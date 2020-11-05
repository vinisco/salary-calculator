import React, { Component } from "react";
import { calculateSalaryFrom } from "../../libs/salary.js";
export default class InputBaseIrfp extends Component {
  render() {
    const { fullSalary } = this.props;
    const salary = calculateSalaryFrom(fullSalary);

    return (
      <div nameClass="row">
        <label>Base IRPF</label>
        <input
          value={`R$ ${salary.baseIRPF.toFixed(2)}`}
          id="ReadOnly"
          type="text"
          readOnly
        />
      </div>
    );
  }
}
