import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import Home from './Home';


function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  function handleRemoveFromCart(id){
    console.log(id);
    dispatch(removeFromCart(id));
  }
  return (
    <div>
      

        <h2 className='App'>My Cart</h2>
        <div className="maindiv">
        {cart.length==0?<h3>No item in cart</h3>:null}
      <div className="items">
      {cart.map((d)=>{
            return (<div className="itembox">
                <div className="image"><img className='img' src={d.images[0]} /></div>
                <div className="title">Title :{d.title.substring(1, 10)}</div>
                <div className="price"> Price :$ {d.price}</div>
                <button className='removebtn'  onClick={()=>handleRemoveFromCart(d.id)}>Remove from Cart</button>
            </div> )     
      })
      }
      </div>
      <div className="carttotal">
        <ol>
          <li>title</li> <span>price</span>
        </ol>
        <hr />
        <h5>total:</h5> <span>total</span>
      </div>
    </div>
    </div>
  )
}

export default Cart