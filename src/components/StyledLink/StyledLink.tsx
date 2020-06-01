import React from 'react';

import { Text, TextProps } from 'rebass';

const StyledLink: React.FC<TextProps> = (props) => {

	return (
		<Text 
			{ ...props }
			sx={{
				'> a, > a:visited': {
					textDecoration: 'none',
					color: '#333',
					borderBottom: '1px solid #333',
					paddingBottom: '1px',
					display: 'inlineBlock',
					transition: 'border-color 0.2s, color 0.2s',
				},
				'> a:hover': {
					borderColor: '#d8d8d8',
					color: '#d8d8d8',
				}
			}}
		>
			{props.children}
		</Text>
	)
}

export default StyledLink