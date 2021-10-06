import React from 'react';
import './Cart.css';

const Cartt = (props) => {
    const { cart } = props;
    console.log(cart);
    /*
    let total = 0;
    for (const fabric of cart) {
       console.log(fabric);
        total = total + fabric.price;   
        
    }
    */
   
    return (
        <div>
            <div className= "main-cart">
                <h4>Order Details</h4>
                <h3>Fabric Order Item: {props?.cart?.length}</h3>
                <br/>
                
            </div>
        </div>
    );
};

export default Cartt;