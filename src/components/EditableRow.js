import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
        <td>
            <input 
            type="text" 
            required="required" 
            placeholder='enter a name...' 
            name='fullName'
            value={editFormData.fullName}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
        <input 
            type="text" 
            required="required" 
            placeholder='enter a address...' 
            name='address'
            value={editFormData.address}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
        <input 
            type="text" 
            required="required" 
            placeholder='enter a phone number...' 
            name='phoneNumber'
            value={editFormData.phoneNumber}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <input 
            type="text" 
            required="required" 
            placeholder='enter a email...' 
            name='email'
            value={editFormData.email}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <button type="submit">save</button>
            <button type="button" onClick={handleCancelClick}>cancel</button>
        </td>

    </tr>
  )
}

export default EditableRow
