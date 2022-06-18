import React, { useState, Fragment } from "react";
import data from "./mock-data.json";
// import "./Employee.css";
import { nanoid } from "nanoid";
import ReadOnly from "./ReadOnly";
import Editable from "./Editable";
const Employee = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    line: "",
    line1: "",
    city: "",
    State: "",
  });
  const [editFormData, setEditFormData] = useState({
    name: "",
    line: "",
    line1: "",
    city: "",
    State: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
    console.log("jlkdf", addFormData);
  };
  const handleEditFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    // const fieldName = e.target.getAttribute("name")
    // const fieldValue = e.target.value;
    const newFormData = { ...addFormData };
    setAddFormData(newFormData);
    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      line: addFormData.line,
      line1: addFormData.line1,
      city: addFormData.city,
      State: addFormData.State,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      line: editFormData.line,
      line1: editFormData.line1,
      city: editFormData.city,
      State: editFormData.State,
    };
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };
  const handleEditclick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      line: contact.line,
      line1: contact.line1,
      city: contact.city,
      State: contact.State,
    };
    setEditFormData(formValues);
  };
  const handleCancelclick = () => {
    setEditContactId(null);
  };
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };
  return (
    <div className="app-container">
      <h2>Employee's Form</h2>
      <form onSubmit={handleAddFormSubmit} className="formDetails">
        <label>Employee Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          autoComplete="off"
          onChange={handleAddFormChange}
        />
        <label>Employee line</label>
        <input
          type="text"
          name="line"
          placeholder=" Line"
          autoComplete="off"
          onChange={handleAddFormChange}
        />
        <label>Employee line1</label>

        <input
          type="text"
          name="line1"
          placeholder=" Line1"
          autoComplete="off"
          onChange={handleAddFormChange}
        />
        <label>Employee City</label>

        <input
          type="text"
          name="city"
          placeholder=" City"
          autoComplete="off"
          onChange={handleAddFormChange}
        />
        <label>Employee State</label>

        <input
          type="text"
          name="State"
          placeholder=" State"
          autoComplete="off"
          onChange={handleAddFormChange}
        />
        <br />
        <button className="btn" type="submit">
          Add
        </button>
      </form>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Line</th>
              <th>Line1</th>
              <th>City</th>
              <th>State</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <Editable
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelclick={handleCancelclick}
                  />
                ) : (
                  <ReadOnly
                    contact={contact}
                    key={index}
                    handleEditclick={handleEditclick}
                    handleDeleteClick={ () =>handleDeleteClick(contact.id)}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Employee;
