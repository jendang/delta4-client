import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Icon, Step } from 'semantic-ui-react'

class ProjectsList extends Component {
    render () {
        return (
            <div>
                {/* {this.props.projects.map(project => {
                    return (
                        <div key={project.id}>
                            <ul>
                                <Link to={`/projects/${project.id}/messages`}><li key={project.id}>{project.name}</li></Link>

                            </ul>
                        </div>

                        
                    )
                })} */}
                {this.props.projects.map(project => {
                    return (
                        <div key={project.id}>
                            <ul>
                                <Link to={`/projects/${project.id}`}><li key={project.id}>{project.name}</li></Link>
                                <p>test@test.com 061 234 56789</p>
                                <Step.Group>
                                    <Step active>
                                    {/* <Icon name='truck' /> */}
                                        <Step.Content>
                                            <Step.Title>20/12/2018</Step.Title>
                                            <Step.Description> Delivery date
                                            {/* <Link to={`/projects/${project.id}/messages`}><li key={project.id}>{project.name}</li></Link> */}
                                            </Step.Description>
                                        </Step.Content>
                                    </Step>

                                    <Step>
                                    {/* <Icon name='truck' /> */}
                                    <Step.Content>
                                        <Step.Title>5 PCBAs</Step.Title>
                                        <Step.Description>20 working days</Step.Description>
                                    </Step.Content>
                                    </Step>

                                    <Step disabled>
                                    <Icon name='calculator' />
                                    {/* <Step.Content>
                                        <Step.Title>Shipping</Step.Title>
                                        <Step.Description>Choose your shipping options</Step.Description>
                                    </Step.Content> */}
                                    </Step>

                                    <Step disabled>
                                    <Icon name='cloud upload' />
                                    {/* <Step.Content>
                                        <Step.Title>Billing</Step.Title>
                                        <Step.Description>Enter billing information</Step.Description>
                                    </Step.Content> */}
                                    </Step>

                                    <Step disabled>
                                    <Icon name='hourglass half' />
                                    {/* <Step.Content>
                                        <Step.Title>Confirm Order</Step.Title>
                                    </Step.Content> */}
                                    </Step>
                                    <Step disabled>
                                    <Icon name='check' />
                                    {/* <Step.Content>
                                        <Step.Title>Confirm Order</Step.Title>
                                    </Step.Content> */}
                                    </Step>
                                    <Step disabled>
                                    <Icon name='settings' />
                                    {/* <Step.Content>
                                        <Step.Title>Confirm Order</Step.Title>
                                    </Step.Content> */}
                                    </Step>
                                    <Step disabled>
                                    <Icon name='truck' />
                                    {/* <Step.Content>
                                        <Step.Title>Confirm Order</Step.Title>
                                    </Step.Content> */}
                                    </Step>
                                    <Step disabled>
                                    <Icon name='euro sign' />
                                    {/* <Step.Content>
                                        <Step.Title>Confirm Order</Step.Title>
                                    </Step.Content> */}
                                    </Step>
                                </Step.Group>
                            </ul>
                        </div>

                        
                    )
                })}
                
            </div>

        )
    }

}

export default ProjectsList