import { Route, Routes } from 'react-router-dom'
import { IsAuth } from '../components/IsAuth';
import { Home } from '../pages/Home';
import Login from '../pages/Login';
import { SignUp } from '../pages/SignUp';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <IsAuth>
            <Home />
          </IsAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
