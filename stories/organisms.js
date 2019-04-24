import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { organisms } from '../src/components'

const { Header } = organisms

const stories = storiesOf('organisms', module)
stories.addDecorator(withKnobs)

stories.add('Header', () => ({
  components: {
    Header
  },
  template: `
	  <Header />
	`
}))
