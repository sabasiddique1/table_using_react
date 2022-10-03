import React, { useState, Fragment } from 'react';
import data from "./mockdata.json";
import {nanoid} from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';
import './App.css';


const App = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setaddFormData] = useState({
    fullName:'',
    address:'',
    phoneNumber:'',
    email:'',
  });

  const [editFormData, setEditFormData] = useState({
    fullName:'',
    address:'',
    phoneNumber:'',
    email:'',
  })

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => { event.preventDefault();
  const fieldName = event.target.getAttribute('name');
  const fieldValue = event.target.value;

  const newFormData ={ ...addFormData};
  newFormData[fieldName] = fieldValue;

  setaddFormData(newFormData);
};

const handleEditFormChange = (event) => {
  event.preventDefault();
  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;

  const newFormData = { ...editFormData};
  newFormData[fieldName] = fieldValue;

  setEditFormData(newFormData);

}

const handleAddFormSubmit = (event) => {
  event.preventDefault();

  const newContact = {
    id: nanoid(),
    fullName: addFormData.fullName,
    address: addFormData.address,
    phoneNumber:addFormData.phoneNumber,
    email:addFormData.email,
  };

  const newContacts = [...contacts, newContact];
  setContacts(newContacts);
};
const handleEditFormSubmit =(event)=> {
  event.preventDefault();

 const editedContact = {
  id: editContactId,
  fullName: editFormData.fullName,
  address: editFormData.address,
  phoneNumber: editFormData.phoneNumber,
  email :editFormData.email,
 };

 const newContacts = [...contacts];

 const index = contacts.findIndex((contact)=> contact.id === editContactId);

 newContacts[index] = editedContact;
 setContacts(newContacts);
 setEditContactId(null);
};

  const handleEditClick = (event, contact)=> {
    event.preventDefault();
    setEditContactId(contact.id);

  
    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    }
    setEditFormData(formValues);
  };



    const handleCancelClick = () => {
      setEditContactId(null);
    }

    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];
      const index = contacts.findIndex((contact)=> contact.id === contactId);
      newContacts.spalice(index, 1);
      setContacts(newContacts);
    }

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment>
              {editContactId === contact.id ? (
              <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}
              handleCancelClick ={handleCancelClick}/>
            ): (
            <ReadOnlyRow contact={contact} handleEditClick={handleEditClick}
            handleDeleteClick = {handleDeleteClick}/> 
            )}
            </Fragment>
            
          ))}
          
        </tbody>
        </table>
      </form>


      <h2>Add a contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
          type="text" 
          name="fullName" 
          required="required" 
          placeholder="enter a name..."
          onChange={handleAddFormChange}/>
          <input 
          type="text" 
          name="address" 
          required="required" 
          placeholder="enter a name..."
          onChange={handleAddFormChange}/>
          <input 
          type="text" 
          name="phoneNumber" 
          required="required" 
          placeholder="enter a name..."
          onChange={handleAddFormChange}/>
          <input 
          type="text" 
          name="email" 
          required="required" 
          placeholder="enter a name..."
          onChange={handleAddFormChange}/>
          <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
