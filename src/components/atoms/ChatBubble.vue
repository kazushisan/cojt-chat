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
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #eee;
  border-top-left-radius: 0;
  color: #333;

  &--from-me {
    background-color: #0070e8;
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
    color: #fff;
  }
}
</style>
