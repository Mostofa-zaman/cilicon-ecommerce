import React from 'react'
import Container from '../../commonComponent/Container'
import { imagesProvider } from '../../../helpers/ImgProvider'
import {useCategory, useProduct} from '../../../hooks/useCategory'
import Product from '../../commonComponent/Product'

const ProductVariant = () => {
 const { isPending, error, data  } = useCategory();
 const productData = useProduct();

  return (
    
    <section>
        <Container>
            <div className="grid grid-cols-[20%76%] justify-between">
                <div className="">
                    <picture>
                        <img 
                        src={imagesProvider.ProductVariant} 
                        alt={imagesProvider.ProductVariant} 
                        className='h-[716px]'
                        />
                    </picture>
                </div>
                <div className="">
                  {/* head part */}
                  <div className=" cursor-pointer body_sm_600 flex  items-center justify-between">
                    <h2>Featured Products</h2>
                    <div className="flex gap-x-4 items-center cursor-pointer body_sm_500 ">
                      <h2>All Product</h2>
                      {data?.data?.slice(0,5).map((item)=>(
                          <h3>{item}</h3>
                      ))}
                    </div>
                  </div>
                  {/* tail part */}
                   <div className="flex flex-wrap justify-between gap-y-4 mt-6">

                    {productData?.data?.data?.products.slice(0,8)?.map(item=>(
                  <Product productInfo = {{item, isPending, error}}/>
                    ))}                
                    
                     </div>
                 
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ProductVariant