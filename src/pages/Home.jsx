import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import './Home.css';

const Home = () => {
    const [movies, setMovies] = React.useState([]);
    const apiKey = '524781d7e2c283374fc01b4b3aadd22e';

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
            const data = await response.json();
            setMovies(data.results);
        };
        fetchMovies().then(r => console.log('Movies fetched'));
    }, []);

    return (
        <div className="home-container">
            <Navbar />
            <h1 className="header">Popular Movies</h1>
            <div className="movie-list">
                {movies.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;