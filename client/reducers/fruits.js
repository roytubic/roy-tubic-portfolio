import { SET_WEBSITES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEBSITES:
      return action.websites
    default:
      return state
  }
}

export default reducer
