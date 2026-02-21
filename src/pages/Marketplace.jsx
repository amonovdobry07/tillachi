import { Link } from "react-router-dom";
import SimplePage from "./SimplePage";
import styles from "./Marketplace.module.css";
import ozon from "../assets/MatketPlace/ozon.png";
import wb from "../assets/MatketPlace/wb.png";
import uzum from "../assets/MatketPlace/uzummarket.png";
import yandex from "../assets/MatketPlace/yandexmarket.png";

const platforms = [
  {
    id: "wildberries",
    name: "Wildberries",
    desc:
      "Rossiyaning eng yirik onlayn marketplace’i. Eksklyuziv zargarlik buyumlari uchun tasdiqlangan do‘konimizni ko‘ring.",
    tag: "48 ta mahsulot mavjud",
    initials: "WB",
    accent: "magenta",
    img: wb,
  },
  {
    id: "yandex-market",
    name: "Yandex Market",
    desc:
      "Yandex Market’da AURUMning asl mahsulotlarini sertifikatlangan sotuvchi kafolati bilan toping.",
    tag: "32 ta mahsulot mavjud",
    initials: "YM",
    accent: "gold",
    img: yandex,
  },
  {
    id: "ozon",
    name: "Ozon",
    desc:
      "Tezkor buyurtma va ishonchli yetkazib berish. Tayyor kolleksiyalarni qulay xarid qiling.",
    tag: "21 ta mahsulot mavjud",
    initials: "OZ",
    accent: "gold",
    img: ozon,
  },
  {
    id: "uzum-market",
    name: "Uzum Market",
    desc:
      "Mahalliy marketplace: qulay to‘lovlar va tezkor buyurtma jarayoni bilan xarid qiling.",
    tag: "18 ta mahsulot mavjud",
    initials: "UM",
    accent: "magenta",
    img: uzum,
  },
];

export default function Marketplace() {
  return (
    <SimplePage title="Marketpleys" subtitle=" ">
      <section className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.kicker}>
            <span className={styles.kline} />
            <span className={styles.ktext}>QAYERDAN SOTIB OLISH</span>
          </div>

          <h1 className={`fontDisplay ${styles.h1}`}>
            Marketpleyslarda <span className={styles.h1Accent}>mavjud</span>
          </h1>

          <p className={styles.lead}>
            Ishonchli platformalarda saralangan kolleksiyalarimizni xarid qiling:
            tasdiqlangan asl mahsulot va xavfsiz yetkazib berish.
          </p>
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
              <p className={styles.desc}>{p.desc}</p>

              <div className={styles.bottom}>
                <span className={styles.tag}>{p.tag}</span>
                <span className={styles.browse}>
                  KO‘RISH <span className={styles.arrow}>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SimplePage>
  );
}