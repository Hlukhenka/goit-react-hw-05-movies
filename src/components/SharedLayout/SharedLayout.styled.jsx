import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 55px;
  color: #fff;
  border-bottom: 1px solid black;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  display: flex;
  margin-right: 20px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &.active {
    color: red;
  }
`;

export const Nav = styled.nav`
  display: flex;
  height: 100%;
`;
