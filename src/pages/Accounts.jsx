import React from 'react'
import { Text, Card, Tag, Stat, FormatNumber, Button } from '@chakra-ui/react'
import { getAccounts } from '../api/accountservice'

const Accounts = () => {
    const [accounts, setAccounts] = React.useState([]);
    
    React.useEffect(() => {
        const fetchData = async () => {
            const accountData = await getAccounts();
            setAccounts(accountData)
        }

        fetchData();
    })

  return (
    <>
    <Text fontSize={20} fontWeight={500} mb={5}><i class='bx bxs-bank' ></i>Accounts</Text>
    {accounts.map((acc) => (
        <div className="">
            <Card.Root maxW="sm">
                <Card.Header>
                    <Card.Description className='flex justify-between'>
                       {acc.name == 'Primary Account' ? 'Default' : 'Secondary'}
                        <Button size='xs' variant='plain'><i class='bx bx-edit'></i></Button>
                    </Card.Description>
                    <div className="flex">
                        <Card.Title>{acc.name}</Card.Title>
                        <Tag.Root rounded={15} ml={4} pl={3} pr={3} size="sm" colorPalette={acc.isActive ? 'green' : 'red'}>
                            <Tag.Label>{acc.isActive ? 'Active' : 'Inactive'}</Tag.Label>
                        </Tag.Root>
                    </div>
                </Card.Header>
                <div className='border-b-2'>
                    <Card.Body>
                        Type: {acc.type}<br/>
                        Created On: {acc.createdOn}
                    </Card.Body>              
                </div>
                <Card.Footer>
                    <Stat.Root>
                        <Stat.Label>Balance</Stat.Label>
                        <Stat.ValueText>
                            <FormatNumber value={acc.balance} style="currency" currency="USD" />
                        </Stat.ValueText>
                    </Stat.Root>
                    <Button size="xs">View Transactions</Button>
                </Card.Footer>
            </Card.Root>
        </div>
    ))}
    </>
  )
}

export default Accounts