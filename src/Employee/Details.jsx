import React, { useState } from "react";
import Table from "./Table";
const Details = () => {
  const [data, SetData] = useState([]);
  const inputEvent = () => {};
  const inputLine = () => {};
  const inputCity = () => {};
  const inputState = () => {};

  const inputDetails = () => {
    SetData((allDetails) => {
      return [...allDetails, data];
    });
  };
  return (
    <div className="main-div">
      <label htmlFor="">Employee Name</label>
      <input type="text" placeholder="Enter Your Name" />
      <div className="details">
        <h2>Home Address</h2>
        <label htmlFor="">Line1</label>
        <input
          type="text"
          placeholder="Enter Your Lane/Street"
          onChange={inputEvent}
        />
        <label htmlFor="">Line2</label>
        <input
          type="text"
          placeholder="Enter Your Qr No"
          onChange={inputLine}
          oncC
        />
        <label htmlFor="">City</label>
        <input type="text" placeholder="Enter Your City" onChange={inputCity} />
        <label htmlFor="">State</label>
        <input
          type="text"
          placeholder="Enter Your  State"
          onChange={inputState}
        />
        <br />
        <button className="submitBtn" onClick={inputDetails}>
          Submit
        </button>
      </div>
     <Table  />
    </div>
  );
};

export default Details;
