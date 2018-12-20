import React, { Component } from 'react'
import Comments from './Comments'
import ToggleBar from './ToggleBar'
import './Widget.css'
import './style.css'
import { createMessage, getMessages } from '../../actions/messages'
import { connect } from 'react-redux'
import dp_ico from '../../img/dp.png'
import { userId } from '../../jwt'

class Widget extends Component {
    state = {
        showComments: false,
        comments: []
    }

    componentDidMount() {
        this.props.getMessages(Number(this.props.match.params.id))
    }

 

    toggleComments = () => {
        this.setState({
            showComments: !this.state.showComments
        })
    }

    submitComments = (event) => {
        if (event.keyCode !== 13)
            return
        const comment = {
            content: event.target.value
        }
        let comments = Object.assign([], this.state.comments)
        comments.push(comment)

        this.props.createMessage(this.props.match.params.id, comment)

        this.setState({
            comments: comments
        })

        event.target.value = "" //clear out the input
    }

    render() {
        if (this.state.showComments === true)
            return (
                <div className="rcw-widget-container  rcw-opened">

                    <div className="rcw-conversation-container">

                        <div className="rcw-header">
                            <div>
                                <img className="rcw-title" src={dp_ico} alt="logo" />
                                <h4 className="rcw-title">Welcome {this.props.user && this.props.user.firstName} to Project #{Number(this.props.match.params.id)}
                                </h4>
                            </div>
                        </div>

                        <div className="rcw-messages-container">
                            {/*<div className="rcw-message">*/}
                            {/*<div className="rcw-client">*/}
                            {/*<div className="rcw-message-text">*/}
                            {this.props.comments.reverse().map((comment, i) => {
                                return (<div key={i}> <Comments {...comment} /></div>)
                            })}

                            {/* <Comments comments={this.props.comments}/> */}
                        </div>
                    </div>

                    <div className="rcw-sender" >
                        <input className="rcw-new-message" onKeyDown={this.submitComments.bind(this)} type='text' placeholder='Type here' />
                    </div>

                    <div>
                        <ToggleBar onToggle={this.toggleComments.bind(this)} />
                    </div>
                </div>

            )

        return (
            <ToggleBar onToggle={this.toggleComments.bind(this)} />
        )

    }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    users: state.users === null ? null : state.users,
    project: state.project,
    comments: state.messages === null ? null : Object.values(state.messages).sort((a, b) => b.id - a.id),
    user: state.currentUser && state.users && state.users[userId(state.currentUser.jwt)]
})

export default connect(mapStateToProps, { getMessages, createMessage })(Widget)