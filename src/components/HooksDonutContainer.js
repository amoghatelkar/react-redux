import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyDonut } from '../redux'


function HooksDonutContainer() {
    const numOfDonuts = useSelector(state => state.donut.numOfDonuts)
const dispatch = useDispatch() 
  return (
    <div>
        <h1>Num Of Donuts - {numOfDonuts}</h1>
        <button onClick = {() => dispatch(buyDonut())}>Buy Donuts</button>
    </div>
  )
}

export default HooksDonutContainer