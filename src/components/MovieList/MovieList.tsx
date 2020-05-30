import React, { useEffect, useState } from 'react';

import { Animated } from 'react-animated-css';

import {
	Flex,
	Box,
	Image,
	Text
} from 'rebass';

import { MovieSearchResultsType } from '../../types';

import LoadingSpinner from '../LoadingSpinner';

type MovieListProps = {
	movies: MovieSearchResultsType[] | null,
	isLoading: boolean,
}


const MovieList: React.FC <MovieListProps> = ({ movies, isLoading }) => {
	console.log(movies);

	const [delayIndex, setDelayIndex] = useState(0);

	useEffect(() => {
		setDelayIndex(0);
	}, [isLoading])

	const createDelay = (index: number) => {
		if (movies) {
			return Math.abs(((movies.length - index) - 10)) * 100;
		}
		return 0;
	} 

	return (
		<Flex mx={-2} flexWrap="wrap">
			{movies && movies.map((movie: MovieSearchResultsType, index: number) => (
				<React.Fragment>
					<Flex 
						px={2}
						mb={[4, 3]} 
						width={[1, 1/3, 1/5]}
						justifyContent={['center', 'auto']}
						flexWrap="wrap"
						sx={{
							' > .animated': {
								flex: 1
							}
						}}
					>
						<Animated
		    			animationIn="fadeInUp"
		    			animationOut="fadeOut"
		    			isVisible={true}
		    			animationInDelay={createDelay(index)}
		    		>
							<Flex 
								flexWrap="wrap"
								flexDirection={['column-reverse', 'column']}
								height="100%"
							>
									<Image 
										src={movie.Poster} 
										alt={`${movie.Poster} Poster Image`}
										width={1}
										sx={{
											flex: '1 0 auto',
										}}
									/>
									<Box mb={[3, 0]}>
										<Text fontWeight="bold" fontSize={[4, 2]} mt={2}>{movie.Title}</Text>
										<Text fontSize={[3, 1]}>{movie.Year}</Text>
									</Box>
								</Flex>
							</Animated>
						</Flex>
					</React.Fragment>
				))}
				<Box my={4} width={1}>
			 		{isLoading && <LoadingSpinner />}
			 </Box>
		</Flex>
	);
}

export default MovieList;