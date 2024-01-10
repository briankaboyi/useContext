import React from 'react'
import Child from './child'
import { getData } from './provider'

const Parent = ({children}) => {
  const {bank,infoMongo}=getData();
  console.log(infoMongo);
  return (
    <>
   {children}
    <Child/>
    </>
 
  )
}

export default Parent