import React from 'react';
import {
  render,
  fireEvent,
  getByLabelText
} from '@testing-library/react';


import InputAnimated from './';

const defaultProps = {
  id: 'testID',
  label: 'testName',
  onChange: jest.fn(),
}

const setup = (props) => {
	const newProps = {
		...defaultProps,
		...props
	}
	const utils = render(<InputAnimated { ...newProps} />);
	const input = utils.getByLabelText(newProps.label);
	return {
		input,
		...utils,
	}
}

describe('InputAnimated', () => {

	it('renders an input and label', () => {
		const { input } = setup();
		expect(input).toBeInTheDocument();
	})

	it('updates value on change', () => {
		const { input } = setup();
		const value = 'Dark Knight Rises';
		fireEvent.change(input, { target: { value }});
		expect(input.value).toBe(value);
	})
})
