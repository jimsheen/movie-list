import React from 'react';
import { testMovieResults } from '../../utils/testData';
import { SearchDataType, AtLeastOne } from '../../types';

import useGetMovies from '../../hooks/useGetMovies';

import MovieList from './MovieList';

type MovieListContainerProps = {
	searchData: AtLeastOne<SearchDataType | null>
}

const MovieListContainer: React.FC<MovieListContainerProps> = ({ searchData }) => {

	console.log(searchData);

	const { movies, totalResults, isLoading } = useGetMovies(searchData);

	console.log(movies, totalResults, isLoading);

	return (
		
		<React.Fragment>
			<MovieList movies={movies} isLoading={isLoading} />
		</React.Fragment>
	)
}

export default MovieListContainer;