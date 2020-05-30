import React from 'react';

import {
	Flex,
	Box
} from 'rebass';

import { LayoutContainer } from '../../layout';

const MovieDetail = () => {


	return (
		<LayoutContainer>
			<Flex 
				alignItems="center" 
				justifyContent="center"
			>
				<Box
					width={1}
				>
					<p>Almost there! ;)</p>
				</Box>
			</Flex>
		</LayoutContainer>
	);
}


export default MovieDetail;