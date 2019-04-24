<template lang="pug">
  div
    button.button(
      :class="{ 'button--primary': $props.color === 'primary' }"
      :disabled="$props.disabled"
      @click="$emit('click')"
    )
      slot
</template>

<script>
import VueTypes from 'vue-types'

export default {
  props: {
    color: VueTypes.oneOf(['primary', 'normal']).def('normal'),
    disabled: VueTypes.bool.def(false)
  }
}
</script>

<style lang="scss" scoped>
.button {
  background-color: #eee;
  color: rgba(#000, 0.6);
  display: block;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px #eee solid;
  outline: none;
  margin: 0;
  font-size: inherit;

  &--primary {
    background-color: #1dd3b0;
    border-color: #1dd3b0;
    color: #fff;
  }

  &:active {
    opacity: 0.4;
  }

  &:disabled {
    opacity: 0.4;
  }
}
</style>
