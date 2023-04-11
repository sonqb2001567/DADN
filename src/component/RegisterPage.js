import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function RegisterPage(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    
    const baseURL = "http://localhost:8080/api/v1/user/save";

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(baseURL, JSON.stringify({fullname, username, userpassword : password}), 
                {
                    headers: {"Content-Type" : "application/Json"},
                    withCredentials: true 
                });
            console.log(JSON.stringify(res?.data));
        } catch (err) {
        
        }
    }
  return (
    <div>
        <div className="register-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="fullname">fullname</label>
                <input value={fullname} onChange={(e) => setFullname(e.target.value)}type="fullname" placeholder="your fullname" id="username" name="fullname" />
                <label htmlFor="username">username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="your username" id="username" name="username" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">submit</button>
            </form>
        </div>
    </div>
  )
}
