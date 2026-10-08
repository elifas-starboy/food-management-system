import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({id, name, price, description, image}) {
    const {cartItems, addToCard, removeFromCard} = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-container">
                <img className="food-item-image" src={image} alt="Food Image" />
                {
                    !cartItems[id] 
                    ? <img className="add" onClick={() => addToCard(id)} src={assets.add_icon_white} />
                    : <div className="food-item-counter">
                        <img onClick={() => removeFromCard(id)} src={assets.remove_icon_red}/>
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCard(id)} src={assets.add_icon_green} />
                    </div> 
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating starts" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">N${price}</p>
            </div>

        </div>
    )
}

export default FoodItem;