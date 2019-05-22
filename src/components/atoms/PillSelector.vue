<template lang="pug">
  div
    .pill
      .pill__inner(ref="pillInner")
        button.pill__item(
          v-for="(option, index) in $props.options" :key="option"
          :class="{ 'pill__item--selected': option === $props.options[$props.value] }"
          @click="change(index, $event)"
        ) {{ option }}
        .pill__background(
          :style="{ width: $data.width + 'px', left: $data.left + 'px' }"
        )
</template>

<script>
import VueTypes from 'vue-types'

export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    options: VueTypes.array.isRequired,
    value: VueTypes.number.isRequired
  },
  data() {
    return {
      width: 0,
      left: 0
    }
  },
  mounted() {
    const parentLeft = this.$refs.pillInner.getBoundingClientRect().left
    const {
      left,
      right
    } = this.$refs.pillInner.firstElementChild.getBoundingClientRect()

    this.$data.width = right - left
    this.$data.left = left - parentLeft
  },
  methods: {
    change(index, event) {
      this.$emit('change', index)
      const parentLeft = event.target.parentElement.getBoundingClientRect().left
      const { left, right } = event.target.getBoundingClientRect()
      this.$data.width = right - left
      this.$data.left = left - parentLeft
    }
  }
}
</script>

<style lang="scss" scoped>
.pill {
  display: flex;
  justify-content: center;
  position: relative;

  &__inner {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 40px;
    border-radius: 20px;
    background-color: #eee;
    position: relative;
    box-shadow: 0 2px 4px rgba(#000, 0.01) inset;
  }

  &__background {
    background-color: #1dd3b0;
    height: 40px;
    position: absolute;
    border-radius: 20px;
    top: 0;
    left: 0;
    transition: all 0.3s;
  }

  &__item {
    display: block;
    outline: none;
    border: none;
    background-color: transparent;
    position: relative;
    padding: 8px 20px;
    font-size: 14px;
    line-height: 24px;
    height: 40px;
    color: rgba(#000, 0.6);
    z-index: 2;
    transition: all 0.3s;

    &--selected {
      color: #fff;
    }

    &:active {
      opacity: 0.4;
    }
  }
}
.option {
  display: block;
  box-sizing: border-box;
  width: 100%;

  border: 1px #eee solid;

  margin: 0;
  font-size: inherit;
}
</style>
