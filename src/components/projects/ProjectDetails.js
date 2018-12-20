import React, {PureComponent} from 'react'
import {getProject} from '../../actions/projects'
import {connect} from 'react-redux'
import { Icon, Step, Form, TextArea} from 'semantic-ui-react'
import './ProjectDetails.css'


class ProjectDetails extends PureComponent {
  
    componentDidMount = () => {
        this.props.getProject(Number(this.props.match.params.id))
    }

  render() {

    return (
        <div>
            
            <Step.Group className="project">
                <Step active>    
                     <Step.Content>
                        <Step.Title>Project name</Step.Title>
                        <Step.Description>{this.props.project && this.props.project.name}</Step.Description>
                     </Step.Content>
                </Step>
                <Step >    
                     <Step.Content>
                        <Step.Title>test@test.com</Step.Title>
                        <Step.Description> 061 234 5678</Step.Description>
                     </Step.Content>
                </Step>
                <Step >    
                     <Step.Content>
                        <Step.Title>5 PCBAs</Step.Title>
                        <Step.Description> 10 working days</Step.Description>
                     </Step.Content>
                </Step>
          </Step.Group>
          <div>
            <Form>
                <TextArea placeholder='Tell us more' />
            </Form>
          </div>
          <h1>Customer comments: </h1>
          <div>
              <Step.Group className="project">
                <Step disabled>
                    <Icon name='calculator' />                   
                 </Step>

                <Step disabled>
                    <Icon name='cloud upload' />
                </Step>

                <Step disabled>
                    <Icon name='hourglass half' />
                </Step>
                <Step disabled>
                    <Icon name='check' />
                </Step>
                <Step disabled>
                    <Icon name='settings' />
                </Step>
                <Step disabled>
                    <Icon name='truck' />
                </Step>
                <Step disabled>
                    <Icon name='euro sign' />
                </Step>
              </Step.Group>
          </div>
          
        </div>
    )
  }
       
}

const mapStateToProps = state => ({
    project: state.project


})

export default connect(mapStateToProps, {getProject})(ProjectDetails)
