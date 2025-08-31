import React from 'react'
import { Text, Card, Tag, Stat, FormatNumber, Button } from '@chakra-ui/react'

const Accounts = () => {
    

  return (
    <>
    <Text fontSize={20} fontWeight={500} mb={5}><i class='bx bxs-bank' ></i>Accounts</Text>
    <div className="">
        <Card.Root maxW="sm">
            <Card.Header>
                <Card.Description className='flex justify-between'>
                    Default
                    <Button size='xs' variant='plain'><i class='bx bx-edit'></i></Button>
                </Card.Description>
                <div className="flex">
                    <Card.Title>Primary Account</Card.Title>
                    <Tag.Root rounded={15} ml={4} pl={3} pr={3} size="sm" colorPalette="green">
                        <Tag.Label>Active</Tag.Label>
                    </Tag.Root>
                </div>
            </Card.Header>
            <div className='border-b-2'>
                <Card.Body>
                    Type: Bank<br/>
                    Created On: 12/03/25
                </Card.Body>              
            </div>
            <Card.Footer>
                <Stat.Root>
                    <Stat.Label>Balance</Stat.Label>
                    <Stat.ValueText>
                        <FormatNumber value={935.4} style="currency" currency="USD" />
                    </Stat.ValueText>
                </Stat.Root>
                <Button size="xs">View Transactions</Button>
            </Card.Footer>
        </Card.Root>
    </div>
    </>
  )
}

export default Accounts