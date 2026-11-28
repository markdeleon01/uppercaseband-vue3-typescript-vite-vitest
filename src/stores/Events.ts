import { defineStore } from 'pinia'
import EventService from '@/services/EventService.js'

export const useEventsStore = defineStore('events', {
  state: () => ({
    events: []
  }),
  getters: {
    getEvents: state => state.events
  },
  actions: {
    /* c8 ignore start */
    async fetchEvents() {
      const response = await EventService.getEvents()
      this.events = response.data
    }
    /* c8 ignore stop */
  }
})
