import React from 'react';

import RestaurantCard from './RestaurantCard.jsx'

class RestaurantList extends React.Component {
    constructor(props){
        super(props);

        this.checkScroll = this.checkScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.checkScroll);
    }

    checkScroll(){
        if(this.props.showScroll){
            let currScroll = document.body.scrollTop,
                totalHeight = document.body.scrollHeight,
                visibleHeight = document.body.clientHeight,
                scrollHeight = currScroll + visibleHeight;

            if (totalHeight <= scrollHeight) {
                this.props.onScroll(this.props.currentPage + 1);
            }
        }
    }

    render() {
        const cards = [];

        this.props.results.forEach((restaurant) => {
            cards.push(
                <RestaurantCard restaurant={ restaurant } />
            )
        });

        return (
            <div className='restaurant-list'>
                { cards }
            </div>
        )
    }
}

module.exports = RestaurantList;
