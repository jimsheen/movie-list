import React from 'react';
import {
  render,
  fireEvent,
  findByText,
  screen,
} from '@testing-library/react';


import { MemoryRouter } from 'react-router-dom'

import MovieList from './';

import { testMovieResults } from '../../utils/testData';


const defaultProps = {
 	searchData: {
 		title: 'test title'
 	}
}

const setup = (props) => {
	const newProps = {
		...defaultProps,
		...props
	}
	const utils = render(<MovieList { ...newProps} />, { wrapper: MemoryRouter});
	return {
		...utils,
	}
}

describe('MovieList', () => {

	it('renders list of movies when searchData is parsed', async () => {
		const { getByText } = setup();
		const movie = await screen.findByText('The Dark Knight');
		expect(movie).toBeInTheDocument();
	})
})
