import { SET_WEBSITES } from '../actions/index'

const websites = (state = [], action) => {
    switch (action.type) {
        case SET_WEBSITES:
            return action.websites
        
        default: 
         return state
    }
}

export default websites