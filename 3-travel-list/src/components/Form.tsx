import { useState } from "react"
import { ItemData } from "../types/item"

const Form = ({ onAddItem }: { onAddItem: (item: ItemData) => void }) => {
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        if (!description) return

        const newItem = {
            id: crypto.randomUUID(),
            description,
            quantity,
            packed: false
        }

        onAddItem(newItem)

        setDescription('')
        setQuantity(1)
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3> What do you need for your trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)} // e.target is the input element
                required />
            <button> Add </button>
        </form>
    )
}

export default Form