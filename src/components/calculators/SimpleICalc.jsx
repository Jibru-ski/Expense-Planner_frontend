import React from 'react'
import { Card, Stack, Field, Button, Input, InputGroup, NativeSelect, Stat } from '@chakra-ui/react'

const SimpleICalc = () => {
    const DomainSelect = () => (
        <NativeSelect.Root size="xs" variant="plain" width="auto" me="-1">
            <NativeSelect.Field defaultValue="yrs" fontSize="sm">
                <option value="yrs">yrs</option>
                <option value="mths">mths</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
        </NativeSelect.Root>
    )

    const [simpleInterest, setSimpleInterest] = React.useState ({
        principal: '',
        rate: '',
        time: '',
        result: 0
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
  return (
    <div className="">
        <Card.Root maxW="sm">
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
        <Card.Root maxW='sm'mt={3}>
            <Card.Header>
                <Card.Title>Result</Card.Title>
            </Card.Header>
            <Card.Body>
                <Field.Root>
                    <Stat.Root>
                        <Stat.Label>Simple Interest</Stat.Label>
                        <Stat.ValueText>{simpleInterest.result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Stat.ValueText>
                    </Stat.Root>
                </Field.Root>
            </Card.Body>
        </Card.Root>
    </div>
  )
}

export default SimpleICalc