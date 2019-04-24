import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { MessageListItem, MessageInput } from '../src/components/molecules'

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

stories.add('MessageInput', () => ({
  components: {
    MessageInput
  },
  props: {
    buttonText: {
      default: text('buttonText', '送信')
    },
    placeholder: {
      default: text('placeholder', 'メッセージを入力...')
    }
  },
  methods: {
    onSend() {
      action('message sent')(this.$data.value)
    }
  },
  data() {
    return {
      value: ''
    }
  },
  template: `
    <MessageInput
      v-model="$data.value"
      :buttonText="$props.buttonText"
      :placeholder="$props.placeholder"
      @send="onSend"
    />
	`
}))
