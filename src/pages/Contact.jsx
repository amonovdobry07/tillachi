import { useState } from "react";
import SimplePage from "./SimplePage";
import styles from "./Contact.module.css";

const contact = {
  brand: "ЯТТ НАРЗИЕВ ГУЛОМЖОН",
  phone: "93-476-62-00",
  address: "БУХОРО ТУМАН БУЮК ИПАК ЙУЛИ ЁКАСИ ГАЛАОСИЁ ДЕХКОН БОЗОРИ РУПАРАСИ",
  hoursPrimary: "Dushanba – Shanba: 10:00 – 19:00",
  hoursSecondary: "Yakshanba: kelishuv asosida",
  telegram: "https://t.me/luxury_jewellry",
  instagram: "https://www.instagram.com/luxzar_jewellry",
  email: "Jeweller_Shexon.Uz@icloud.com",
};

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8c1.6 3.2 3.4 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12zm0-9.5A2.5 2.5 0 1 1 12 7.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm.8 4h-1.6v5.1l4.5 2.6.8-1.3-3.7-2.1z" />
    </svg>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setStatus(
      "Xabar yuborildi (demo). Bu joyni backend yoki email xizmatiga ulang."
    );
  }

  const mapSrc =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(contact.address) +
    "&output=embed";

  return (
    <SimplePage title="Aloqa" subtitle="">
      <section className={styles.section}>
        <header className={styles.hero}>
          <p className={styles.kicker}>BOG‘LANISH</p>

          <h1 className={styles.h1}>
            Biz bilan <span className={styles.h1Accent}>Aloqa</span>
          </h1>

          <p className={styles.lead}>
            Maxsus buyurtma berishni xohlaysizmi yoki savolingiz bormi?
            Sizdan xabar kutamiz.
          </p>
        </header>

        <div className={styles.shell}>
          <div className={styles.grid}>
            {/* LEFT */}
            <div className={styles.left}>
              <div className={styles.infoCard}>
                <div className={styles.infoRow}>
                  <div className={styles.iconBox}>
                    <IconPhone />
                  </div>
                  <div className={styles.infoText}>
                    <p className={styles.infoLabel}>TELEFON</p>
                    <p className={styles.infoValue}>{contact.phone}</p>
                    <p className={styles.infoSub}>{contact.hoursPrimary}</p>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <div className={styles.iconBox}>
                    <IconPin />
                  </div>
                  <div className={styles.infoText}>
                    <p className={styles.infoLabel}>MANZIL</p>
                    <p className={styles.infoValue}>{contact.address}</p>
                    <p className={styles.infoSub}>{contact.email}</p>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <div className={styles.iconBox}>
                    <IconClock />
                  </div>
                  <div className={styles.infoText}>
                    <p className={styles.infoLabel}>ISH VAQTI</p>
                    <p className={styles.infoValue}>{contact.hoursPrimary}</p>
                    <p className={styles.infoSub}>{contact.hoursSecondary}</p>
                  </div>
                </div>

                <div className={styles.socials}>
                  <a
                    className={styles.socialLink}
                    href={contact.telegram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                  <span className={styles.dot}> • </span>
                  <a
                    className={styles.socialLink}
                    href={contact.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div className={styles.mapWrap}>
                <iframe
                  className={styles.map}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Xarita"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className={styles.right}>
              <form className={styles.form} onSubmit={onSubmit}>
                <h2 className={styles.formTitle}>Xabar yuborish</h2>

                <label className={styles.label}>
                  ISMINGIZ <span className={styles.req}>*</span>
                  <input
                    className={styles.input}
                    required
                    placeholder="Ismingizni kiriting"
                  />
                </label>

                <label className={styles.label}>
                  TELEFON RAQAM <span className={styles.req}>*</span>
                  <input
                    className={styles.input}
                    required
                    placeholder={contact.phone}
                  />
                </label>

                <label className={styles.label}>
                  XABAR <span className={styles.req}>*</span>
                  <textarea
                    className={styles.textarea}
                    required
                    placeholder="Buyurtma yoki savolingizni yozing..."
                    rows={7}
                  />
                </label>

                <button className={styles.submit} type="submit">
                  XABAR YUBORISH
                </button>

                {status ? <p className={styles.status}>{status}</p> : null}
              </form>
            </div>
          </div>
        </div>
      </section>
    </SimplePage>
  );
}