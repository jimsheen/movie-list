import React from 'react';
import { action } from '@storybook/addon-actions';

import InputAnimated from './';

export default {
	title: 'InputAnimated',
	component: InputAnimated,
}

const defaultProps = {
	id: 'testID',
	name: 'testName',
	onChange: action('onChange'),
}

export const Default = () => <InputAnimated { ...defaultProps } />