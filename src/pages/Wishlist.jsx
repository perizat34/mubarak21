import React from 'react'
import WishCard from '../Components/WishCard/WishCard'
import { useSelector } from 'react-redux'

function Wishlist() {

  const {list} = useSelector((state) => state.wishlist)

  console.log(list);
  



  return (
    <div className='wishlist'>
      {
        list.map((item) =>(
              <WishCard key={item.id} data={item}/>   
            ))

      }
    </div>
  )
}

export default Wishlist
