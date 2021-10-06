import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cloth.css'

const Cloth = (props) => {
    //console.log(props)
    const {name, quality, position, price, bohor,img} = props.cloth;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
    
        <div className="main-container">
            <img className= "product-img" src = {img} alt="" />
            <h2>Fabric Name: {name}</h2>
            <h3>Quality : {quality}</h3>
            <h3>Position: {position}</h3>
            <h4>Price: {price}</h4>
            <h5>Bohor: {bohor}</h5>
            <button 
            onClick = {() => props.handleAddToCart(props.cloth)
            } className="order-btn"> {element} ORDER NOW </button>
        </div>    
    );
};

export default Cloth;