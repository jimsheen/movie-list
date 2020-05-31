import React from 'react';
import {
	useParams
} from 'react-router-dom';

import MovieDetail from '../../components/MovieDetail';

import {
	Flex,
	Box,
} from 'rebass';

import useGetMovie from '../../hooks/useGetMovie';

import { LayoutContainer } from '../../layout';

const MovieDetailPage = () => {

	const { id } = useParams();
	const { movie, isLoading } = useGetMovie(id);

	console.log(movie, isLoading);

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
					<MovieDetail movie={movie} isLoading={isLoading} />
				</Box>
			</Flex>
		</LayoutContainer>
	);
}


export default MovieDetailPage;