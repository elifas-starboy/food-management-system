import { assets } from "../../assets/assets";
import "./FoodItem.css";

function FoodItem({id, name, price, description, image}) {
    return (
        <div className="food-item">
            <div className="food-item-container">
                <img className="food-item-image" src={image} alt="Food Image" />
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