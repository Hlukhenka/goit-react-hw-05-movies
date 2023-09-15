import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTQxOWZiOWI4ODk3ZTE4ZTA0MWIzNjI3NTAyMmYxNSIsInN1YiI6IjY0ZWRmMzQwYzNjODkxMDBjNjg0ODRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IZIiDwZpWjrxiyVj8M8DwCEmeVVbICtGjekJrUNHGgw',
  },
};

export const fetchMovie = async params => {
  const response = await axios.get(`${BASE_URL}${params}`, options);
  const data = response.data;
  return data;
};

