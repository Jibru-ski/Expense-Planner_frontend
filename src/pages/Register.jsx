import React from 'react'
import { registerService } from '../api/authservice';

const Register = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const userData = {
                username,
                email,
                password
            };
            const response = await registerService(userData);
            localStorage.setItem('token', response.token);
            window.location.href = '/login';
        } catch (error) {
            console.error("Registration failed:", error);
        }
    }

  return (
    <>
    <form onSubmit={handleRegister}>
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
            <label>Email:</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                name="email"
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
        <button type="submit">Register</button>
    </form>
    
    </>
  )
}

export default Register