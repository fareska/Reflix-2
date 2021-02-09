import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Movie from './Movie'

export default class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            searchVal: '',
        }
    }

    handleInput = e => {
        let name = e.target.name
        let value = e.target.value
        this.setState({
            searchVal: value
        })
    }

    renderRentedMovies = () => {

    }


    render() {

        let rentedMovies = this.props.movies.filter(m => m.isRented === true)
        return (
            <div className='Catalog'>
                <input name='searchVal' type="text" value={this.state.searchVal} placeholder='Search Movie' onChange={this.handleInput} />
                {rentedMovies.length > 0
                    && <div className="row">
                        <h3>Rented Movies:</h3>
                        {rentedMovies.map((m, i) => {
                            return (
                                <div key={i} >
                                    <Movie id={m.id} movie={m} rentMovie={this.props.rentMovie} />
                                </div>

                            )
                        })}
                    </div>
                }

                <div className="row">
                    <h3>Catalog:</h3>
                    {this.props.movies.map((m, i) => {
                        return (
                            <div key={i} >
                                <Movie id={m.id} movie={m} rentMovie={this.props.rentMovie} />
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
}
