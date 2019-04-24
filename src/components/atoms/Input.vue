<template lang="pug">
  div
    input.input(
      :value="$props.value"
      :placeholder="$props.placeholder"
      :disabled="$props.disabled"
      @change="$emit('change', $event.target.value)"
    )
</template>

<script>
import VueTypes from 'vue-types'

export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: VueTypes.string.isRequired,
    placeholder: VueTypes.string.def(''),
    disabled: VueTypes.bool.def(false)
  }
}
</script>

<style lang="scss" scoped>
.input {
  background-color: #fff;
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

  &:focus {
    border-color: #1dd3b0;
  }

  &:disabled {
    opacity: 0.4;
  }
}
</style>
