import React, { useReducer, useState } from 'react';

import {
	Flex,
	Box,
	Text,
	Button
} from 'rebass';

import {
	Label,
	Input
} from '@rebass/forms';


import InputAnimated from '../InputAnimated';

type SearchBarProps = {
	handleSubmit: (data: any) => void,
}

const SearchBar: React.FC <SearchBarProps> = ({ handleSubmit }) => {

	const [state, setState] = useState({});

	const handleChange = (id: string, value:string) => {
		setState((s) => ({
			...s,
			[id]: value
		}))
	}

	const onSubmit = (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault();
		console.log(state);
		handleSubmit(state);
		// TODO: SEND TO QUERY BUILDER
	}

	return (
		<Box
			mb={2}
			sx={{
				width: '100%'
			}}
		>
			<Text fontSize={5} mb={4}>Search for a movie</Text>
			<Flex 
				mx={-2} 
				as="form"
				onSubmit={(e) => onSubmit(e)}
			>
				<Box px={2} flex={1}>
					<InputAnimated id="t" label="Title" onChange={handleChange} />
				</Box>
				<Flex 
					px={2} 
					width={1/4}
					variant="primary"
				>
					<Button flex={1}>Search</Button>
				</Flex>
			</Flex>
		</Box>
	)
}

export default SearchBar;
