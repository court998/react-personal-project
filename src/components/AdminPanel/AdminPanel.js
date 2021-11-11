import React, { useState } from 'react';
import './AdminPanel.css';
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Read from '../Read/Read';

function AdminPanel() {
  const [selectedOperation, setSelectedOperation] = useState('');
  const friendOptions = [
    {
      key: 'Get a Record',
      text: 'Get a Record',
      value: 'Read',
    },
    {
      key: 'Update a Record',
      text: 'Update a Record',
      value: 'Update',
    },
    {
      key: 'Delete a Record',
      text: 'Delete a Record',
      value: 'Delete',
    },
  ]
  const navigateToPage = () => {
    console.log(selectedOperation);
    if (selectedOperation === "Get a Record") {
      window.location.href="/get";
    }
    if (selectedOperation === "Update a Record") {
      window.location.href="/update";
    }

    if (selectedOperation === "Delete a Record") {
      window.location.href="/delete";
    }
  }
  
  

  return (

    <div>
      <center>
        <img src= {"https://1000logos.net/wp-content/uploads/2017/08/Allstate-Emblem.jpg"} height="150" width="450px" fluid/>
        <h1>Admin Panel</h1>
        <br></br>
        </center>
        
      <h3> Welcome to the Admin Panel </h3>
      <p>Please choose an operation from the dropdown below:</p>
      <Dropdown
        placeholder='Please Select An Operation'
        onChange={e => setSelectedOperation(e.target.innerText)}
        fluid
        selection
        options={friendOptions}
      /> 
      {/* <Link to={linkURL}> */}
        <Button positive type='submit' onClick={navigateToPage}>Next</Button>
      {/* </Link> */}
    </div>

  );
}
export default AdminPanel;