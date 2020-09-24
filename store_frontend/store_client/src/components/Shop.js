import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BarChart(props) {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/products')
            const data = response.data;
            setProducts(data)
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        getProducts();
    }, []);
 console.log(products)
    return (
        <>
            <h1>Shop Now:</h1>
            
        </>
    )
}
