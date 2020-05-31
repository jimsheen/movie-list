import React from 'react';
import {
	Text,
	Box,
	Flex,
	Image,
} from 'rebass';
import { Animated } from 'react-animated-css';
import { isEmpty } from 'lodash';

import LoadingSpinner from '../LoadingSpinner';

type MovieDetailProps = {
	movie: any,
	isLoading: boolean,
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, isLoading }) => {

	return (
		<React.Fragment>
			{isLoading && <LoadingSpinner />}
			{!isLoading && !isEmpty(movie) &&
				<React.Fragment>
				<Animated
		  			animationIn="fadeIn"
		  			animationOut="fadeOut"
		  			isVisible={true}
		  		>
					<Text fontSize={6} mb={4}>
						{movie.Title}
					</Text>
					<Flex
						mx={-4}
						flexDirection={['column', 'row']}
					>
						<Box 
							px={4}
							width={[1, 1/2]}
						>
							<Image 
								src={movie.Poster} 
								alt={`${movie.Title} Poster Image`}
								width={1}
							/>
						</Box>
						<Box width={[1, 1/2]}>
							<Text fontSize={4}>
								{movie.Plot}
							</Text>
						</Box>
					</Flex>
					</Animated>
				</React.Fragment>
			}
		</React.Fragment>
	)
}

export default MovieDetail
