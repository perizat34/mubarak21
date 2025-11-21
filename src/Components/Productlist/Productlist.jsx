import React from 'react'
import"./ProductList.scss"
import Card from '../Card/Card'
import Loading from '../Loading/Loading'


function Productlist({list,loader}) {

  if (loader){
    return<Loading/>
  }
  return (
    <div className='list'>{
      list.map((item) =>(
      
        <Card key={item.id} data={item}/>
      ))
              
    }
        
    </div>
    
  )
}

export default Productlist
