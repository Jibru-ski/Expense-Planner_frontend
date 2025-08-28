import React from 'react'
import { HStack, Icon, Stat, Text } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <>
      <h1 className='welcome-message'>Hello JDoe01👋</h1>
      <Text fontSize={14} mb={2}>Payment Updates</Text>
      <HStack gap={5}>
        <div className="stat-card">
          <Stat.Root>
            <div className="flex justify-between">
              <Stat.Label>Total Balance</Stat.Label>
              <Icon color="fg.muted">
                <i class='bx bx-money-withdraw' ></i>
              </Icon>
            </div>
            <Stat.ValueText>$12,345.67</Stat.ValueText>
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
            <Stat.ValueText>$7,345.01</Stat.ValueText>
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
            <Stat.ValueText>$2,345.37</Stat.ValueText>
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
    </>
  )
}

export default Dashboard