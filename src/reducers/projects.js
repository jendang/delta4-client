import {ADD_PROJECT, FETCH_PROJECTS} from '../actions/projects'
import {USER_LOGOUT} from '../actions/users'


export default (state = [], action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return null
      
    case FETCH_PROJECTS:
        return action.payload
    
    case ADD_PROJECT:
      return [...state,action.payload]

    default:
      return state
  }
}