import axios from 'axios'

import { FETCH_PHOTOS } from '../constants/actionTypes'
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