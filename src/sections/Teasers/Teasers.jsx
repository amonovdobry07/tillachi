import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './Teasers.module.css'

const items = [
  { href: '/products', labelKey: 'teasers.items.products.title', descKey: 'teasers.items.products.desc' },
  { href: '/services', labelKey: 'teasers.items.services.title', descKey: 'teasers.items.services.desc' },
  { href: '/marketplace', labelKey: 'teasers.items.marketplace.title', descKey: 'teasers.items.marketplace.desc' },
]

export default function Teasers() {
  const { t } = useTranslation()

  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.kicker}>{t('teasers.kicker')}</p>
          <h2 className={`fontDisplay ${styles.title}`}>
            {t('teasers.title')}
          </h2>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <Link key={item.href} to={item.href} className={styles.card}>
              <h3 className={`fontDisplay ${styles.cardTitle}`}>
                {t(item.labelKey)}
              </h3>
              <p className={styles.cardDesc}>
                {t(item.descKey)}
              </p>
              <ArrowRight size={18} className={styles.arrow} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}