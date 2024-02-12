import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import MovieList from './MovieList';
import Description from './Description';

const Home = ({ movies }) => {
  return (
    <div className="home">
      <h1>Movie Library</h1>
      <MovieList movies={movies} />
    </div>
  );
};



const App = () => {
  
  const movies = [
    {
      movieId: 1,
      title: 'The Beekeeper',
      description: 'Action, Thriller',
      posterURL: 'https://www.mmacrossfire.com/wp-content/uploads/2023/10/the-beekeeper_banner.jpg.webp',
      rating: 6.5,
      trailerLink: 'https://youtu.be/SzINZZ6iqxY?si=Z4ztE7J067qDU82C'
    },
    {
      movieId: 2,
      title: 'The Hill',
      description: 'Biograghy, Drama.',
      posterURL: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/08/the-hill-movie-with-dennis-quaid.jpg',
      rating: 6.7,
      trailerLink: 'https://www.imdb.com/video/vi1816511513/?playlistId=tt8051894&ref_=tt_ov_vi'
    },
    {
      movieId: 3,
      title: 'Origin',
      description: 'History, Drama',
      posterURL: 'https://www.dailycamera.com/wp-content/uploads/2024/01/ENTER-ORIGIN-MOVIE-REVIEW-1-MCT-1.jpg?w=1190',
      rating: 7.3,
      trailerLink: 'https://www.imdb.com/video/vi4194944793/?playlistId=tt13321244&ref_=tt_pr_ov_vi'
    },
    {
      movieId: 4,
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'https://assets.cdn.moviepilot.de/files/1855b0d706236cc4b7bde6a5cd5ae2e0909cdf0c927e696a5b45cb77c520/limit/1024/2000/inception-19.jpg',
      rating: 8.2,
      trailerLink: 'https://www.imdb.com/video/vi4194944793/?playlistId=tt13321244&ref_=tt_pr_ov_vi'
    },
    {
      movieId: 5,
      title: '12th Fail',
      description: 'Biograghy, Drama',
      posterURL: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/12th-fail-et00363787-1698316138.jpg',
      rating: 9.2,
      trailerLink: 'https://www.imdb.com/video/vi1088210713/?ref_=nv_sr_srsg_1_tt_3_nm_1_q_12th%20fail'
    }
  ];

  return (
    <Router>
      <div>
        <Routes>
            <Route path="/" exact element={ <Home movies={movies} /> } />
            <Route path="/description/:movieId" element= {<Description movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;