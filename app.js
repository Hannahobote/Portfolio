const app = Vue.createApp({
  data() {
    return {
      name: 'Hannah',
      description: 'Aspiring fullstack engineer ',
      main: 'Hello im Hannah',
      apps: [{file: 'cv'}, {file: 'project1'}]
    }
  },
  methods() {

  }
})
app.mount('#app')

Vue.createApp({
  data() {
    return {
      items: [{file: 'cv'}, {file: 'project1'}]
    }
  }
}).mount('#array-rendering')