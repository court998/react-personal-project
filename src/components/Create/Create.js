import React, { useState } from 'react';
import './Create.css';
import { useHistory } from 'react-router';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';




 




//Where the form and html is created

function Create() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [prefix, setPrefix] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [additionalDrivers, setAdditionalDrivers] = useState('');
  const [commercialPurposes, setCommercialPurposes] = useState('');
  const [registeredState, setRegisteredState] = useState('');
  const [currentValue, setCurrentValue] =  useState('');
  const [vehicleRegistered, setVehicleRegistered] =  useState('');




  let history = useHistory();

   function callMockApiWithAxiosPOST() {
   


    const formData = {
      firstName,
      lastName,
      prefix, //options
      telephoneNumber,
      addressLine1,
      addressLine2,
      city,
      zipcode,
      vehicleType, //vehicle
      engineSize,  //engine
      additionalDrivers,
      commercialPurposes,
      registeredState,
      currentValue,
      vehicleRegistered

    }


    const endpointURL = "https://6151d1824a5f22001701d45f.mockapi.io/api/v1/project";
    axios.post(endpointURL, formData)
      .then(() => history.push("/admin"))
      .catch(err => console.log(err));
  }

  //for prefix
  const options = [
    { text: 'Mr', value: 'Mr' },
    { text: 'Mrs', value: 'Mrs' },
    { text: 'Miss', value: 'Miss' },
    { text: 'Ms', value: 'Ms' },
    { text: 'Dr', value: 'Dr' },
  ]

  //for vehicle type
  const vehicle = [
    { text: 'Cabriolet', value: 'Cabriolet' },
    { text: 'Coupe', value: 'Coupe' },
    { text: 'Estate', value: 'Estate' },
    { text: 'Hatchback', value: 'Hatchback' },
    { text: 'Other', value: 'Other' },
  ]

  //for engine size
  const engine = [
    { text: '1000', value: '1000' },
    { text: '1600', value: '1600' },
    { text: '2000', value: '2500' },
    { text: '2500', value: '2500' },
    { text: '3000', value: '3000' },
    { text: '3000', value: '3000' },
    { text: 'Other', value: 'Other' },

  ]

 //for additional drivers
 const drivers = [
  { text: '0', value: '0' },
  { text: '1', value: '1' },
  { text: '2', value: '2' },
  { text: '3', value: '3' },
  { text: '4', value: '4' },

 ]

//  function validate () {
//    var valid =true;
//    var errorMessage = "";
//    var regexNum = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
//    var zipcodeRegex= /(^\d{5}$)|(^\d{5}-\d{4}$)/

//    if (!prefix.trim()) {
//      valid = (false);
//      errorMessage = "Prefix is required. \n";
//    }

//    if (valid) {
//      callMockApi();
//      //window.location.href ="/admin";
//    } else {
//      alert("Record not added, please see following fields:\n" + errorMessage);
//      console.log(errorMessage)
//      return false; 
//    }
//  }



return (
    <div>
      <center>
        <img src= {"https://1000logos.net/wp-content/uploads/2017/08/Allstate-Emblem.jpg"} height="150" width="450px" fluid/>
        <h1>Car Insurance Quote</h1>
        <br></br>
        </center>

      <Form>
        <div>
          <Form.Group >
            <Form.Select
              fluid
              label='Prefix'
              options={options}
              placeholder='Prefix'
              onChange={e => setPrefix(e.target.textContent)}
              width={2} />

            <Form.Input fluid label='First name' placeholder='First name' maxLength="30"
              onChange={e => setFirstName(e.target.value)}
              width={5} />
            <Form.Input fluid label='Last name' placeholder='Last name' maxLength="30"
              onChange={e => setLastName(e.target.value)}
              width={5} />
            <Form.Input fluid label='Telephone Number' placeholder='Telephone Number'
              onBlur={e => setTelephoneNumber(e.target.value)}
              width={4} />
          </Form.Group>
        </div>

        <div>
          <Form.Field> <label>Address Line 1</label>
            <input placeholder='Address Line 1'
              onChange={e => setAddressLine1(e.target.value)} /> </Form.Field>
          <Form.Field> <label>Address Line 2</label>
            <input placeholder='Address Line 2'
              onChange={e => setAddressLine2(e.target.value)} /> </Form.Field>
              <br></br>

        </div>

        <div>
          <Form.Group >
          <Form.Input fluid label='City' placeholder='City'
              onChange={e => setCity(e.target.value)}
              width={8} />
          
          <Form.Input fluid label='Zip Code' placeholder='Zip Code' maxLength="30"
              onChange={e => setZipcode(e.target.value)}
              width={8} />      

            
             
          </Form.Group>
        </div>



        <div>
          <Form.Group >
            <Form.Select
              fluid
              label='Vehicle Type'
              options={vehicle}
              placeholder='Vehicle Type'
              onChange={e => setVehicleType(e.target.textContent)}
              width={6} />

            <Form.Select
              fluid
              label='Engine Size'
              options={engine}
              placeholder='Engine Size'
              onChange={e => setEngineSize(e.target.textContent)}
              width={6} />

            <Form.Select
              fluid
              label='Additional Drivers'
              options={drivers}
              placeholder='Number of Additional Drivers, maximum 4'
              onChange={e => setAdditionalDrivers(e.target.textContent)}
              width={6} />   

            

          </Form.Group>
        </div>

        <div>
          <Form.Group>


            {/* radio button one */}
            <label>
              <b> Will the vehicle be used for commercial purposes?</b>
              
            </label>
            <Form.Radio
              label="Yes"
              value="yes"
              checked={commercialPurposes === "yes"}
              onChange={() => setCommercialPurposes("yes")}
            />
            <Form.Radio
              label="No"
              value="no"
              checked={commercialPurposes === "no"}
              onChange={() => setCommercialPurposes("no")}

            />

            {/* radio button two */}
            <label>
             <b> Will the vehicle be used outside the registered state? </b>
             
            </label>
            <Form.Radio
              label="Yes"
              value="yes"
              checked={registeredState === "yes"}
              onChange={() => setRegisteredState("yes")}
            />
            <Form.Radio
              label="No"
              value="no"
              checked={registeredState === "no"}
              onChange={() => setRegisteredState("no")}
            />
            </Form.Group>
        </div>


            <div>
            <Form.Field> <label>What is the current value of the vehicle?</label>
              <input placeholder='Estimated Vehicle Value'
                onChange={e => setCurrentValue(e.target.value)} /> 
            </Form.Field>

            <Form.Field> <label>What is the date of vehicle registration?</label>
              <input type="date" placeholder='Date of Vehicle Registration'
                onChange={e => setVehicleRegistered(e.target.value)} />
                <br></br> 
            </Form.Field>




                </div>
                <center> 
                  <br></br>     
         <Button
          color="blue"
          type='submit'
          
          onClick={callMockApiWithAxiosPOST}
        >Submit</Button>
        </center>
      </Form>
      
    </div>
    
  );
}

export default Create;