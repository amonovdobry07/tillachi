import { Link, useParams } from "react-router-dom";
import SimplePage from "./SimplePage";
import styles from "./MarketplaceDetail.module.css";

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
    subtitle: "Wildberries’dagi AURUM rasmiy do‘koni",
    accent: "magenta",
    logo: wb,
    products: [
      { img: ring, title: "Naqshli uzuk" },
      { img: necklace, title: "Kulonli marjon" },
      { img: bracelet, title: "Klassik bilaguzuk" },
      { img: earrings, title: "Sirg‘alar to‘plami" },
    ],
  },
  "yandex-market": {
    name: "Yandex Market",
    subtitle: "Yandex Market’da sertifikatlangan sotuvchi kafolati",
    accent: "gold",
    logo: yandex,
    products: [
      { img: necklace, title: "Tomchi kulon" },
      { img: ring, title: "Filigran uzuk" },
      { img: bracelet, title: "Toshli bilaguzuk" },
    ],
  },
  ozon: {
    name: "Ozon",
    subtitle: "Ozon’da tezkor buyurtma va ishonchli yetkazib berish",
    accent: "gold",
    logo: ozon,
    products: [
      { img: ring, title: "Signature uzuk" },
      { img: bracelet, title: "Burama bilaguzuk" },
      { img: earrings, title: "Aurum sirg‘alari" },
    ],
  },
  "uzum-market": {
    name: "Uzum Market",
    subtitle: "Qulay to‘lovlar va tezkor buyurtma jarayoni",
    accent: "magenta",
    logo: uzum,
    products: [
      { img: necklace, title: "Oltin marjon" },
      { img: ring, title: "Minimal uzuk" },
      { img: bracelet, title: "Kundalik bilaguzuk" },
    ],
  },
};

export default function MarketplaceDetail() {
  const { id } = useParams();
  const data = marketplaces[id];

  if (!data) {
    return (
      <SimplePage title="Marketpleys" subtitle="Topilmadi">
        <div className={styles.notFound}>
          <p>
            Bu marketpleys topilmadi: <b>{id}</b>
          </p>
          <Link to="/marketplace" className={styles.back}>
            ← Marketpleyslar ro‘yxatiga qaytish
          </Link>
        </div>
      </SimplePage>
    );
  }

  return (
    <SimplePage title=" " subtitle=" ">
      <div className={styles.wrap}>
        <Link to="/marketplace" className={styles.backTop}>
          ← Marketpleyslar ro‘yxatiga qaytish
        </Link>

        <header className={styles.head}>
          <div className={`${styles.logoBox} ${styles["accent_" + data.accent]}`}>
            <img className={styles.logoImg} src={data.logo} alt={data.name} />
          </div>

          <div>
            <h1 className={`fontDisplay ${styles.h1}`}>{data.name}</h1>
            <p className={styles.sub}>{data.subtitle}</p>
          </div>
        </header>

        <div className={styles.kline} />

        <p className={styles.count}>
          {data.products.length} TA MAHSULOT MAVJUD
        </p>

        <div className={styles.grid}>
          {data.products.map((p, idx) => (
            <article key={idx} className={styles.pcard}>
              <div className={styles.media}>
                <img className={styles.pimg} src={p.img} alt={p.title} />

                <div className={styles.overlay}>
                  <a
                    className={styles.openBtn}
                    href={p.url || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.name.toUpperCase()} DA OCHISH{" "}
                    <span className={styles.ext}>↗</span>
                  </a>
                </div>
              </div>

              <div className={styles.meta}>
                <div className={styles.cat}>{p.cat || "ZARGARLIK"}</div>
                <h3 className={`fontDisplay ${styles.ptitle}`}>{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SimplePage>
  );
}