import { configure, addDecorator } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import 'semantic-ui-css/semantic.min.css';

function loadStories() {
  require('../src/stories');
}

addDecorator(withInfo);
addDecorator(withKnobs);

configure(loadStories, module);
