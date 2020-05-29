import requireContext from 'require-context.macro';
import { configure, addDecorator } from "@storybook/react"
import { ThemeDecorator } from "../src/theme"
// automatically import all files ending in *.stories.js

addDecorator(ThemeDecorator);

const req = requireContext('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
