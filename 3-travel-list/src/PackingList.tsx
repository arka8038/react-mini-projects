import Item from './Item';

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Charger", quantity: 2, packed: true }
];

const PackingList = () => {
    return (
        <div className='list'>
            <ul>
                {initialItems.map(item => (
                    <Item item={item} key={item.id} />
                ))}
            </ul>
        </div>

    )
}

export default PackingList