import React from 'react';
import {
	useParams
} from 'react-router-dom';

import MovieList from '../../components/MovieList/MovieList';

import { singleMovieResult } from '../../utils/testData';

import {
	Flex,
	Box,
} from 'rebass';

import useClient from '../../hooks/useClient';

import { LayoutContainer } from '../../layout';

const Favourites = () => {

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
					<p>tewanete</p> 
				</Box>
			</Flex>
		</LayoutContainer>
	);
}

// const FaveMovie = () => {
// 	const { response, isLoading } = useClient({
// 		params: {
// 			i: 'c8fe301c',
// 		},
// 		mockData: singleMovieResult,
// 	});

// 	useEffect(() => {
		
// 	}, [])

// 	return null
// }

// const FaveMovieMap = () => {
	
// }


export default Favourites;