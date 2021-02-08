import React, { Component } from 'react'
import Movie from './Movie'

export default class Catalog extends Component {
    constructor(){
        super()
        this.state = {
              searchVal: '',
              budget: ''
        }
    }

    handleInput = e => {
        let name = e.target.name
        let value = e.target.value
        console.log(name, value);
        this.setState({
            searchVal: value
        })
    }

    render() {
        return (
            <div className='Catalog'>
                <input name='searchVal' type="text" value={this.state.searchVal} placeholder='Search Movie' onChange={this.handleInput} />
                <Movie />
            </div>
        )
    }
}
