<template>
  <el-container class="UsersId">
    <el-header>
      <nuxt-link to="/users" class="Action">
        <i class="el-icon-back"></i>
      </nuxt-link>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '~assets/variables';

.UsersId {
  height: 100vh;
  .el-header, .el-footer {
    background-color: $--color-primary;
    color: #fff;
  }
  .el-header {
    .Action {
      color: #fff;
      font-size: 30px;
      margin-top: 2px;
      display: block;
    }
  }
  .el-main {

  }
  .el-footer {

  }
}
</style>
