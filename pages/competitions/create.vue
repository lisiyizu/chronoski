<template>
  <el-container>
    <el-header>
      <el-button type="text" @click="$router.push('/competitions')" class="Action Action--left">
        <i class="el-icon-back"></i>
      </el-button>
      <h1 class="Title">Création d'une compétition</h1>
    </el-header>
    <el-main>
      <el-form ref="competitionForm" :model="form" :rules="rules">
        <el-form-item label="Nom" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Date" prop="date">
          <el-date-picker type="date" placeholder="Sélectionner une date" v-model="form.date" :picker-options="{ firstDayOfWeek: 1 }" format="dd/MM/yyyy" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="Nombre de participant" prop="quantity">
          <el-input-number v-model="form.quantity" :controls="false" :min="1" :max="1000" style="width:100%;"></el-input-number>
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
              number: i + 1,
              times: {
                firstLap: '00:00:00',
                secondLap: '00:00:00'
              }
            })
          }
          let competitions = await this.$localForage.getItem('competitions') || []
          competitions.push(competition)
          await this.$localForage.setItem('competitions', competitions)
          this.$router.push('/competitions/' + (competitions.length - 1))
          this.$message({
            type: 'success',
            showClose: true,
            message: 'Compétition enregistrée'
          })
        }
      })
    }
  }
}
</script>
