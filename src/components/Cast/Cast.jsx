import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from 'components/Api/Api';
import { Image, Overlay, Title } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const URL = `movie/${movieId}/credits`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovie(URL);
        setCast(response.cast);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [URL]);

  return (
    <>
      <Title>Cast</Title>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <Overlay>
              <Image
                alt={actor.name}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                    : 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'
                }
              />
            </Overlay>
            <h3>{actor.name}</h3>
            <p>{`Character: ${actor.character}`}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
