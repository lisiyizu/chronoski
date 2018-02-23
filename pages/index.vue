<template>
  <div class="Home">
    <div class="Home__Content">
      <h1>Chronoski</h1>
      <el-button type="primary" @click="$router.push('/users')">Utilisateurs</el-button>
      <el-button type="primary" @click="$router.push('/competitions')">Compétitions</el-button>
      <!-- <nuxt-link to="users" class="Home__Content__Action">Utilisateurs</nuxt-link>
      <nuxt-link to="competitions" class="Home__Content__Action">Competitions</nuxt-link> -->
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '~assets/variables';

.Home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  // background-color: $--color-primary-light;
  &__Content {
    &__Action {
      display: block;
      border-radius: 5px;
      background-color: $--color-primary;
      color: #fff;
      box-shadow: 0 5px 5px $--color-primary-light;
      border: none;
      position: relative;
      height: 60px;
      line-height: 60px;
      font-size: 1.4em;
      padding: 0 2em;
      cursor: pointer;
      transition: 500ms ease all;
      outline: none;
      text-align: center;
      text-decoration: none;
      margin-top: 30px;
      &:hover {
        background-color: $--color-primary-dark;
        box-shadow: 0 0px 5px $--color-primary-light;
      }
      // &:before, &:after {
      //   content: '';
      //   position: absolute;
      //   top: 0;
      //   right: 0;
      //   height: 2px;
      //   width: 0;
      //   background: #fff;
      //   transition: 400ms ease all;
      // }
      // &:after {
      //   right: inherit;
      //   top: inherit;
      //   left: 0;
      //   bottom: 0;
      // }
      // &:hover:before, &:hover:after{
      //   width:100%;
      //   transition:800ms ease all;
      // }
    }
  }
}
</style>
