import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';

const Product = () => {
  const { all_product } = useContext(ShopContext); 
  const {productId} = useParams()
  const product = all_product.find((e)=>e.id === Number(productId))// This is done for  while the id is compared to the product then it must be same 
  if (!product) {
    return <div>Loading...</div>; // or an appropriate loading state
  }
  return (
    <div> 
      <Breadcrum product={pgit aroduct} />
    </div> 
  )
}

export default Product
