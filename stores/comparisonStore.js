import { useLocalObservable } from 'mobx-react-lite'

export const useComparisonStore = () => {
  const store = useLocalObservable(() => ({
    selectedServices: [],
    searchQuery: '', // Observable to track the search input
    services: [], // Add this to hold all available services (mock or API data)
    get filteredServices() {
      // Computed property to filter services based on search query
      if (!store.searchQuery) return store.services
      return store.services.filter((service) =>
        service.name.toLowerCase().includes(store.searchQuery.toLowerCase()),
      )
    },
    setSearchQuery(query) {
      store.searchQuery = query
    },
    setServices(services) {
      store.services = services
    },
    addService(service) {
      if (store.selectedServices.length >= 3) {
        alert('You can select up to 3 services for comparison.')
        return
      }
      store.selectedServices.push(service)
    },
    removeService(serviceId) {
      store.selectedServices = store.selectedServices.filter((service) => service.id !== serviceId)
    },
    isServiceSelected(serviceId) {
      return store.selectedServices.some((service) => service.id === serviceId)
    },
  }))

  return store
}
