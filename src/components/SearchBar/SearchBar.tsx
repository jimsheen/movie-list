import React, { useState } from 'react';
import {
	Flex,
	Box,
	Text,
	Button
} from 'rebass';

import { SearchDataType } from '../../types';

import InputAnimated from '../InputAnimated';

type SearchBarProps = {
	handleSubmit: (data: SearchDataType | {}) => void,
	isSearching: boolean,
}

const SearchBar: React.FC <SearchBarProps> = ({ handleSubmit, isSearching }) => {

	const [state, setState] = useState({});

	const handleChange = (id: string, value:string) => {
		setState((s) => ({
			...s,
			[id]: value
		}))
	}

	const onSubmit = (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault();
		if (Object.keys(state).length > 0) handleSubmit(state);
	}

	return (
		<Box
			mb={2}
			sx={{
				width: '100%'
			}}
		>
			<Text 
				fontSize={isSearching ? 3 : 5} 
				mb={4}
				sx={{
					transition: 'font-size 800ms',
				}}
			>
				Search for a movie
			</Text>
			<Flex 
				mx={-2} 
				as="form"
				onSubmit={(e) => onSubmit(e)}
				flexWrap="wrap"
			>
				<Box px={2} flex={['auto', 1]} width={1}>
					<InputAnimated id="s" label="Title" onChange={handleChange} />
				</Box>
				<Flex 
					px={2} 
					width={[1, 1/6]}
					variant="primary"
				>
					<Button flex={1}>Search</Button>
				</Flex>
			</Flex>
		</Box>
	)
}

export default SearchBar;
