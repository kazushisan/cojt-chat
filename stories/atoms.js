import { storiesOf } from '@storybook/vue'
import {
  withKnobs,
  select,
  text,
  boolean,
  number
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { atoms } from '../src/components'

const { Button, Input, ChatBubble, UserImage } = atoms

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
    },
    disabled: {
      default: boolean('disabled', false)
    }
  },
  methods: {
    onClick() {
      action('clicked')()
    }
  },
  template: `
    <div style="margin: 20px;">
      <Button
        :color="$props.color"
        :disabled="$props.disabled"
        @click="onClick"
      >{{ $props.name }}</Button>
    </div>
  `
}))

stories.add('Input', () => ({
  components: {
    Input
  },
  props: {
    placeholder: {
      default: text('placeholder', '文字を入力する...')
    },
    disabled: {
      default: boolean('disabled', false)
    },
    type: {
      default: select('type', ['text', 'password'], 'text')
    }
  },
  data() {
    return {
      value: ''
    }
  },
  template: `
    <div style="margin: 20px;">
      <Input
        v-model="$data.value"
        :placeholder="$props.placeholder"
        :disabled="$props.disabled"
        :type="$props.type"
      />
    </div>
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
    <div style="margin: 20px;">
      <ChatBubble
        :fromMe="$props.fromMe"
        :date="new Date()"
      >{{ $props.value }}</ChatBubble>
    </div>
  `
}))

stories.add('UserImage', () => ({
  components: {
    UserImage
  },
  props: {
    image: {
      default: text(
        'image',
        'https://avatars2.githubusercontent.com/u/29304238?s=460&v=4'
      )
    },
    width: {
      default: number('width', 120)
    }
  },
  template: `
    <UserImage
      :image="$props.image"
      :width="$props.width"
    />
  `
}))
