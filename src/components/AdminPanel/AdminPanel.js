import React from 'react';
import { Form } from 'semantic-ui-react';
import Read from '../Read/Read';
import Update from '../Update/Update'
import Delete from '../Delete/Delete';


function Admin() {

   

  const admin = [
    { text: 'View driver details', value: 'read' },
    { text: 'Update telephone number', value: 'update' },
    { text: 'Delete driver', value: 'delete' }

  ]

  function displayComponent(component) {
    switch (component) {
      case 'read':
        document.getElementById("read").hidden = false;
        document.getElementById("update").hidden = true;
        document.getElementById("delete").hidden = true;
       
        break;
      case 'update':
        document.getElementById("read").hidden = true;
        document.getElementById("update").hidden = false;
        document.getElementById("delete").hidden = true;
      
        break;
      case 'delete':
        document.getElementById("read").hidden = true;
        document.getElementById("update").hidden = true;
        document.getElementById("delete").hidden = false;
      
        break;
        
     
      default:
        document.getElementById("read").hidden = true;
        document.getElementById("update").hidden = true;
        document.getElementById("delete").hidden = true;
       
      
    }
  }

  return (
    <div className="Admin">

      <div>
      <center>
        <img src= {"https://1000logos.net/wp-content/uploads/2017/08/Allstate-Emblem.jpg"} height="150" width="450px" fluid/>
        <h1>Admin Panel</h1>
        <br></br>
        </center>
        
      </div>

      <hr />

      <div>
        <Form>
          <Form.Field>
            <label>Select an operation</label>
            <select onChange={e => displayComponent(e.target.value)}>
              {admin.map((admin) => (
                <option value={admin.value}>{admin.text}</option>
              ))}
            </select>
          </Form.Field>
        </Form>
      </div>

      

      <div id='read' hidden>
        <Read />
      </div>
      <div id='update' hidden>
        <Update />
      </div>
      <div id='delete' hidden>
        <Delete />
      </div>
      



    </div>
  )
}


export default Admin;
