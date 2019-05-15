<template lang="pug">
  div
    template(v-if="$props,image")
      img.user-image(
        :style="{ width: $props.width + 'px', height: $props.width + 'px' }"
        :src="$props.image"
      )
    //- 要検討
    template(v-else)
       img.user-image(
        :style="{ width: $props.width + 'px', height: $props.width + 'px', backgroundColor: '#eee', padding: '8px' }"
        src="../../assets/person.svg"
      )   
</template>

<script>
import VueTypes from 'vue-types'

export default {
  props: {
    image: VueTypes.string,
    width: VueTypes.number.def(120).isRequired
  }
}
</script>

<style lang="scss" scoped>
.user-image {
  object-fit: cover;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
