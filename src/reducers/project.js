import {FETCH_PROJECT} from '../actions/projects'
import {USER_LOGOUT} from '../actions/users'

/*
The state will contain the games in an object with the game ID as key
*/

export default (state = null, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return null
      
    case FETCH_PROJECT:
        return action.payload
    
    default:
      return state
  }
}