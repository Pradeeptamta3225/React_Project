import './ItemDate.css';

function ItemDate(){
const day = 20;
const month = "feb";
const year = 2024;
    return (
        <div className="mfg-date">
            <span>{day}</span>
            <span> {month}</span>
            <span>{year}</span>
        </div>
    )
}

export default ItemDate;