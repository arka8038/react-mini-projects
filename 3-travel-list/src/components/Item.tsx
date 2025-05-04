import { ItemData } from '../types/item'

const Item = ({ item, key, onDeleteItem, onToggleItem }:
    {
        item: ItemData,
        key: string,
        onDeleteItem: (id: string) => void,
        onToggleItem: (id: string) => void
    }) => {
    return (
        <li key={key}>
            <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li >
    )
}

export default Item