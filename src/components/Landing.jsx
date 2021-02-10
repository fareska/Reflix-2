import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Catalog from './Catalog'
import User from './User'

export default class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { movies: [], name: 'Adam', backGround: 'red' },
                { movies: [], name: 'John', backGround: 'Orange' },
                { movies: [], name: 'Alex', backGround: 'blue' },
                { movies: [], name: 'Samantha', backGround: 'green' }
            ]
        }
    }

    render() {
        return (
            <div className='LandingPage' >
                <h3>WHO'S WATCHING</h3>
                <div className="row">
                    {this.state.users.map((u, i) => {
                        return (
                            <User key={i} loginUser={this.props.loginUser} user={u} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
