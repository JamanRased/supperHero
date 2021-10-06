import React, { useEffect, useState } from 'react';
import Cloth from '../Cloth/Cloth';
import Cartt from '../Cart/Cartt';
import './Shop.css';


const Shop = () => {
    const [fabrics, setFabrics] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('/fabric.JSON')
        .then(response => response.json())
        .then(data =>setFabrics(data));
      }, [])

      const handleAddToCart = (cloth) =>{
        const newCart = [...cart, cloth]
            setCart(newCart); 
      }

    return (
        <div className= "main-cart">
            <div className= "cart-title">
                <h2>Total Fabric:{fabrics.length}</h2>
                <div className = "main">
                    {
                        fabrics.map(fabric =><Cloth 
                        cloth= {fabric}
                        handleAddToCart = {handleAddToCart}
                        >
                    </Cloth>)
                    }
                </div>
            </div>
            <div className= "main-cart">
                <Cartt cart = {cart}></Cartt>
            </div>
        </div>
    );
};

export default Shop;