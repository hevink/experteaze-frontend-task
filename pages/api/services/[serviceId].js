import { services } from './data'

export default function handler(req, res) {
  const { serviceId } = req.query
  const service = services.find((service) => service.id === parseInt(serviceId, 10))

  if (service) {
    res.status(200).json(service)
  } else {
    res.status(404).json({ error: 'Service not found' })
  }
}
