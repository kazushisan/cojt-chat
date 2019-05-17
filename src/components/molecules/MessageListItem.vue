<template lang="pug">
  div
    .message-list-item
      UserImage(
        style="flex: 0 0 auto; height: 48px;"
        :image="$props.image"
        :width="48"
      )
      .message-list-item__inner
        div {{ $props.user }}
        div(style="color: rgba(0,0,0,0.3);")
          slot
</template>

<script>
import VueTypes from 'vue-types'
import UserImage from '../atoms/UserImage.vue'

export default {
  components: {
    UserImage
  },
  props: {
    user: VueTypes.string.isRequired,
    image: VueTypes.string
  }
}
</script>

<style lang="scss" scoped>
.message-list-item {
  padding: 20px;
  display: flex;
  align-items: center;
  color: rgba(#000, 0.8);

  &__inner {
    margin-left: 24px;
  }
}
</style>
