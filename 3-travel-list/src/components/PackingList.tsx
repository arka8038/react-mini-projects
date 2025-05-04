import { useState } from "react";
import Item from "./Item";
import { ItemData } from "../types/item";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearItems }:
    {
        items: ItemData[],
        onDeleteItem: (id: string) => void,
        onToggleItem: (id: string) => void,
        onClearItems: () => void
    }) => {

    const [sortBy, setSortBy] = useState('input')

    let sortedItems: ItemData[] = []

    if (sortBy === "input") {
        sortedItems = items
    } else if (sortBy === "description") {
        sortedItems = [...items].sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === "packed") {
        sortedItems = [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <div className='list'>
            <ul>
                {sortedItems.map(item => (
                    <Item
                        item={item}
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>

            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy((e.target as HTMLSelectElement).value)}>
                    <option value="input">Sort by input</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed</option>
                </select>
                <button value={"clear"} onClick={onClearItems}>Clear List</button>
            </div>
        </div>

    )
}

export default PackingList