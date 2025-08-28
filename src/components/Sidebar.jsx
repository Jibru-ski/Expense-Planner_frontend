import React from 'react'
import { Avatar, HStack, Link, Stack, Text } from '@chakra-ui/react'

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-full w-55 '>
    <HStack p={3} flexDirection={"column"} justifyContent="space-between" alignItems="start" height="100%">
        <div>
            <Text fontSize="xl" fontWeight="bold" mb="8">Expense Planner</Text>
        </div>
        <nav>
            <Stack alignItems="start">
                <Link p={1} href='#'>Dashboard</Link>
                <Link p={1} href='#'>Transactions</Link>
                <Link p={1} href='#'>Accounts</Link>
                <Link p={1} href='#'>Calculators</Link>
                <Link p={1} href='#'>Settings</Link>
            </Stack>
        </nav>
        <div className="flex items-center">
            <Link href="#">
                <Avatar.Root>
                    <Avatar.Image 
                        src="https://bit.ly/broken-link" 
                        alt="User Avatar" 
                        boxSize="40px" 
                        borderRadius="full" 
                    />
                    <Avatar.Fallback name="User"/>
                </Avatar.Root>
                <Text p={1} fontSize="sm">Username</Text>
            </Link>
        </div>
    </HStack>
    </div>
  )
}

export default Sidebar