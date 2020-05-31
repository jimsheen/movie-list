import React from 'react';

import {
	Flex,
	Text,
	Box,
	Image
} from 'rebass';

import { Link } from 'react-router-dom';

type MovieListThumbProps = {
	src: string,
	title: string,
	year: string,
	id: string,
};

const MovieListThumb: React.FC < MovieListThumbProps > = ({
	src,
	title,
	year,
	id,
}) => {
	return (
		<Flex 
			flexWrap="wrap"
			flexDirection={['column-reverse', 'column']}
			height="100%"
		>
			<Box
				width={1}
				sx={{
					flex: '1 0 auto',
					display: 'flex',
					cursor: 'pointer',
					background: 'none',
					padding: 0,
					outline: 'none',
					'> a': {
						width: '100%'
					}
				}}
			>
			<Link to={`/movie/${id}`}>
				<Image 
					src={src} 
					alt={`${title} Poster Image`}
					width={1}
					sx={{
						flex: '1 0 auto',
						transition: 'transform 0.2s',
						'&:hover': {
							transform: 'scale(1.05)'
						}
					}}
				/>
				</Link>
			</Box>
			<Box mb={[3, 0]}>
				<Text fontWeight="bold" fontSize={[4, 2]} mt={2}>{title}</Text>
				<Text fontSize={[3, 1]}>{year}</Text>
			</Box>
		</Flex>
	)
}

export default MovieListThumb;
