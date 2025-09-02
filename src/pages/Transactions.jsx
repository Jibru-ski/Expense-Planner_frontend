import React from 'react'
import {Text, Kbd, Table, Checkbox, ActionBar, Portal, Button, IconButton, RadioGroup, Drawer, Stack, Input, HStack} from '@chakra-ui/react'
import { createTransaction, getTransactions } from '../api/transactionservice'

const Transactions = () => {
    const [description, setDescription] = React.useState("");
    const [type, setType] = React.useState("");
    const [amount, setAmount] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    // const hasSelection = selection.length > 0
    // const indeterminate = hasSelection && selection.length < items.length

    // React.useEffect(() => {
    //     const fetchTransactions = async () => {
    //         try {
    //             const data = await getTransactions();
    //             setTransactions(data)
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }

    //     fetchTransactions();
    // }, [])

    const clearInput = () => {
      setAmount("")
      setDescription("")
      setType("")
    }

    const handleCreate = async (e) => {
      e.preventDefault();
      try {
        const transactionData = {
          description: description,
          type: parseInt(type),
          amount: parseFloat(amount)
        };

        await createTransaction(transactionData);
        clearInput();
      } catch (error) {
        console.error("Failed to create Transaction: ", error);
      } finally {
        setLoading(false);
      }
    }


    // const rows = transactions.map((item) => (
    // <Table.Row data-selected={selection.includes(transactions.description) ? "" : undefined}>
    //   <Table.Cell>
    //     <Checkbox.Root
    //       size="sm"
    //       top="0.5"
    //       aria-label="Select row"
    //       checked={selection.includes(transactions.type)}
    //       onCheckedChange={(changes) => {
    //         setSelection((prev) =>
    //           changes.checked
    //             ? [...prev, transactions.description]
    //             : selection.filter((name) => name !== transactions.description),
    //         )
    //       }}
    //     >
    //       <Checkbox.HiddenInput />
    //       <Checkbox.Control />
    //     </Checkbox.Root>
    //   </Table.Cell>
    //   <Table.Cell>{transactions.description}</Table.Cell>
    //   <Table.Cell>{transactions.type}</Table.Cell>
    //   <Table.Cell>${transactions.amount}</Table.Cell>
    //   <Table.Cell>{transactions.createdOn}</Table.Cell>
    //   <Table.Cell>{transactions.modifiedOn}</Table.Cell>
    // </Table.Row>
    // ));

  return (
    <>
    <div className="flex justify-between">
      <Text fontSize={20} fontWeight={500} mb={5}><i class='bx bx-dollar-circle'></i>Transactions</Text>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <IconButton variant="plain" size="sm">
            <i class='bx bx-add-to-queue'></i>
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <form method={handleCreate}>
                <Drawer.Header>
                  <Drawer.Title>Add Transaction</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <Stack mb={4}>
                      <Input 
                          type="text" 
                          value={description}
                          onChange={(e) => setDescription(e.target.value)} 
                          name="Description"
                          placeholder="Description"
                          required 
                      />
                      <RadioGroup.Root value={type} onValueChange={(e) => setType(e.value)}>
                          <HStack gap="6">
                              <RadioGroup.Item value="0">
                                  <RadioGroup.ItemHiddenInput />
                                  <RadioGroup.ItemIndicator />
                                  <RadioGroup.ItemText>Income</RadioGroup.ItemText>
                              </RadioGroup.Item>
                              <RadioGroup.Item value="1">
                                  <RadioGroup.ItemHiddenInput />
                                  <RadioGroup.ItemIndicator />
                                  <RadioGroup.ItemText>Expense</RadioGroup.ItemText>
                              </RadioGroup.Item>
                          </HStack>
                      </RadioGroup.Root>
                      <Input 
                          type="number" 
                          value={amount} 
                          onChange={(e) => setAmount(e.target.value)} 
                          name="Amount"
                          placeholder="Amount"
                          required 
                      />                      
                    </Stack>
                </Drawer.Body>
                <Drawer.Footer>
                  <Button variant="outline" onClick={() => clearInput()}>Cancel</Button>
                  <Button variant="surface" type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Create Transaction"}
                  </Button>
                </Drawer.Footer>
              </form>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </div>
    {/* <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader w="6">
              <Checkbox.Root
                size="sm"
                top="0.5"
                aria-label="Select all rows"
                checked={indeterminate ? "indeterminate" : selection.length > 0}
                onCheckedChange={(changes) => {
                  setSelection(
                    changes.checked ? items.map((item) => item.name) : [],
                  )
                }}
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
              </Checkbox.Root>
            </Table.ColumnHeader>
            <Table.ColumnHeader>Product</Table.ColumnHeader>
            <Table.ColumnHeader>Category</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>

      <ActionBar.Root open={hasSelection}>
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>
                {selection.length} selected
              </ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button variant="outline" size="sm">
                Delete <Kbd><i class='bx bx-trash'></i></Kbd>
              </Button>
              <Button variant="outline" size="sm">
                Share <Kbd><i class='bx bx-share-alt' ></i></Kbd>
              </Button>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root> */}
    </>
  )
}

export default Transactions