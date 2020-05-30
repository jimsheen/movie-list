import React, { useState } from 'react';

import { Animated } from 'react-animated-css';

import {
	Flex,
	Box,
	Image,
	Text,
	Button
} from 'rebass';

import { MovieSearchResultsType } from '../../types';

import LoadingSpinner from '../LoadingSpinner';

import MovieListThumb from '../MovieListThumb';

type MovieListProps = {
	movies: MovieSearchResultsType[] | null,
	isLoading: boolean,
	handleClick: (id: string) => void,
}

const createDelay = (index: number, total: number) => Math.abs(((total - index) - 10)) * 50;

const MovieList: React.FC < MovieListProps > = ({ movies, isLoading, handleClick }) => {

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
		    			animationInDelay={createDelay(index, movies.length)}
		    		>
							<MovieListThumb 
								src={movie.Poster}
								title={movie.Title}
								year={movie.Year}
								id={movie.imdbID}
								handleClick={() => handleClick(movie.imdbID)}
							/>
						</Animated>
					</Flex>
				</React.Fragment>
			))}
			<Flex 
				justifyContent="center" 
				alignItems="center" 
				height="150px" 
				py={4} 
				width={1}
			>
		 		{isLoading && <LoadingSpinner />}
		 	</Flex>
		</Flex>
	);
}

export default MovieList;
