import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { molecules } from '../src/components'

const { MessageListItem, MessageInput, UserListItem } = molecules

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
    },
    user: {
      default: text('user', 'ユーザ名')
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
      :user="$props.user"
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

stories.add('UserListItem', () => ({
  components: {
    UserListItem
  },
  props: {
    image: {
      default: text(
        'image',
        'https://avatars2.githubusercontent.com/u/29304238?s=460&v=4'
      )
    },
    displayName: {
      default: text('user', 'ユーザ名')
    },
    name: {
      default: text('user', 'username')
    }
  },
  methods: {
    onClick() {
      action('clicked')()
    }
  },
  template: `
	  <UserListItem
      :name="$props.name"
      :displayName="$props.displayName"
      :image="$props.image"
		  @click="onClick"
	  />
	`
}))
