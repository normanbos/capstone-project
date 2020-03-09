import React from 'react'
import ItemList from '../components/ItemList'

export default {
  title: 'Components/List',
  component: ItemList,
  decorators: [
    renderItemList => (
      <div style={{ padding: 20, width: 400 }}>{renderItemList()}</div>
    ),
  ],
}

export const DefaultList = () => (
  <ItemList
    items={[
      {
        title: 'Ding',
        borrower: 'Jemand',
        borrowdate: '2020-02-02',
        duedate: '2020-03-15',
      },
      {
        title: 'anderes Ding',
        borrower: 'Jemand anders',
        borrowdate: '2020-02-02',
        duedate: '2020-03-15',
      },
      {
        title: 'überfälliges Ding',
        borrower: 'Jemand anders',
        borrowdate: '2020-02-02',
        duedate: '2020-02-15',
      },
    ]}
  />
)
