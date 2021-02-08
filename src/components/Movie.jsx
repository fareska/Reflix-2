import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Movie extends Component {
    render() {


        return (
            <div className='Movie' >
                <i  className="material-icons">add</i>
                <img style={{width:200, height:200}} src={this.props.movie.img} alt=""/>
            </div>
        )
    }
}
