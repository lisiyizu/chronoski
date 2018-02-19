<template>
  <div class="Home">
    <div class="Home__Content">
      <nuxt-link to="users" class="Home__Content__Action">Participants</nuxt-link>
      <nuxt-link to="competitions" class="Home__Content__Action">Competitions</nuxt-link>
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
  background-color: $--color-primary;
  &__Content {
    &__Action {
      display: block;
      background-color: #fff;
      color: $--color-primary;
      border: none;
      position: relative;
      height: 60px;
      line-height: 60px;
      font-size: 1.5em;
      padding: 0 2em;
      cursor: pointer;
      transition: 800ms ease all;
      outline: none;
      text-decoration: none;
      margin-top: 30px;
      &:hover {
        background-color: $--color-primary;
        color: #fff;
      }
      &:before, &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 2px;
        width: 0;
        background: #fff;
        transition: 400ms ease all;
      }
      &:after {
        right: inherit;
        top: inherit;
        left: 0;
        bottom: 0;
      }
      &:hover:before, &:hover:after{
        width:100%;
        transition:800ms ease all;
      }
    }
  }
}
</style>
