import { Link, useParams } from "react-router-dom";
import SimplePage from "./SimplePage";
import styles from "./MarketplaceDetail.module.css";
import { useTranslation } from "react-i18next";

import wb from "../assets/MatketPlace/wb.png";
import yandex from "../assets/MatketPlace/yandexmarket.png";
import ozon from "../assets/MatketPlace/ozon.png";
import uzum from "../assets/MatketPlace/uzummarket.png";

import ring from "@/assets/product-ring.jpg";
import necklace from "@/assets/product-necklace.jpg";
import bracelet from "@/assets/product-bracelet.jpg";
import earrings from "@/assets/product-earrings.jpg";

const marketplaces = {
  wildberries: {
    name: "Wildberries",
    subtitleKey: "marketplaceDetail.platforms.wildberries.subtitle",
    accent: "magenta",
    logo: wb,
    products: [
      { img: ring, titleKey: "marketplaceDetail.products.ornateRing" },
      { img: necklace, titleKey: "marketplaceDetail.products.pendantNecklace" },
      { img: bracelet, titleKey: "marketplaceDetail.products.classicBracelet" },
      { img: earrings, titleKey: "marketplaceDetail.products.earringsSet" },
    ],
  },
  "yandex-market": {
    name: "Yandex Market",
    subtitleKey: "marketplaceDetail.platforms.yandex.subtitle",
    accent: "gold",
    logo: yandex,
    products: [
      { img: necklace, titleKey: "marketplaceDetail.products.teardropPendant" },
      { img: ring, titleKey: "marketplaceDetail.products.filigreeRing" },
      { img: bracelet, titleKey: "marketplaceDetail.products.stoneBracelet" },
    ],
  },
  ozon: {
    name: "Ozon",
    subtitleKey: "marketplaceDetail.platforms.ozon.subtitle",
    accent: "gold",
    logo: ozon,
    products: [
      { img: ring, titleKey: "marketplaceDetail.products.signatureRing" },
      { img: bracelet, titleKey: "marketplaceDetail.products.twistedBracelet" },
      { img: earrings, titleKey: "marketplaceDetail.products.aurumEarrings" },
    ],
  },
  "uzum-market": {
    name: "Uzum Market",
    subtitleKey: "marketplaceDetail.platforms.uzum.subtitle",
    accent: "magenta",
    logo: uzum,
    products: [
      { img: necklace, titleKey: "marketplaceDetail.products.goldNecklace" },
      { img: ring, titleKey: "marketplaceDetail.products.minimalRing" },
      { img: bracelet, titleKey: "marketplaceDetail.products.dailyBracelet" },
    ],
  },
};

export default function MarketplaceDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const data = marketplaces[id];

  if (!data) {
    return (
      <SimplePage title={t("marketplaceDetail.pageTitle")} subtitle={t("marketplaceDetail.notFoundSub")}>
        <div className={styles.notFound}>
          <p>
            {t("marketplaceDetail.notFoundText")} <b>{id}</b>
          </p>
          <Link to="/marketplace" className={styles.back}>
            ← {t("marketplaceDetail.backToList")}
          </Link>
        </div>
      </SimplePage>
    );
  }

  return (
    <SimplePage title=" " subtitle=" ">
      <div className={styles.wrap}>
        <Link to="/marketplace" className={styles.backTop}>
          ← {t("marketplaceDetail.backToList")}
        </Link>

        <header className={styles.head}>
          <div className={`${styles.logoBox} ${styles["accent_" + data.accent]}`}>
            <img className={styles.logoImg} src={data.logo} alt={data.name} />
          </div>

          <div>
            <h1 className={`fontDisplay ${styles.h1}`}>{data.name}</h1>
            <p className={styles.sub}>{t(data.subtitleKey)}</p>
          </div>
        </header>

        <div className={styles.kline} />

        <p className={styles.count}>
          {t("marketplaceDetail.count", { count: data.products.length })}
        </p>

        <div className={styles.grid}>
          {data.products.map((p, idx) => (
            <article key={idx} className={styles.pcard}>
              <div className={styles.media}>
                <img className={styles.pimg} src={p.img} alt={t(p.titleKey)} />

                <div className={styles.overlay}>
                  <a
                    className={styles.openBtn}
                    href={p.url || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("marketplaceDetail.openOn", { name: data.name.toUpperCase() })}{" "}
                    <span className={styles.ext}>↗</span>
                  </a>
                </div>
              </div>

              <div className={styles.meta}>
                <div className={styles.cat}>{p.cat ? p.cat : t("marketplaceDetail.defaultCat")}</div>
                <h3 className={`fontDisplay ${styles.ptitle}`}>{t(p.titleKey)}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SimplePage>
  );
}