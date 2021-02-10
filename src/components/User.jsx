import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {

    loginUser = () => this.props.loginUser(this.props.user.name)

    render() {

        return (
            <div>
                <Link onClick={this.loginUser} to={`/catalog/${this.props.user.name}`} >
                    <div className="col s2"
                        style={{
                            backgroundColor: this.props.user.backGround,
                            color: 'white',
                            height: '200px',
                            display: 'inline-block',
                            width: '200px',
                            margin: '10px',
                        }}>
                        <span>
                            <p>{this.props.user.name}</p>
                        </span>
                    </div>

                </Link>
            </div>
        )
    }
}
