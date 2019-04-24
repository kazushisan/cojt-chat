<template lang="pug">
  div
    .bubble(:class="{ 'bubble--from-me': $props.fromMe }")
      slot
</template>

<script>
import VueTypes from 'vue-types'

export default {
  props: {
    value: VueTypes.string.isRequired,
    fromMe: VueTypes.bool.isRequired
  }
}
</script>

<style lang="scss" scoped>
.bubble {
  padding: 12px 16px;
  border-radius: 12px;
  background-color: #eee;
  border-top-left-radius: 4px;
  color: rgba(#000, 0.6);

  &--from-me {
    background-color: #1dd3b0;
    border-top-left-radius: 12px;
    border-top-right-radius: 4px;
    color: #fff;
  }
}
</style>
