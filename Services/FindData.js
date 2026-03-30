import React from 'react'
import { InstanceAuth } from '../src/api/InstanceAuth'

const FindData = async() => {
 const res = await  InstanceAuth.get("products")
 return res.data
}

export default FindData