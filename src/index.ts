import { VueConstructor } from 'vue'
import VueTextAreaTag from './VueTextAreaTag.vue'

export { VueTextAreaTag }

export default function install(Vue: VueConstructor): void {
  Vue.component('VueTextAreaTag', VueTextAreaTag)
}

declare const window: any
if (typeof window !== 'undefined' && typeof window.Vue === 'function') {
  window.Vue.use(install)
}
