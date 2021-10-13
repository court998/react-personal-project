import React, { useState } from 'react';
import { Button, Form, Table } from 'semantic-ui-react';
import axios from 'axios';

function Read() {

  const [tableData, setTableData] = useState([]);
  const [id, setID] = useState('');

  const callMockAPI = () => {

    const endpointURL = `https://6151d1824a5f22001701d45f.mockapi.io/api/v1/project/${id}`;
    axios.get(endpointURL)
      .then(response => setTableData(response.data))
      .then(document.getElementById("table").hidden = false)
      .catch(err => console.log(err));
  }

  return (
    <div className="Read">

      <br/>

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
            color='blue'
            onClick={callMockAPI}
          >View Details</Button>
          

      </Form>


      <Table id='table' celled hidden>
        <Table.Header>
          <Table.Row>
            {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
            <Table.HeaderCell>Prefix</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Telephone Number</Table.HeaderCell>
            <Table.HeaderCell>Address Line One</Table.HeaderCell>
            <Table.HeaderCell>Address Line Two</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Zip Code</Table.HeaderCell>
            <Table.HeaderCell>Vehicle Type</Table.HeaderCell>
            <Table.HeaderCell>Engine Size</Table.HeaderCell>
            <Table.HeaderCell>Additional Driver</Table.HeaderCell>
            <Table.HeaderCell>Commercial Purposes</Table.HeaderCell>
            <Table.HeaderCell>Used outside Registered State</Table.HeaderCell>
            <Table.HeaderCell>Current Value</Table.HeaderCell>
            <Table.HeaderCell>Date Vehicle 1st Registered</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
                  {/* <Table.Cell>{tableData.driverID}</Table.Cell> */}
                  <Table.Cell>{tableData.prefix}</Table.Cell>
                  <Table.Cell>{tableData.firstName}</Table.Cell>
                  <Table.Cell>{tableData.lastName}</Table.Cell>
                  <Table.Cell>{tableData.telephoneNumber}</Table.Cell>      
                  <Table.Cell>{tableData.addressLine1}</Table.Cell>
                  <Table.Cell>{tableData.addressLine2}</Table.Cell>
                  <Table.Cell>{tableData.city}</Table.Cell>
                  <Table.Cell>{tableData.zipcode}</Table.Cell>
                  <Table.Cell>{tableData.vehicleType}</Table.Cell>
                  <Table.Cell>{tableData.engineSize}</Table.Cell>
                  <Table.Cell>{tableData.additionalDrivers}</Table.Cell>
                  <Table.Cell>{tableData.commercialPurposes}</Table.Cell>
                  <Table.Cell>{tableData.registeredState}</Table.Cell>
                  <Table.Cell>{tableData.currentValue}</Table.Cell>
                  <Table.Cell>{tableData.vehicleRegistered}</Table.Cell>



          </Table.Row>
        </Table.Body>
      </Table>

    </div>
  );



}

export default Read;
