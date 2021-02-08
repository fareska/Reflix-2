import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Catalog from './Catalog'

export default class Landing extends Component {
    constructor() {
        super()
        this.state = {
         
        }
    }

    render() {

        let users = this.props.users

        return (
            <div className='LandingPage' >
                <h3>WHO'S WATCHING</h3>
                {users.map((u, i) => {
                    return (
                        <div key={i} >
                            <Link to={`/catalog/${u.name}`} ><span >{u.name}</span> </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}
