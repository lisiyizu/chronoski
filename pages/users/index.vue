<template>
  <component :is="view"/>
</template>

<script>
import list from '@/components/layers/users'
import form from '@/components/forms/user'

export default {
  components: {
    list,
    form
  },
  data () {
    return {
      view: 'list'
    }
  },
  async mounted () {
    let users = await this.$localForage.getItem('users') || []
    this.view = users.length ? 'list' : 'form'
  }
}
</script>

<style lang="scss">
@import '~assets/variables';

.Users {
  height: 100vh;
  .el-header {
    background-color: $--color-primary;
    color: #fff;
    .Action {
      color: #fff;
      font-size: 30px;
      display: block;
      margin-top: 2px;
      &--left {
        float: left;
      }
      &--right {
        float: right;
      }
    }
  }
  &__List {
    &__Item {
      border-radius: 5px;
      background-color: $--color-primary-light;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
