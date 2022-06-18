import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Details from "./Employee/Details";
import Employee from "./EmployeeForm/Employee";
import AnnualBudget from "./BudgetAPI/AnnualBudget";
function App() {
  return (
    <>
      <Employee />
      {/* <AnnualBudget /> */}
    </>
  );
}

export default App;
