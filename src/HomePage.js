import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class HomePage extends Component {
    render() {
        return (
            <UserConsumer>
                {props => {

                    console.log(props);

                    return (
                        <div className='container'>
                            <div>{props.name}</div>
                            <div>{props.loggedIn}</div>
                        </div>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default HomePage