import { storiesOf } from '@storybook/vue'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Button, Input, ChatBubble } from '../src/components/atoms'

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

stories.add('Input', () => ({
  components: {
    Input
  },
  data() {
    return {
      value: text('value', '入力')
    }
  },
  template: `
    <Input v-model="$data.value" />
  `
}))

stories.add('ChatBubble', () => ({
  components: {
    ChatBubble
  },
  props: {
    value: {
      default: text('value', 'メッセージの内容')
    },
    fromMe: {
      default: boolean('fromMe', false)
    }
  },
  template: `
    <ChatBubble :fromMe="$props.fromMe">{{ $props.value }}</ChatBubble>
  `
}))
