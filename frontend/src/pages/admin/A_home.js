
import React, { useState } from 'react';
//import { login } from "../../slices/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../slices/userSlice";
//import { useDispatch } from "react-redux";
import axios from "axios";

const M_Home = () => {
    const [name, setName] = useState('');
    
    //const dispatch = useDispatch();
    const user = useSelector(selectUser);
    // take data from userSlice
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitted name:', name);
        console.log('token:', user.token);
        // Handle form submission logic here
        await axios.post('http://localhost:4000/destination/api/v1/destination/', {
            Headers: {
                "x-access-token": user.token,
            },
            name: name,
            token: user.token
        })
        .then((response) => {
            console.log(response);
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
        console.log(user);
        console.log(user.token);
        

        
    };

    return (
        <div>
            <h1>Welcome to the Admin Panel</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter New Destination Name"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};


export default M_Home;