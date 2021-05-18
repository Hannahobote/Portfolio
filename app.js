// intro
const app = Vue.createApp({
  data() {
    return {
      name: 'Hannah',
      description: 'Aspiring fullstack engineer ',
      main: 'Hello im Hannah',
      apps: [{file: 'cv'}, {file: 'project1'}],
      footer: 'hi', 
    }
  },
  methods() {

  }
})
app.mount('#app')

// nav bar



// main content 




// items 
Vue.createApp({
  data() {
    return {
      items: [{file: 'cv'}, {file: 'project1'}]
    }
  }
}).mount('#projects')

// footer 
Vue.createApp({
  data() {
    return {
      footer: 'hi'
    }
  }
}).mount('#footer')