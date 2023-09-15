import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import {
  Card,
  Container,
  Details,
  Info,
  StyledLink,
} from './MovieDetails.styled';
import { fetchMovie } from 'components/Api/Api';
import { Grid } from 'react-loader-spinner';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const URL = `movie/${movieId}`;
  const location = useLocation();
  const goBackLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovie(URL);
        setMovie(response);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [URL]);

  return movie ? (
    <>
      <StyledLink to={goBackLocation.current}>Go back</StyledLink>
      <Container>
        <Card>
          <img
            style={{ display: 'block', width: '100%', height: '100%' }}
            src={
              movie['backdrop_path']
                ? `https://image.tmdb.org/t/p/original${movie['backdrop_path']}`
                : 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'
            }
            alt=""
          />
        </Card>
        <Details>
          <h2>{movie.title}</h2>
          <p>{`User score: ${movie.vote_average}`}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p> {movie.genres?.map(g => g.name).join(', ')}</p>
        </Details>
      </Container>
      <hr />
      <Info>Aditional information</Info>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <hr />
      <Suspense
        fallback={
          <Grid
            height="80"
            width="80"
            color="#fff"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{ placeSelf: 'center' }}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default MovieDetails;
