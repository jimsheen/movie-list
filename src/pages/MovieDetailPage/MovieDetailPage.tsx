import React from 'react';
import {
	useParams,
	Link
} from 'react-router-dom';

import { Animated } from 'react-animated-css';

import MovieDetail from '../../components/MovieDetail';

import { singleMovieResult } from '../../utils/testData';

import {
	Flex,
	Box,
	Text
} from 'rebass';

import useClient from '../../hooks/useClient';

const MovieDetailPage = () => {

	const { id } = useParams();
	const { response, isLoading } = useClient({
		params: {
			i: id,
		},
		mockData: singleMovieResult,
	});

	return (
		<Flex 
			justifyContent="center"
			height="100%"
		>
			<Box
				width={1}
			>
				<Animated
					animationIn="fadeIn"
					animationOut="fadeOut"
					isVisible={true}
					animationInDelay={500}
				>
					<Link to="/">
		  			<Text fontSize={2} my={4}>Back to search</Text>
		  		</Link>
		  		<Text fontSize={[4, 6]} mb={4}>{response.Title}</Text>
					<MovieDetail movie={response} isLoading={isLoading} />
				</Animated>
			</Box>
		</Flex>
	);
}


export default MovieDetailPage;