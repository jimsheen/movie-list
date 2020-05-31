import React from 'react';

import { Animated } from 'react-animated-css';

import './LoadingSpinner.css';

const LoadingSpinner = () => (
	<Animated
		animationIn="fadeIn"
		animationOut="fadeOut"
		isVisible={true}
	>
		<div className="loading-spinner">
			<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
		</div>
	</Animated>
)

export default LoadingSpinner;