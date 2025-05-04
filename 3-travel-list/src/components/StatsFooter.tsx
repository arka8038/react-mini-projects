import { ItemData } from "../types/item";

const StatsFooter = ({ items }: { items: ItemData[] }) => {
    const numItems = items.length;

    if (!numItems) {
        return (
            <footer className='stats'>
                <em>
                    Start adding some items on your packing list!
                </em>
            </footer>
        );
    }

    const packedCount = items.filter(item => item.packed).length;
    const packedCountPercentage = Math.round((packedCount / numItems) * 100);

    return (
        <footer className='stats'>
            <em>
                {packedCountPercentage === 100
                    ? "You got everything! Ready to go!"
                    : `You have ${numItems} items on your list, and you already packed ${packedCount} (${packedCountPercentage}%)`}
            </em>
        </footer>
    );
};

export default StatsFooter;
