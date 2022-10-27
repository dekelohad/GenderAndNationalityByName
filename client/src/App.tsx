import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as ROUTES from './constants/routes';
import { Home, AllUsers, NotFound } from './pages';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ALL_USERS} element={<AllUsers />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}
