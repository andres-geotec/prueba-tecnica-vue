import App from '@/App.vue'
import ToursView from '@/views/ToursView.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('MainView', () => {
  it('renders the main element', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('renders the ToursView component', () => {
    const wrapper = shallowMount(App)
    const toursView = wrapper.findComponent(ToursView)
    expect(toursView.exists()).toBe(true)
  })
})
