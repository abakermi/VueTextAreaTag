<template>
  <div ref="vuetextareatag" class="vue-text-area-tag">
    <textarea
      id="_vuetextarea"
      v-model="valtextarea"
      name
      cols="30"
      rows="10"
      @input="OnInput"
    >
.</textarea
    >
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'

export default Vue.extend({
  name: 'VueTextAreaTag',

  props: {
    tags: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      default: '#48c774'
    }
  },
  data() {
    return {
      valtextarea: '',
      mirrorContainer: null
    }
  },
  mounted() {
    this.buildDom()
    this.OnInput()
  },
  methods: {
    OnInput() {
      let current = this.valtextarea
      this.tags.forEach((tag: any) => {
        const st = `<span style="background-color:${this.color};">${tag}</span>`
        current = this.replaceAll(current, tag, st)
      })
      this.$el.querySelectorAll('.content')[0].innerHTML = current
      this.$emit('input', this.valtextarea)
    },
    buildDom() {
      const _wrapper = document.createElement('div')
      const _content = document.createElement('div')

      _wrapper.classList.add('wrapper')
      _content.classList.add('content')
      _wrapper.append(_content)
      this.$el.prepend(_wrapper)

      // _content.append(_wrapper, this.$el)
    },
    escapeRegExp(str: string) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    },
    replaceAll(str: string, term: string, replacement: string) {
      return str.replace(new RegExp(this.escapeRegExp(term), 'g'), replacement)
    }
  }
})
</script>

<style>
.vue-text-area-tag {
  position: relative;
  overflow: hidden;
  display: inline-block;
}
.vue-text-area-tag .wrapper {
  position: absolute !important;
  top: 0 !important;
  right: -99px !important;
  bottom: 0 !important;
  left: 0 !important;
  padding-right: 99px !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
}
.vue-text-area-tag .wrapper .content {
  width: auto !important;
  height: auto !important;
  border-color: transparent !important;
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
  color: transparent !important;
  overflow: hidden !important;
  background: none transparent !important;
  padding: 20px;
}
.vue-text-area-tag .wrapper .content span {
  /* color:#000; */
}
.vue-text-area-tag textarea {
  display: block !important;
  position: relative !important;
  margin: 0;
  padding: 0;
  border-radius: 0;
  font: inherit;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  width: 760px;
  height: 100px;
  padding: 20px;
  border: 1px solid #adb5bd;
  color: inherit;
  background: none transparent !important;
}
</style>
