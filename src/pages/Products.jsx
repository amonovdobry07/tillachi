import { useEffect, useMemo, useState } from "react";
import SimplePage from "./SimplePage";
import styles from "./Products.module.css";
import { useTranslation } from "react-i18next";

import ring from "../assets/Maxsulotlar/birinchi1.png";
import ring2 from "../assets/Maxsulotlar/ikkinchi2.png";
import ring3 from "../assets/Maxsulotlar/uchinchi3.png";
import ring4 from "../assets/Maxsulotlar/turtinchi4.png";
import ring5 from "../assets/Maxsulotlar/beshinchi5.png";
import ring6 from "../assets/Maxsulotlar/oltinchi6.png";
import ring7 from "../assets/Maxsulotlar/yettinchi7.png";
import ring8 from "../assets/Maxsulotlar/sakkizinchi8.png";
import ring9 from "../assets/Maxsulotlar/tuqqizinchi9.png";
import ring10 from "../assets/Maxsulotlar/uninchi.png";
import ring11 from "../assets/Maxsulotlar/unbirinchi.png";

// Tabs endi key bilan
const tabs = [
  { key: "all", tKey: "productsPage.tabs.all" },
  { key: "rings", tKey: "productsPage.tabs.rings" },
  { key: "necklaces", tKey: "productsPage.tabs.necklaces" },
  { key: "bracelets", tKey: "productsPage.tabs.bracelets" },
  { key: "earrings", tKey: "productsPage.tabs.earrings" },
];

// Products endi titleKey/descKey + catKey
const products = [
  {
    src: ring,
    cat: "rings",
    titleKey: "productsPage.items.filigreeRing.title",
    descKey: "productsPage.items.filigreeRing.desc",
    price: "1 200 000 so‘m",
  },
  {
    src: ring2,
    cat: "necklaces",
    titleKey: "productsPage.items.teardropPendant.title",
    descKey: "productsPage.items.teardropPendant.desc",
    price: "950 000 so‘m",
  },
  {
    src: ring3,
    cat: "bracelets",
    titleKey: "productsPage.items.diamondBracelet.title",
    descKey: "productsPage.items.diamondBracelet.desc",
    price: "1 450 000 so‘m",
  },
  {
    src: ring4,
    cat: "earrings",
    titleKey: "productsPage.items.aurumEarringsSet.title",
    descKey: "productsPage.items.aurumEarringsSet.desc",
    price: "780 000 so‘m",
  },
  {
    src: ring5,
    cat: "rings",
    titleKey: "productsPage.items.minimalRing.title",
    descKey: "productsPage.items.minimalRing.desc",
    price: "690 000 so‘m",
  },
  {
    src: ring6,
    cat: "necklaces",
    titleKey: "productsPage.items.chainPendant.title",
    descKey: "productsPage.items.chainPendant.desc",
    price: "820 000 so‘m",
  },
  {
    src: ring7,
    cat: "bracelets",
    titleKey: "productsPage.items.classicBangle.title",
    descKey: "productsPage.items.classicBangle.desc",
    price: "1 050 000 so‘m",
  },
  {
    src: ring8,
    cat: "earrings",
    titleKey: "productsPage.items.teardropEarrings.title",
    descKey: "productsPage.items.teardropEarrings.desc",
    price: "740 000 so‘m",
  },
  {
    src: ring9,
    cat: "rings",
    titleKey: "productsPage.items.vintageRing.title",
    descKey: "productsPage.items.vintageRing.desc",
    price: "1 100 000 so‘m",
  },
  {
    src: ring10,
    cat: "necklaces",
    titleKey: "productsPage.items.heartPendant.title",
    descKey: "productsPage.items.heartPendant.desc",
    price: "880 000 so‘m",
  },
  {
    src: ring11,
    cat: "bracelets",
    titleKey: "productsPage.items.elegantBracelet.title",
    descKey: "productsPage.items.elegantBracelet.desc",
    price: "1 250 000 so‘m",
  },
  {
    src: ring,
    cat: "earrings",
    titleKey: "productsPage.items.smallHoopEarring.title",
    descKey: "productsPage.items.smallHoopEarring.desc",
    price: "560 000 so‘m",
  },
];

export default function Products() {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = useMemo(() => {
    return activeTab === "all"
      ? products
      : products.filter((p) => p.cat === activeTab);
  }, [activeTab]);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeTab]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const canShowMore = visibleCount < filteredProducts.length;
  const canShowLess = visibleCount > 6;

  const handleMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredProducts.length));
  };

  const handleLess = () => {
    setVisibleCount((prev) => Math.max(prev - 3, 6));
  };

  return (
    <SimplePage title={t("productsPage.pageTitle")} subtitle=" ">
      <section className={styles.pWrap}>
        <header className={styles.hero}>
          <div className={styles.pInner}>
            <div className={styles.heroTop}>
              <div className={styles.kickerRow}>
                <span className={styles.kickerLine} aria-hidden="true" />
                <p className={styles.kicker}>{t("productsPage.kicker")}</p>
              </div>

              <h1 className={styles.h1}>
                {t("productsPage.h1a")}{" "}
                <span className={styles.italicGold}>{t("productsPage.h1b")}</span>
              </h1>

              <p className={styles.sub}>{t("productsPage.sub")}</p>
            </div>

            <div className={styles.controls}>
              <div className={styles.tabs}>
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`${styles.tab} ${
                      activeTab === tab.key ? styles.tabActive : ""
                    }`}
                  >
                    {t(tab.tKey)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className={styles.section}>
          <div className={styles.pInner}>
            <div className={styles.grid}>
              {visibleProducts.map((p) => (
                <article key={p.titleKey} className={styles.card}>
                  <div className={styles.media}>
                    <img
                      className={styles.video}
                      src={p.src}
                      style={{ width: "100%" }}
                      alt={t(p.titleKey)}
                    />
                    <div className={styles.mediaShine} aria-hidden="true" />
                  </div>

                  <div className={styles.body}>
                    <p className={styles.cat}>
                      {t(`productsPage.cats.${p.cat}`)}
                    </p>

                    <h3 className={styles.title}>{t(p.titleKey)}</h3>

                    <p className={styles.price}>{p.price}</p>

                    <p className={styles.desc}>{t(p.descKey)}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.moreRow}>
              {canShowLess && (
                <button
                  type="button"
                  onClick={handleLess}
                  className={`${styles.moreBtn} ${styles.moreGhost}`}
                >
                  {t("productsPage.less")}
                </button>
              )}

              {canShowMore && (
                <button
                  type="button"
                  onClick={handleMore}
                  className={`${styles.moreBtn} ${styles.morePrimary}`}
                >
                  {t("productsPage.more")}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </SimplePage>
  );
}