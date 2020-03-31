import Vue from 'vue'
import { play } from 'vue-play'
import VueTextAreaTag from '../src/VueTextAreaTag.vue'

Vue.component('VueTextAreaTag', VueTextAreaTag)

play('VueTextAreaTag').add('Normal', {
  template: `
    <VueTextAreaTag @input="oninput"  :tags="tags"></VueTextAreaTag>
  `,
  data() {
    return {
      count: 0,
      tags: ['amet']
    }
  },
  methods: {
    oninput(evt) {
      console.log(evt)
    }
  }
})
