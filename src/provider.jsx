import React, { createContext, useContext, useState } from 'react'
const Context=createContext()
const Provider = ({children}) => {


  const data={
name:"mongo",
age:20,
role:"software developer"
  }
  const bank=[1,2,3,4]
  return (
    
      <Context.Provider value={
        {
          infoMongo:data,
          bank
        }

        }>
      {children}
      </Context.Provider>
      
    
  )
}
 const getData=()=>useContext(Context)
export {Provider,getData} 