import {
  FETCH_INIT_PHOTOS,
  FETCH_MORE_PHOTOS,
  SWIPE_LEFT,
  SWIPE_RIGHT
} from '../constants/actionTypes'

const initialState = {
  data: [],
  currentCardIndex: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INIT_PHOTOS:
      return {
        ...state,
        data: [...action.payload]
      }
    case FETCH_MORE_PHOTOS:
      return {
        ...state,
        data: [...action.payload],
        currentCardIndex: 0
      }
    case SWIPE_RIGHT:
      return {
        ...state,
        currentCardIndex: state.currentCardIndex + 1
      }
    case SWIPE_LEFT:
      return {
        ...state,
        currentCardIndex: state.currentCardIndex - 1
      }
    default:
      return state
  }
}