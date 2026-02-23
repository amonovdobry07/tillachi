import SimplePage from "./SimplePage";
import styles from "./Services.module.css";
import { useTranslation } from "react-i18next";

import craftVideo from "../assets/Video/IMG_2916.mp4";

const services = [
  {
    mediaType: "video",
    src: craftVideo,
    poster: "",
    icon: "diamond",
    titleKey: "servicesPage.items.customDesign.title",
    descKey: "servicesPage.items.customDesign.desc",
    bulletsKeys: [
      "servicesPage.items.customDesign.bullets.consultation",
      "servicesPage.items.customDesign.bullets.sketch3d",
      "servicesPage.items.customDesign.bullets.unique",
      "servicesPage.items.customDesign.bullets.certificate"
    ],
  },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <SimplePage
      title={t("servicesPage.pageTitle")}
      subtitle={t("servicesPage.pageSubtitle")}
    >
      <header className={styles.head}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerLine} />
          <span className={styles.kicker}>{t("servicesPage.kicker")}</span>
        </div>

        <h2 className={styles.h2}>
          <span className={styles.h2Light}>{t("servicesPage.h2a")}</span>{" "}
          <span className={styles.h2Gold}>{t("servicesPage.h2b")}</span>
        </h2>

        <p className={styles.lead}>{t("servicesPage.lead")}</p>
      </header>

      <div className={styles.list}>
        {services.map((s) => (
          <section key={s.titleKey} className={styles.splitCard}>
            <div className={styles.media}>
              {s.mediaType === "video" ? (
                <video
                  className={styles.video}
                  src={s.src}
                  poster={s.poster || undefined}
                  loop
                  playsInline
                  controls
                />
              ) : (
                <img className={styles.image} src={s.src} alt={t(s.titleKey)} />
              )}
              <div className={styles.mediaShade} />
            </div>

            <div className={styles.content}>
              <div className={styles.badge}>
                <span
                  className={styles.badgeIcon}
                  data-icon={s.icon}
                  aria-hidden="true"
                />
              </div>

              <h3 className={`fontDisplay ${styles.title}`}>{t(s.titleKey)}</h3>

              <p className={styles.desc}>{t(s.descKey)}</p>

              <ul className={styles.bullets}>
                {s.bulletsKeys?.map((k) => (
                  <li key={k} className={styles.bullet}>
                    {t(k)}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </SimplePage>
  );
}