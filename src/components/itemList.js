import React from 'react'
import itemData from '../itemData'
import ItemCard from './itemCard'
import { saveToLocal, loadFromLocal } from '../utils/utils'

export default function ItemList() {
  let items = loadFromLocal('itemData') || [itemData]
  saveToLocal('itemData', itemData)
  return (
    <>
      {items.map(item => (
        <ItemCard item={item}></ItemCard>
      ))}
    </>
  )
}
