<template>
  <el-container>
    <el-header>
      <el-button type="text" @click="$router.push('/')" class="Action Action--left">
        <i class="el-icon-back"></i>
      </el-button>
      <el-button type="text" @click="$router.push('/competitions/create')" class="Action Action--right">
        <i class="el-icon-plus"></i>
      </el-button>
      <h1 class="Title">Compétitions</h1>
    </el-header>
    <el-main>
      <ul v-if="filteredCompetitions.length" class="List">
        <li v-for="(c, i) in competitions" :key="i" v-if="c.active">
          <nuxt-link :to="'/competitions/' + i">
            <h2>{{ c.name }}</h2>
            <p>Le {{ c.date | getFrenchDate }}</p>
          </nuxt-link>
        </li>
      </ul>
      <h3 v-else class="Empty">
        Aucune compétition enregistrée
      </h3>
    </el-main>
  </el-container>
</template>

<script>

export default {
  data () {
    return {
      competitions: []
    }
  },
  async mounted () {
    this.competitions = await this.$localForage.getItem('competitions') || []
  },
  computed: {
    filteredCompetitions () {
      return this.competitions.filter(c => c.active)
    }
  }
}
</script>
