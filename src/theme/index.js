import React from "react"
import { ThemeProvider } from 'emotion-theming'
import { default as defaultTheme } from '@rebass/preset'

import '../index.css';

export const theme = {
	...defaultTheme,
	colors: {
		blue: '#2a8ed2',
		blueHover: '#2475ad',
		green: '#77dd77',
		red: '#FF6961',
	},
	buttons: {
    primary: {
			borderRadius: 0,
      color: 'white',
      bg: 'blue',
    }
  }
}

export const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export { ThemeProvider } 