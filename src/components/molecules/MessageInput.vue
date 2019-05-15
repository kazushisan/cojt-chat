<template lang="pug">
  div
    .message-input
      .message-input__inner
        textarea.message-input__area(
          :value="$props.value"
          :placeholder="$props.placeholder"
          @change="$emit('change', $event.target.value)"
        )
        button.message-input__button(
          @click="$emit('send')"
        )
</template>

<script>
import VueTypes from 'vue-types'
import Button from '../atoms/Button.vue'

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
  &__inner {
    display: flex;
    background-color: #fff;
    align-items: center;
    border-top: 1px #eee solid;
    height: 60px;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__area {
    flex: 1 0 0;
    font-size: 14px;
    line-height: 1.5;
    border: none;
    padding: 20px 20px 19px;
    align-self: stretch;
    resize: none;
    outline: none;
    margin: 0 16px 0 0;
    color: rgba(#000, 0.8);

    &::placeholder {
      color: rgba(#000, 0.3);
    }
  }

  &__button {
    flex: 0 0 auto;
    margin: 16px;
    background-image: url('../../assets/send.svg') center;
    background-size: cover;
    width: 28px;
    height: 28px;
    border: none;
    outline: none;

    &:active {
      opacity: 0.4;
    }
  }
}
</style>
