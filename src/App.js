import React,{useState,useEffect} from 'react'
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import Error from "./components/Error";
import axios from 'axios'
import { Routes, Route } from "react-router-dom";



function App() {
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
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage data={data}/>} />
          <Route path="/HomePage" element={<HomePage data={data}/>} />
          <Route path="/CartPage" element={<CartPage data={data}/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
  );
}

export default App;
