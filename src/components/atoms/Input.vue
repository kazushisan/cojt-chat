<template lang="pug">
  div
    input.input(
      :value="$props.value"
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
    value: VueTypes.string.isRequired
  }
}
</script>

<style lang="scss" scoped>
.input {
  background-color: #fff;
  color: #333;
  display: block;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px #eee solid;
  outline: none;
  margin: 0;

  &:focus {
    border-color: #0070e8;
  }
}
</style>
