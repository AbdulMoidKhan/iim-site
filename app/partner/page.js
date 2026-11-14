import "./page.css";
import Link from "next/link";
import { asset } from "../../lib/asset";
import PartnerForm from "./PartnerForm";

export const metadata = {
  title: "Partner With II&M | Initiative on Islam & Medicine",
  description:
    "Collaborate with the Initiative on Islam & Medicine on research, education, consultation, and community-engaged initiatives at the intersection of Islam and medicine.",
};

const WAYS = [
  [
    "fa-microscope",
    "Research Collaboration",
    "Co-develop and contribute to research at the intersection of Islam and biomedicine.",
  ],
  [
    "fa-book-open",
    "Education & Training",
    "Collaborate on courses, training opportunities, and student education.",
  ],
  [
    "fa-people-group",
    "Workshops & Community Programs",
    "Co-host workshops and community programs to address real-world health and ethical topics.",
  ],
  [
    "fa-comments",
    "Consultation & Advisory",
    "Seek expertise and guidance on Islamic ethical, cultural, and healthcare-related matters.",
  ],
];

const WORK = [
  {
    img: "/images/our-impact/cta-mosque.webp",
    alt: "Mosque at sunset viewed through a carved archway",
    title: "M-HEaRT",
    text: "A project on mental health and religious engagement in collaboration with Worry Free Community.",
    href: "/mosque-health-education",
  },
  {
    img: "/images/distinct-building.webp",
    alt: "Academic medical center building",
    title: "I AM PCN",
    text: "A project involving the Medical College of Wisconsin, the Muslim Community and Health Center, and II&M.",
    href: "/palliative-care-needs",
  },
  {
    img: "/images/speaking/audience.webp",
    alt: "Audience seated at an academic symposium",
    title: "Biomedicine, Religion & Education Symposium",
    text: "A symposium co-hosted by AKU-IED and II&M.",
    href: "/impact",
  },
];

const SECTORS = [
  ["fa-graduation-cap", "Academic & Research Institutions"],
  ["fa-hospital", "Healthcare Organizations"],
  ["fa-people-group", "Community Organizations"],
  ["fa-book-open", "Educators & Religious Scholars"],
];

export default function PartnerPage() {
  return (
    <div className="partner-page">
      <header className="pt-hero">
        <div className="container">
          <div className="pt-hero-grid">
            <div className="pt-hero-copy">
              <p className="pt-eyebrow">
                PARTNERSHIPS &amp; COLLABORATION <span className="pt-eyebrow-line" />
              </p>
              <h1>Partner With II&amp;M</h1>
              <p className="pt-hero-lead">
                Collaborate on research, education, consultation, and community-engaged initiatives at the intersection
                of Islam and medicine.
              </p>
              <Link href="#partnership-form" className="pt-btn">
                START A PARTNERSHIP CONVERSATION <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-hero-media">
          <img loading="eager" fetchPriority="high" decoding="async"             src={asset("/images/leadership-meeting.webp")}
            alt="Researchers, clinicians, and community leaders in conversation"
          />
        </div>
      </header>

      <section className="pt-approach">
        <div className="container">
          <div className="pt-approach-grid">
            <div>
              <p className="pt-eyebrow">
                OUR APPROACH <span className="pt-eyebrow-line" />
              </p>
              <h2 className="pt-h2">Working Together for Meaningful Impact</h2>
            </div>
            <p className="pt-approach-text">
              II&amp;M collaborates with institutions, researchers, clinicians, educators, religious scholars, and
              community organizations to advance evidence-informed work in Muslim health and Islamic bioethics.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-ways" id="ways-to-partner">
        <div className="container">
          <p className="pt-eyebrow">
            WAYS TO PARTNER <span className="pt-eyebrow-line" />
          </p>
          <div className="pt-ways-grid">
            {WAYS.map(([icon, title, text]) => (
              <article className="pt-way" key={title}>
                <div className="pt-way-head">
                  <span className="pt-way-icon">
                    <i className={`fa-solid ${icon}`} aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                </div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-work">
        <div className="container">
          <p className="pt-eyebrow">
            SELECTED COLLABORATIVE WORK <span className="pt-eyebrow-line" />
          </p>
          <div className="pt-work-grid">
            {WORK.map((item) => (
              <article className="pt-work-card" key={item.title}>
                <div className="pt-work-media">
                  <img loading="lazy" decoding="async" src={asset(item.img)} alt={item.alt} />
                </div>
                <div className="pt-work-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={item.href} className="pt-work-link" aria-label={`Learn more about ${item.title}`}>
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-sectors">
        <div className="container">
          <div className="pt-sectors-grid">
            <div className="pt-sectors-copy">
              <p className="pt-eyebrow">
                WHO WE WORK WITH <span className="pt-eyebrow-line" />
              </p>
              <h2 className="pt-h2">Collaborating Across Sectors</h2>
            </div>
            <div className="pt-sectors-items">
              {SECTORS.map(([icon, label]) => (
                <article className="pt-sector" key={label}>
                  <i className={`fa-solid ${icon}`} aria-hidden="true" />
                  <h3>{label}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-cta" id="partnership-form">
        <div className="pt-cta-media">
          <img loading="lazy" decoding="async"             src={asset("/images/our-impact/cta-mosque.webp")}
            alt="Mosque at sunset framed by a carved archway"
          />
        </div>
        <div className="pt-cta-panel">
          <div className="pt-cta-inner">
            <span className="pt-cta-rule" />
            <h2 className="pt-h2">Start a Partnership Conversation</h2>
            <PartnerForm />
          </div>
        </div>
      </section>
    </div>
  );
}
