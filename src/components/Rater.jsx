import React from "react";
import Styled from "styled-components";

const StyledRater = Styled.div`
    font-size: 42px;
    color: blue;
    @media (max-width: 768px) {
        font-size: 24px;
        color: green;
    }
`;

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
        <StyledRater>
            {items}
        </StyledRater>
    );
}

export default Rater;





/*styled components*/
