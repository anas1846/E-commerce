import React from 'react'
import './productcard.css'



const Productcard = ({ item,addtocard,}) => {
  
  return (
    <div className="card" >
    <div className="brand">
        <img src={item.img} alt={item.name} />
    </div>
      <h3>{item.name}</h3>
      <p>$ {item.price}</p>
      <button className='product-button'onClick={()=>addtocard(item)} >Add to card</button>
    </div>
  );
};

export default Productcard
