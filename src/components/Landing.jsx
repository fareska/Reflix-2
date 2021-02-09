import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Catalog from './Catalog'

export default class Landing extends Component {
    constructor(){
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
                            <Link key={i} to={`/catalog`} >
                                <div className="col s2"
                                    style={{
                                        backgroundColor: u.backGround,
                                        color: 'white',
                                        height: '200px',
                                        display: 'inline-block',
                                        width: '200px',
                                        margin: '10px',
                                    }}>
                                    <span>
                                        {u.name}
                                    </span>
                                </div>
                            </Link>
                        )})}
                </div>
            </div>
        )
    }
}
