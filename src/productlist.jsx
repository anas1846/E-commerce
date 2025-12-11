import React from 'react'
import Productcard from './productcard.jsx'
import './productlist.css'

const Productlist = ({ products, addtocard }) => {
  return (
    <div>
      <div className="grid">
        {products.map((p) => (
          <Productcard 
            key={p.id}
            value={p.id}
            item={p}
            addtocard={addtocard}
          />
        ))}
      </div>
    </div>
  )
}

export default Productlist
