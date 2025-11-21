import React,{useEffect} from 'react'
import Banner from '../Components/Banner/Banner'
import Productlist from '../Components/Productlist/Productlist'
import {useSelector} from 'react-redux'
import {getProduct} from '../redux/thunk/thunk'
import { useDispatch } from 'react-redux'



function Home() {
  const {array, loading,error,category} = useSelector((state) => state.product)

  const dispatch = useDispatch()

  console.log(category );
  


  useEffect(() =>{
    dispatch(getProduct(category))
  },[category])
 
  return (
    <div>
      <Banner/>
      <Productlist list={array} loader={loading}/>
    </div>
  )
}

export default Home
