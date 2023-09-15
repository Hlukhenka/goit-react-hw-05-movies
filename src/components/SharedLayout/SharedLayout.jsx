import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Header,
  StyledLink,
  Nav,
} from 'components/SharedLayout/SharedLayout.styled';
import { Grid } from 'react-loader-spinner';

export function SharedLayout() {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Suspense
        fallback={
          <Grid
            height="80"
            width="80"
            color="red"
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
  );
}
