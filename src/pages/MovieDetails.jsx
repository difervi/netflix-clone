import React from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Movie Details</h1>
            <p>Movie details {id}</p>
        </div>
    );
};

export default MovieDetails;