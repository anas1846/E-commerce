import React, { useState } from 'react'
import './home.css'
import Productlist from './productlist'
import { Products } from './Products'

const Home = ({ addtocard, card }) => {

  const [filter, setFilter] = useState(Products);

  const filterByCategory = (category) => {
    setFilter(Products.filter(item => item.category === category));
  };

  return (
    <>
      <div>

        <div className="Buttons">
          {/* Reset All Products */}
          <button onClick={() => setFilter(Products)}>All</button>

          <button onClick={() => filterByCategory("clothing")}>Clothing</button>
          <button onClick={() => filterByCategory("shoes")}>Shoes</button>
          <button onClick={() => filterByCategory("accessories")}>Accessories</button>
        </div>

        <h1 className='product-heading'>Product Feature</h1>

        {/* Correct prop name: "filter" is actually a list of products */}
        <Productlist products={filter} addtocard={addtocard} />

        <h1 className='product-heading'>Add to Cart: {card.length}</h1>

        <div className="grid2">
          {card.map((item) => (
            <div key={item.cardId} className="card">
              <div className="brand">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p>$ {item.price}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Home;
