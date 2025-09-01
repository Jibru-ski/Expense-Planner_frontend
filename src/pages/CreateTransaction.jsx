import { useNavigate } from 'react-router-dom';
import { createTransaction } from '../api/transactionservice';
import { Text, Input, RadioGroup, HStack, Button, Stack} from '@chakra-ui/react'
import React from 'react'

const CreateTransaction = () => {
    const [description, setDescription] = React.useState("");
    const [type, setType] = React.useState("");
    const [amount, setAmount] = React.useState("");
    // const navigate = useNavigate();

    // const handleCreate = async (e) => {
    //     e.preventDefault();
    //     try 
    //     {
    //         await createTransaction({
    //             description: (description),
    //             type: (type),
    //             amount: parseFloat(amount)
    //         });

    //         navigate("/transactions")
            
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

  return (
    <>
    <Text fontSize={20} fontWeight={500} mb={5}><i class='bx bx-dollar-circle'></i>Create Transaction</Text>
    <form >
        <Stack spacing={4} mb={4}>
            <div>
                <Input 
                    type="text" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    name="Description"
                    placeholder="Description"
                    required 
                />
            </div>
            <RadioGroup.Root value={type} onValueChange={(e) => setType(e.value)}>
                <HStack gap="6">
                    <RadioGroup.Item value="Income">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Income</RadioGroup.ItemText>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="Expense">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Expense</RadioGroup.ItemText>
                    </RadioGroup.Item>
                </HStack>
            </RadioGroup.Root>
            <div>
                <Input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    name="Amount"
                    placeholder="Amount"
                    required 
                />
            </div>
            <Button variant="surface" type="submit">Create</Button>
        </Stack>
    </form>
    
    </>
  )
}

export default CreateTransaction