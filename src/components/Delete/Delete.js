import React, {useEffect, useState} from 'react';
import './Delete.css';
import { Button, Table, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Delete() {
  const [tableData, setTableData] = useState([]);
  const [idForUpdate, setidForUpdate] = useState([]);
  const [tableData2, setTableData2] = useState([]);
  

  const callMockApiWithAxiosGET = () => {
      const endpointURL = `http://localhost:8080/applicants/id?id=${idForUpdate}`;
      axios.get(endpointURL)
        .then(response => setTableData(response.data));
    };

    const onDelete = (id) => {
      const endpointURL = `http://localhost:8080/applicants?id=${id}`;
      axios.delete(endpointURL)
        .then(() => callMockApiWithAxiosGET())
        .then (() => window.location.reload())
        .catch(
          (err) => { console.log(err) }
        );
    }

    //for retrieving id 
  const callMockAPIToGetRecord= () => {
    const endpointURL = `http://localhost:8080/applicants/id?id=${idForUpdate}`;
    axios.get(endpointURL)
      .then(response => setTableData2(response.data));
  };

  function setLocalStorage(data) {
    console.log(data.id);
    localStorage.setItem("id", data.id);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("telephoneNumber", data.telephoneNumber);
  }
  
  useEffect(() => {
    callMockApiWithAxiosGET();
  }, []);

  return (
    <div>
      <Form>
      <Form.Field>
        <label>ID</label>
        <input 
          name="idForUpdate"
          onChange={e => setidForUpdate(e.target.value)}
          placeholder='ID'
          value={idForUpdate} />
      </Form.Field>
      <Form.Button positive
          type='submit'
          onClick={callMockAPIToGetRecord}
        >Fetch</Form.Button>
      </Form>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Prefix</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Telephone Number</Table.HeaderCell>
            <Table.HeaderCell>Address Line One</Table.HeaderCell>
            <Table.HeaderCell>Address Line Two</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Zip Code</Table.HeaderCell>
            <Table.HeaderCell>Back to admin panel</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            
                <Table.Row>
                  <Table.Cell>{tableData2.prefix}</Table.Cell>
                  <Table.Cell>{tableData2.firstName}</Table.Cell>
                  <Table.Cell>{tableData2.lastName}</Table.Cell>
                  <Table.Cell>{tableData2.telephoneNumber}</Table.Cell>
                  <Table.Cell>{tableData2.addressLine1}</Table.Cell>
                  <Table.Cell>{tableData2.addressLine2}</Table.Cell>
                  <Table.Cell>{tableData2.city}</Table.Cell>
                  <Table.Cell>{tableData2.zipcode}</Table.Cell>
                  <Table.Cell>
                    <Link to="/admin">
                      <Button color="green"
                      >Back to admin panel</Button>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                      <Button color="red" onClick={() => onDelete (tableData2.id)}>Delete</Button>
                  </Table.Cell>
                </Table.Row>
              
            
          }
        </Table.Body>
        </Table>
    </div>

  );
}

export default Delete;