import React from 'react'
import  "./Nav.css"
import { Outlet, Link } from "react-router-dom";
function Nav() {
  return (
    <div>
       <div className="main">
        <div className="heading"> <h3>My shopping app</h3></div>
        <div className="right">
            <div className="home"><Link to="/">Home</Link></div>
            <div className="cart">  <Link to="/cart">Cart</Link></div>
        </div>
        </div> 
    </div>
  )
}

export default Nav