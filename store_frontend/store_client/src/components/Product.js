import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
let endpoint = 'http://localhost:3000/products';

export default function Product(props) {
    const [product, updateProduct] = useState({});
    let history = useHistory();
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${endpoint}/${props.match.params.id}`);
                const data = await response.json();
                await updateProduct(data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await fetch(`${endpoint}/${props.match.params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(...product)
            });
            const data = await response.json();
            await updateProduct({ ...product, data });
        } catch (error) {
            console.error(error);
        }
    };
    const deleteProduct = async event => {
        event.preventDefault();
        try {
            const response = await fetch(`${endpoint}/${props.match.params.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            await updateProduct({});
            console.log(response + 'was done')
            history.push('/shop');
        } catch (error) {
            console.error(error);
        }
    };
    const handleChange = (event) => {
        updateProduct({ ...product, [event.target.id]: event.target.value });
    };


    return (
        <>
            <div className="page_wrapper">
                <nav>
                    <h3> Edit Product</h3>

                    <div className="sidebar">
                        <form onSubmit={handleSubmit}>
                            <fieldset className="product-info">
                                <legend>Product Info</legend>
                                <label htmlFor="name" id="name"  >
                                    Name:
                                <input type="text" id="name" value={product.name} onChange={handleChange} />
                                </label>
                                <label htmlFor="brand" id="brand" >
                                    Brand:
                            <input type="text" id="brand" value={product.brand} onChange={handleChange} />
                                </label>
                                <label htmlFor="price" id="price" >
                                    Price:
                            <input type="text" id="price" value={product.price} onChange={handleChange} />
                                </label>
                            </fieldset>
                            <fieldset className="product-description">
                                <label htmlFor="product_img" id="product_img" >
                                    Image (required):
                            <input type="url" id="product_img" value={product.product_img} onChange={handleChange} />
                                </label>
                                <legend>The Product</legend>
                                <label htmlFor="description" id="description" >
                                    description:
                        <textarea id="description" placeholder="What is this all about?" value={product.description} onChange={handleChange} />
                                </label>
                            </fieldset>
                            <input type="submit" className="submit" />
                            <Link to='/shop'>[BACK{'>>>'}]</Link>
                        </form>


                    </div>

                </nav>

                <div className="main">
                    <h2>{product.name}</h2>
                    <img src={product.product_img} alt={product.name} />
                    <h3> Info: {product.description}</h3>
                    <h3> Brand: {product.brand}</h3>
                    <h3>Price: {product.price}</h3>
                    <button onClick={deleteProduct}>
                        Delete
                    </button>
                    <Link to='/shop'>[BACK{'>>>'}]</Link>
                </div>

            </div>
        </>
    )
}