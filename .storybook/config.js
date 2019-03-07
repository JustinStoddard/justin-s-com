import { configure } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
