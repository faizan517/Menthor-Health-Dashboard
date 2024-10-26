document.body.style = 'background: white;';
import React, { Suspense } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { CSpinner } from '@coreui/react';
import './scss/style.scss';
import Color from './utils/Color';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const App = () => {
  return (
    <>
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner style={{ backgroundColor: Color.primary }} variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} /> {/* Redirect to Login */}
          <Route path="/login" name="Login Page" element={<Login />} />
          <Route path="/register" name="Register Page" element={<Register />} />
          <Route path="/404" name="Page 404" element={<Page404 />} />
          <Route path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
    <ToastContainer position="bottom-left" autoClose={3000} hideProgressBar={false} />
    </>
  );
};

export default App;
