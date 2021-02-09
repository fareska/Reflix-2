import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Movie extends Component {

    rentMovie = () => this.props.rentMovie(this.props.id)

    render() {

        return (
            <div className="col s12 m1"
                style={{
                    display: 'inline-block',
                    width: '200px',
                    margin: '10px',
                }}>
                <div className="card">
                    <div className="card-image">
                        <Link to={`/movie/${this.props.id}`} >
                            <img
                                style={{ width: 200, height: 200 }}
                                src={this.props.movie.img} />
                        </Link>
                            <a onClick={this.props.movie.isRented === true ? this.rentMovie: this.rentMovie}
                                className="btn-floating btn-small halfway-fab waves-effect waves-light red"
                            >
                                {this.props.movie.isRented === true
                                    ? <i className="material-icons">delete</i>
                                    : <i className="material-icons">add</i>
                                }
                            </a>
                    </div>
                    </div>
                </div>

        )
    }
}
