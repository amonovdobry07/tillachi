import { Link } from 'react-router-dom'
import { ArrowUp, Instagram, Send, Mail } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  // Jadvalingizdan olingan ma’lumotlar
  const contact = {
    phoneDisplay: '+998 93 476 62 00',
    phoneHref: 'tel:+998934766200',
    address: 'Buxoro tumani, Buyuk Ipak yo‘li yoqasi, Galaosiyo dehqon bozori',
    telegramHref: 'https://t.me/luxury_jewellry',
    instagramHref: 'https://www.instagram.com/luxzar_jewellry',
    emailDisplay: 'jeweller_shexon.uz@icloud.com',
    emailHref: 'mailto:jeweller_shexon.uz@icloud.com',
  }

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <p className={`fontDisplay ${styles.brand} textGoldGradient`}>AURUM</p>
            <p className={styles.brandSub}>Master Gold Works</p>
            <p className={styles.desc}>
              Har bir zargarlik buyumida sifat, aniqlik va nafislik. Ustalik va did bilan yaratilgan
              mahsulotlar.
            </p>
          </div>

          <div>
            <p className={styles.title}>Navigatsiya</p>
            <ul className={styles.list}>
              {[
                { href: '/', label: 'Bosh sahifa' },
                { href: '/products', label: 'Mahsulotlar' },
                { href: '/services', label: 'Xizmatlar' },
                { href: '/marketplace', label: 'Savdo maydonchasi' },
                { href: '/contact', label: 'Aloqa' },
              ].map((l) => (
                <li key={l.href}>
                  <Link className={styles.navLink} to={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.title}>Bog‘lanish</p>

            <a className={styles.contact} href={contact.phoneHref} >
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
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>

              <a
                className={styles.socialBtn}
                href={contact.telegramHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
              >
                <Send size={16} />
              </a>

              <a className={styles.socialBtn} href={contact.emailHref} aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className={`goldLine ${styles.separator}`} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} AURUM Master Gold Works. Barcha huquqlar himoyalangan.
          </p>
          <button onClick={scrollTop} className={styles.toTop} aria-label="Tepaga qaytish">
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}