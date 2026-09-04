import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ArticleDetail from './pages/ArticleDetail';
import ServiceDetail from './pages/ServiceDetail';
import BookApp from './pages/BookApp';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import ChatAiWidget from './components/ChatAiWidget';

function App() {
  return (
    <BrowserRouter basename="/iVision_WebProject">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="news" element={<Articles />} />
          <Route path="news/:id" element={<ArticleDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bookApp" element={<BookApp />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/profile" element={<UserDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      <ChatAiWidget />
    </BrowserRouter>
  );
}

export default App;