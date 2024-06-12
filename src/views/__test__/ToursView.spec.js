import TourCard from '@/components/TourCard.vue'
import ToursView from '@/views/ToursView.vue'
import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import { describe, expect, it, vi } from 'vitest'

// Mock de axios
vi.mock('axios')

describe('TourView', () => {
  const mockTours = [
    {
      id: 1,
      title: 'Tour 1',
      img: 'img1.jpg',
      calification: 9,
      opinions: 10,
      travelers: 5,
      description: 'Description 1',
      price: 100,
      discount: 20,
    },
    {
      id: 2,
      title: 'Tour 2',
      img: 'img2.jpg',
      calification: 8,
      opinions: 20,
      travelers: 10,
      description: 'Description 2',
      price: 200,
      discount: 30,
    },
  ]

  it('renders correctly', () => {
    axios.get.mockResolvedValueOnce({ data: mockTours })

    const wrapper = shallowMount(ToursView)

    // Verificar que inicialmente no hay TourCard renderizados
    expect(wrapper.findAllComponents(TourCard).length).toBe(0)
  })

  it('fetches tours and renders TourCard components', async () => {
    axios.get.mockResolvedValueOnce({ data: mockTours })

    const wrapper = shallowMount(ToursView)

    // Esperar a que la promesa de axios se resuelva y la vista se actualice
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    // Verificar que se han renderizado los TourCard
    const tourCards = wrapper.findAllComponents(TourCard)
    expect(tourCards.length).toBe(mockTours.length)

    // Verificar que las props de TourCard sean correctas
    mockTours.forEach((tour, index) => {
      expect(tourCards[index].props('tour')).toEqual(tour)
    })
  })
})
