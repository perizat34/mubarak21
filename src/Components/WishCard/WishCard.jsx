import React from 'react'
import"./Wish.scss"
import { MdDelete } from "react-icons/md";
import {useDispatch} from 'react-redux';
import { deleteWish } from '../../redux/slice/wishSlice';


function WishCard({data}) {

   const dispatch = useDispatch()

  return (
     <div className='wishCard'>
        <div className='wish-image'>
           <img src={data.thumbnail} alt="" />
            <div className='discount'></div>
             <div className='icons'>
               <MdDelete onClick={() =>dispatch(deleteWish(data.id))} className='delete'/>

             </div>
              <button className='btn'>Add To Card</button>
    </div>
           <div className='wish-content'>
            <h3>Title</h3>
            <div className='prices'>
                <p className='new-price'>234</p>
                <p className='old-price'>4567</p>
            </div>
         </div>
    </div>
  )
}

export default WishCard
