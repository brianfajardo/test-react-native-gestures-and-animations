import axios from 'axios'

import {
  FETCH_INIT_PHOTOS,
  FETCH_MORE_PHOTOS,
  SWIPE_COMPLETE,
} from '../constants/actionTypes'
import UNSPLASH_URL from '../constants/unsplash_url'

export const fetchPhotos = utilization => (dispatch) => {
  axios.get(UNSPLASH_URL)
    .then((response) => {
      const photos = response.data
      if (utilization === 'init') {
        dispatch({ type: FETCH_INIT_PHOTOS, payload: photos })
      } else if (utilization === 'more') {
        dispatch({ type: FETCH_MORE_PHOTOS, payload: photos })
      } else {
        throw new Error('We hit an edge case, or fetchPhotos passed a bad parameter')
      }
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export const onSwipeRight = item => (dispatch) => {
  // Do something applicable to app.
  dispatch({ type: SWIPE_COMPLETE })
}

export const onSwipeLeft = item => (dispatch) => {
  // Do something like an HTTP request.
  dispatch({ type: SWIPE_COMPLETE })
}