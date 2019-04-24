<template lang="pug">
  div
    button.button(
      :class="{ 'button--primary': $props.color === 'primary' }"
      @click="$emit('click')"
    )
      slot
</template>

<script>
import VueTypes from 'vue-types'

export default {
  props: {
    color: VueTypes.oneOf(['primary', 'normal']).def('normal')
  }
}
</script>

<style lang="scss" scoped>
.button {
  background-color: #eee;
  color: #333;
  display: block;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  outline: none;
  margin: 0;

  &--primary {
    background-color: #0070e8;
    color: #fff;
  }

  &:active {
    opacity: 0.4;
  }
}
</style>
