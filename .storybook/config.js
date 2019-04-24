import { configure } from '@storybook/vue'
require('../src/_base.scss')

function loadStories() {
  require('../stories/atoms.js')
  require('../stories/molecules.js')
  require('../stories/organisms.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)