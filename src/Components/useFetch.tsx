import React, { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [moviesList, setMoviesList] = useState([])



  const fetchDetails = async () => {
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      setMoviesList(data.Search)
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  return {
    moviesList
  }
}

export default useFetch
