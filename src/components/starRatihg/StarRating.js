import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const StarRating = ({rating}) => {
    return (
        <div>
            <StarRatings
                rating={0.5*rating}
                starRatedColor="blue"
                numberOfStars={5}
                name='rating'
                starDimension="20px"
                starSpacing="2px"
            />
        </div>
    );
};

export  {StarRating};