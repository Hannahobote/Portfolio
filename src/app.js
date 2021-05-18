// intro
Vue.createApp({
  data() {
    return {
      name: 'Hannah',
      description: 'Aspiring fullstack engineer ',
    }
  },
  methods() {

  }
}).mount('#intro')

// nav bar
Vue.createApp({
  data() {
    return {
      links: [
        {data: 'cv.html', name: 'cv'},
        {data: 'hi2'},
        {data: 'h13'}
      ]
    }
  }
}).mount('#navbar')


// main content 
Vue.createApp({
  data() {
    return {
      main: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas cum perferendis distinctio officiis, velit expedita placeat natus fugit, similique modi cumque repellendus itaque, quisquam doloribus! Consequuntur corporis illo odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse reiciendis nemo aliquid! Dolorum mollitia amet officiis doloribus aut? Laborum consequuntur corporis illo dolorem ea dicta adipisci ad blanditiis impedit.'
    }
  }
}).mount('#main')



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
      footer: 'footer tur adipisicing elit. Consequatur esse reiciendis nemo aliquid! Dolorum mollitia amet officiis doloribus aut? Laborum consequuntur corporis illo dolorem ea dicta adipisci ad blanditii'
    }
  }
}).mount('#footer')