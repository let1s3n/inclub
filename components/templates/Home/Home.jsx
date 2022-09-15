import React, { useState } from 'react'
import List from '../../elements/List/List'
import SearchBar from '../../elements/SearchBar/SearchBar'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('joker');
  const handleSearch = searchQuery => {
    setSearchQuery(searchQuery);
  }

  return (
    <Container className="p-5">
      <h1 className="text-center p-3 mb-3">Buscador de películas</h1>
      <SearchBar handleSearch={handleSearch} />
      <List search={searchQuery} />
    </Container >
  )
}

export default Home