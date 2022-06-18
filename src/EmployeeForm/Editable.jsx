import React from "react";

const Editable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="line"
          placeholder=" Line"
          value={editFormData.line}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="line1"
          placeholder=" Line1"
          value={editFormData.line1}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="city"
          placeholder=" City"
          value={editFormData.city}
          onChange={handleEditFormChange}
        />
      </td>

      <td>
        <input
          type="text"
          name="State"
          placeholder=" State"
          value={editFormData.State}
          onChange={handleEditFormChange}
        />
      </td>
      <button type="submit">Save</button>
      <button type="submit" onClick={handleCancelClick}>
        Cancel
      </button>
    </tr>
  );
};

export default Editable;
