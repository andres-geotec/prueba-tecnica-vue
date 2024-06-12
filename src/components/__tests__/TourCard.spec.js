import TourCard from '@/components/TourCard.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('TourCard', () => {
  const tour = {
    title: 'Excursión a Toledo y Segovia',
    calification: 9.2,
    opinions: 2.215,
    travelers: 20.611,
    description:
      'En este tour visitaremos en un día <b>las dos ciudades más populares desde Madrid: Toledo y Segovia</b>. Si lo deseáis, podréis ampliar el recorrido hasta <b>Ávila</b>, famosa por sus murullas',
    price: 55,
    discount: 30,
    img: 'images/img02.jpg',
  }

  it('renders properly', () => {
    const wrapper = shallowMount(TourCard, { props: { tour } })

    expect(wrapper.find('h2').text()).toBe(tour.title)
    expect(wrapper.find('img').attributes('src')).toBe(`api/${tour.img}`)
    expect(wrapper.find('.text-base.font-semibold').text()).toContain(
      `${tour.calification}/10`
    )
    expect(wrapper.find('.flex.space-x-2').text()).toContain(
      `${tour.opinions} opiniones`
    )
    expect(wrapper.find('.flex.space-x-2').text()).toContain(
      `${tour.travelers} viajeros`
    )
  })

  it('renders "¡Gratis!" when price is 0', () => {
    const wrapper = shallowMount(TourCard, {
      props: { tour: { ...tour, price: 0 } },
    })

    expect(wrapper.find('.text-2xl.text-primary.font-bold').text()).toBe(
      '¡Gratis!'
    )
  })

  it('renders price and discount correctly when price is greater than 0', () => {
    const wrapper = shallowMount(TourCard, {
      props: { tour },
    })

    expect(wrapper.find('.text-2xl.text-primary.font-bold').text()).toContain(
      `${tour.price} €`
    )
    expect(wrapper.find('.text-sm.text-green-600').text()).toContain(
      `(-${tour.discount}%)`
    )
  })

  it('conditionally renders ShareSocial component based on screen size', async () => {
    const wrapper = shallowMount(TourCard, {
      props: { tour },
    })

    const shareSocialDesktop = wrapper.findComponent({ name: 'ShareSocial' })
    expect(shareSocialDesktop.exists()).toBe(true)
  })
})
