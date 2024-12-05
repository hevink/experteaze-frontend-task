import axios from 'axios'

const api = axios.create({
  baseURL: '/api/services',
  timeout: 5000,
})

// Fetch all services
export const fetchServices = async () => {
  try {
    const response = await api.get('/')
    return response.data
  } catch (error) {
    console.error('Error fetching services:', error)
    throw error
  }
}

// Fetch a specific service by ID
export const fetchService = async (id) => {
  try {
    const response = await api.get(`/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching service with ID ${id}:`, error)
    throw error
  }
}

// Search for services
export const searchServices = async (query) => {
  try {
    const response = await api.get(`/search`, {
      params: { q: query },
    })
    return response.data
  } catch (error) {
    console.error('Error searching services:', error)
    throw error
  }
}
