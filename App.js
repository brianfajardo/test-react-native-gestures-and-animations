import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './src/store/'
import DeckListContainer from './src/containers/DeckListContainer'

const App = () => (
  <Provider store={configureStore()}>
    <DeckListContainer />
  </Provider>
)

export default App