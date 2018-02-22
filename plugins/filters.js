import Vue from 'vue'

Vue.filter('getFrenchDate', function (value, options = { year: 'numeric', month: 'long', day: 'numeric' }) {
  return new Date(value).toLocaleDateString('fr-FR', options)
})
