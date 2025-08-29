import React from 'react'
import { Avatar, VStack, Link, Stack, Text, Button } from '@chakra-ui/react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <VStack p={4} height="100%" gap={5}>
        <div className='sidebar-header'>
            <Text fontSize="md">
                Expense Planner
            </Text>
        </div>
        <div className="sidebar-header2">
            <Button variant='plain' href="#" size="xs" ml={1}>
                    <Avatar.Root colorPalette="teal">
                        <Avatar.Image 
                            src="https://bit.ly/broken-link" 
                            alt="User Avatar" 
                            boxSize="40px" 
                            borderRadius="full" 
                        />
                        <Avatar.Fallback name="John Doe"/>
                    </Avatar.Root>
                    <Text ml={2} fontSize="sm">John Doe</Text>
                </Button>
        </div>
        <nav>
            <Stack spacing={4} w={180}>
                <Button justifyContent="start" pl={8} size='sm' variant='outline' onClick={() => {window.location.href = '/dashboard'}}><i class='bx bxs-dashboard'></i>Dashboard</Button>
                <Button justifyContent="start" pl={8} size='sm' variant='outline' href='#'><i class='bx bx-credit-card'></i>Transactions</Button>
                <Button justifyContent="start" pl={8} size='sm' variant='outline' href='#'><i class='bx bxs-bank' ></i>Accounts</Button>
                <Button justifyContent="start" pl={8} size='sm' variant='outline' onClick={() => {window.location.href = '/calculators'}}><i class='bx bxs-calculator' ></i>Calculators</Button>
                <Button justifyContent="start" pl={8} size='sm' variant='outline' href='#'><i class='bx bx-line-chart' ></i>Analytics</Button>
                <Button justifyContent="start" pl={8} size='sm' variant='outline' href='#'><i class='bx bx-cog' ></i>Settings</Button>
            </Stack>
        </nav>
        
    </VStack>
    </div>
  )
}

export default Sidebar