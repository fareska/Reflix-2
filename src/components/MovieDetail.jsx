import React, { Component } from 'react'

export default class MovieDetail extends Component {
    render() {

        let movies=this.props.movies
        let match=this.props.match.match.params.id
        let movie = movies[match]

        return (
            <div className='Movie Detail'>
                <h3>{movie.title}</h3>
                <h3>{movie.year}</h3>
                <img style={{width:200, height:200}} 
                src={movie.img} alt=""/>
                <p>{movie.descrShort}</p>
            </div>
        )
    }
}
