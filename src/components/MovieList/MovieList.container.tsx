import React from 'react';
import { SearchDataType } from '../../types/';

import useGetMovies from '../../hooks/useGetMovies';

import MovieList from './MovieList';
import MovieListThumb from '../MovieListThumb';

type MovieListContainerProps = {
	searchData: SearchDataType | null
}

const MovieListContainer: React.FC < MovieListContainerProps > = ({ searchData }) => {

	const { movies, isLoading } = useGetMovies(searchData);

	return (
		<React.Fragment>
			<MovieList 
				movies={movies} 
				isLoading={isLoading} 
				render={(movie) => (
					<MovieListThumb 
						src={movie.Poster}
						title={movie.Title}
						year={movie.Year}
						id={movie.imdbID}
					/>
				)}
			/>
		</React.Fragment>
	)
}

export default MovieListContainer;
