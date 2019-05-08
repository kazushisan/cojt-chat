<template lang="pug">
  div
    select.select(
      :disabled="$props.disabled"
    )
</template>

<script>
import VueTypes from 'vue-types'

export default {
  props: {
    disabled: VueTypes.bool.def(false)
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
  text-align: center;


  &:disabled {
    opacity: 0.4;
  }
}
</style>
