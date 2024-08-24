import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Dummy authentication
        if (email === 'anand7854@gmail.com' && password === 'anand7854') {
            navigate('/onebox');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <input
                type="email"
                placeholder="anand7854@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="anand7854"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
