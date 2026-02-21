import { useState } from "react";
import SimplePage from "./SimplePage";
import styles from "./Products.module.css";

import ring from "../assets/Maxsulotlar/birinchi1.mp4";
import ring2 from "../assets/Maxsulotlar/ikkinchi.mp4";
import ring3 from "../assets/Maxsulotlar/uchinchi.mp4";
import ring4 from "../assets/Maxsulotlar/turinchi.mp4";
import ring5 from "../assets/Maxsulotlar/beshinchi.mp4";
import ring6 from "../assets/Maxsulotlar/oltinchi.mp4";
import ring7 from "../assets/Maxsulotlar/yettinchi.mp4";
import ring8 from "../assets/Maxsulotlar/sakkizinchi.mp4";
import ring9 from "../assets/Maxsulotlar/tuqqizinchi.mp4";
import ring10 from "../assets/Maxsulotlar/uninchi.mp4";
import ring11 from "../assets/Maxsulotlar/unbirinchi.mp4";

const tabs = ["BARCHASI", "UZUKLAR", "TAQINCHOQLAR", "BILAKUZUKLAR", "SIRG'ALAR"];

// 12 ta demo: hozircha hammasi bitta video (ring)
const products = [
  { mediaType: "video", src: ring, cat: "UZUKLAR", title: "Filigree Yakka Toshli Uzuk", desc: "Qo‘lda ishlangan 18K oltin filigree uzuk." },
  { mediaType: "video", src: ring2, cat: "TAQINCHOQLAR", title: "Tomchi Kulon Taqinchoq", desc: "Klassik uslubdagi nafis kulon taqinchoq." },
  { mediaType: "video", src: ring3, cat: "BILAKUZUKLAR", title: "Olmosli Bilakuzuk", desc: "Olmos aksentli, burama dizayndagi bilakuzuk." },
  { mediaType: "video", src: ring4, cat: "SIRG'ALAR", title: "Aurum Sirg‘alar To‘plami", desc: "Kundalik nafislik uchun mos, didli sirg‘alar." },

  { mediaType: "video", src: ring5, cat: "UZUKLAR", title: "Minimal Uzuk", desc: "Soddalik va did uyg‘unligi." },
  { mediaType: "video", src: ring6, cat: "TAQINCHOQLAR", title: "Zanjirli Kulon", desc: "Mayin yaltirash va klassik chiziqlar." },
  { mediaType: "video", src: ring7, cat: "BILAKUZUKLAR", title: "Klassik Bangle", desc: "Toza shakl, premium kayfiyat." },
  { mediaType: "video", src: ring8, cat: "SIRG'ALAR", title: "Tomchi Sirg‘alar", desc: "Har kuni uchun nafis tanlov." },

  { mediaType: "video", src: ring9, cat: "UZUKLAR", title: "Vintage Uzuk", desc: "An’anaviy uslubdagi bezak." },
  { mediaType: "video", src: ring10, cat: "TAQINCHOQLAR", title: "Yurak Kulon", desc: "Sovg‘a uchun ideal variant." },
  { mediaType: "video", src: ring11, cat: "BILAKUZUKLAR", title: "Nafis Bilakuzuk", desc: "Qomatga mos yengil dizayn." },
  { mediaType: "video", src: ring, cat: "SIRG'ALAR", title: "Kichik Halqa Sirg‘a", desc: "Minimal, lekin juda chiroyli." },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("BARCHASI");

  const filteredProducts =
    activeTab === "BARCHASI"
      ? products
      : products.filter((p) => p.cat === activeTab);

  return (
    <SimplePage title="Mahsulotlar" subtitle=" ">
      <section className={styles.pWrap}>
        <header className={styles.hero}>
          <div className={styles.pInner}>
            <div className={styles.heroTop}>
              <div className={styles.kickerRow}>
                <span className={styles.kickerLine} aria-hidden="true" />
                <p className={styles.kicker}>BIZNING TO‘PLAM</p>
              </div>

              <h1 className={styles.h1}>
                Qo‘lda ishlangan{" "}
                <span className={styles.italicGold}>Nafis Buyumlar</span>
              </h1>

              <p className={styles.sub}>
                Har bir mahsulot o‘ziga xos san’at asari: sinchkov mehnat va
                nafis did bilan yaratiladi.
              </p>
            </div>

            <div className={styles.controls}>
              <div className={styles.tabs}>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`${styles.tab} ${
                      activeTab === tab ? styles.tabActive : ""
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className={styles.section}>
          <div className={styles.pInner}>
            <div className={styles.grid}>
              {filteredProducts.map((p) => (
                <article key={p.title} className={styles.card}>
                  <div className={styles.media}>
                    {/* VIDEO */}
                    <video
                      className={styles.video}
                      src={p.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className={styles.mediaShine} aria-hidden="true" />
                  </div>

                  <div className={styles.body}>
                    <p className={styles.cat}>{p.cat}</p>
                    <h3 className={styles.title}>{p.title}</h3>
                    <p className={styles.desc}>{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SimplePage>
  );
}