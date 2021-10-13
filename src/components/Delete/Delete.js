import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

function Delete() {

  const [id, setID] = useState('');

  const callMockAPI = () => {

    const endpointURL = `https://6151d1824a5f22001701d45f.mockapi.io/api/v1/project/${id}`;
    axios.delete(endpointURL)
      .then(alert('Record has been successfully deleted.'))
      .catch(err => console.log(err));
  }

  return (
    <div className="Delete">

      <br />

      <Form>
        <Form.Input
          fluid
          id='driverID'
          label='Driver ID'
          placeholder='Driver ID'
          onChange={e => setID(e.target.value)}
          width={4}
        />
        <Button
          type='submit'
          color='red'
          onClick={callMockAPI}
        >Delete</Button>
      </Form>

    </div>
  );



}

export default Delete;
