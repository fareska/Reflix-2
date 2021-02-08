import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav style={{backgroundColor:'green'}}>
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo right">Reflix</a>
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            
                            
                            
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/catalog'>Catalog</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
