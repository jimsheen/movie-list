import React from 'react';
import { action } from '@storybook/addon-actions';

import { testMovieResults } from '../../utils/testData';

import MovieList from './MovieList';

import MovieListThumb from '../MovieListThumb';

export default {
	title: 'MovieList',
	component: MovieList,
}

const defaultProps = {
	movies: testMovieResults.Search,
	render: (movie) => (
		<MovieListThumb 
			src={movie.Poster}
			title={movie.Title}
			year={movie.Year}
			id={movie.imdbID}
		/>
	)
}

export const Default = () => <MovieList { ...defaultProps } />


export const IsLoading = () => <MovieList { ...defaultProps } isLoading={true} />
