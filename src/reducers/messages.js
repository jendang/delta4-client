import {ADD_MESSAGE, FETCH_MESSAGES} from '../actions/messages'
import {USER_LOGOUT} from '../actions/users'


export default (state = [], action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return null
      
    case FETCH_MESSAGES:
        return action.payload
    
    case ADD_MESSAGE:
      return action.payload ? [action.payload,...state] : state

    default:
      return state
  }
}
