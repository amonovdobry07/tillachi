import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import heroBg from '@/assets/hero-bg.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} style={{ backgroundImage: `url(${heroBg})` }} />
      <div className={styles.overlay} />

      <div className={styles.leftLine} aria-hidden="true" />
      <div className={styles.rightLine} aria-hidden="true" />

      <div className={styles.content}>
        <p
          className={`${styles.kicker} animateFadeIn`}
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Est. 1993 · Master Craftsman
        </p>

        <h1
          className={`fontDisplay ${styles.title} animateFadeUp`} 
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          The Art of <span className={`textGoldGradient ${styles.italic}`}>Gold</span>
        </h1>

        <p
          className={`${styles.subtitle} fontCormorant animateFadeUp`}
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Handcrafted luxury jewelry forged with three decades of mastery, precision, and an undying
          passion for gold.
        </p>

        <div
          className={`${styles.actions} animateFadeUp`}
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <Link to="/products" className={styles.primaryBtn}>
            View Products <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>
            Get in Touch
          </Link>
        </div>
      </div>

      <a className={styles.scroll} href="#about" aria-label="Scroll to About">
        <ChevronDown size={20} />
      </a>
    </section>
  )
}
