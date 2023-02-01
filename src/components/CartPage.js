import React from "react";
import{useState} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart,resetCart } from '../actions/cartActions';

const CartPage = () => {

  const[total,setTotal]=useState(0);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const sum = cart.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  function handleRemoveFromCart(id){
    console.log(id);
    dispatch(removeFromCart(id));
  }
  function handlerReset(){
   
    dispatch(resetCart());
    alert("Success")
  }
  return (
    <>
      <div className="allItemsHeading">My Cart</div>
      <div className="cartPage">
      {cart.length==0?<h3>No item in cart</h3>:null}
<div className="checkoutCards">
  {cart.map((d)=>{
    return (
    <div className="card">
      <div className="cardDetails">
        <div className="image">
          <img className="image" src={d.images[0]} alt="shirt" />
        </div>
        <div className="title">Title : {d.title} </div>
        <div className="price">Price : ${d.price}</div>
        <button className='removebtn'  onClick={()=>handleRemoveFromCart(d.id)}>Remove From Cart</button>
      </div>
    </div> )
})
}
</div>
        <div className="checkoutList">
    <div className="headingCheckout">Checkout List</div>
  <div className="checkoutListDetails">
    {cart.map((d)=>{
      return (
      <div className="headingCheckoutListDetails">
          <li>{d.title}: &nbsp;&nbsp; ${d.price}</li>
      </div>
      )
      })
    }
  </div>
          <hr className="new1" />
          <div className="total">
            <b>Total</b>
            <span id="totalprice">${sum}</span>
          </div>
          <hr className="new1" />
          <button  className='btn' onClick={handlerReset}>click to checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
