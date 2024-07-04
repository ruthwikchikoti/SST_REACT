import { useEffect } from "react";
import { useSelector } from "react-redux";

function Cart() {
    let items = useSelector((state) => state.items);
    let len = items?Object.values(items).length:0;

    return (
        <div>
            <h2>Cart</h2>
            {len > 0 ? (
                Object.values(items).map((item, index) => (
                    <div key={index}>
                        <p>Title: {item.title}</p>
                        <p>Brand: {item.brand}</p>
                        <p>Price: {item.price?.value}</p>                        
                        <p>Quantity: {item.quantity}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>Cart is empty</p>
            )}
        </div>
    );
}

export default Cart;