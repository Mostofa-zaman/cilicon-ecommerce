import React from 'react'
import { getAllProduct, getCategory, getProductbyCategory } from '../api/category'
import { useQuery } from '@tanstack/react-query'

const useCategory = () => {
   const { isPending, error, data  } = useQuery({
    queryKey: ["Category"],
    queryFn: getCategory,
      
  })
  return { isPending ,error , data }
}

const useProduct = ()=>{
   const { isPending, error, data  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
      
  })
  return { isPending ,error , data }
}
 
const usegetproductbycategory = (categoryName) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["categoryproduct", categoryName],
    queryFn: () => getProductbyCategory(categoryName),
    enabled: !!categoryName ,
  });

  return { isPending, error, data };
};
export {useCategory , useProduct,usegetproductbycategory }