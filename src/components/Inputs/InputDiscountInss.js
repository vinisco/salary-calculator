import React, { Component } from "react";
import { calculateSalaryFrom } from "../../libs/salary.js";
export default class InputDiscountInss extends Component {
  render() {
    const { fullSalary } = this.props;
    const salary = calculateSalaryFrom(fullSalary);

    return (
      <div nameClass="row">
        <label>Desconto INSS</label>

        <input
          style={{ color: "#e67e22", fontWeight: "bolder" }}
          value={`R$ ${salary.discountINSS.toFixed(2)} (${(
            (salary.discountINSS * 100) /
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
