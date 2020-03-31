import { shallowMount } from '@vue/test-utils'
import VueTextAreaTag from '@/VueTextAreaTag.vue'

describe('VueTextAreaTag', () => {
  it('accepts value prop', () => {
    const wrapper = shallowMount(VueTextAreaTag, {
      propsData: {
        color: '#ccc',
        tags: ['diet']
      }
    })

    expect(wrapper.find('.content').exists()).toBe(true)
  })
})
