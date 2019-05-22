<template lang="pug">
  div
    .user-list-item
      UserImage(
        style="flex: 0 0 auto; height: 40px;"
        :image="$props.image"
        :width="40"
      )
      .user-list-item__inner
        div {{ $props.displayName }}
        div(style="color: rgba(0,0,0,0.3);")
          slot {{ $props.name }}
</template>

<script>
import VueTypes from 'vue-types'
import UserImage from '../atoms/UserImage.vue'

export default {
  components: {
    UserImage
  },
  props: {
    displayName: VueTypes.string.isRequired,
    name: VueTypes.string.isRequired,
    image: VueTypes.string
  }
}
</script>

<style lang="scss" scoped>
.user-list-item {
  padding: 20px;
  display: flex;
  align-items: center;
  color: rgba(#000, 0.8);

  &__inner {
    margin-left: 24px;
  }
}
</style>
