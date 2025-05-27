import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import axios from 'axios';
import { ProductCard } from './components/ProductCard';
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import { MenuItems } from './components/MenuItems';
import { Login } from './components/Login';
import { Link } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail';
import {Cart} from './components/Cart';
import {UserDetails} from './components/UserDetails';
import { EditDetails } from './components/EditDetails';

const App = () => {
  const [username, setUsername] = useState("User"); 
  const [usercred, setUsercred] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
    }).catch((err) => {
      console.log("Fetching error: ", err);
    });
  }, [])

  function additemtocart(item) {
    alert("Item " + item.title + " added to cart")
  }

  const Home = ({ data, additemtocart }) => {
  return (
    <div className="Product_List">
      {
        data.length > 0 ? (
          data.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              additemtocart={additemtocart}
            />
          ))
        ) : (<p>Loading...</p>)
      }
    </div>
  );
};

const FooterTab = ({username}) => {
  return(
    <h3 align = "center" style={{color: "hotpink"}}>Developed and managed by {username}</h3>
  )
}

  return (
    <>
      <div className="App">
        <BrowserRouter>
        <header className="App-header">
          <h1 align='center'><u>API Ecommerce app</u></h1>
        </header>
        <section>
          <MenuItems username={usercred === "M1" ? "Meeket" : "User"} />
        </section>
        <section className='menu_items'>
            <Routes>
                <Route path="/" element={
                  <Home data={data}
                  additemtocart={additemtocart}/>
                }/>
                <Route path='*' element = {
                  <div style={{margin: 50}}>
                    <h1>Error 404: Page not found</h1>
                    <h3>Return to the home page by clicking this</h3>
                    <Link to="/">
                    <button className="addtocart">Home</button>
                    </Link>
                  </div>
                }/>
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path='Cart' element = {<Cart/>}/>
                <Route path='About' element = {<About/>}/>
                <Route path='ContactUs' element = {<ContactUs/>}/>
                <Route path = 'UserDetails' element = {<UserDetails/>}/>
                <Route path = 'EditDetails' element = {
                  <EditDetails 
                  username={usercred === "M1" ? "Meeket" : "User"}
                  />}/>
                <Route path = 'Login' element = {
                  <Login 
                  setUsername={setUsername}
                  usercred={usercred}
                  setUsercred={setUsercred}
                />}/>
            </Routes>
        </section>
        </BrowserRouter>
      </div>
      <footer className='footer'>
        <FooterTab username={usercred === "M1" ? "Meeket" : "User"}/>
      </footer>
    </>
  );
}


export default App;
