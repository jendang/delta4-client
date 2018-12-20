import React, {PureComponent} from 'react'
import {getProjects, createProject} from '../../actions/projects'
import {getUsers} from '../../actions/users'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import ProjectsList from './ProjectsList'
import NewRequest from './NewRequest'

class ProjectsListContainer extends PureComponent {
  componentDidMount() {

    this.props.getProjects();
    this.props.getUsers();

    /*if (this.props.authenticated) {
      if (this.props.projects === null) this.props.getProjects()
      if (this.props.users === null) this.props.getUsers()
    }*/
  }

  createNewProject = (project) => {
    this.props.createProject(project)
    console.log(project)
  } 

  render() {
    const {projects, authenticated} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (projects === null) return null

    return (
        <div>
            <ProjectsList projects={this.props.projects} />

            <div>
              {authenticated && <NewRequest onSubmit={this.createNewProject}/>}
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  projects: state.projects,
  users: state.users


})

export default connect(mapStateToProps, {getProjects, createProject, getUsers})(ProjectsListContainer)
