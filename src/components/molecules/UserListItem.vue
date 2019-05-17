<template lang="pug">
  div
    .user-list-item
      UserImage(
        style="flex: 0 0 auto; height: 32px;"
        :image="$props.image"
        :width="32"
      )
      .user-list-item__inner
        div {{ $props.user }}
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
