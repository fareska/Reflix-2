import React, { Component } from 'react'

export default class CatalogInput extends Component {
    
    handleInput = e => this.props.handleInput(e.target.value)
    
    render() {
        return (
            <div className="input-field">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea"
                                    style={{ color: 'white' }}
                                    onChange={this.handleInput}
                                    value={this.props.searchVal}
                                >
                                </textarea>
                                <label htmlFor="textarea1">Search Movie</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
