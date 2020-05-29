import React, { useState } from 'react';

import {
	Box
} from 'rebass';

import {
	Label,
	Input
} from '@rebass/forms';


interface InputAnimatedProps {
	onChange: (id: string, value: string) => void;
	label: string,
	id?: string,
}

const InputAnimated: React.FC < InputAnimatedProps > = ({ id, label, onChange }) => {

	const [hasFocus, setFocus] = useState(false);
	const [value, setValue] = useState('');

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { value, id } = e.target;
		if (onChange) onChange(id, value);
		setValue(e.target.value);
		setFocus(true);
	}

	let topPos = '8px';
	let fontSize = 3;

	if (value.length > 0 || hasFocus) {
		topPos = '-20px';
		fontSize = 2;
	}

	const inputName = id ? id : label;

	return (
		<Box
			sx={{
				width: '100%',
				position: 'relative',
			}}
		>
			<Label 
				htmlFor={inputName} 
				mb={2} 
				fontSize={fontSize}
				sx={{
					position: 'absolute',
					top: topPos,
					width: 'auto',
					transition: 'all 0.2s',
				}}
			>
				{label}
			</Label>
	    <Input 
	      name={inputName} 
	      id={inputName}
	      onChange={(e) => handleChange(e)}
	      onFocus={() => setFocus(true)}
	      onBlur={() => setFocus(false)}
	      type="text" 
	      value={value}
	      fontSize={3}
	      px={0}
	      sx={{
	      	border: 0,
	      	borderBottom: '1px solid lightgray',
	      	outline: 'none'
	      }}
	     />
		</Box>
	)
}

export default InputAnimated;
