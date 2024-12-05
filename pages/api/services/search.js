import { services } from './data'

export default function handler(req, res) {
  const { q } = req.query

  if (!q) {
    return res.status(400).json({ error: 'Query parameter is required' })
  }

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(q.toLowerCase()),
  )

  res.status(200).json(filteredServices)
}
