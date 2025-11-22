import React from 'react'
import { getCategory } from '../api/category'
import { useQuery } from '@tanstack/react-query'

const useCategory = () => {
   const { isPending, error, data  } = useQuery({
    queryKey: ["Category"],
    queryFn:getCategory,
      
  })
  return {isPending ,error , data }
}

export default useCategory