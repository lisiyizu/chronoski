<template>
  <el-container>
    <el-header>
      <el-button type="text" @click="$router.push('/competitions')" class="Action Action--left">
        <i class="el-icon-back"></i>
      </el-button>
      <el-button type="text" class="Action Action--right">
        <i class="el-icon-setting"></i>
      </el-button>
      <h1 class="Title">Compétition</h1>
    </el-header>
    <el-main>
      <pre>{{ competition }}</pre>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        date: new Date(),
        quantity: 1,
        active: true
      },
      rules: {
        name: [
          { required: true, message: 'Le nom est obligatoire', trigger: 'blur' },
          { min: 3, max: 30, message: 'Minimum 3 caractères / Maximum 30 caractères', trigger: 'blur' }
        ],
        date: [
          { type: 'date', required: true, message: 'La date est obligatoire', trigger: 'change' }
        ],
        quantity: [
          { required: true, message: 'Le nombre de participant est obligatoire', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    save (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let competition = {
            name: this.form.name,
            date: this.form.date,
            users: [],
            active: true
          }
          for (let i = 0; i < this.form.quantity; i++) {
            competition.users.push({
              userId: null,
              number: i,
              times: {
                firstLap: null,
                secondLap: null
              }
            })
          }
          let users = await this.$localForage.getItem('competitions') || []
          users.push(this.form)
          await this.$localForage.setItem('competitions', users)
          this.$router.push('/competitions')
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '~assets/variables';
</style>
