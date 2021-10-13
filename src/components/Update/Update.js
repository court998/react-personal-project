import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';


function Update() {
  const [id, setID] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');

  const callMockAPI = () => {

    const formData = {
      telephoneNumber
    }

    const endpointURL = `https://6151d1824a5f22001701d45f.mockapi.io/api/v1/project/${id}`;
    axios.put(endpointURL, formData)
      .then(alert('Telephone number updated.'))
      .catch(err => console.log(err));
  }



  

 
  
    

  return (
    <div className="Update">

      <br/>

      <Form>
          <Form.Input
            fluid
            id='driverID'
            label='Driver ID'
            placeholder='Please enter Driver ID you wish to update'
            onChange={e => setID(e.target.value)}
            width={4}
          />
          <Form.Input
          fluid
          id='telephoneNumber'
          label='Telephone Number'
          placeholder='Please enter the updated telephone number'
          onChange={e => setTelephoneNumber(e.target.value)}
      
          width={4}
        />
          <Button
            onClick={callMockAPI}
          >Update</Button>
          

      </Form>

    </div>
  );
}


export default Update;
