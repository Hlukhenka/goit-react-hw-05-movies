import { useSearchParams, useLocation } from 'react-router-dom';
import { Form, List, StyledLink, Btn } from './Movies.styled';
import { useState, useEffect } from 'react';
import { fetchMovie } from 'components/Api/Api';

function Movies() {
  const [movies, setMovie] = useState([]);
  const location = useLocation();
  const [useParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = useParams.get('query');

    if (query) {
      const fetchData = async () => {
        try {
          const movies = await fetchMovie(
            `search/movie?query=${query}&include_adult=false&language=en-US&page=1`
          );
          setMovie(movies.results);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    }
  }, [useParams]);

  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value;

    if (query !== '') {
      setSearchParams({ query: query });
    }

    e.currentTarget.reset();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input name="query" autoComplete="off" />
        <Btn type="submit">Search</Btn>
        <List>
          {!movies.length
            ? null
            : movies.map(movie => {
                return (
                  <>
                    <li key={movie.id}>
                      <StyledLink
                        key={movie.id}
                        to={`/goit-react-hw-05-movies/movies/${movie.id}`}
                        state={{ from: location }}
                      >
                        {movie.original_title}
                      </StyledLink>
                    </li>
                  </>
                );
              })}
        </List>
      </Form>
    </div>
  );
}

export default Movies;
