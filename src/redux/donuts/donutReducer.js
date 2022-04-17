import { BUY_DONUT } from "./donutType";

const intialState = {
    numOfDonuts : 10
}

const donutReducer =(state = intialState,action) => {
    switch(action.type){
        case  BUY_DONUT : return {
            ...state,
            numOfDonuts : state.numOfDonuts -1
        }
        default : return state
    }
}

export default donutReducer