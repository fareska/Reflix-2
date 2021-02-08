import React, { Component } from 'react'

export default class Movie extends Component {
    render() {

        let movie = {
            id: 0, isRented: false, title: "Tarzan", year: 1999,
            img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
            descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out."
        }


        return (
            <div className='Movie' >
                <img style={{width:200, height:200}} src={movie.img} alt=""/>
            </div>
        )
    }
}
