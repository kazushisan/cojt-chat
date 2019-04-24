import { configure } from '@storybook/vue'

function loadStories() {
  require('../stories/atoms.js')
  require('../stories/molecules.js')
  require('../stories/organisms.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)