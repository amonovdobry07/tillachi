import craftsmanImg from '@/assets/craftsman.jpg'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTranslation } from "react-i18next"
import styles from './About.module.css'

export default function About() {
  const ref = useScrollReveal()
  const { t } = useTranslation()

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <div className={`reveal opacity0Init ${styles.labelRow}`}>
          <div className={styles.smallLine} />
          <span className={styles.label}>{t("about.label")}</span>
        </div>

        <div className={styles.grid}>
          {/* IMAGE */}
          <div className={`reveal opacity0Init ${styles.imageWrap}`}>
            <div className={styles.imageFrame}>
              <img
                src={craftsmanImg}
                alt={t("about.imageAlt")}
                className={styles.image}
              />
              <div className={styles.frameBorder} aria-hidden="true" />
              <div className={styles.cornerBox} aria-hidden="true" />
            </div>

            <div className={styles.badge}>
              <p className={`fontDisplay ${styles.badgeValue}`}>2011+</p>
              <p className={styles.badgeLabel}>{t("about.badge")}</p>
            </div>
          </div>

          {/* TEXT */}
          <div className={`reveal opacity0Init ${styles.text}`}>
            <h2 className={`fontDisplay ${styles.heading}`}>
              {t("about.title1")}{" "}
              <span className={`textGoldGradient ${styles.italic}`}>
                {t("about.title2")}
              </span>
            </h2>

            <div className={`goldLine ${styles.bigLine}`} />

            <p className={`fontCormorant ${styles.pLead}`}>
              {t("about.lead")}
            </p>

            <p className={styles.p}>
              {t("about.p1")}
            </p>

            <p className={styles.p}>
              {t("about.p2")}
            </p>

            <div className={styles.stats}>
              <div>
                <p className={`fontDisplay ${styles.statValue}`}>2011+</p>
                <p className={styles.statLabel}>{t("about.stat1")}</p>
              </div>

              <div>
                <p className={`fontDisplay ${styles.statValue}`}>2021</p>
                <p className={styles.statLabel}>{t("about.stat2")}</p>
              </div>

              <div>
                <p className={`fontDisplay ${styles.statValue}`}>100%</p>
                <p className={styles.statLabel}>{t("about.stat3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}