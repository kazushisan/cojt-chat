<template lang="pug">
  div
    select.select(
      :disabled="$props.disabled"
      @choice="$emit('choice', $event.target.innerText)"
    )
      slot
      option( v-for="option in options" ) option
</template>

<script>
import VueTypes from 'vue-types'

export default {
  model: {
    event: "choice"
  },
  props:{
    disabled: VueTypes.bool.def(false),
  },
  data: {
    options: [
      "Apple",
      "Orange",
      "Grape",
      "Strawberry"
    ]
  }
}
</script>

<style lang="scss" scoped>
.select {
  background-color: #fff;
  color: rgba(#000, 0.8);
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
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border-color: #1dd3b0;
  }

  &:disabled {
    opacity: 0.4;
  }
}
</style>