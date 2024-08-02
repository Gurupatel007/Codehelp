import './Item.css';
function Item(props) {
    const itemName = props.name;
    return (
        <div>
            <p className="nirma">{itemName}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Item;