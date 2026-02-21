import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import Services from '@/pages/Services'
import Marketplace from '@/pages/Marketplace'
import MarketplaceDetail from '@/pages/MarketplaceDetail'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'
import ScrollToTop from '@/components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/:id" element={<MarketplaceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
