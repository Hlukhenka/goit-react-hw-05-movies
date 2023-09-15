import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from 'components/Api/Api';
import { Item } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const URL = `movie/${movieId}/reviews`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovie(URL);
        setReviews(response.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [URL]);
  return !reviews.length ? (
    <p>We don't have any reviews for this movie</p>
  ) : (
    <ul>
      {reviews.map(review => {
        return (
          <Item key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </Item>
        );
      })}
    </ul>
  );
};

export default Reviews;
