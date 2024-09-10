import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./screens/home";
import Signup from "./screens/auth/signup";
import Login from "./screens/auth/login";
import ForgetPassword from "./screens/auth/forget-password";
import ConfirmResetCode from "./screens/auth/confirm-reset-code";
import ResetPassword from "./screens/auth/reset-password";
import Navbar from "./components/common/navbar";
import Start from "./screens/start";
import Welcome from "./components/start/welcome";

function App() {
  const location = useLocation();
  const isAuthRoute = location.pathname.startsWith('/auth') || location.pathname.startsWith('/start');
  
  return (
    <>
      {!isAuthRoute && <Navbar  />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/start/welcome" element={<Welcome />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgetPassword />} />
        <Route path="/auth/confirm-reset-code" element={<ConfirmResetCode />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
