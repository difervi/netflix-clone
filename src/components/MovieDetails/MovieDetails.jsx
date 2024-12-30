import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './MovieDetails.css';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const apiKey = '524781d7e2c283374fc01b4b3aadd22e';

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
                const data = await response.json();
                console.log(data); // Log the response data
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
        fetchMovieDetails();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <h3>Cast</h3>
            <ul>
                {movie.credits?.cast?.map((actor) => (
                    <li key={actor.cast_id}>{actor.name} as {actor.character}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieDetails;