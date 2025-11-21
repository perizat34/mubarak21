import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Header() {

  const { timer } = useSelector((state) => state.counter)

  const{list} = useSelector((state) => state.wishlist)

 const {t,i18n} = useTranslation()

 function change(event) {
     let lng = event.target.value;

     i18n.changeLanguage(lng)
 }

 


  return (
    <>
      <div className='black-header'>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <Link>ShopNow</Link>
        <select> 
        <option value="kg">KGZ</option>
        <option value="en">ENG</option>
        <option value="ru">RUS</option>
      </select>
      </div>
      <div className='header'>
        <h1 className='logo'>Exclusive</h1>
        <div className='menu'>
          <li><Link to={"/"}>{t("home")}</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/register"}>Sign Up</Link></li>


        </div>
        <div className='header-right'>
          <input type="text" placeholder='What are you looking for?' />
          <CiSearch className='lupa' />
          <div className='wish-count'>
          <Link to="/wishlist">
            <CiHeart className='heart' />
            <div className='count'>{list.length}</div>
          </Link>
          </div>
          <Link to={"Basket"}>
          <CiShoppingCart className='cart' />
          </Link>
          
        </div>
      </div>
      <div className='line'></div>
    </>
  )
}

export default Header
