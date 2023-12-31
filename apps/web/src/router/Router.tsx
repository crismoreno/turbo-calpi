import { FC, Suspense } from 'react';
import { PublicRoutes } from './PublicRoutes.tsx';
import { LoadingPage } from '../pages/Loading.page.tsx';
import { MainTemplate } from '../templates/MainTemplate.tsx';

export const Router: FC = () => {
  return (
      <Suspense fallback={<LoadingPage/>}>
        <MainTemplate>
          <PublicRoutes/>
        </MainTemplate>
      </Suspense>
  );
};