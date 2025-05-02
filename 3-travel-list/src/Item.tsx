
type Item = {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
}

const Item = ({ item }: { item: Item }) => {
    return (
        <li key={item.id}>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button>{item.packed ? "🧳" : "❌"}</button>
        </li >
    )
}

export default Item