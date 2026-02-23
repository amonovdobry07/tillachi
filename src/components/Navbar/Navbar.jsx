import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import styles from './Navbar.module.css'
import logo from "../../assets/MatketPlace/logo.png"
import { useTranslation } from "react-i18next"

const navLinks = [
  { href: '/', key: 'nav.home' },
  { href: '/products', key: 'nav.products' },
  { href: '/services', key: 'nav.services' },
  { href: '/marketplace', key: 'nav.marketplace' },
  { href: '/contact', key: 'nav.contact' },
]

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'uz', label: 'UZ' },
  { code: 'ru', label: 'RU' },
  { code: 'tr', label: 'TR' },
  { code: 'fr', label: 'FR' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const [langOpen, setLangOpen] = useState(false)

  const location = useLocation()

  // activeLabel endi i18n.language dan olinadi
  const activeLabel = useMemo(() => {
    return languages.find((l) => l.code === i18n.language)?.label ?? 'EN'
  }, [i18n.language])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setLangOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!e.target.closest?.(`.${styles.langWrap}`)) setLangOpen(false)
    }
    window.addEventListener('click', onClickOutside)
    return () => window.removeEventListener('click', onClickOutside)
  }, [])

  const onSelectLang = (code) => {
    i18n.changeLanguage(code)
    localStorage.setItem('lang', code)
    setLangOpen(false)
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <Link to="/" className={styles.logo} aria-label={t('nav.brand')}>
              <img src={logo} alt="" style={{width: "5%"}} />
          </Link>

          <div className={styles.rightGroup}>
            <div className={styles.desktopLinks}>
              {navLinks.map((link) => {
                const active = location.pathname === link.href
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`${styles.link} ${active ? styles.linkActive : ''}`}
                  >
                    {t(link.key)}
                    <span className={`${styles.underline} ${active ? styles.underlineActive : ''}`} />
                  </Link>
                )
              })}
            </div>

            {/* Language selector (desktop) */}
            <div className={styles.langWrap}>
              <button
                type="button"
                className={`${styles.langBtn} ${langOpen ? styles.langBtnOpen : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setLangOpen((v) => !v)
                }}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label={t('nav.language')}
              >
                <span className={styles.langPill}>
                  <span className={styles.langLabel}>{activeLabel}</span>
                  <ChevronDown size={16} className={styles.langChevron} />
                </span>
                <span className={styles.langGlow} aria-hidden="true" />
              </button>

              {langOpen && (
                <div className={styles.langMenu} role="listbox" aria-label={t('nav.languages')}>
                  {languages.map((l) => {
                    const active = l.code === i18n.language
                    return (
                      <button
                        key={l.code}
                        type="button"
                        className={`${styles.langItem} ${active ? styles.langItemActive : ''}`}
                        onClick={() => onSelectLang(l.code)}
                        role="option"
                        aria-selected={active}
                      >
                        <span className={styles.langItemCode}>{l.label}</span>
                        <span className={styles.langItemDot} />
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Mobile button */}
            <button
              className={styles.mobileBtn}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={t('nav.toggleMenu')}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileOverlay}>
          {/* Mobile language */}
          <div className={styles.mobileLangRow}>
            {languages.map((l) => {
              const active = l.code === i18n.language
              return (
                <button
                  key={l.code}
                  className={`${styles.mobileLangChip} ${active ? styles.mobileLangChipActive : ''}`}
                  onClick={() => onSelectLang(l.code)}
                  type="button"
                >
                  {l.label}
                </button>
              )
            })}
          </div>

          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className={`fontDisplay ${styles.mobileLink} animateFadeUp`}
              style={{ animationDelay: `${i * 0.08}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              {t(link.key)}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}