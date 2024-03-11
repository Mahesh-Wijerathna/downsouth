import React, { useState } from 'react';
import axios from "axios";
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const imageSrc = '/images/image5.jpg';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://example.com/api/register", {
                name,
                email,
                country,
                phoneNumber,
                username,
                password
            });
            console.log(response.data);
            // Redirect or show success message
        } catch (error) {
            console.error('Error registering user:', error);
            // Handle error: display error message or redirect to error page
        }
        // Clear form fields
        setName('');
        setEmail('');
        setCountry('');
        setPhoneNumber('');
        setUsername('');
        setPassword('');
    };

    const handleGoogleSignUp = () => {
        // Handle Google sign-up logic
    };

    return (
        <div className="Reg">
            <form onSubmit={handleSubmit}>
                <div className="form-control-wrapper">
                <label className="form-label-1">
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} className="form-control"
                placeholder="Enter Name"/>
                </label>
                <br />
                <label className="form-label-1">
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} className="form-control"
                placeholder="Enter E-mail"/>
                </label>
                <br />
                <label className="form-label-1">
                    Country:
                    <input type="text" value={country} onChange={handleCountryChange} className="form-control"
                placeholder="Enter Country"/>
                </label>
                <br />
                <label className="form-label-1">
                    Phone Number:
                    <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} className="form-control"
                placeholder="Enter Contact Number"/>
                </label>
                <br />
                
                <label className="form-label-1">
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} className="form-control"
                placeholder="Enter Password"/>
                </label>
                <br />
                    
                </div>
                <button type="submit" className="submitbutton">Register</button>
            </form>

            <div className="image-container">
                <img src={imageSrc} alt="Your Image" className="corner-image" />
            </div>

            
                <p className='or'> _____________________or _____________________</p>
                <div className="google-icon-container">
  <button className="google-button" onClick={handleGoogleSignUp}>
    <FontAwesomeIcon icon={faGoogle} className="google-icon" />
    Continue with Google
  </button>
</div>

           

            <h2 className="subtext">Register as a Tourist</h2>
            <h3 className="subtext1">By registering you will be able to avail our services</h3>
        </div>
    );
};

export default Register;
