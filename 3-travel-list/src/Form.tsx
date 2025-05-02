import { useState } from "react"

const Form = () => {
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(0)

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        if (!description) return

        const newItem = {
            id: crypto.randomUUID(),
            description,
            quantity,
            packed: false
        }
        console.log(newItem)

        setDescription('')
        setQuantity(0)
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