<template lang="pug">
  div
    .bubble(:class="{ 'bubble--from-me': $props.fromMe }")
      .bubble__inner
        slot
      .bubble__date {{ format($props.date, 'MM/dd hh:mm')}}
</template>

<script>
import VueTypes from 'vue-types'
import date from '../../services/date'

export default {
  props: {
    fromMe: VueTypes.bool.isRequired,
    date: VueTypes.instanceOf(Date).def(new Date()).isRequired
  },
  methods: {
    format: date.format
  }
}
</script>

<style lang="scss" scoped>
.bubble {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  &__inner {
    padding: 12px 16px;
    border-radius: 12px;
    background-color: #eee;
    border-top-left-radius: 4px;
    color: rgba(#000, 0.6);
  }

  &__date {
    margin: 0 16px;
    color: rgba(#000, 0.3);
    font-size: 12px;
  }

  &--from-me {
    flex-direction: row-reverse;

    // 書き方要検討
    & .bubble__inner {
      background-color: #1dd3b0;
      border-top-left-radius: 12px;
      border-top-right-radius: 4px;
      color: #fff;
    }
  }
}
</style>
