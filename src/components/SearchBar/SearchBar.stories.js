import React from 'react';
import { action } from '@storybook/addon-actions';

import SearchBar from './';

export default {
	title: 'SearchBar',
	component: SearchBar,
}

const defaultProps = {
	handleSubmit: action('handleSubmit'),
}

export const Default = () => <SearchBar { ...defaultProps } />
