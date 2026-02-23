import { useState } from "react";
import SimplePage from "./SimplePage";
import styles from "./Contact.module.css";
import { useTranslation } from "react-i18next";

const contact = {
  brand: "YTT Narziyev G‘ulomjon",
  phone: "+998 93 476 62 00",
  address:
    "Buxoro tumani, Buyuk Ipak Yo‘li yoqasi, Galaosiyo dehqon bozori ro‘parasi",
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
  const { t } = useTranslation();
  const [status, setStatus] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const message = form.elements.message.value.trim();

    const to = "ogabekomonov79@gmail.com";
    const subject = t("contactPage.emailSubject", { name, phone });

    const body = t("contactPage.emailBody", {
      name,
      phone,
      message,
      date: new Date().toLocaleString(),
    });

    const gmailLink =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, "_blank", "noopener,noreferrer");

    setStatus(t("contactPage.statusOpened"));

    form.reset();
  }

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5543.386504659465!2d64.441817!3d39.85585!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDUxJzIxLjEiTiA2NMKwMjYnMzAuNSJF!5e1!3m2!1sru!2s!4v1771885719268!5m2!1sru!2s"+
    encodeURIComponent(contact.address) +
    "&output=embed";

  return (
    <SimplePage title={t("contactPage.pageTitle")} subtitle="">
      <section className={styles.section}>
        <header className={styles.hero}>
          <p className={styles.kicker}>{t("contactPage.kicker")}</p>

          <h1 className={styles.h1}>
            {t("contactPage.h1a")}{" "}
            <span className={styles.h1Accent}>{t("contactPage.h1b")}</span>
          </h1>

          <p className={styles.lead}>{t("contactPage.lead")}</p>
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
                    <p className={styles.infoLabel}>{t("contactPage.labels.phone")}</p>
                    <p className={styles.infoValue}>
                      <a href="tel:+998934766200">{contact.phone}</a>
                    </p>
                    <p className={styles.infoSub}>{contact.hoursPrimary}</p>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <div className={styles.iconBox}>
                    <IconPin />
                  </div>
                  <div className={styles.infoText}>
                    <p className={styles.infoLabel}>{t("contactPage.labels.address")}</p>
                    <p className={styles.infoValue}>{contact.address}</p>
                    <p className={styles.infoSub}>
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <div className={styles.iconBox}>
                    <IconClock />
                  </div>
                  <div className={styles.infoText}>
                    <p className={styles.infoLabel}>{t("contactPage.labels.hours")}</p>
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
                    {t("contactPage.social.telegram")}
                  </a>
                  <span className={styles.dot}> • </span>
                  <a
                    className={styles.socialLink}
                    href={contact.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("contactPage.social.instagram")}
                  </a>
                </div>
              </div>

              <div className={styles.mapWrap}>
                <iframe
                  className={styles.map}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("contactPage.mapTitle")}
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className={styles.right}>
              <form className={styles.form} onSubmit={onSubmit}>
                <h2 className={styles.formTitle}>{t("contactPage.form.title")}</h2>

                <label className={styles.label}>
                  {t("contactPage.form.nameLabel")}
                  <input
                    className={styles.input}
                    name="name"
                    required
                    placeholder={t("contactPage.form.namePh")}
                  />
                </label>

                <label className={styles.label}>
                  {t("contactPage.form.phoneLabel")}
                  <input
                    className={styles.input}
                    type="tel"
                    name="phone"
                    required
                    inputMode="numeric"
                    pattern="^\+998\d{9}$"
                    maxLength={13}
                    placeholder={t("contactPage.form.phonePh")}
                    title={t("contactPage.form.phoneHint")}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^\d+]/g, "");

                      if (!e.target.value.startsWith("+")) {
                        e.target.value =
                          "+" + e.target.value.replace(/\+/g, "");
                      }

                      if (e.target.value.length > 13) {
                        e.target.value = e.target.value.slice(0, 13);
                      }
                    }}
                  />
                </label>

                <label className={styles.label}>
                  {t("contactPage.form.msgLabel")}
                  <textarea
                    className={styles.textarea}
                    name="message"
                    required
                    placeholder={t("contactPage.form.msgPh")}
                    rows={7}
                  />
                </label>

                <button className={styles.submit} type="submit">
                  {t("contactPage.form.submit")}
                </button>

                {status && <p className={styles.status}>{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </SimplePage>
  );
}