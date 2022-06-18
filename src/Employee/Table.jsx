import React from "react";

const Table = (props) => {
  return (
    <div>
      <div className="tableData">
        <div className="tableBtn">
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <table>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Line1</th>
            <th>Line2</th>
            <th>City</th>
            <th>State</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Adam</td>
            <td>Week Street</td>
            <td>23</td>
            <td>Brussels</td>
            <td>Karnataka</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Rohit</td>
            <td>Park Avenue</td>
            <td>2233</td>
            <td>Edinburg</td>
            <td>Scotland</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Johnny</td>
            <td>Week Street</td>
            <td>145</td>
            <td>Bombay</td>
            <td>Maharastra</td>
          </tr>
          <tr>
            <td>4</td>
            <td>David</td>
            <td>Dumbel Door</td>
            <td>84</td>
            <td>MG road</td>
            <td>Karnataka</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Table;
