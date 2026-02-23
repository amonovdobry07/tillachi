import { Link } from "react-router-dom";
import SimplePage from "./SimplePage";
import styles from "./Marketplace.module.css";
import { useTranslation } from "react-i18next";

import ozon from "../assets/MatketPlace/ozon.png";
import wb from "../assets/MatketPlace/wb.png";
import uzum from "../assets/MatketPlace/uzummarket.png";
import yandex from "../assets/MatketPlace/yandexmarket.png";

const platforms = [
  {
    id: "wildberries",
    name: "Wildberries",
    descKey: "marketplacePage.platforms.wildberries.desc",
    tagKey: "marketplacePage.platforms.wildberries.tag",
    accent: "magenta",
    img: wb,
  },
  {
    id: "yandex-market",
    name: "Yandex Market",
    descKey: "marketplacePage.platforms.yandex.desc",
    tagKey: "marketplacePage.platforms.yandex.tag",
    accent: "gold",
    img: yandex,
  },
  {
    id: "ozon",
    name: "Ozon",
    descKey: "marketplacePage.platforms.ozon.desc",
    tagKey: "marketplacePage.platforms.ozon.tag",
    accent: "gold",
    img: ozon,
  },
  {
    id: "uzum-market",
    name: "Uzum Market",
    descKey: "marketplacePage.platforms.uzum.desc",
    tagKey: "marketplacePage.platforms.uzum.tag",
    accent: "magenta",
    img: uzum,
  },
];

export default function Marketplace() {
  const { t } = useTranslation();

  return (
    <SimplePage title={t("marketplacePage.pageTitle")} subtitle=" ">
      <section className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.kicker}>
            <span className={styles.kline} />
            <span className={styles.ktext}>{t("marketplacePage.kicker")}</span>
          </div>

          <h1 className={`fontDisplay ${styles.h1}`}>
            {t("marketplacePage.h1a")}{" "}
            <span className={styles.h1Accent}>{t("marketplacePage.h1b")}</span>
          </h1>

          <p className={styles.lead}>{t("marketplacePage.lead")}</p>
        </header>

        <div className={styles.grid}>
          {platforms.map((p) => (
            <Link
              key={p.id}
              to={`/marketplace/${p.id}`}
              className={`${styles.card} ${styles["accent_" + p.accent]}`}
            >
              <div className={styles.logoBox} aria-hidden="true">
                <img className={styles.logoImg} src={p.img} alt={p.name} />
              </div>

              <h3 className={`fontDisplay ${styles.name}`}>{p.name}</h3>
              <p className={styles.desc}>{t(p.descKey)}</p>

              <div className={styles.bottom}>
                <span className={styles.tag}>{t(p.tagKey)}</span>
                <span className={styles.browse}>
                  {t("marketplacePage.browse")} <span className={styles.arrow}>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SimplePage>
  );
}