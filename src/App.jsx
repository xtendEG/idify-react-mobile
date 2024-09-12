import { Route, Routes, useLocation } from "react-router-dom";

import {
  About,
  ChangePassword,
  ConfirmResetCode,
  CreateTicket,
  Edit,
  ForgetPassword,
  Help,
  Home,
  Languages,
  Login,
  Privacy,
  Profile,
  ResetPassword,
  Settings,
  Signup,
  Start,
  Support,
  Terms,
  Ticket,
  History,
  CreateAlbum,
  Camera,
  EditImage,
  Preview,
  Rotate,
  Crop,
  Adjust,
  Enhance
} from "./screens";
import Navbar from "./components/common/navbar";
import Welcome from "./components/start/Welcome";

function App() {
  const location = useLocation();
  const showNav = location.pathname == "/" || location.pathname == "/profile";

  return (
    <>
      {showNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<Edit />} />
        <Route path="/profile/history" element={<History />} />
        <Route path="/profile/create-album" element={<CreateAlbum />} />

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
        <Route
          path="/profile/settings/change-password"
          element={<ChangePassword />}
        />

        <Route path="/camera" element={<Camera />} /> 
        <Route path="/camera/preview" element={<Preview />} /> 
        <Route path="/camera/edit" element={<EditImage />} /> 
        <Route path="/camera/edit/rotate" element={<Rotate />} /> 
        <Route path="/camera/edit/crop" element={<Crop />} /> 
        <Route path="/camera/edit/adjust" element={<Adjust />} /> 
        <Route path="/camera/edit/enhance" element={<Enhance />} /> 

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
