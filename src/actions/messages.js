import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const FETCH_MESSAGES = 'FETCH_MESSAGES'

const fetchMessages = payload => ({
    type: FETCH_MESSAGES,
    payload
})

export const getMessages = (id) => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .get(`${baseUrl}/projects/${id}/messages`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(fetchMessages(result.body)))
    .catch(err => console.error(err))
}

const addMessage =  message => ({
    type: ADD_MESSAGE,
    message
  })

export const createMessage = (id,message) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${baseUrl}/projects/${id}/messages`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(message)
    .then(result => dispatch(addMessage(result.body)))
    .catch(err => console.error(err))
}


