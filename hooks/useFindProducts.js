import { useQuery } from '@tanstack/react-query'
import React from 'react'
import FindData from '../Services/FindData'

const useFindProducts = () => {
  return useQuery({
    queryKey:["Products"] ,
    queryFn :  FindData ,
}


)
   
}

export default useFindProducts