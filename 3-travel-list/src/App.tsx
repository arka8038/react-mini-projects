import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Logo from './components/Logo'
import PackingList from './components/PackingList'
import StatsFooter from './components/StatsFooter'
import { ItemData } from './types/item'

function App() {
  // lifted state to the parent instead of keeping it in Form component
  const [items, setItems] = useState<ItemData[]>([])

  const handleAddItem = (item: ItemData) => {
    setItems((items) => [...items, item])
  }

  const handleDeleteItem = (id: string) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const handleToggleItem = (id: string) => {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  const handleClearItems = () => {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    if (confirmed) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <StatsFooter items={items} />
    </div>
  )
}

export default App
