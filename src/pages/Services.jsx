import SimplePage from "./SimplePage";
import styles from "./Services.module.css";

import craftVideo from "../assets/Video/IMG_2916.mp4";

const services = [
  {
    mediaType: "video",
    src: craftVideo,
    poster: "",
    icon: "diamond",
    title: "Maxsus Zargarlik Dizayni",
    desc:
      "Usta bilan bevosita ishlang va o‘zingizga xos, yagona buyumni yarating. Dastlabki chizmadan tortib yakuniy jiloga qadar har bir detal sizning tasavvuringiz asosida tayyorlanadi.",
    bullets: [
      "Shaxsiy konsultatsiya",
      "Eskiz va 3D vizualizatsiya",
      "100% noyob yaratilish",
      "Haqiqiylik sertifikati",
    ],
  },
];

export default function Services() {
  return (
    <SimplePage
      title="Xizmatlar"
      subtitle="Oltin sabrli. Biz esa undan ham sabrlimiz. Maxsus buyurtmalar va nozik restavratsiya ustaxona darajasidagi aniqlik bilan."
    >
      <header className={styles.head}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerLine} />
          <span className={styles.kicker}>BIZ TAKLIF ETAMIZ</span>
        </div>

        <h2 className={styles.h2}>
          <span className={styles.h2Light}>Bizning</span>{" "}
          <span className={styles.h2Gold}>Xizmatlarimiz</span>
        </h2>

        <p className={styles.lead}>
          Maxsus buyurtmalardan tortib nozik restavratsiyagacha , har bir detal mukammallik bilan bajariladi.
        </p>
      </header>

      <div className={styles.list}>
        {services.map((s) => (
          <section key={s.title} className={styles.splitCard}>
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
                <img className={styles.image} src={s.src} alt={s.title} />
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

              <h3 className={`fontDisplay ${styles.title}`}>{s.title}</h3>

              <p className={styles.desc}>{s.desc}</p>

              <ul className={styles.bullets}>
                {s.bullets?.map((b) => (
                  <li key={b} className={styles.bullet}>
                    {b}
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