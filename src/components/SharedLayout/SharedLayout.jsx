import React, { Suspense, lazy } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled';

const Loader = lazy(()=>import('components/Loader/Loader'));


const SharedLayout = () => {
  return (
    <Container>
        <Header>
        <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
        </Header>
        <main>
        <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>
        </main>
    </Container>
  )
}

export default SharedLayout