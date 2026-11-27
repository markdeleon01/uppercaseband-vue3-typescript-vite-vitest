import { setActivePinia, createPinia } from 'pinia'
import { useDiscographyStore } from '@/stores/Discography'
import { beforeEach, describe, it, expect } from 'vitest'

describe('Discography Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('retrieves the number of releases', async () => {
    const store = useDiscographyStore()
    expect(store.releases.length).toBe(0)

    await store.fetchReleases()
    expect(store.releases.length).toBe(6)
  })
})
