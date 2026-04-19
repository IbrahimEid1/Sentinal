import React from 'react'
import { InstanceAuth } from "../src/api/InstanceAuth";

const ProductsSurv = async() => {
 const res = await InstanceAuth.get("surveillances") 
 return res.data
 
}

export default ProductsSurv