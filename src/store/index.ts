import { createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const store: Store = createStore(
  rootReducer,
  typeof window !== 'undefined' ? (window as anyObject)['_initState_'] : undefined,
  applyMiddleware(thunk)
)

export default store