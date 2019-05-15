<template lang="pug">
  div
    Header
    .main
      .main__inner
      
</template>

<script>
import { organisms } from '../components'
// import api from '../services/api'

const { Header } = organisms

export default {
  components: {
    Header
  },
  data() {
    return {
      connections: [
        {
          _id: 'a',
          name: 'グループ1',
          users: ['a', 'b']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
