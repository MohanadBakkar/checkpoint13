import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'The Beekeeper',
      description: 'Action, Thriller',
      posterURL: 'https://www.mmacrossfire.com/wp-content/uploads/2023/10/the-beekeeper_banner.jpg.webp',
      rating: 6.5
    },
    {
      title: 'The Hill',
      description: 'Biograghy, Drama.',
      posterURL: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/08/the-hill-movie-with-dennis-quaid.jpg',
      rating: 6.7
    },
    {
      title: 'Origin',
      description: 'History, Drama',
      posterURL: 'https://www.dailycamera.com/wp-content/uploads/2024/01/ENTER-ORIGIN-MOVIE-REVIEW-1-MCT-1.jpg?w=1190',
      rating: 7.3
    },
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'https://assets.cdn.moviepilot.de/files/1855b0d706236cc4b7bde6a5cd5ae2e0909cdf0c927e696a5b45cb77c520/limit/1024/2000/inception-19.jpg',
      rating: 4.5
    },
    {
      title: '12th Fail',
      description: 'Biograghy, Drama',
      posterURL: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/12th-fail-et00363787-1698316138.jpg',
      rating: 9.2
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState('');

  const handleTitleChange = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleRateChange = (event) => {
    setFilterRate(event.target.value);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRate === '' || movie.rating >= parseFloat(filterRate))
  );

  return (
    <div className="app">
      <Filter
        filterTitle={filterTitle}
        filterRate={filterRate}
        onTitleChange={handleTitleChange}
        onRateChange={handleRateChange}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;