import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className={styles.overlay} />

      <div className={styles.leftLine} aria-hidden="true" />
      <div className={styles.rightLine} aria-hidden="true" />

      <div className={styles.content}>
        <h1
          className={`fontDisplay ${styles.title} animateFadeUp`}
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span className={styles.normal}>{t("hero.title1")} </span>
          <span className={`textGoldGradient ${styles.italic}`}>
            {t("hero.title2")}
          </span>
        </h1>

        <p
          className={`${styles.subtitle} fontCormorant animateFadeUp`}
          style={{
            animationDelay: "0.6s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {t("hero.subtitle")}
        </p>

        <div
          className={`${styles.actions} animateFadeUp`}
          style={{
            animationDelay: "0.8s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <Link to="/products" className={styles.primaryBtn}>
            {t("hero.viewProducts")} <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>
            {t("hero.contact")}
          </Link>
        </div>

        <a
          className={styles.scroll}
          href="#about"
          aria-label={t("hero.scroll")}
        >
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}