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
import Profile from "./screens/profile";
import Settings from "./screens/profile/settings";
import Languages from "./screens/profile/settings/languages";
import About from "./screens/profile/settings/about";
import Terms from "./screens/profile/settings/terms";
import Privacy from "./screens/profile/settings/Privacy";
import Help from "./screens/profile/settings/help";
import Support from "./screens/profile/settings/support";
import CreateTicket from "./screens/profile/settings/support/create-ticket";
import Ticket from "./screens/profile/settings/support/ticket";
import ChangePassword from "./screens/profile/settings/change-password";

function App() {
  const location = useLocation();
  const showNav = location.pathname == "/" || location.pathname == "/profile";

  return (
    <>
      {showNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/profile/settings/languages" element={<Languages />} />
        <Route path="/profile/settings/about" element={<About />} />
        <Route path="/profile/settings/terms" element={<Terms />} />
        <Route path="/profile/settings/privacy" element={<Privacy />} />
        <Route path="/profile/settings/help" element={<Help />} />
        <Route path="/profile/settings/support" element={<Support />} />
        <Route
          path="/profile/settings/support/create"
          element={<CreateTicket />}
        />
        <Route path="/profile/settings/support/:id" element={<Ticket />} />
        <Route path="/profile/settings/change-password" element={<ChangePassword />} />

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
