import React from 'react'
import { getData } from './provider'


const GrandChild = () => {
  const {infoMongo}=getData()
  const {name,age} = infoMongo
  console.log(infoMongo.name)
  return (
    <div>
        <h1>hello am  grand child</h1>
        <p>{name}</p>
        <p>{age}</p>
    </div>
  )
}

export default GrandChild