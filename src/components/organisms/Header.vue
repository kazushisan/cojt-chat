<template lang="pug">
  div
    header.header
      .header__inner
        h1.header__title Sample Chat App
        .header__button(@click="() => { $data.showHeaderOptions !== $data.showHeaderOptions }")
          .header__option(v-if="$data.showHeaderOptions") Option

</template>

<script>
import UserImage from '../atoms/UserImage.vue'

export default {
  components: {
    UserImage
  },
  data() {
    return {
      showHeaderOptions: false
    }
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

  &__button {
    flex: 0 0 auto;
    margin: 16px;
    background-image: url('../../assets/ellipsis-v.svg');
    background-size: cover;
    width: 28px;
    height: 28px;
    border: none;
    outline: none;
    position: relative;
    cursor: pointer;

    &:active {
      opacity: 0.4;
    }
  }

  &__option {
    position: absolute;
    top: 2rem;
    right: 5px;
    border-radius: 4px;
    min-width: 10em;
    min-height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #efefef;
    background-color: #fff;
    box-shadow: 0 2px 3px #eee;
  }
}
</style>
