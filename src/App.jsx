import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing.jsx";
import LoginPage from "./components/login.jsx";
import Register from "./components/register.jsx";
import Layout from "./components/shared/Layout.jsx";
import OverView from "./components/OverView.jsx";
import AllExpenses from "./components/AllExpenses.jsx";
import AllIncomes from "./components/AllIncomes.jsx";
import AllTransaction from "./components/AllTransaction.jsx";
import NotFoundPage from "./pages/Notfound.jsx";
import SettingsTabs from "./components/SettingsTabs.jsx";
function App() {
  

   return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login"  element={<LoginPage/>} />
        <Route path="register"  element={<Register />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<OverView />} />
          <Route path="expenses"  element={<AllExpenses/>} />
          <Route path="incomes"  element={<AllIncomes/>} />
          <Route path="transactions"  element={<AllTransaction/>} />
          <Route path="settings"  element={<SettingsTabs/>} />
        </Route>
        
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App