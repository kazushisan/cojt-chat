import { storiesOf } from '@storybook/vue'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Button } from '../src/components/atoms'

const stories = storiesOf('atoms', module)
stories.addDecorator(withKnobs)

stories.add('Button', () => ({
  components: {
    Button
  },
  props: {
    name: {
      default: text('name', '名前')
    },
    color: {
      default: select('color', ['normal', 'primary'], 'normal')
    }
  },
  methods: {
    onClick() {
      action('clicked')()
    }
  },
  template: `
    <Button
      :color="$props.color"
      @click="onClick"
    >{{ $props.name }}</Button>
  `
}))
