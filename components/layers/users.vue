<template>
  <el-container class="Users">
    <el-header>
      <el-button type="text" @click="$router.push('/')" class="Action Action--left">
        <i class="el-icon-back"></i>
      </el-button>
      <h1 class="Title">Utilisateurs</h1>
      <el-button type="text" class="Action Action--right">
        <i class="el-icon-plus"></i>
      </el-button>
    </el-header>
    <el-main class="Users__List">
      <pre>{{ users }}</pre>
      <el-button @click="createUser">New user</el-button>
      <el-button @click="deleteAll">Delete all</el-button>
      <el-row>
        <el-col class="Users__List__Item">
          Liste des utilisateurs<br>
          OU<br>
          Formulaire de création si aucun utilisateur enregistré
        </el-col>
        <el-col class="Users__List__Item">
          Liste des utilisateurs<br>
          OU<br>
          Formulaire de création si aucun utilisateur enregistré
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
// import userForm from '@/components/forms/user'

export default {
  // components: {
  //   userForm
  // },
  data () {
    return {
      users: [],
      user: {
        firstname: '',
        lastname: '',
        avatar: 0
      }
    }
  },
  async mounted () {
    this.users = await this.$localForage.getItem('users') || []
  },
  watch: {
    users: {
      deep: true,
      handler: 'save'
    }
  },
  methods: {
    save (val) {
      this.$localForage.setItem('users', val)
    },
    createUser () {
      this.users.push(this.user)
    },
    updateUser () {

    },
    deleteAll () {
      this.users = []
    }
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
    .Title {
      text-align: center;
      font-weight: 300;
    }
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
