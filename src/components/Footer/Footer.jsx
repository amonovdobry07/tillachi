import { Link } from 'react-router-dom'
import { ArrowUp, Instagram, Send, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useTranslation()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  // Kontakt ma'lumotlari o‘zgarmaydi
  const contact = {
    phoneDisplay: '+998 93 476 62 00',
    phoneHref: 'tel:+998934766200',
    address: 'Buxoro tumani, Buyuk Ipak yo‘li yoqasi, Galaosiyo dehqon bozori',
    telegramHref: 'https://t.me/luxury_jewellry',
    instagramHref: 'https://www.instagram.com/luxzar_jewellry',
    emailDisplay: 'jeweller_shexon.uz@icloud.com',
    emailHref: 'mailto:jeweller_shexon.uz@icloud.com',
  }

  const nav = [
    { href: '/', key: 'nav.home' },
    { href: '/products', key: 'nav.products' },
    { href: '/services', key: 'nav.services' },
    { href: '/marketplace', key: 'nav.marketplace' },
    { href: '/contact', key: 'nav.contact' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <p className={`fontDisplay ${styles.brand} textGoldGradient`}>G'ulomjon</p>
            <p className={styles.brandSub}>{t('footer.brandSub')}</p>
            <p className={styles.desc}>{t('footer.desc')}</p>
          </div>

          <div>
            <p className={styles.title}>{t('footer.navigation')}</p>
            <ul className={styles.list}>
              {nav.map((l) => (
                <li key={l.href}>
                  <Link className={styles.navLink} to={l.href}>
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.title}>{t('footer.contactTitle')}</p>

            <a className={styles.contact} href={contact.phoneHref}>
              {contact.phoneDisplay}
            </a>
            <br />
            <br />

            <p className={styles.contact}>{contact.address}</p>

            <a className={styles.contact} href={contact.emailHref}>
              {contact.emailDisplay}
            </a>

            <div className={styles.socials}>
              <a
                className={styles.socialBtn}
                href={contact.instagramHref}
                target="_blank"
                rel="noreferrer"
                aria-label={t('footer.instagram')}
              >
                <Instagram size={16} />
              </a>

              <a
                className={styles.socialBtn}
                href={contact.telegramHref}
                target="_blank"
                rel="noreferrer"
                aria-label={t('footer.telegram')}
              >
                <Send size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className={`goldLine ${styles.separator}`} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Khalimov Qimmatbaxo metal tayyorlash. {t('footer.rights')}
          </p>

          <button onClick={scrollTop} className={styles.toTop} aria-label={t('footer.toTop')}>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}