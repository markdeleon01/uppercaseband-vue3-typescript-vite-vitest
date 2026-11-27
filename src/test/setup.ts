import database from '../../db.json'
import apiClient from '../utils/apiClient'

const responses = new Map<string, unknown>([
  ['/members', database.members],
  ['/discography', database.discography],
  ['/events', database.events]
])

apiClient.defaults.adapter = async (config) => {
  const data = responses.get(config.url ?? '')
  const status = data === undefined ? 404 : 200

  return {
    data: data ?? { error: 'Not Found' },
    status,
    statusText: status === 200 ? 'OK' : 'Not Found',
    headers: {},
    config
  }
}
