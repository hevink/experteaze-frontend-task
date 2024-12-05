import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    onSearch(query.trim())
  }

  useEffect(() => {
    if (query === '') {
      handleSearch()
    }
  }, [query])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Box display="flex" gap={2} mt={4}>
      <TextField
        variant="outlined"
        sx={{ bgcolor: 'white' }}
        fullWidth
        placeholder="Search for a service..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  )
}

export default SearchBar
