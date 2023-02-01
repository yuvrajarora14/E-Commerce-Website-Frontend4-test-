import React,{useState,useEffect} from 'react'
import Nav from './Nav'
import  "./App.css"
import Home from './components/Home'
import Cart from './components/Cart'
import { Routes, Route } from "react-router-dom";
import axios from 'axios'
export default function App() {

  const[data,setData]=useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
          .then(response => {
            setData(response.data.products);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
  return (
    <div>
 <Nav/>
 <Routes>
 <Route index element={<Home data={data}/>}/>
  <Route path="cart" element={<Cart data={data}/>} /> 
</Routes>
    </div>
  )
}
