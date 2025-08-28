import React from 'react'
import { registerService } from '../api/authservice';
import { Input, Button, Stack, Link, Text } from '@chakra-ui/react'

const Register = () => {
    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const userData = {
                firstname,
                lastname,
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
    <div className="w-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 border rounded-lg shadow-lg">
        <form onSubmit={handleRegister}>
        <Stack spacing={4} mb={4}>
            <div>
                <Text fontSize="3xl" fontWeight="bold" textAlign="center">Create Your Account</Text>
                <Text mb={6} fontSize="md" textAlign="center" color="gray.500">Join us and start your journey today!</Text>
            </div>
            <div className="flex gap-2">
                <div className='w-1/2'>
                    <Input 
                        type="text" 
                        value={firstname} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        name="firstname"
                        placeholder="First Name"
                        required 
                    />
                </div>
                <div className='w-1/2'>
                    <Input 
                        type="text" 
                        value={lastname} 
                        onChange={(e) => setLastName(e.target.value)} 
                        name="lastname"
                        placeholder="Last Name"
                        required 
                    />
                </div>
            </div>
            
            <div>
                <Input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    name="username"
                    placeholder="Username"
                    required 
                />
            </div>
            <div>
                <Input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    name="email"
                    placeholder="Email"
                    required 
                />
            </div>
            <div>
                <Input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    name="password"
                    placeholder="Password"
                    required 
                />
            </div>
            <div>
                <Input 
                    type="password" 
                    value={confirm} 
                    onChange={(e) => setConfirm(e.target.value)}
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    required 
                />
            </div>
            <Button variant="surface" type="submit">Register</Button>
            <Text className='text-center' mt={3}>Already have an account? <Link href='/login' colorPalette="teal">Login</Link></Text>
        </Stack>
        </form>
    </div>
    </>
  )
}

export default Register