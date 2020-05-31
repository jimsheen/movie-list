import React from 'react';

import LoadingSpinner from '../LoadingSpinner';
import MovieListThumb from '../MovieListThumb';

import useClient from '../../hooks/useClient';

import { singleMovieResult } from '../../utils/testData';


const FaveMovieThumb: React.FC < { id: string } > = ({ id }) => {
	const { response, isLoading } = useClient({
		params: {
			i: id,
		},
		mockData: singleMovieResult,
	});

	return (
		<React.Fragment>
			{isLoading && <LoadingSpinner />}
			{!isLoading &&
				<MovieListThumb 
					src={response.Poster}
					title={response.Title}
					year={response.Year}
					id={response.imdbID}
				/>
			}
		</React.Fragment>
	)
}


export default FaveMovieThumb;
