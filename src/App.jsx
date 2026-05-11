import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import TutorialsPage from './pages/Tutorials';
import CommunityPage from './pages/Community';
import Contact from './pages/Contact';
import { Privacy, Terms, Refund } from './pages/Legal';
import NotFound from './pages/NotFound';
import {
  MuscleCars, RestorationGuides, CollectorStories,
  RetroRoadTrips, GarageWorkshops, ClassicReviews
} from './pages/categories';

export default function App() {
  const location = useLocation();
  return (
    <div className="grain min-h-screen flex flex-col">
      <ScrollToTop/>
      <Header/>
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/tutorials" element={<TutorialsPage/>}/>
            <Route path="/community" element={<CommunityPage/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/muscle-cars" element={<MuscleCars/>}/>
            <Route path="/restoration-guides" element={<RestorationGuides/>}/>
            <Route path="/collector-stories" element={<CollectorStories/>}/>
            <Route path="/garage-workshops" element={<GarageWorkshops/>}/>
            <Route path="/classic-reviews" element={<ClassicReviews/>}/>
            <Route path="/retro-road-trips" element={<RetroRoadTrips/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/terms" element={<Terms/>}/>
            <Route path="/refund" element={<Refund/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </AnimatePresence>
      </main>
      <Footer/>
      <CookieBanner/>
    </div>
  );
}
