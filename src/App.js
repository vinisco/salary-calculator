import React, { Component } from "react";
import InputFullSalary from "./components/Inputs/InputFullSalary";
import ProgressiveBar from "./components/bar/ProgressiveBar";
import InputBaseInss from "./components/Inputs/InputBaseInss.js";
import InputDiscountInss from "./components/Inputs/InputDiscountInss.js";
import InputBaseIrfp from "./components/Inputs/InputBaseIrfp.js";
import InputDiscountIrpf from "./components/Inputs/InputDiscountIrpf";

import { calculateSalaryFrom } from "./libs/salary.js";
import InputSalaryNet from "./components/Inputs/InputSalaryNet";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: 0.0001,
      bar1: 0,
      bar2: 0,
      bar3: 0,
    };
  }

  handleChangeSalary = (salary) => {
    let inssBar = calculateSalaryFrom(salary);
    const bar1 = (inssBar.discountINSS * 100) / salary;
    let irpfBar = calculateSalaryFrom(salary);
    const bar2 = (irpfBar.discountIRPF * 100) / salary;
    const bar3 = 100 - bar2 - bar1;
    console.log(bar1 + " " + bar2 + " " + bar3);
    this.setState({
      fullSalary: salary,
      bar1: bar1,
      bar2: bar2,
      bar3: bar3,
    });
  };
  render() {
    const { fullSalary, bar1, bar2, bar3 } = this.state;
    return (
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Cálculo de Salário Líquido
        </h1>
        <InputFullSalary onChangeSalary={this.handleChangeSalary} />
        <div class="col s12">
          <div class="row">
            <div class="input-field col s3">
              <InputBaseInss fullSalary={fullSalary} />
            </div>
            <div class="input-field col s3">
              <InputDiscountInss fullSalary={fullSalary} />
            </div>
            <div class="input-field col s3">
              <InputBaseIrfp fullSalary={fullSalary} />
            </div>
            <div class="input-field col s3">
              <InputDiscountIrpf fullSalary={fullSalary} />
            </div>
            <div class="input-field col s3">
              <InputSalaryNet fullSalary={fullSalary} />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProgressiveBar
            fullSalary={fullSalary}
            value={bar1}
            color=" #e67e22"
          />
          <ProgressiveBar
            fullSalary={fullSalary}
            value={bar2}
            color="#c0392b"
          />
          <ProgressiveBar
            fullSalary={fullSalary}
            value={bar3}
            color=" #16a085"
          />
        </div>
      </div>
    );
  }
}
