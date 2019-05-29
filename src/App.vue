<template lang="pug">
	div#app
		router-view
</template>

<script>
require('./_base.scss')

export default {
  created() {
    this.$store.commit('AuthStore/loadToken')
  }
}
</script>
