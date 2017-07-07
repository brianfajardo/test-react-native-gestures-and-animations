import { FETCH_PHOTOS } from '../constants/actionTypes'

const initialState = {
  photos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return [
        ...state,
        ...action.payload
      ]
    default:
      return state
  }
}