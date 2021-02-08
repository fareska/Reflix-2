import React, { Component } from 'react'

export default class Landing extends Component {
    render() {

        let users = ['Adam', 'Alex', 'Alexa', 'John']

        return (
            <div className='LandingPage' >
                <h3>WHO'S WATCHING</h3>
                {users.map((u,i)=> {
                    return(
                        <div key={i} >{u}</div>
                    )
                })}
            </div>
        )
    }
}
