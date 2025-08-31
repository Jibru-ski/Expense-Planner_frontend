import React from 'react'
import { HStack, VStack, Icon, Stat, Text, Button, EmptyState, ButtonGroup } from '@chakra-ui/react'
import { HiColorSwatch } from "react-icons/hi"
import { getAccounts } from '../api/accountservice';

const Dashboard = () => {
  const [accounts, setAccounts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const accountData = await getAccounts();
      setAccounts(accountData);
    }

    fetchData();

  });

  return (
    <>
      <Text fontSize={20} fontWeight={500} mb={5}><i class='bx bxs-dashboard'></i>Dashboard</Text>
      {accounts.map((acc) => (
          <div>
        <Text fontSize={14} mb={2}>{acc.name}</Text>
        <HStack gap={5} mb={10}>
        <div className="stat-card">
          <Stat.Root>
            <div className="flex justify-between">
              <Stat.Label>Total Balance</Stat.Label>
              <Icon color="fg.muted">
                <i class='bx bx-money-withdraw' ></i>
              </Icon>
            </div>
            <Stat.ValueText>${acc.balance}</Stat.ValueText>
          </Stat.Root>
        </div>
        <div className="stat-card">
          <Stat.Root>
            <div className="flex justify-between">
              <Stat.Label>Income</Stat.Label>
              <Icon color="fg.muted">
                <i class='bx bx-right-top-arrow-circle'></i>
              </Icon>
            </div>
            <Stat.ValueText>${acc.totalIncome}</Stat.ValueText>
          </Stat.Root>
        </div>
        <div className="stat-card">
          <Stat.Root>
            <div className="flex justify-between">
              <Stat.Label>Expense</Stat.Label>
              <Icon color="fg.muted">
                <i class='bx bx-right-down-arrow-circle'></i>
              </Icon>
            </div>
            <Stat.ValueText>${acc.totalExpense}</Stat.ValueText>
          </Stat.Root>
        </div>
        <div className="stat-card">
          <Stat.Root>
            <div className="flex justify-between">
              <Stat.Label>Savings</Stat.Label>
              <Icon color="fg.muted">
                <i class='bx bx-wallet'></i>
              </Icon>
            </div>
            <Stat.ValueText>$0.00</Stat.ValueText>
          </Stat.Root>
        </div>
      </HStack>
      </div>
      ))}
      
      <div className="w-[40em]">
        <div className="flex justify-between items-center">
          <Text fontSize={14} mb={2}>Latest Transactions</Text>
          <Button variant='subtle' size='xs' href='#'>View All</Button>
        </div>
        <div className="transaction-board">
          <EmptyState.Root>
            <EmptyState.Content>
              <EmptyState.Indicator>
                <HiColorSwatch />
              </EmptyState.Indicator>
              <VStack textAlign="center">
                <EmptyState.Title>Start making Transactions</EmptyState.Title>
                <EmptyState.Description>
                  Your statement will be ready once you complete a transaction
                </EmptyState.Description>
              </VStack>
              <ButtonGroup>
                <Button>Add Transaction</Button>
                <Button variant="outline">Learn How</Button>
              </ButtonGroup>
            </EmptyState.Content>
          </EmptyState.Root>
        </div>
      </div>
    </>
  )
}

export default Dashboard