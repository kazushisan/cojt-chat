<template lang="pug">
  div
    .message-list-item
      UserImage(
        style="flex: 0 0 auto; height: 48px;"
        :image="$props.image"
        :width="48"
      )
      .message-list-item__inner
        slot
</template>

<script>
import VueTypes from 'vue-types'
import { UserImage } from '../atoms'

export default {
  components: {
    UserImage
  },
  props: {
    image: VueTypes.string.isRequired
  }
}
</script>

<style lang="scss" scoped>
.message-list-item {
  padding: 20px 8px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px #eee solid;

  &__inner {
    margin-left: 24px;
  }
}
</style>
