import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function iceCreamContainer(props) {
  return (
    <div>
        <h2>Ice Cream count - {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

const setStateToProps = (state) => {
    return {
        numOfIceCreams : state.iceCream.numOfIceCreams
    }
}

const setDispatchToProps =(dispatch) => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default connect(setStateToProps,setDispatchToProps)(iceCreamContainer)