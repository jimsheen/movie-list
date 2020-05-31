import React from 'react';
import { SearchDataType } from '../../types/';

import {
	useHistory
} from 'react-router-dom';

import useGetMovies from '../../hooks/useGetMovies';

import MovieList from './MovieList';

type MovieListContainerProps = {
	searchData: SearchDataType | null
}

const MovieListContainer: React.FC < MovieListContainerProps > = ({ searchData }) => {

	const { movies, isLoading } = useGetMovies(searchData);
	const history = useHistory();
	
	const handleClick = (id: string) => {
		console.log('handleClick', id);
		history.push(`/${id}`);
	}

	return (
		<React.Fragment>
			<MovieList movies={movies} isLoading={isLoading} handleClick={handleClick}/>
		</React.Fragment>
	)
}

export default MovieListContainer;
