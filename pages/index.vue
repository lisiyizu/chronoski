<template>
  <div class="Home">
    <div class="Home__Content">
      <logo/>
      <el-button type="primary" @click="$router.push('/users')">Utilisateurs</el-button>
      <el-button type="primary" @click="$router.push('/competitions')">Compétitions</el-button>
    </div>
  </div>
</template>

<script>
import logo from '@/components/logo'

export default {
  components: {
    logo
  }
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
    width: 50%;
    svg {
      margin-bottom: 20px;
    }
    .el-button {
      display: block;
      margin: 0;
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
