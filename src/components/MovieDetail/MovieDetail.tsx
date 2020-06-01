import React from 'react';
import {
	Text,
	Box,
	Flex,
	Image,
} from 'rebass';
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
					<Text fontSize={[4, 6]} mb={[3,4]}>{movie.Title}</Text>
					<Flex
						mx={-4}
						flexDirection={['column-reverse', 'row']}
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
						<Box 
							width={[1, 1/2]}
							px={4}
						>
							<Text fontSize={[2, 3]} mb={[3, 0]}>
								{movie.Plot}
							</Text>
						</Box>
					</Flex>
				</React.Fragment>
			}
		</React.Fragment>
	)
}

export default MovieDetail
