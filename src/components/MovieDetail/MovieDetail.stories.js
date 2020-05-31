import React from 'react';
import { action } from '@storybook/addon-actions';

import { singleMovieResult } from '../../utils/testData';

import MovieDetail from './MovieDetail';

export default {
	title: 'MovieDetail',
	component: MovieDetail,
}

const defaultProps = {
	movie: singleMovieResult
}

export const Default = () => <MovieDetail { ...defaultProps } />


export const IsLoading = () => <MovieDetail { ...defaultProps } isLoading={true} />

