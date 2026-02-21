import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import styles from './Teasers.module.css'

const items = [
  { 
    href: '/products', 
    label: 'Mahsulotlar', 
    desc: 'Bizning to‘liq zargarlik kolleksiyamizni ko‘rib chiqing' 
  },
  { 
    href: '/services', 
    label: 'Xizmatlar', 
    desc: 'Buyurtma asosida dizayn, ta’mirlash va restavratsiya' 
  },
  { 
    href: '/marketplace', 
    label: 'Savdo maydonchasi', 
    desc: 'Bizni yetakchi platformalarda ham topishingiz mumkin' 
  },
]

export default function Teasers() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.kicker}>Kashf eting</p>
          <h2 className={`fontDisplay ${styles.title}`}>
            Bizning Kolleksiyalar
          </h2>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <Link key={item.href} to={item.href} className={styles.card}>
              <h3 className={`fontDisplay ${styles.cardTitle}`}>
                {item.label}
              </h3>
              <p className={styles.cardDesc}>
                {item.desc}
              </p>
              <ArrowRight size={18} className={styles.arrow} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 