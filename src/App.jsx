import CssBaseline from '@mui/material/CssBaseline'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Homepage from './Pages/Homepage'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'
import { Routes, Route } from 'react-router-dom'

import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import ConfidentialityPage from './pages/ConfidentialityPage'
import HelpPage from './pages/HelpPage'
import HowItWorksPage from './pages/HowItWorksPage'
import CustomerSuccessPage from './pages/CustomerSuccessPage'
import StoriesPage from './pages/StoriesPage'
import TrustSafetyPage from './pages/TrustSafetyPage'
import QualityGuidePage from './pages/QualityGuidePage'
import CareersPage from './pages/CareersPage' 
import FAQPage from './Pages/FAQPage'










function App() {

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/policies/terms" element={<TermsPage />} />
        <Route path="/policies/privacy" element={<PrivacyPage />} />
        <Route path="/policies/confidentiality" element={<ConfidentialityPage />} />
        <Route path="/policies/help" element={<HelpPage />} />
          
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/customer-success" element={<CustomerSuccessPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/trust-safety" element={<TrustSafetyPage />} />
        <Route path="/quality-guide" element={<QualityGuidePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/faqs" element={<FAQPage />} />


      </Routes>
      <Footer />
    </>
  )
}

export default App
