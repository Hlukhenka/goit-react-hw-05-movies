import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 120px;
  text-decoration: none;
  padding: 10px 15px;
  color: black;

`;

export const Card = styled.div`
  width: 240px;
  height: 200px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Details = styled.div`
  margin-left: 10px;
`;

export const Info = styled.p`
margin-left: 20px;
font-size: 20px;
`