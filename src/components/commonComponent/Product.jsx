import React from 'react'
import { FaStar } from 'react-icons/fa'
import Star from './Star'
import ProductSkeleton from '../Skeletion/ProductSkeleton';

const Product = ({productInfo}) => {
  const {item, isPending, error} = productInfo;
  if (isPending) {
    return(
      <div className='mt-10'>
        <ProductSkeleton/>
      </div>
    )
    
  }
  if (error) {
      return(
      <div>error</div>
    )
  }
  return (
      <div key={item.id} className='mt-10'>
       
             <div className='p-5 border border-gray_50 max-w-[240px] rounded'>
     <div className="flex flex-col items-start justify-start gap-y-3">
          <span className='py-1.5 px-2.5 bg-danger_500'>HOT</span>
        <img  src={item.images[0]} alt=""  className='w-[202px] h-[172px] object-cover'/>


        <div className="flex items-center gap-x-1 mt-2">
             <Star rating={item.rating}/>
            <span>({item.reviews?.length})</span>
        </div>
        {/* text */}
        <h2 className='w-full truncate'>{item.title}</h2>
        <div className="flex gap-x-3 ">
            <del>$1600</del>
            <span>${item.price}</span>
        </div>
     </div>
    </div>


       
    </div>
    
 
    
  )
}

export default Product