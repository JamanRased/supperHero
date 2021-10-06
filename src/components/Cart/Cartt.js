import React from 'react';
import './Cart.css';

const Cartt = (props) => {
    const { cart } = props;
    console.log(cart);

    function cartTotal(){
        let total = 0;
        if (cart){
        for (const fabric of cart) {
            console.log(fabric);
                total = total + fabric.price;   
            }
        }
        return total;
    }
    
    return (
        <div>
            <div className= "main-cart">
                <h4>Order Details</h4>
                <h3>Fabric Order Item: {props?.cart?.length}</h3>
                <br/> 
                { <p>Total : {cartTotal()}</p> }
                <ul>
                    {
                        cart?.map(fabric =><li>{fabric.name}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cartt;