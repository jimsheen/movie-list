import React from 'react';
import { action } from '@storybook/addon-actions';

import SearchBar from './';

export default {
	title: 'SearchBar',
	component: SearchBar,
}

const defaultProps = {
	onSubmit: action('onSubmit'),
}

export const Default = () => <SearchBar { ...defaultProps } />


// import AnswerButtons from './';

// export default {
//   title: 'AnswerButtons',
//   component: AnswerButtons,
// };

// const props = {
// 	answers: ['One', 'Two', 'Three', 'Four'],
// 	selectAnswer: action('clicked'),
// };

// export const Default = () => <AnswerButtons { ...props } />


// const longString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti molestias doloribus tenetur officia ipsum, ipsam cum quidem excepturi, maxime, eligendi temporibus debitis doloremque dolor. Id itaque aspernatur, ipsa nulla.';
// const longAnswers = ['One', 'Two', 'Three', longString];
// export const LongButtonText = () => <AnswerButtons { ...props } answers={longAnswers} />
