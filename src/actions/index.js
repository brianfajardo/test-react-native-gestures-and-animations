import axios from 'axios'

import {
  FETCH_PHOTOS,
  SWIPE_LEFT,
  SWIPE_RIGHT
} from '../constants/actionTypes'
import UNSPLASH_URL from '../constants/unsplash_url'

export const fetchPhotos = () => (dispatch) => {
  axios.get(UNSPLASH_URL)
    .then((response) => {
      const photos = response.data
      dispatch({ type: FETCH_PHOTOS, payload: photos })
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const onSwipe = (item, direction) => (dispatch) => {
  direction === 'right' ? dispatch({ type: SWIPE_RIGHT }) : dispatch({ type: SWIPE_LEFT })
}