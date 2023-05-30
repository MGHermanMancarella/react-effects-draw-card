import React from "react"

function Card({ card }) {
    
    console.log('card.js card =>', card);
    
    return (
        <div>
            <img src={card.cards[0].image}></img>
        </div>
    )
}

export default Card