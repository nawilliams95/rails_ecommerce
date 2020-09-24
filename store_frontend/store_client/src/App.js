import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import Shop from './components/Shop'
import Product from './components/Product'


export default function App(props) {
  let history = useHistory();
  const [products, setProducts] = useState([]);
  const [inputs, updateInputs] = useState({
    name: '',
    price: '',
    description: '',
    product_img: '',
    brand: ''
  })
  const [state, setState] = useState({
    email: '',
    password: '',
    isLogginIn: false
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);


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
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    setState({

      email: '',
      password: '',
      isLoggedIn: false
    });
    history.push('/shop');
    localStorage.clear();
  };

  const handleSignUp = async event => {
    event.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:3000/users/signup', {
        email: state.email,
        password: state.password,
      });
      console.log(response);
      localStorage.token = response.data.token;
      response.data.currentUser = localStorage.setItem('user', JSON.stringify(response.data.currentUser));
      setIsLoggedIn("true");
      history.push('/home');
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogIn = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        email: state.email,
        password: state.password
      });
      localStorage.token = response.data.token;
      response.data.currentUser = localStorage.setItem('user', JSON.stringify(response.data.currentUser));
      setIsLoggedIn(true);
      history.push('/shop');
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getProducts();
  }, []);
  console.log(products)

  const handleChange = (event) => {
    const changeInput = Object.assign({}, inputs, { [event.target.id]: event.target.value })
    updateInputs(changeInput)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/products', inputs);
      const data = response.data;
      updateInputs({
        name: '',
        price: '',
        description: '',
        product_img: '',
        brand: ''
      })
      setProducts([data, ...products])
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="App">
      <Switch>

        <Route
          path="/shop"
          render={(props) => {
            return <Shop
              products={products}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              inputs={inputs} />;
          }}
        />
        <Route
          path="/:id"
          render={(props) => {
            return <Product {...props} />;
          }}
        />

      </Switch>

    </div>
  );
}


