import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const ADD_PROJECT = 'ADD_PROJECT'
export const FETCH_PROJECTS = 'FETCH_PROJECTS'
export const FETCH_PROJECT = 'FETCH_PROJECT'

const fetchProjects = projects => ({
    type: FETCH_PROJECTS,
    payload: projects
})

export const getProjects = () => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .get(`${baseUrl}/projects`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(fetchProjects(result.body)))
    .catch(err => console.error(err))
}

// fetching project details --> also render chatbot
const fetchProject = project => ({
    type: FETCH_PROJECT,
    payload: project
})

export const getProject = (id) => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .get(`${baseUrl}/projects/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(fetchProject(result.body)))
    .catch(err => console.error(err))
}


const addProject = project => ({
    type: ADD_PROJECT,
    payload: project
  })

export const createProject = (project) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${baseUrl}/projects`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(project)
    .then(result => dispatch(addProject(result.body)))
    .catch(err => console.error(err))
}


