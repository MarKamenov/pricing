import { Suspense } from 'react';
import { Blocks } from 'react-loader-spinner';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './MainRoutes';
import { AccessibleNavigation } from './components/AccessibleNavigation';
import appStyles from './App.module.scss';
import { Header } from './components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <main className={appStyles.main}>
        <BrowserRouter>
          <AccessibleNavigation />
          <Suspense fallback={<Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperClass={appStyles.loader}
            visible
          />}>
            <MainRoutes />
          </Suspense>
        </BrowserRouter>
      </main>
    </>

  )
}
