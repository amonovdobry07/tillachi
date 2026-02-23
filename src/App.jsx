import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Services from "@/pages/Services";
import Marketplace from "@/pages/Marketplace";
import MarketplaceDetail from "@/pages/MarketplaceDetail";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationUz from "./locales/translarionUz";
import translationRu from "./locales/translationRu";
import translationEn from "./locales/translationEn";
import translationTr from "./locales/translationTr";
import translationFr from "./locales/tranaslationFr";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    ru: { translation: translationRu },
    uz: { translation: translationUz },
    tr: { translation: translationTr },
    fr: { translation: translationFr },
  },
  lng: "uz",
  fallbackLng: "uz",
});

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
  );
}
