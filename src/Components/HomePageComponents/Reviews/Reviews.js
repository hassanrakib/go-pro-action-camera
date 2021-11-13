import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Rating from 'react-rating';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://glacial-headland-75671.herokuapp.com/reviews")
            .then(res => res.json())
            .then(reviews => setReviews(reviews));
    }, []);
    return (
        <div className='my-16 container mx-auto'>
            <h2 className='text-4xl text-center mb-8'>User Reviews</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {
                    reviews.map(review => <div
                        className='review shadow-lg max-w-md flex items-center justify-center p-4'
                        key={review?._id}>
                        <div>
                            <p className='text-lg text-center'>{review?.review.slice(0, 100)}</p>
                            <div className='text-center mt-3'>
                                <Rating
                                    initialRating={review?.rating}
                                    emptySymbol="far fa-star text-yellow-400"
                                    fullSymbol="fas fa-star text-yellow-400"
                                    readonly
                                />
                            </div>
                            <h4 className='text-xl mt-8 text-center'>- {review?.reviewer}</h4>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;