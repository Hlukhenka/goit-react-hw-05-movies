import { useEffect, useState } from 'react';
import { Title, List, StyledLink } from 'components/Home/Home.styled';
import { fetchMovie } from 'components/Api/Api';
import { useLocation } from 'react-router-dom';

const URL = 'trending/all/day?language=en-US';

function Home() {
  const [trendingMovieData, setTrendingMovieData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovie(URL);

        setTrendingMovieData(response.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Title>Trending movie</Title>
      <List>
        {trendingMovieData.map(movie => {
          return (
            <li key={movie.id}>
              <StyledLink to={`/goit-react-hw-05-movies/movies/${movie.id}`} state={{ from: location }}>
                {movie.name ?? movie.title}
              </StyledLink>
            </li>
          );
        })}
      </List>
    </div>
  );
}

export default Home;
