import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelpPage, LoginPage, MainPage, ProfilePage, RegisterPage } from "./pages";
import Container from "./Container";

function App() {
  return (
    <div className="text-sm h-screen overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route element={<Container />}>
            <Route element={<MainPage />} path="/" exact>
              <Route element={<ProfilePage />} path="/profile" />
              <Route element={<RegisterPage />} path="/add-user" />
              <Route element={<HelpPage />} path="/help" />
            </Route>
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
