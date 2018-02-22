<template>
  <el-container v-if="competition">
    <el-header>
      <el-button type="text" @click="$router.push('/competitions')" class="Action Action--left">
        <i class="el-icon-back"></i>
      </el-button>
      <el-button type="text" @click="$router.push('/competitions/' + $route.params.id + '/edit')" class="Action Action--right">
        <i class="el-icon-setting"></i>
      </el-button>
      <h1 class="Title">{{ competition.name }}</h1>
    </el-header>
    <el-main>
      <!-- <pre>{{ competition }}</pre> -->
      <ul class="List">
        <li v-for="(u, i) in competition.users" :key="i">
          <nuxt-link :to="'/competitions/' + i + '/' + u.number">
            <img v-if="u.userId" :src="'@/assets/images/0.png'" alt="Avatar">
            <div v-else class="Unknown">?</div>
            <div class="User">
              <el-tag style="float: right">{{ i + 1 }}</el-tag>
              <h4><b>#{{ u.number }}</b> - {{ u.userId ? 'USER ID' : 'Inconnu' }}</h4>
              <p>Temps total / Manche 1 / Manche 2</p>
              <!-- <pre>{{ u }}</pre> -->
            </div>
          </nuxt-link>
        </li>
      </ul>
    </el-main>
    <el-footer>
      <el-button type="text" @click="search = true" class="Action Action--left"><i class="el-icon-search"></i></el-button>
      <el-button v-if="search" type="text" @click="search = false" class="Action Action--right"><i class="el-icon-close"></i></el-button>
      <el-button v-else type="text" @click="asc = !asc" class="Action Action--right">
        <i :class="{'el-icon-caret-top': asc, 'el-icon-caret-bottom': !asc}"></i>
      </el-button>
      <div class="Content">
        <el-input v-if="search" placeholder="Rechercher" v-model="q"></el-input>
        <el-select v-else v-model="filter" style="width:100%">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      q: '',
      search: false,
      asc: true,
      filter: 'number',
      competition: null,
      options: [
        { label: 'Classement général', value: 'total'},
        { label: 'Première manche', value: 'firstLap'},
        { label: 'Deuxième manche', value: 'secondLap'},
        { label: 'Numéro de dossard', value: 'number'}
      ]
    }
  },
  async mounted () {
    let competitions = await this.$localForage.getItem('competitions') || null
    this.competition = competitions[this.$route.params.id]
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
