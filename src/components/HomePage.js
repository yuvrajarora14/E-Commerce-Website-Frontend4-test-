import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from 'react-redux';
import {addProductToCart} from '../actions/cartActions';


const HomePage = ({data}) => {

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log(product);
      dispatch(addProductToCart(product));
    };  
    return (
    <>
      <div className="allItemsHeading">All Items</div>
      <div className="homePage">
      {data.map((d)=>{
        return (
      <div className="cardDetails">
          <div className="image">
            <img className="image" src={d.images[0]} alt="shirt" />
          </div>
          <div className="title">Title : {d.title} </div>
          <div className="price">Price : ${d.price}</div>
          <button className='removebtn'  onClick={()=>handleAddToCart(d)}> Add To Cart
          </button>
        </div>
        )})
      }
      
      </div>
    </>
  );
};

export default HomePage;
