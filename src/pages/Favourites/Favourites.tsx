import React from 'react';
import {
	Link
} from 'react-router-dom';

import { Animated } from 'react-animated-css';

import MovieList from '../../components/MovieList/MovieList';
import FaveMovieThumb from '../../components/FaveMovieThumb';

import {
	Flex,
	Box,
	Text
} from 'rebass';

const Favourites = () => {

	// array of fave ids pass to movie list 

	const faveMovieIds = [
		'tt1375666',
		'tt0137523',
		'tt0246578',
		'tt0456554',
		'tt0209144',
		'tt0133093',
		'tt0115798',
		'tt0120735',
		'tt0144084',
		'tt0093894',
	];

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
		  		<Text fontSize={[4, 6]} mb={4}>My Favourites</Text>
					<MovieList 
						movies={faveMovieIds}
						isLoading={false}
						render={(movie) => <FaveMovieThumb id={movie} />}
					/>
				</Animated>
			</Box>
		</Flex>
	);
}

export default Favourites;
