import React from 'react'

const ReadOnly = ({contact, handleEditclick, handleDeleteClick}) => {
  return (
    <tr>
    <td>{contact.name}</td>
    <td>{contact.line}</td>
    <td>{contact.line1}</td>
    <td>{contact.city}</td>
    <td>{contact.State}</td>
    <td><button type='button' onClick={(e) => handleEditclick(e, contact)}>Edit</button>
    <button type="button" onClick={handleDeleteClick}>Delete</button>
    
    </td>
  </tr>


     )
}

export default ReadOnly;