import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const baseURL = "http://localhost:8080/api/v1/user/login";

    const navigateToHome = () => {
        navigate('/home');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        try {
            const res = await axios.post(baseURL, JSON.stringify({username, userpassword: password}), 
                {
                    headers: {"Content-Type" : "application/Json"},
                    withCredentials: true,

                });
            console.log(JSON.stringify(res?.data.status));
            if (res?.data.status) {
                navigateToHome();
            }
        } catch (err) {
        
        }
    }

    return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="your username" id="username" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginPage;