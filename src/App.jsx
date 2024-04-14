import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/landing.jsx';
import LoginPage from './components/login.jsx';
import Register from './components/register.jsx';
import Layout from './components/shared/Layout.jsx';
import OverView from './components/OverView.jsx';
import AllExpenses from './components/AllExpenses.jsx';
import AllIncomes from './components/AllIncomes.jsx';
import AllTransaction from './components/AllTransaction.jsx';
import NotFoundPage from './pages/Notfound.jsx';
import SettingsTabs from './components/SettingsTabs.jsx';
import { AuthProvider } from './components/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import axios from 'axios';

axios.defaults.withCredentials = true;
function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Layout />} />} >
            <Route index element={<PrivateRoute element={<OverView />} />}/>
            <Route path="expenses" element={<PrivateRoute element={<AllExpenses />} />} />
            <Route path="incomes" element={<PrivateRoute element={<AllIncomes />} />} />
            <Route path="transactions" element={<PrivateRoute element={<AllTransaction />} />} />
            <Route path="settings" element={<PrivateRoute element={<SettingsTabs />} />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
