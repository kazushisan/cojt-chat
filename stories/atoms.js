import { storiesOf } from '@storybook/vue'
import {
  withKnobs,
  select,
  text,
  boolean,
  array,
  number,
  optionsKnob
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { atoms } from '../src/components'

const { Button, Input, SelectBox, ChatBubble, UserImage } = atoms

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

stories.add('SelectBox', () => ({
  components: {
    SelectBox
  },
  props: {
    disabled: {
      default: boolean('disabled', false)
    },
    options: {
      default: array('string', [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C'}
      ])
    }
  },
  template: `
    <div style="margin: 20px;">
      <SelectBox
        :disabled="$props.disabled"
      >
      <option hidden>選択してください</option>     
      <option v-for="choice in $props.options" value="choice.value">
        {{ choice.text }}
      </option>
      </SelectBox>
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
