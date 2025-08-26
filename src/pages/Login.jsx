import React from 'react'
import { login } from '../api/authservice'

const login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const username = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await login({ username, password });
            localStorage.setItem('token', response.token);
            window.location.href = '/dashboard';
        } catch (error) {
            console.error("Login failed:", error);
        }
    };
  return (
    <>
    <form onSubmit={handleLogin}>
        <div>
            <label>Username:</label>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                name="username"
                required 
            />
        </div>
        <div>
            <label>Password:</label>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                name="password"
                required 
            />
        </div>
        <button type="submit">Login</button>
    </form>    
    </>
  )
}

export default login