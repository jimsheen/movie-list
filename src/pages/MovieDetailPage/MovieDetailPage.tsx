import React from 'react';
import {
	useParams
} from 'react-router-dom';

import MovieDetail from '../../components/MovieDetail';

import { singleMovieResult } from '../../utils/testData';

import {
	Flex,
	Box,
} from 'rebass';

import useClient from '../../hooks/useClient';

import { LayoutContainer } from '../../layout';

const MovieDetailPage = () => {

	const { id } = useParams();
	const { response, isLoading } = useClient({
		params: {
			i: id,
		},
		mockData: singleMovieResult,
	});

	return (
		<LayoutContainer>
			<Flex 
				alignItems="center"
				justifyContent="center"
				height="100%"
			>
				<Box
					width={1}
				>
					<MovieDetail movie={response} isLoading={isLoading} />
				</Box>
			</Flex>
		</LayoutContainer>
	);
}


export default MovieDetailPage;