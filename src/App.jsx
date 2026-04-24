import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import HomeCorporate from './pages/HomeCorporate.jsx';
import HomeInsurance from './pages/HomeInsurance.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import ServiceDetails from './pages/ServiceDetails.jsx';
import Team from './pages/Team.jsx';
import TeamDetails from './pages/TeamDetails.jsx';
import Pricing from './pages/Pricing.jsx';
import Faq from './pages/Faq.jsx';
import Project from './pages/Project.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import Contact from './pages/Contact.jsx';
import ProgramPage from './pages/ProgramPage.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home-corporate" element={<HomeCorporate />} />
        <Route path="/home-insurance" element={<HomeInsurance />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-list" element={<Blog />} />
        <Route path="/blog-details/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs/:slug" element={<ProgramPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
