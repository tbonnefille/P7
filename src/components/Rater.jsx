import React from "react";

function Rater(props) {
    const rating = props.rating;
    const items = [];
    
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            items.push(<span key={i}>&#9733;</span>);
        } else {
            items.push(<span key={i}>&#9734;</span>);
        }
    }
    
    return (
        <div>
            {items}
        </div>
    );
}

export default Rater;