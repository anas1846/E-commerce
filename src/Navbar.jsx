import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping , faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Navbar = ({card}) => {
  return (
    <div>
     <div className="nav">
        <div className="logo">
            <h1  >ShopMart</h1></div>
<div className="searchbar">
<FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000" }} />
        <input type="text" placeholder='Search' />
     </div>
            <div className="option">
                <p>home</p> 
<p
//   style={{
//     display: "flex",
//     alignItems: "center",
//     gap: "4px",
//     background: "transparent",
//     border: "none",
//     fontSize: "16px",
//     cursor: "pointer"
//   }}
>
  Shop
  <span>▼</span>
 
</p>
 <p>card: {card.length}</p>
<h3>
     <FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000" }} />

</h3>

            </div>
       
     </div>
     
    </div>
  )
}

export default Navbar
