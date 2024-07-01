import React from 'react'
import { women_dress } from '../../../data/women_dress';
import OrderDetailsCard from './OrderedProductCard';



function OrderedProducts() {

    console.log(women_dress);
  return (<div className='my-2'>

    {
        women_dress.map((item)=><OrderDetailsCard product={item}/>) 
    }
  </div>
  )
}
export default OrderedProducts;