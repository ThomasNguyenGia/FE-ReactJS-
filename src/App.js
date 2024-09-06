import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function DefaultComponent({ children, isShowFooter }) {
  return (
    <>
      <HeaderComponent />
      {children}
      {isShowFooter && <FooterComponent />}
    </>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader || route.isShowFooter ? DefaultComponent : Fragment;
            return (
              <Route 
                key={route.path} 
                path={route.path} 
                element={
                  <Layout isShowFooter={route.isShowFooter}>
                    <Page />
                  </Layout>
                } 
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
