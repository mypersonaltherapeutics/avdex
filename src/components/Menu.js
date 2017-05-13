import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class AppMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const { name } = this.props

        if (!name) {
            return null
        }

        return (
            <Menu pointing secondary>
                <Menu.Item as={Link} to="/home" name='wat' active={activeItem === 'wat'} onClick={this.handleItemClick}>
                    test
                </Menu.Item>
                <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                    Welcome back, {name}
                </Menu.Item>

                <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                    <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
                </Menu.Menu>
            </Menu>
        )
    }
}