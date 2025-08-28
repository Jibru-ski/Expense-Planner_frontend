import React from 'react'
import { Avatar, VStack, Link, Stack, Text, Button } from '@chakra-ui/react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <VStack p={3} height="100%">
        <div>
            <Text fontSize="xl" fontWeight="bold" mb="8">Expense Planner</Text>
            <div className="">
                <Button variant='plain' href="#" size='lg'>
                    <Avatar.Root>
                        <Avatar.Image 
                            src="https://bit.ly/broken-link" 
                            alt="User Avatar" 
                            boxSize="40px" 
                            borderRadius="full" 
                        />
                        <Avatar.Fallback name="User"/>
                    </Avatar.Root>
                    <Text fontSize="sm">Username</Text>
                </Button>
            </div>
        </div>
        <nav>
            <Stack spacing={4} w={180}>
                <Button size='sm' variant='outline' href='#'><i class='bx bxs-dashboard'></i>Dashboard</Button>
                <Button size='sm' variant='outline' href='#'><i class='bx bx-money-withdraw' ></i>Transactions</Button>
                <Button size='sm' variant='outline' href='#'><i class='bx bxs-bank' ></i>Accounts</Button>
                <Button size='sm' variant='outline' href='#'><i class='bx bxs-calculator' ></i>Calculators</Button>
                <Button size='sm' variant='outline' href='#'><i class='bx bx-line-chart' ></i>Analytics</Button>
                <Button size='sm' variant='outline' href='#'><i class='bx bx-cog' ></i>Settings</Button>
            </Stack>
        </nav>
        
    </VStack>
    </div>
  )
}

export default Sidebar