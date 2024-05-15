import './Item.css'

function Item(props){
    const itemName = props.name;
    return (
        <p className="lang">{itemName}</p>
    )
}

export default Item;