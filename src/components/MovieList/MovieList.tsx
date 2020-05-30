import React from 'react';

import { Animated } from 'react-animated-css';

import {
	Flex,
	Box,
	Image,
	Text
} from 'rebass';

type MovieSearchResultsType = {
	Year: string,
	Title: string,
	imdbID: string,
	Type: string,
	Poster: string,
}

type MovieListProps = {
	movies: MovieSearchResultsType[]
}


const MovieList: React.FC <MovieListProps> = ({ movies }) => {
	console.log(movies);
	return (
		<Flex mx={-2} flexWrap="wrap">
			{movies && movies.map((movie: MovieSearchResultsType, index: number) => (
				<React.Fragment>
				<Flex 
					px={2}
					mb={2} 
					width={1/5} 
					flexWrap="wrap"
				>
					<Animated
	    			animationIn="fadeInUp"
	    			animationOut="fadeOut"
	    			isVisible={true}
	    			animationInDelay={(index + 1) * 100}
	    		>
						<Flex 
							flexWrap="wrap"
							flexDirection="column"
							height="100%"
						>
								<Image 
									src={movie.Poster} 
									alt={`${movie.Poster} Poster Image`} 
									sx={{
										flex: '1 0 auto',
									}}
								/>
								<Text fontWeight="bold" mt={2}>{movie.Title}</Text>
								<Text fontSize={1}>{movie.Year}</Text>
							</Flex>
						</Animated>
						</Flex>
				</React.Fragment>
			))}
		</Flex>
	);
}

export default MovieList;