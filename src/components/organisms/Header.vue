<template lang="pug">
  div
    header.header
      .header__inner
        h1.header__title Sample Chat App
</template>

<script>
import { UserImage } from '../atoms'

export default {
  components: {
    UserImage
  }
}
</script>

<style lang="scss" scoped>
.header {
  &__inner {
    background-color: #fff;
    border-bottom: 1px #eee solid;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 8px 16px;
    height: 44px;
    align-items: center;
    display: flex;
  }

  &__title {
    font-weight: bold;
    text-align: center;
    flex: 1 0 0;
  }

  &:after {
    position: relative;
    content: '';
    display: block;
    margin-top: 61px;
  }
}
</style>
