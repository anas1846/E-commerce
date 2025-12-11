import { useState  } from 'react'
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from './home';
import Productlist from './productlist';
import Navbar from './Navbar'
import Productcard from './productcard';
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';





const App = () => {
  const [card,setCard]=useState([])
  const cardSection=useRef(null)
  const addtocard=(product)=>{
     const newItem = { ...product, cartId: uuidv4() };
    setCard([...card, newItem]);
    };
const cardsection=()=>{
 cardSection.current.scrollIntoView({ behavior: "smooth" })

}
    
  return (
    <div>
      
     <Navbar card={card}/>
   
     
<Home addtocard={addtocard} card={card}  />

    </div>
  )
}

export default App

