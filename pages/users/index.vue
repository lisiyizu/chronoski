<template>
  <el-container>
    <el-header>
      <el-button type="text" @click="$router.push('/')" class="Action Action--left">
        <i class="el-icon-back"></i>
      </el-button>
      <el-button type="text" @click="$router.push('/users/create')" class="Action Action--right">
        <i class="el-icon-plus"></i>
      </el-button>
      <h1 class="Title">Utilisateurs</h1>
    </el-header>
    <el-main>
      <ul v-if="users.length" class="List">
        <li v-for="(u, i) in users" :key="i" v-if="u.active">
          <nuxt-link :to="'/users/' + i">
            <avatar :number="u.avatar"/>
            <div class="User">
              <h4>{{ u.name }}</h4>
              <p>{{ u.total }}</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <h3 v-else class="Empty">
        Aucun utilisateur enregistré
      </h3>
    </el-main>
  </el-container>
</template>

<script>
import avatar from '@/components/avatar'

export default {
  components: {
    avatar
  },
  data () {
    return {
      users: []
    }
  },
  async mounted () {
    // await this.$localForage.setItem('users', [])
    let users = await this.$localForage.getItem('users') || []
    let competitions = await this.$localForage.getItem('competitions') || null
    for (let a = 0; a < users.length; a++) {
      let total = 0;
      if (competitions) {
        for (let i = 0; i < competitions.length; i++) {
          if (competitions[i].active && competitions[i].users.find(u => u.userId === a)) {
            total++
          }
        }
      }
      users[a].total = total > 0 ? (total + ' compétition' + (total > 1 ? 's' : '')) : 'Aucune compétition'
    }
    this.users = users
  }
}
</script>
