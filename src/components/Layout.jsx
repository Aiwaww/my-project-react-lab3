import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MyHeader } from './MyHeader';
import { MyFooter } from './MyFooter';

export default function Layout() {
  return (
    <>
      <MyHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <MyFooter />
    </>
  );
}
