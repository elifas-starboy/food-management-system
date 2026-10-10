import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

function Cart() {
  const { cartItems, food_list, removeFromCard } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="item image" />
                  <p>{item.name}</p>
                  <p>N${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>N${item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCard(item._id)}>
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detials">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="cart-total-detials">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-detials">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="card-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Sumbit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
