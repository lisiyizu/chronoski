<template>
  <el-container>
    <el-header>
      <el-button type="text" @click="$router.push('/competitions/' + $route.params.id)" class="Action Action--left">
        <i class="el-icon-back"></i>
      </el-button>
      <el-button type="text" @click="deleteCompetition" class="Action Action--right">
        <i class="el-icon-delete"></i>
      </el-button>
      <h1 class="Title">Modification du #000</h1>
    </el-header>
    <el-main>
      <pre>{{ competition }}</pre>
      <el-form ref="competitionForm" :model="form" :rules="rules">
        <el-form-item label="Nom" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Date" prop="date">
          <el-date-picker type="date" placeholder="Sélectionner une date" v-model="form.date" :picker-options="{ firstDayOfWeek: 1 }" format="dd/MM/yyyy" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="Nombre de participant" prop="quantity">
          <el-input-number v-model="form.quantity" :min="1" :max="1000" style="width:100%;"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save('competitionForm')" style="width: 100%">Enregistrer</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      competition: null,
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
  async mounted () {
    let competitions = await this.$localForage.getItem('competitions') || null
    if (competitions && this.$route.params.id < competitions.length) {
      this.form = competitions[this.$route.params.id]
      this.form.quantity = competitions[this.$route.params.id].users.length
    } else {
      this.$router.push('/competitions')
    }
  },
  methods: {
    deleteCompetition () {
      this.$confirm('Êtes-vous certain de vouloir supprimer cette compétition?', 'Warning', {
        confirmButtonText: 'Oui',
        cancelButtonText: 'Non',
        type: 'warning'
      }).then(async () => {
        let competitions = await this.$localForage.getItem('competitions')
        competitions.splice(this.$route.params.id, 1)
        await this.$localForage.setItem('competitions', competitions)
        this.$router.push('/competitions')
        this.$message({
          type: 'success',
          message: 'Compétition supprimée'
        })
      }).catch(() => {})
    },
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
            if (i < this.form.users.length) {
              competition.users[i] = this.form.users[i]
            } else {
              competition.users.push({
                userId: null,
                number: i + 1,
                times: {
                  firstLap: null,
                  secondLap: null
                }
              })
            }
          }
          let competitions = await this.$localForage.getItem('competitions') || []
          competitions[this.$route.params.id] = competition
          await this.$localForage.setItem('competitions', competitions)
          this.$router.push('/competitions/' + this.$route.params.id)
          this.$message({
            type: 'success',
            message: 'Compétition modifiée'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '~assets/variables';
</style>
