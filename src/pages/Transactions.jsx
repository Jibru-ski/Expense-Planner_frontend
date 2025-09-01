import React from 'react'
import {Text, Kbd, Table, Checkbox, ActionBar, Portal, Button} from '@chakra-ui/react'
import { getTransactions } from '../api/transactionservice'

const Transactions = () => {
    const [transactions, setTransactions] = React.useState([]);
    const [selection, setSelection] = React.useState([])

    const hasSelection = selection.length > 0
    const indeterminate = hasSelection && selection.length < items.length

    React.useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const data = await getTransactions();
                setTransactions(data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchTransactions();
    }, [])

    const rows = transactions.map((item) => (
    <Table.Row data-selected={selection.includes(transactions.description) ? "" : undefined}>
      <Table.Cell>
        <Checkbox.Root
          size="sm"
          top="0.5"
          aria-label="Select row"
          checked={selection.includes(transactions.description)}
          onCheckedChange={(changes) => {
            setSelection((prev) =>
              changes.checked
                ? [...prev, transactions.description]
                : selection.filter((name) => name !== transactions.description),
            )
          }}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>
      </Table.Cell>
      <Table.Cell>{transactions.description}</Table.Cell>
      <Table.Cell>{transactions.type}</Table.Cell>
      <Table.Cell>${transactions.amount}</Table.Cell>
      <Table.Cell>{transactions.createdOn}</Table.Cell>
      <Table.Cell>{transactions.modifiedOn}</Table.Cell>
    </Table.Row>
    ));

  return (
    <>
    <Text fontSize={20} fontWeight={500} mb={5}><i class='bx bx-dollar-circle'></i>Transactions</Text>
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