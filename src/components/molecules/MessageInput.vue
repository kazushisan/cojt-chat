<template lang="pug">
  div
    .message-input
      textarea.message-input__area(
        :value="$props.value"
        :placeholder="$props.placeholder"
        @change="$emit('change', $event.target.value)"
      )
      .message-input__button
        Button(
          color="primary"
          @send="$emit('send')"
        ) {{ $props.buttonText }}
</template>

<script>
import VueTypes from 'vue-types'
import { Button } from '../atoms'

export default {
  components: {
    Button
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: VueTypes.string.isRequired,
    placeholder: VueTypes.string.def('メッセージを入力...'),
    buttonText: VueTypes.string.def('送信')
  }
}
</script>

<style lang="scss" scoped>
.message-input {
  display: flex;
  background-color: #fff;
  align-items: center;
  border-top: 1px #eee solid;
  height: 60px;
  overflow: hidden;

  &__area {
    flex: 1 0 0;
    font-size: 14px;
    line-height: 1.5;
    border: none;
    padding: 20px 8px;
    align-self: stretch;
    resize: none;
    outline: none;
    margin: 0 8px 0 0;
  }

  &__button {
    flex: 0 0 auto;
    margin: 8px;
  }
}
</style>
