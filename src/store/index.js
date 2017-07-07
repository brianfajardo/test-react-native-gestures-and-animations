import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/'

const middleware = applyMiddleware(thunk)
const configureStore = initialState => createStore(rootReducer, initialState, middleware)

export default configureStore