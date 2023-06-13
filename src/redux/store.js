import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import VolunteerReducer from './reducers/VolunteerReducer'

// Store
const store = createStore(VolunteerReducer, applyMiddleware(thunk))

export default store