import { useContext } from "react";
import CartContext from "../../context/CartContext";

function AddToCart({ product }) {
    console.log("add to cart", product.id)
    const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    function increase() {
        increaseQuantity(product);
    }
    function decrease() {
        decreaseQuantity(product);
    }
    let quantity = cart[product.title] ? cart[product.title].quantity : 0;
    if (quantity === 0) {
        return (
            <div className="add-to-cart-container">
            <button onClick={increase}>AddToCart</button>
        </div>
     )  
    } else {
        return ( 
            <div className="add-to-cart-container">
            <button onClick={decrease}>-</button>
            <span className="quantity-display">{quantity}</span>
            <button onClick={increase}>+</button>
        </div>
        )
    }

}

export default AddToCart;

