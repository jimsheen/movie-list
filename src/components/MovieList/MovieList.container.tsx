import React from 'react';
import { testMovieResults } from '../../utils/testData';
import { SearchDataType, AtLeastOne } from '../../types/';

import {
	useHistory
} from 'react-router-dom';

import useGetMovies from '../../hooks/useGetMovies';

import MovieList from './MovieList';

type MovieListContainerProps = {
	searchData: SearchDataType | null
}

const MovieListContainer: React.FC < MovieListContainerProps > = ({ searchData }) => {

	console.log(searchData);

	const history = useHistory();

	const handleClick = (id: string) => {
		console.log('handleClick', id);
		history.push(`/${id}`);
	}

	const { movies, totalResults, isLoading } = useGetMovies(searchData);

	console.log(movies, totalResults, isLoading);

	return (

		<React.Fragment>
			<MovieList movies={movies} isLoading={isLoading} handleClick={handleClick}/>
		</React.Fragment>
	)
}

export default MovieListContainer;
