import React from 'react';
import {
	useParams,
	Link
} from 'react-router-dom';

import { Animated } from 'react-animated-css';

import MovieDetail from '../../components/MovieDetail';
import StyledLink from '../../components/StyledLink';

import { singleMovieResult } from '../../utils/testData';

import {
	Flex,
	Box
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
					<StyledLink fontSize={2} my={4}>
		  			<Link to="/">Back to search</Link>
		  		</ StyledLink>
					<MovieDetail movie={response} isLoading={isLoading} />
				</Animated>
			</Box>
		</Flex>
	);
}


export default MovieDetailPage;