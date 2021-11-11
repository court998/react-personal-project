import React, { useState } from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';
import './Create.css';
import { useHistory } from 'react-router';


function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [prefix, setPrefix] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [vehicleType, setvehicleType] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [additionalDrivers, setAdditionalDrivers] = useState('');
  const [commercialPurposes, setCommercialPurposes] = useState('');
  const [registeredState, setRegisteredState] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [vehicleRegistered, setVehicleRegistered] = useState(null);

  function validate() {
    var valid = true;
    var errorMessage = "";
    var regexNum = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
    var zipcodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;

    if (!prefix.trim()) {
      valid = (false);
      errorMessage = "Prefix is a required field.\n";
    }

    if (!firstName.trim()) {
      valid = (false);
      errorMessage += "First Name is Required.\n";
    }

    if (!lastName.trim()) {
      valid = (false);
      errorMessage += "Last Name is Required.\n";
    }
    
    if (!telephoneNumber.match(regexNum) || telephoneNumber.length > 11) {
      valid = (false);
      errorMessage += "Phone Number is Required and Must Be Valid.\n";
    }

    if (!addressLine1.trim()) {
      valid = (false);
      errorMessage += "Address Line One is Required.\n";
    }

    if (!addressLine2.trim()) {
      valid = (false);
      errorMessage += "Address Line Two is Required.\n";
    }

    if (!city.trim()) {
      valid = (false);
      errorMessage += "City is Required.\n";
    }

    if(!zipcode.match(zipcodeRegex)){
      valid = (false);
      errorMessage += "Zip Code is Required and must be presented in the format: 12345-6789\n";
    }

    if (!vehicleType.trim()) {
      valid = (false);
      errorMessage += "Vehicle Type is Required.\n";
    }

    if (!engineSize.trim()) {
      valid = (false);
      errorMessage += "Engine Size is Required.\n";
    }

    if (!additionalDrivers.trim()) {
      valid = (false);
      errorMessage += "Additional Drivers is Required.\n";
    }

    if (!commercialPurposes.trim()) {
      valid = (false);
      errorMessage += "Commercial Purpose is Required.\n";
    }

    if (!registeredState.trim()) {
      valid = (false);
      errorMessage += "Used Outside of State is Required.\n";
    }

    if (Date.parse(vehicleRegistered) >= Date.now() || !vehicleRegistered) {
      valid = (false);
      errorMessage += "Date is Required and Cannot be in the Future.\n";
    }//Date.parse(regDate)

    if(!currentValue.trim()){
      valid = (false);
      errorMessage += "Current Value is Required.";
    } else if(parseInt(currentValue) < 0 || parseInt(currentValue) > 50000){
      valid = (false);
      errorMessage += "Current Value must be between $0 and $50,000.\n";
    }

    if (valid) {
      callMockAPI();
      window.location.href = "/read";
      alert("Record Added");
    } else {
      alert("Record Not Added - Please Examine the Following Fields:\n\n" + errorMessage);
      console.log(errorMessage);
      return false;
    }

  }

  let history = useHistory();
  const callMockAPI = () => {
    console.log(prefix + " " + firstName + " " + lastName + " " + telephoneNumber + "\n" + addressLine1 + " " + addressLine2 + " " + city + " " + zipcode + "\n" +
      vehicleType + " " + engineSize + " " + additionalDrivers + " " + commercialPurposes + " " + registeredState + " " + currentValue + " " + vehicleRegistered);
    const formData = {
      prefix,
      firstName,
      lastName,
      telephoneNumber,
      addressLine1,
      addressLine2,
      city,
      zipcode,
      vehicleType,
      engineSize,
      additionalDrivers,
      commercialPurposes,
      registeredState,
      currentValue,
      vehicleRegistered
    }
    const endpointURL = "http://localhost:8080/applicants";
    axios.post(endpointURL, formData)
      .then(() => history.push("/read"))
      .catch(err => console.log(err));
  }

  const prefixOptions = [
    { text: 'Mr', value: 'Mr' },
    { text: 'Miss', value: 'Miss' },
    { text: 'Mrs', value: 'Mrs' },
    { text: 'Ms', value: 'Ms' },
    { text: 'Dr', value: 'Dr' },
  ]

  const vehicleTypeOptions = [
    { text: 'Cabriolet', value: 'Cabriolet' },
    { text: 'Coupe', value: 'Coupe' },
    { text: 'Estate', value: 'Estate' },
    { text: 'Hatchback', value: 'Hatchback' },
    { text: 'Other', value: 'Other' },
  ]

  const engineSizeOptions = [
    { text: '1000', value: '1000' },
    { text: '1600', value: '1600' },
    { text: '2000', value: '2000' },
    { text: '2500', value: '2500' },
    { text: '3000', value: '3000' },
    { text: 'Other', value: 'Other' },
  ]

  const additionalDriversOptions = [
    { text: '0', value: '0' },
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
  ]

  return (
    
    <div>
      <Form size={"medium"}>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'/>
    <Grid.Column style={{ maxWidth: 450 }}></Grid.Column>
    <Segment stacked>
    <center>
      <img src={"https://1000logos.net/wp-content/uploads/2017/08/Allstate-Emblem.jpg"} height="150" width="450px" fluid />
        <h1>Vehicle Insurance Application</h1>
        <h3>Please fill out the information below accurately</h3>
        <br></br>
      </center>
        <Form.Group>
          <Form.Select width={2} fluid label='Prefix' options={prefixOptions} placeholder='Prefix' onChange={e => setPrefix(e.target.textContent)} />
          <Form.Input width={6} fluid label='First Name' placeholder='First Name' maxLength='20' onChange={e => setFirstName(e.target.value)} />
          <Form.Input width={6} fluid label='Last Name' placeholder='Last Name' maxLength='20' onChange={e => setLastName(e.target.value)} />
          <Form.Input width={4} fluid label='Phone Number' placeholder='Phone Number' maxLength='11' onChange={e => setTelephoneNumber(e.target.value)} />
        </Form.Group>

       <Form.Group>
       <Form.Input width={8} fluid label='Address Line 1' placeholder='Address Line 1' maxLength='40' onChange={e => setAddressLine1(e.target.value)} />
          <Form.Input width={8} fluid label='Address Line 2' placeholder='Address Line 2' maxLength='40' onChange={e => setAddressLine2(e.target.value)} />
      </Form.Group>

        <Form.Group>
          <Form.Field width={8}> <label>City</label> <input placeholder='City' onChange={e => setCity(e.target.value)} /> </Form.Field>
          <Form.Field width={8}> <label>Zip Code</label> <input placeholder='Zip Code' onChange={e => setZipcode(e.target.value)} /> </Form.Field>
        </Form.Group>

        <Form.Group>
          <Form.Select width={6} fluid label='Select vehicle type' options={vehicleTypeOptions} placeholder='Vehicle Type' onChange={e => setvehicleType(e.target.textContent)} />
          <Form.Select width={6} fluid label='Select engine size (CC)' options={engineSizeOptions} placeholder='Engine Size' onChange={e => setEngineSize(e.target.textContent)} />
          <Form.Select width={6} fluid label='Select the amount of additional drivers, maximum 4' options={additionalDriversOptions} placeholder='Additional Drivers'
            onChange={e => setAdditionalDrivers(e.target.textContent)} />
        </Form.Group>

        <Form.Group inline>
          <label>
            Will the vehicle be used outside the registered state?
          </label>
          <Form.Radio
            label="Yes"
            value="Yes"
            checked={registeredState === "Yes"}
            onChange={() => setRegisteredState("Yes")}
          />
          <Form.Radio
            label="No"
            value="No"
            checked={registeredState === "No"}
            onChange={() => setRegisteredState("No")}
          />
        </Form.Group>

        <Form.Group inline>
          <label>
            Will the vehicle be used outside for commericial purposes?
          </label>
          <Form.Radio
            label="Yes"
            value="Yes"
            checked={commercialPurposes === "Yes"}
            onChange={() => setCommercialPurposes("Yes")}
          />
          <Form.Radio
            label="No"
            value="No"
            checked={commercialPurposes === "No"}
            onChange={() => setCommercialPurposes("No")}
          />
        </Form.Group>

        <Form.Field>
          <label>Date vehicle 1st registered</label>
          <input type="date"
            placeholder="Date registered"
            onChange={(e) => setVehicleRegistered(e.target.value)}
          />
        </Form.Field>

        <Form.Field> <label>Current Value of car in U.S Dollars</label> <input placeholder='Market Value?' onChange={e => setCurrentValue(e.target.value)} /> </Form.Field>

        <center>
          <Form.Button primary
            //type='submit'
            color='teal'
            fluid size='large'
            onClick={validate}
          >Submit</Form.Button>
        </center>
        </Segment>
      </Form>
    </div>
  );
}
export default Create;