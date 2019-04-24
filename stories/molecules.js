import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { MessageListItem } from '../src/components/molecules'

const stories = storiesOf('molecules', module)
stories.addDecorator(withKnobs)

stories.add('MessageListItem', () => ({
  components: {
    MessageListItem
  },
  props: {
    image: {
      default: text(
        'image',
        'https://avatars2.githubusercontent.com/u/29304238?s=460&v=4'
      )
    },
    text: {
      default: text('text', '直前のメッセージの内容')
    }
  },
  methods: {
    onClick() {
      action('clicked')()
    }
  },
  template: `
	  <MessageListItem
  		:image="$props.image"
		  @click="onClick"
	  >{{ $props.text }}</MessageListItem>
	`
}))
