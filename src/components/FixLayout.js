import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

export default class MenuExampleSizeLarge extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state

    return (
      <Menu size='large' pointing secondary>
        <Menu.Item>
          <img src={logo} alt="main logo" height="24" width="24" />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='About'
          />
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>Dutch</Dropdown.Item>
              <Dropdown.Item>French</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Link to={`/login`}>Login</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/signup`}>Sign Up</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
