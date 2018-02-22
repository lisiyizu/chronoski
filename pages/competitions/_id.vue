<template>
  <nuxt-child v-if="competition"/>
</template>

<script>
export default {
  data() {
    return {
      competition: null
    }
  },
  async mounted () {
    let competitions = await this.$localForage.getItem('competitions') || null
    if (competitions && this.$route.params.id < competitions.length) {
      this.competition = competitions[this.$route.params.id]
    } else {
      this.$router.push('/competitions')
    }
  }
}
</script>

<style lang="scss">
@import '~assets/variables';
</style>
