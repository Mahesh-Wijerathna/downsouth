import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
// import imageSrc from './image/image5.jpg';
const imageSrc = '/images/image5.jpg';


const Medical = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [owner, setOwner] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOwnerChange = (e) => {
    setOwner(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post('https://automatic-space-system-v6v6pxwv66wrhpvx6-4000.app.github.dev/api/v1/medical-center', {
        name: name,
        email: email,
        location: location,
        phoneNumber: phoneNumber,
        owner: owner,
        description: description,
        password: password,
      })
      .then((response) => {
        console.log('then worked');
        console.log(response);
        window.location.href = '/';
      })
      .catch((error) => {
        if (error.response) {
          console.log('error in response');
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log('error in request');
          console.log(error.request);
          setName(error.request);
        } else {
          console.log('other error');
          console.log('Error', error.message.toJSON());
        }
      });

    setName('');
    setPhoneNumber('');
    setEmail('');
    setLocation('');
    setOwner('');
    setDescription('');
    setPassword('');
  };

  return (
    <div className="Medical">
     <div className="form-control-wrapper"> 
      <form onSubmit={handleSubmit}>
        <label className="form-label-1">
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="form-control"
            placeholder="Enter Name"
          />
        </label>
        <br />
        
        
        <label className="form-label-1">
          Location:
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            className="form-control"
            placeholder="Enter Location"
          />
        </label>
        <br />
        <label className="form-label-1">
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="form-control"
            placeholder="Enter E-mail"
          />
        </label>
        <br />
        <label className="form-label-1">
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="form-control"
            placeholder="Enter Contact Number"
          />
        </label>
        <br />
        <label className="form-label-1">
          Owner:
          <input
            type="text"
            value={owner}
            onChange={handleOwnerChange}
            className="form-control"
            placeholder="Enter Owner's Name"
          />
        </label>
        <br />
        <label className="form-label-1">
          Description:
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="form-control"
            placeholder="Enter Description"
          />
        </label>
        <br />
        <label className="form-label-1">
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
            placeholder="Enter Password"
          />
        </label>
        <br />

        <button type="submit" className="submitbutton">
          Register
        </button>
      </form>

      <div className="image-container">
        <img src={imageSrc} alt="Your Image" className="corner-image" />
      </div>
      </div>

      <div>
      <h2 className='subtext'>Register as a Medical Center</h2>
      <h3 className="subtext1">By registering, you can provide medical services to users</h3>
      </div>

    </div>



  );
};

export default Medical;
