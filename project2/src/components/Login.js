import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (


        
        <div>
            <div  className='login'> 
                        <form onSubmit={handleSubmit}>
                <label className="form-label-1">
                <FontAwesomeIcon icon={faUser} />
                    Username
                    <input type="text" value={username} onChange={handleUsernameChange} className="form-control"/>
                </label>
                <br />
                <label className="form-label-1">
                <FontAwesomeIcon icon={faLock} />
                    Password
                    <input type="password" value={password} onChange={handlePasswordChange} className="form-control"/>
                </label>
                <br />
                <button type="submit" className='submitbutton'>Login</button>
            </form>
            </div>
        
        <h2 className='login-text'>Login</h2>
        <br/>
        <h1 className='login-text1'>Welcome Back</h1>

        </div>
    );
};

export default Login;
