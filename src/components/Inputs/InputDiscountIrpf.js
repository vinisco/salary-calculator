import React, { Component } from "react";
import { calculateSalaryFrom } from "../../libs/salary.js";
export default class InputDiscountIrpf extends Component {
  render() {
    const { fullSalary } = this.props;
    const salary = calculateSalaryFrom(fullSalary);

    return (
      <div nameClass="row">
        <label>Desconto IRPF</label>
        <input
          style={{ color: "#c0392b", fontWeight: "bolder" }}
          value={`R$ ${salary.discountIRPF.toFixed(2)} (${(
            (salary.discountIRPF * 100) /
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
