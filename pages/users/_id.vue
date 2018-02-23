<template>
  <el-container>
    <el-header>
      <el-button type="text" @click="$router.push('/users')" class="Action Action--left">
        <i class="el-icon-back"></i>
      </el-button>
      <el-button type="text" @click="deleteUser" class="Action Action--right">
        <i class="el-icon-delete"></i>
      </el-button>
      <h1 class="Title">Édition d'un utilisateur</h1>
    </el-header>
    <el-main>
      <el-form ref="userForm" :model="form" :rules="rules">
        <div class="AvatarPicker">
          <el-button type="primary" @click="form.avatar--" class="AvatarPicker--left" :disabled="form.avatar === 0" round>
            <i class="el-icon-caret-left"></i>
          </el-button>
          <el-button type="primary" @click="form.avatar++" class="AvatarPicker--right" :disabled="form.avatar === 14" round>
            <i class="el-icon-caret-right"></i>
          </el-button>
          <avatar :number="form.avatar"/>
        </div>
        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="Surnom"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save('userForm')" style="width: 100%">Enregistrer</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import avatar from '@/components/avatar'

export default {
  components: {
    avatar
  },
  data() {
    return {
      form: {
        avatar: 0,
        name: '',
        active: true
      },
      rules: {
        name: [
          { required: true, message: 'Le nom est obligatoire', trigger: 'blur' },
          { min: 3, max: 30, message: 'Minimum 3 caractères / Maximum 30 caractères', trigger: 'blur' }
        ]
      }
    }
  },
  async mounted () {
    let users = await this.$localForage.getItem('users') || null
    if (users && this.$route.params.id < users.length) {
      this.form = users[this.$route.params.id]
    } else {
      this.$router.push('/users')
    }
  },
  methods: {
    deleteUser () {
      this.$confirm('Êtes-vous certain de vouloir supprimer cet utilisateur?', 'Warning', {
        confirmButtonText: 'Oui',
        cancelButtonText: 'Non',
        type: 'warning'
      }).then(async () => {
        let users = await this.$localForage.getItem('users')
        users[this.$route.params.id].active = false
        await this.$localForage.setItem('users', users)
        this.$router.push('/users')
        this.$message({
          type: 'success',
          showClose: true,
          message: 'Utilisateur supprimé'
        })
      }).catch(() => {})
    },
    save (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let users = await this.$localForage.getItem('users') || []
          users[this.$route.params.id] = this.form
          await this.$localForage.setItem('users', users)
          this.$router.push('/users')
          this.$message({
            type: 'success',
            showClose: true,
            message: 'Utilisateur modifiée'
          })
        }
      })
    }
  }
}
</script>
