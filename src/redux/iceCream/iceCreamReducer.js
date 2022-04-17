import { BUY_ICECREAM } from "./iceCreamTypes";

const intialState = {
    numOfIceCreams:20
}

const iceCreamReducer = (state = intialState,actions) => {

    switch(actions.type){

        case BUY_ICECREAM : return {
            ...state,
            numOfIceCreams:state.numOfIceCreams -1
        }

        default : return state
    }
}

export default iceCreamReducer