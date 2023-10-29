import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, LinkNav } from './SharedLayout.styled';

const Loader = lazy(() => import('components/Loader/Loader'));

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LinkNav to="/">Home</LinkNav>
          <LinkNav to="/movies">Movies</LinkNav>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
