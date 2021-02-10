import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    
    render() {

        

        return (
            <div>
                <nav className="black-text" style={{backgroundColor:'grey'}}>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo right">Reflix</a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><Link to='/'>Home</Link></li>
                            <li onClick={this.loginUser}><Link to={`/catalog/${this.props.activeUser.name}`}>Catalog</Link></li>
                        </ul>
                    </div>
                </nav>
               
            </div>
        )
    }
}
