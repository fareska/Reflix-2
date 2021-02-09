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
        }) //,console.log(this.state)// this log the previous version of the searchVal !!??
    }

    searchedMovies = movies => {
        let input = this.state.searchVal.toLowerCase()

        let relevantMovies = movies.filter(m => m.title.toLowerCase().includes(input))
        
        console.log(movies, 'movies');
        console.log(relevantMovies, 'relevantMovies');
        console.log(input, 'input');
        
        return relevantMovies
    }

    render() {

        let rentedMovies = this.props.movies.filter(m => m.isRented === true)
        rentedMovies = this.searchedMovies(rentedMovies) 
        
         
        let movies = this.searchedMovies(this.props.movies) || this.props.movies 
        return (
            <div className='Catalog'>

                <input name='searchVal' type="text" value={this.state.searchVal} placeholder='Search Movie' onChange={this.handleInput} />
                <div className="input-field">
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="textarea1" class="materialize-textarea"
                                        style={{ color: 'white' }}
                                        onChange={this.handleInput}
                                        value={this.state.searchVal}
                                    >
                                    </textarea>
                                    <label for="textarea1">Textarea</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
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
                    {movies.map((m, i) => {
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
