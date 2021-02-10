import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CatalogInput from './CatalogInput'
import Movie from './Movie'

export default class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            searchVal: '',
            budget: 100,
        }
    }

    handleInput = value => {
        this.setState({
            searchVal: value
        }) //,console.log(this.state)// this log the previous version of the searchVal !!??
    }

    searchedMovies = movies => {
        let input = this.state.searchVal.toLowerCase()
        let relevantMovies = movies.filter(m => m.title.toLowerCase().includes(input))
        return relevantMovies
    }

    rentMovie= id => this.props.rentMovie(id)

    handleBudget = (bill, movieId) => {
        let checkBudget = this.state.budget + bill > 0 ? true : false 
        if(checkBudget){
            this.setState({
                budget:this.state.budget+bill
            },this.rentMovie(movieId) )
        }else alert('check your budget')
    }

    render() {

        let rentedMovies = this.props.movies.filter(m => m.isRented === true)
        rentedMovies = this.searchedMovies(rentedMovies) 
        
         
        let movies = this.searchedMovies(this.props.movies) || this.props.movies 
        return (
            <div className='Catalog'>
                <CatalogInput value={this.props.searchVal} handleInput={this.handleInput}/>
                <h3>budget is: {this.state.budget}</h3>
                {rentedMovies.length > 0
                    && <div className="row">
                        <h3>Rented Movies:</h3>
                        {rentedMovies.map((m, i) => {
                            return (
                                <div key={i} >
                                    <Movie id={m.id} movie={m} handleBudget={this.handleBudget} rentMovie={this.props.rentMovie} />
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
                                <Movie id={m.id} movie={m} handleBudget={this.handleBudget} rentMovie={this.props.rentMovie} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
