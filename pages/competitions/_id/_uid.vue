<template>
  <el-container v-if="form">
    <el-header>
      <el-button type="text" @click="$router.push('/competitions/' + $route.params.id)" class="Action Action--left">
        <i class="el-icon-back"></i>
      </el-button>
      <h1 class="Title">Modification du #{{ form.number }}</h1>
    </el-header>
    <el-main>
      <el-form ref="competitionForm" :model="form">
        <div class="AvatarPicker">
          <img v-if="form.userId !== null && users[form.userId]" :src="'/images/' + users[form.userId].avatar + '.png'" alt="avatar"/>
          <div v-else class="Unknown">?</div>
        </div>
        <el-form-item>
          <el-select v-model="form.userId" style="width:100%">
            <el-option label="Inconnu" :value="null"></el-option>
            <el-option v-for="(user, i) in users" :key="i" :label="user.name" :value="i" v-if="user.active"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Temps première manche">
          <el-time-picker v-model="form.times.firstLap" :picker-options="{ selectableRange: '00:00:00 - 23:59:59' }" value-format="HH:mm:ss" placeholder="Sélectionner un temps" style="width: 100%;"></el-time-picker>
        </el-form-item>
        <el-form-item label="Temps deuxième manche">
          <el-time-picker v-model="form.times.secondLap" :picker-options="{ selectableRange: '00:00:00 - 23:59:59' }" value-format="HH:mm:ss" placeholder="Sélectionner un temps" style="width: 100%;"></el-time-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save" style="width: 100%">Enregistrer</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      form: null
    }
  },
  async mounted () {
    this.users = await this.$localForage.getItem('users') || []
    let competitions = await this.$localForage.getItem('competitions') || null
    if (competitions && this.$route.params.id < competitions.length) {
      this.form = competitions[this.$route.params.id].users.find(u => u.number == this.$route.params.uid)
    } else {
      this.$router.push('/competitions')
    }
  },
  methods: {
    async save () {
      let competitions = await this.$localForage.getItem('competitions') || []
      for (let u = 0; u < competitions[this.$route.params.id].users.length; u++) {
        if (competitions[this.$route.params.id].users[u].number == this.$route.params.uid) {
          competitions[this.$route.params.id].users[u] = this.form
        }
      }
      await this.$localForage.setItem('competitions', competitions)
      this.$router.push('/competitions/' + this.$route.params.id)
      this.$message({
        type: 'success',
        showClose: true,
        message: 'Modification enregistrée'
      })
    }
  }
}
</script>

<style lang="scss">
@import '~assets/variables';
</style>
