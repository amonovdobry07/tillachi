import craftsmanImg from '@/assets/craftsman.jpg'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './About.module.css'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <div className={`reveal opacity0Init ${styles.labelRow}`}>
          <div className={styles.smallLine} />
          <span className={styles.label}>Biz haqimizda</span>
        </div>

        <div className={styles.grid}>
          {/* IMAGE SECTION */}
          <div className={`reveal opacity0Init ${styles.imageWrap}`}>
            <div className={styles.imageFrame}>
              <img
                src={craftsmanImg}
                alt="Zargar ustasi ish jarayonida"
                className={styles.image}
              />
              <div className={styles.frameBorder} aria-hidden="true" />
              <div className={styles.cornerBox} aria-hidden="true" />
            </div>

            <div className={styles.badge}>
              <p className={`fontDisplay ${styles.badgeValue}`}>2011+</p>
              <p className={styles.badgeLabel}>Yildan tajriba</p>
            </div>
          </div>

          {/* TEXT SECTION */}
          <div className={`reveal opacity0Init ${styles.text}`}>
            <h2 className={`fontDisplay ${styles.heading}`}>
              Sof oltinda <span className={`textGoldGradient ${styles.italic}`}>orzularni yaratamiz</span>
            </h2>

            <div className={`goldLine ${styles.bigLine}`} />

            <p className={`fontCormorant ${styles.pLead}`}>
              YATT Narziyev Gulomjon 2011 yildan buyon zargarlik sohasida faoliyat yuritib kelmoqda.
              Har bir buyum ko‘p yillik tajriba va nozik did asosida yaratiladi.
            </p>

            <p className={styles.p}>
              Korxonamiz 2021 yil 5 maydan boshlab rasmiy faoliyat yuritadi.
              Biz qimmatbaho metallarga ishlov berish va turli xil zargarlik buyumlarini tayyorlash bilan shug‘ullanamiz.
            </p>

            <p className={styles.p}>
              Buyurtma asosida uzuklar, sirg‘alar, taqinchoqlar va maxsus dizayndagi
              zargarlik mahsulotlari tayyorlanadi. Har bir mahsulot sifat, nafislik va ishonchlilik timsolidir.
            </p>

            <div className={styles.stats}>
              <div>
                <p className={`fontDisplay ${styles.statValue}`}>2011+</p>
                <p className={styles.statLabel}>Tajriba yillari</p>
              </div>

              <div>
                <p className={`fontDisplay ${styles.statValue}`}>2021</p>
                <p className={styles.statLabel}>Rasmiy faoliyat</p>
              </div>

              <div>
                <p className={`fontDisplay ${styles.statValue}`}>100%</p>
                <p className={styles.statLabel}>Sifat kafolati</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}