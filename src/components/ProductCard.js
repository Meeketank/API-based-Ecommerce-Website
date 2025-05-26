import { useNavigate } from "react-router-dom"

const ProductCard = ({
    item,
    showproductdescription,
    additemtocart
}) => {

    const navigate = useNavigate();
    const gotoPdp = () => {
        navigate(`/Product/${item.id}`)
    }
    
    return (
        <div className='Products_Card' key={item.id}>
            <img className='item' src={item.image} alt={item.title} onClick={showproductdescription} />
            <h4>{item.price}$</h4>
            <div className='flex'>
                <button className="showdescription" onClick={gotoPdp}>Show Description</button>
                <button className="addtocart" onClick={() => additemtocart(item)}>Add to cart</button>
            </div>
        </div>
    )
}

export { ProductCard }