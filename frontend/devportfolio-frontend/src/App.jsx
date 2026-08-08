
import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PublicLayout from './Layouts/PublicLayout';
import AuthLayout from './Layouts/AuthLayout';
import DashboardLayout from './Layouts/DashBoardLayout';
import DashboardHome from './Pages/dashboard/DashboardHome';
import Profile from './Pages/dashboard/Profile';
import Skills from './Pages/dashboard/Skills';
import Projects from './Pages/dashboard/Projects';
import Experience from './Pages/dashboard/Experience';
import Education from './Pages/dashboard/Education';
import Certificate from './Pages/dashboard/Certificate';
import SocialLinks from './Pages/dashboard/SocialLinks';
import Preview from './Pages/Preview';
import ProtectedRoute from './Routs/ProtectedRoute';
import PublicPortfolio from "./Pages/PublicPortfolio";
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="certificates" element={<Certificate />} />
        <Route path="social-links" element={<SocialLinks />} />

      </Route>

      <Route
        path="/preview"
        element={
          <ProtectedRoute>
            <Preview />
          </ProtectedRoute>
        }
      />

      <Route path="/portfolio/:username" element={<PublicPortfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
