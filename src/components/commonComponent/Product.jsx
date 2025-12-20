import React from 'react'
import { FaStar } from 'react-icons/fa'
import Star from './Star'

const Product = ({productInfo}) => {
  
  return (
      <div className="">
       
             <div className='p-5 border border-gray_50 max-w-[240px] rounded'>
     <div className="flex flex-col items-start justify-start gap-y-3">
          <span className='py-1.5 px-2.5 bg-danger_500'>HOT</span>
        <img  src={productInfo.images[0]} alt=""  className='w-[202px] h-[172px] object-cover'/>


        <div className="flex items-center gap-x-1 mt-2">
             <Star rating={productInfo.rating}/>
            <span>({productInfo.reviews?.length})</span>
        </div>
        {/* text */}
        <h2 className='w-full truncate'>{productInfo.title}</h2>
        <div className="flex gap-x-3 ">
            <del>$1600</del>
            <span>${productInfo.price}</span>
        </div>
     </div>
    </div>


       
    </div>
    

    
  )
}

export default Product