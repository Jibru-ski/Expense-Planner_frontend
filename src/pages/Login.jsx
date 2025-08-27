import React from 'react'
import { loginService } from '../api/authservice'
import { Input, Button, InputGroup, Link, Text, Stack } from '@chakra-ui/react'
import { LuUser, LuLock } from "react-icons/lu"

const login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = {
                username,
                password
            };
            const response = await loginService(userData);
            localStorage.setItem('token', response.token);
            window.location.href = '/dashboard';
        } catch (error) {
            console.error("Login failed:", error);
        }
    };
  return (
    <>
    <div className="w-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 border rounded-lg shadow-lg">
        <form onSubmit={handleLogin}>
            <Stack spacing={4} mb={4}>
            <div>
                <InputGroup startElement={<LuUser/>}>
                    <Input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        name="username"
                        placeholder="Username"
                        required 
                    />
                </InputGroup>
            </div>
            <div>
                <InputGroup startElement={<LuLock/>}>
                    <Input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        name="password"
                        placeholder="Password"
                        required 
                    />
                </InputGroup>
            </div>
            <Button variant="surface" type="submit">Login</Button>
            <Text mt={3}>Don't have an account? <Link href='/register' colorPalette="teal">Signup</Link></Text>
            </Stack>
        </form> 
    </div>
      
    </>
  )
}

export default login