import React from 'react';

import { Animated } from 'react-animated-css';

import {
	Flex,
} from 'rebass';

import { MovieSearchResultsType } from '../../types';

import LoadingSpinner from '../LoadingSpinner';

type MovieListProps = {
	movies: MovieSearchResultsType[] | string[] | null,
	isLoading: boolean,
	render: (movie: any) => React.ReactNode,
}

const createDelay = (index: number, total: number) => Math.abs(((total - index) - 10)) * 50;

const MovieList: React.FC < MovieListProps > = ({ movies, isLoading, render }) => {

	return (
		<Flex mx={-2} flexWrap="wrap">
			{movies && movies.length > 0 && (movies as Array<MovieSearchResultsType | string>).map((movie, index: number) => (
				<React.Fragment key={index}>
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
		    			{render(movie)}
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
