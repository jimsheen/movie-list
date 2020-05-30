import React from 'react';
import { action } from '@storybook/addon-actions';

import { testMovieResults } from '../../utils/testData';

import MovieList from './MovieList';

export default {
	title: 'MovieList',
	component: MovieList,
}

const defaultProps = {
	movies: testMovieResults.Search
}

export const Default = () => <MovieList { ...defaultProps } />


export const IsLoading = () => <MovieList { ...defaultProps } isLoading={true} />
