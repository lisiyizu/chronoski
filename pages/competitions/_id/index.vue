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
      <ul class="List">
        <li v-for="(u, i) in filteredUsers" :key="i">
          <nuxt-link :to="'/competitions/' + $route.params.id + '/' + u.number">
            <img v-if="u.userId !== null" :src="'/images/' + users[u.userId].avatar + '.png'" alt="Avatar">
            <div v-else class="Unknown">?</div>
            <div class="User">
              <el-tag style="float: right">{{ asc ? i + 1 : filteredUsers.length - i }}</el-tag>
              <h4><b>#{{ u.number }}</b> - {{ u.userId ? users[u.userId].name : 'Inconnu' }}</h4>
              <p>
                1) {{ u.times.firstLap || '-'}} /
                2) {{ u.times.secondLap || '-'}} /
                Total: {{ parseFloat(u.times.firstLap.split(':').join()) - parseFloat(u.times.secondLap.split(':').join()) }}
              </p>
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
      users: [],
      options: [
        { label: 'Numéro de dossard', value: 'number'},
        { label: 'Première manche', value: 'firstLap'},
        { label: 'Deuxième manche', value: 'secondLap'},
        { label: 'Classement général', value: 'total'}
      ]
    }
  },
  async mounted () {
    this.users = await this.$localForage.getItem('users') || []
    let competitions = await this.$localForage.getItem('competitions') || null
    this.competition = competitions[this.$route.params.id]
  },
  computed: {
    filteredUsers () {
      return this.competition ? this.competition.users.filter((u) => {
        let name = u.userId ? this.users[u.userId].name.toLowerCase() : 'inconnu'
        return this.search ? (name.indexOf(this.q.toLowerCase()) > -1 || u.number == this.q) : true
      }).sort((userA, userB) => {
        if (this.filter === 'number') {
          return this.asc ? userA.number - userB.number : userB.number - userA.number
        } else if (this.filter === 'firstLap' || this.filter === 'secondLap') {
          // Order u.times.X
          let timeA = parseInt(userA.times[this.filter].split(':').join())
          let timeB = parseInt(userB.times[this.filter].split(':').join())
          timeA = timeA > 0 ? timeA : 999999
          timeB = timeB > 0 ? timeB : 999999
          return this.asc ? timeA - timeB : timeB - timeA
        }
        let timeA = parseInt(userA.times[this.filter].split(':').join())
        let timeB = parseInt(userB.times[this.filter].split(':').join())
        timeA = timeA > 0 ? timeA : 999999
        timeB = timeB > 0 ? timeB : 999999
        return this.asc ? timeA - timeB : timeB - timeA
        // Sort total
        return false
      }) : []
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
