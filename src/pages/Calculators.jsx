import React from 'react'
import { Card, Stack, Field, Button, Input, InputGroup, NativeSelect, Stat, Text, HStack, VStack } from '@chakra-ui/react'

const Calculators = () => {
  const [activeCalculator, setActiveCalculator] = React.useState('simple-interest');

  const [simpleInterest, setSimpleInterest] = React.useState ({
    principal: '',
    rate: '',
    time: '',
    result: 0
  })

  const [compoundInterest, setCompoundInterest] = React.useState ({
    principal: '',
    rate: '',
    time: '',
    compoundFrequency: '12',
    result: 0,
    totalInterest: 0
  })

  const [loanCalculator, setLoanCalculator] = React.useState({
    principal: '',
    rate: '',
    term: '',
    monthlyPayment: 0,
    totalInterest: 0,
    totalAmount: 0
  })

  const [investmentCalculator, setInvestmentCalculator] = React.useState({
    initialAmount: '',
    monthlyContribution: '',
    expectedReturn: '',
    years: '',
    futureValue: 0,
    totalContributions: 0,
    totalEarnings: 0
  })

  const calculateSimpleInterest = () => {
    const p = Number.parseFloat(simpleInterest.principal);
    const r = Number.parseFloat(simpleInterest.rate);
    const t = Number.parseFloat(simpleInterest.time);

    if (p && r && t) {
      const interest = p * r * t;
      setSimpleInterest(prev => ({...prev, result: interest}));
    }
  }

  const calculateCompoundInterest = () => {
    const p = Number.parseFloat(compoundInterest.principal)
    const r = Number.parseFloat(compoundInterest.rate)
    const t = Number.parseFloat(compoundInterest.time)
    const n = Number.parseFloat(compoundInterest.compoundFrequency)

    
    if(p && r && t && n){
      const amount = p * (1 + r / n) ** (n * t);
      const interest = amount - p;
      setCompoundInterest(prev => ({
        ...prev, result: amount, totalInterest: interest
      }))
    }
  }

  const calculateLoan = () => {
    const p = Number.parseFloat(loanCalculator.principal)
    const r = Number.parseFloat(loanCalculator.rate)
    const n = Number.parseFloat(loanCalculator.term)

    if(p && r && n){
      const monthlyPayment = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
      const totalAmount = monthlyPayment * n;
      const totalInterest = totalAmount - p;

      setLoanCalculator(prev => ({
        ...prev, monthlyPayment, totalInterest, totalAmount
      }))
    }
  }

  const calculateInvestment = () => {
    const initial = Number.parseFloat(investmentCalculator.initialAmount);
    const monthly = Number.parseFloat(investmentCalculator.monthlyContribution);
    const rate = Number.parseFloat(investmentCalculator.expectedReturn) / 100 / 12;
    const months = Number.parseFloat(investmentCalculator.expectedReturn) * 12;

    if(initial >= 0 && monthly >= 0 && rate && months){
      const futureValueInitial = initial * (1 / rate) ** months;
      const futureValueMonthly = monthly * (((1 + rate) ** months - 1) / rate);
      const futureValue = futureValueInitial + futureValueMonthly;
      const totalContributions = initial + (monthly * months);
      const totalEarnings = futureValue - totalContributions;

      setInvestmentCalculator(prev => ({
        ...prev, futureValue, totalContributions, totalEarnings
      }))
    }
  }

  const calculatorTypes = [
    {id: 'simple-interest', name: 'Simple Interest'},
    {id: 'compound-interest', name: 'Compound Interest'},
    {id: 'loan', name: 'Loan'},
    {id: 'investment', name: 'Investment Growth'}
  ]

  const DomainSelect = () => (
          <NativeSelect.Root size="xs" variant="plain" width="auto" me="-1">
              <NativeSelect.Field defaultValue="yrs" fontSize="sm">
                  <option value="yrs">yrs</option>
                  <option value="mths">mths</option>
              </NativeSelect.Field>
              <NativeSelect.Indicator />
          </NativeSelect.Root>
      )

  return (
    <>
    <Text fontSize={20} fontWeight={500} mb={10}><i class='bx bxs-calculator' ></i>Calculators</Text>
    <div>
      <HStack gap={4} mb={8}>
        {calculatorTypes.map((calc) => (
          <Button
              key={calc.id}
              variant={activeCalculator === calc.id ? 'solid' : 'outline'}
              onClick={() => setActiveCalculator(calc.id)}>
                {calc.name}
          </Button>
        ))}
      </HStack>
      <div>
        {activeCalculator == 'simple-interest' && (
          <HStack gap={8} alignItems='baseline'>
            <Card.Root w={500}>
              <Card.Header>
                  <Card.Title>Simple Interest Calculator</Card.Title>
              </Card.Header>
              <Card.Body>
                  <Stack gap="4" w="full">
                      <Field.Root>
                          <InputGroup endElement="USD">
                              <Input 
                                  type='number'
                                  placeholder='0.00'
                                  value={simpleInterest.principal}
                                  onChange={(e) => setSimpleInterest(prev => ({...prev, principal: e.target.value}))}
                              />
                          </InputGroup>
                      </Field.Root>
                      <Field.Root>
                          <InputGroup endElement="%">
                              <Input 
                                  type='number'
                                  placeholder='0.0'
                                  value={simpleInterest.rate}
                                  onChange={(e) => setSimpleInterest(prev => ({...prev, rate: e.target.value}))}
                              />
                          </InputGroup>
                      </Field.Root>
                      <Field.Root>
                          <InputGroup endElement={<DomainSelect />}>
                              <Input 
                                  type='number'
                                  placeholder='0.0'
                                  value={simpleInterest.time}
                                  onChange={(e) => setSimpleInterest(prev => ({...prev, time: e.target.value}))}
                              />
                          </InputGroup>
                      </Field.Root>
                  </Stack>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                  <Button variant="outline">Clear</Button>
                  <Button variant="solid" onClick={() => calculateSimpleInterest()} >Calculate</Button>
              </Card.Footer>
            </Card.Root>
            <Card.Root w={300} mt={3}>
              <Card.Header>
                  <Card.Title>Result</Card.Title>
              </Card.Header>
              <Card.Body>
                  <Field.Root>
                      <Stat.Root>
                          <Stat.Label>Simple Interest</Stat.Label>
                          <Stat.ValueText fontSize={30}>{simpleInterest.result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Stat.ValueText>
                      </Stat.Root>
                  </Field.Root>
              </Card.Body>
            </Card.Root>
          </HStack>
        )}
      </div>
    </div>

    </>
  )
}

export default Calculators