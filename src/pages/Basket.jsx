import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { FaAngleUp,FaAngleDown } from "react-icons/fa";
import { incrementQty,decrementQty } from '../redux/slice/cartSlice';


function Card() {

const{cart} = useSelector((state) => state.carts)

const dispatch = useDispatch()


console.log(cart);


  return (
    <div className='cartBody'>
      <div className='criteria'>
        <li>Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Subtotal</li>
      </div>
      <div>
        {
            cart.map((item) => (
        <div key={item.id} className='cartCard'>
        <div className='cartProduct'>
             <img src={item.thumbnail} alt="" />
             <h1>{item.title}</h1>
         </div>
             <h2 className='cartPrice'>{item.price}$</h2>
             <div className='box'>
                <p>{item.quantity}</p>
                <div className='quantity-icons'>

                <FaAngleUp className='arrow' onClick={() => dispatch (incrementQty(item.id))}/>
                <FaAngleDown className='arrow' onClick={() => dispatch (decrementQty(item.id))}/>
                </div>
             </div>
             <h2>{(item.price * item.quantity).toFixed()}$</h2>
             </div>
            ))
        }
      </div>
      {/* <div className='cartCard'>
        <div className='cartProduct'>
          <img src={""} alt="" />
          <h1>H1 Gamepad</h1>
        </div>
        <h2 className='cartPrice'>550$</h2>
        <input type="number" />
        <h2>1100$</h2>
      </div> */}
      <div className='cartBtns'>
        <button>Return To Shop</button>
        <button>Update Cart</button>
      </div>
      <div className='cartTotal'>
        <div className='cartCoupon'>
          <input type="text" placeholder='Coupon Code' />
          <button>Apply Coupon</button>
        </div>
        <div className='total'>
          <h1>Cart  Total</h1>
          <div className='totalSubtotal'>
            <p>Subtotal:</p>
            <p>$1150</p>
          </div>
          <div className='totalLine'></div>
          <div className='totalShipping'>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className='totalLine'></div>
          <div className='totalTotal'>
            <p>Total:</p>
            <p>$1150</p>
          </div>
          <button>Process to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Card