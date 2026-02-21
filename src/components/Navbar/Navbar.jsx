import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/contact', label: 'Contact' },
]

// Keylar: siz keyin i18n ulashga qulay bo‘lishi uchun
const languages = [
  { code: 'en', label: 'EN' },
  { code: 'uz', label: 'UZ' },
  { code: 'ru', label: 'RU' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Language select
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState('en')

  const location = useLocation()

  const activeLabel = useMemo(
    () => languages.find((l) => l.code === lang)?.label ?? 'EN',
    [lang]
  )

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
      // dropdown tashqarisiga bosilsa yopiladi
      if (!e.target.closest?.(`.${styles.langWrap}`)) setLangOpen(false)
    }
    window.addEventListener('click', onClickOutside)
    return () => window.removeEventListener('click', onClickOutside)
  }, [])

  const onSelectLang = (code) => {
    setLang(code)
    setLangOpen(false)
    // Keyin i18n qo‘shilganda shu joyda:
    // i18n.changeLanguage(code)
    // yoki localStorage.setItem('lang', code)
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <Link to="/" className={styles.logo} aria-label="AURUM">
            <span className={`fontDisplay ${styles.logoTop} textGoldGradient`}>AURUM</span>
            <span className={styles.logoBottom}>Master Gold Works</span>
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
                    {link.label}
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
                aria-label="Language"
              >
                <span className={styles.langPill}>
                  <span className={styles.langLabel}>{activeLabel}</span>
                  <ChevronDown size={16} className={styles.langChevron} />
                </span>
                <span className={styles.langGlow} aria-hidden="true" />
              </button>

              {langOpen && (
                <div className={styles.langMenu} role="listbox" aria-label="Languages">
                  {languages.map((l) => {
                    const active = l.code === lang
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
              aria-label="Toggle menu"
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
              const active = l.code === lang
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
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}