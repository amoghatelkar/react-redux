import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./UserTypes"

const intialState = {
    loading : true,
    data : [],
    error : ''
}

const userReducer = (state = intialState,action) => {

    switch(action.type){

        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading : true,
                error :''
            }
        case FETCH_USERS_SUCCESS  : 
            return {
                ...state,
                loading:false,
                data:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE :
            return {
                ...state ,
                loading: false,
                data : [],
                error : action.payload
            }
        default : return state
    }
}

export default userReducer