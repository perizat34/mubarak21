import React from "react";
import "./Card.scss";
import jostik from "../../assets/image/jostik.png"
import { IoIosStar, IoIosHeartEmpty, IoMdCart } from "react-icons/io";
import {useDispatch,useSelector} from 'react-redux';
import { addWish,deleteWish } from "../../redux/slice/wishSlice";
import { FaHeart } from "react-icons/fa6";
import { addCart } from "../../redux/slice/cartSlice";



function Card({data}) {

  const {list} = useSelector((state) => state.wishlist)

    function findNewPrice(price,discound){

      return price - (price * discound / 100)

    }

    const dispatch = useDispatch()

    const isliked = list.some((x) => x.id == data.id)

    // console.log(isliked);
    

  return (
    <div className="card">
      <div className="card-image">
        <img src={data.thumbnail} alt="Product" />
        <div className="discount">-{data.discountPercentage}%</div>

        <div className="icons">
          {
            isliked ? <FaHeart onClick={() => dispatch(deleteWish(data.id))}  className="icon-red" /> :
             <IoIosHeartEmpty onClick={() => dispatch(addWish(data))} className="icon" /> 
          }
          <IoMdCart  className="icon" />
        </div>

        <button onClick={() => dispatch(addCart(data))} className="btn">Add To Cart</button>
      </div>

      <div className="card-content">
        <h3>{data.title}</h3>
        <div className="prices">
          <p className="new-price">${findNewPrice(data.price, data.discountPercentage).toFixed()}</p>

          <p className="old-price">${data.price}</p>
        </div>

        <div className="rating">
          <IoIosStar className="star" />
          <IoIosStar className="star" />
          <IoIosStar className="star" />
          <IoIosStar className="star" />
          <IoIosStar className="star half" />
          (88)
        </div>
      </div>
    </div>
  )
}

export default Card;