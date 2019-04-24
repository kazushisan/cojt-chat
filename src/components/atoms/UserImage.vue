<template lang="pug">
  div
    img.user-image(
      :style="{ width: $props.width + 'px', height: $props.width + 'px' }"
      :src="$props.image"
    )
</template>

<script>
import VueTypes from 'vue-types'

export default {
  props: {
    image: VueTypes.string.isRequired,
    width: VueTypes.number.def(120).isRequired
  }
}
</script>

<style lang="scss" scoped>
.user-image {
  object-fit: cover;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
