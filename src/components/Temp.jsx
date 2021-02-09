import React, { Component } from 'react'


export default class Temp extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m1">
                    <div className="card">
                        <div className="card-image">
                            <img
                            style={{width:200, height:200}}
                            src="https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811"/>
                                {/* <span className="card-title">Card Title</span> */}
                                <a className="btn-floating btn-small halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                                {/* <div className="card-content">
                                    <p style={{color:'black'}}>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
