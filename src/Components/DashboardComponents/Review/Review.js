import React, { useRef, useState } from 'react';
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const [message, setMessage] = useState('');
    const {user} = useAuth();
    const reviewRef = useRef();

    // get rating
    let rating;

    const getRating = (rate) => {
        rating = rate;
    }

    // save review to database
    const saveReview = (e) => {
        e.preventDefault();
        const newReview = {
            rating,
            reviewer: user?.displayName,
            review: reviewRef?.current?.value
        }
        
        // save to db
        fetch("https://glacial-headland-75671.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                setMessage('Thanks for the review!');
            } else {
                setMessage('Review failed to save!');
            }
        })
        .catch((error) => {
            // 
        })
    }

    return (
        <div>
            <div className='max-w-3xl'>
                <h3 className='text-3xl font-medium mb-5'>Add Your Review</h3>
                <div>
                    <form onSubmit={saveReview}>
                        <textarea className='w-full p-3 border-2 border-gray-200 rounded mb-2' id="review" name="review" ref={reviewRef} placeholder="Write something.." style={{ height: "200px" }} required></textarea>
                        <Rating
                            emptySymbol="far fa-star text-yellow-400"
                            fullSymbol="fas fa-star text-yellow-400"
                            fractions={2}
                            onChange={rate => getRating(rate)}
                        />
                        <p className='font-medium text-green-500 my-3'>{message}</p>
                        <input className='block mt-3 -ml-1 text-base border-2 rounded-full py-2 px-6 bg-gray-700 cursor-pointer text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;