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
                <div className="row">
                    {users.map((u, i) => {
                        return (
                            <Link key={i} to={`/catalog/${u.name}`} >
                                <div className="col s2"
                                    style={{
                                        backgroundColor: u.backGround,
                                        color: 'white',
                                        height: '200px',
                                        display: 'inline-block',
                                        width: '200px',
                                        margin: '10px',

                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        alignContent: 'center',
                                    }}
                                >
                                    {/* <Link to={`/catalog/${u.name}`} ><div style={{backgroundColor:'red'}} >{u.name}</div> </Link> */}
                                    <span>
                                        {u.name}
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}
