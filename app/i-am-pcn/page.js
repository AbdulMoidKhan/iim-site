import Link from "next/link";
import { asset } from "../../lib/asset";

export const metadata = {
  title:
    "Investigating American Muslim Palliative & Hospice Care Needs (I AM PCN) | II&M",
  description:
    "Advancing culturally and religiously responsive end-of-life, palliative, and hospice care for Muslim Americans through research, education, and community engagement.",
  keywords: [
    "I AM PCN",
    "Palliative Care Muslim Americans",
    "Islamic Bioethics End of Life",
    "Hospice Care Islam",
    "Muslim Healthcare Disparities",
    "Advance Care Planning",
    "II&M Research",
  ],
  openGraph: {
    title:
      "Investigating American Muslim Palliative & Hospice Care Needs (I AM PCN)",
    description:
      "A pioneering research initiative exploring the palliative and hospice care needs of American Muslims to inform culturally and religiously responsive care models.",
    url: "/i-am-pcn",
    siteName: "Initiative on Islam & Medicine",
    type: "article",
  },
};

// 1. Project Goals (Sidebar Card 1)
const PROJECT_GOALS = [
  {
    num: "1",
    text: "Explore the needs, experiences, and barriers Muslim Americans face at the end of life",
  },
  {
    num: "2",
    text: "Educate the community through accessible, Islamically informed resources and workshops",
  },
  {
    num: "3",
    text: "Empower families to make informed, religiously aligned decisions",
  },
  {
    num: "4",
    text: "Collaborate with imams, clinicians, ethicists, and researchers to co-create culturally and religiously responsive patient care models",
  },
];

// 2. Core Activities (Sidebar Card 2)
const CORE_ACTIVITIES = [
  {
    num: "1",
    text: "Multidisciplinary planning sessions to adapt EOL education to Muslim religious and cultural considerations",
  },
  {
    num: "2",
    text: "Community Educational Workshops: Held in mosques, these workshops offer information on hospice, palliative care, advance care planning (ACP), and Islamic perspectives",
  },
  {
    num: "3",
    text: "Surveys & Interviews (Research Component): Surveys capture participants' knowledge, attitudes, and readiness for EOL planning, with interviews to follow with select participants to deepen insight into barriers and preferences. Recruitment is supported by trusted community leaders and clinicians.",
  },
];

// 3. Sidebar Resource Links / Quick Links
const SIDEBAR_LINKS = [
  { title: "Workshops", href: "/workshops" },
  { title: "Publications Academic", href: "/resources" },
  { title: "Community", href: "/impact" },
  { title: "Presentations", href: "/speaking" },
  { title: "Replication Materials (From the Guide)", href: "/resources" },
  { title: "Further Videos to Watch", href: "/podcast" },
];

// 4. Team Members
const TEAM_MEMBERS = [
  {
    name: "Sameeia Khalid",
    image: "/images/i-am-pcn/hd_team-sameeia.png",
  },
  {
    name: "Dr. Ramy Sedan",
    image: "/images/i-am-pcn/hd_team-ramy.png",
  },
  {
    name: "Gwenn McClendon",
    image: "/images/i-am-pcn/hd_team-gwenn.png",
  },
  {
    name: "Dr. Aasim I. Padela",
    image: "/images/i-am-pcn/hd_team-padela.png",
  },
];

export default function IAmPcnPage() {
  return (
    <div className="iampcn-page">
      {/* ====================================================================
          1. HERO HEADER WITH ACCENT MARK & BREADCRUMB
          ==================================================================== */}
      <section className="iampcn-hero">
        <div className="container">
          {/* Decorative Diamond Accent Bar */}
          <div className="iampcn-diamondAccent" aria-hidden="true">
            <span className="iampcn-diamondLine" />
            <span className="iampcn-diamondShape">◆</span>
            <span className="iampcn-diamondLine" />
          </div>

          <h1 className="iampcn-heroTitle">
            Investigating American Muslim
            <br />
            Palliative &amp; Hospice Care Needs
            <br />
            (I AM PCN)
          </h1>

          <nav aria-label="breadcrumb" className="iampcn-breadcrumbWrap">
            <ol className="iampcn-breadcrumbList">
              <li className="iampcn-breadcrumbItem">
                <Link href="/" className="iampcn-breadcrumbLink">
                  Home
                </Link>
              </li>
              <li className="iampcn-breadcrumbSeparator" aria-hidden="true">
                /
              </li>
              <li
                className="iampcn-breadcrumbItem active"
                aria-current="page"
              >
                Investigating American Muslim Palliative &amp; Hospice Care Needs
                (I AM PCN)
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ====================================================================
          2. MAIN CONTENT TWO-COLUMN GRID (~68% Main, ~32% Sidebar)
          ==================================================================== */}
      <section className="iampcn-mainSection">
        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* LEFT MAIN COLUMN */}
            <div className="col-lg-8">
              {/* SECTION: Why This Work Matters */}
              <article className="iampcn-contentBlock">
                <div className="iampcn-sectionHeader">
                  <h2 className="iampcn-sectionHeading">Why This Work Matters</h2>
                  <div className="iampcn-headerUnderline" aria-hidden="true">
                    <span className="iampcn-diamondLineShort" />
                    <span className="iampcn-diamondShapeSmall">◆</span>
                    <span className="iampcn-diamondLineShort" />
                  </div>
                </div>

                <p className="iampcn-paragraph">
                  End-of-life (EOL) care remains an important but often
                  under-addressed area for Muslim Americans. Palliative and
                  hospice services can improve quality of life, reduce
                  suffering, and support families during serious illness, yet
                  many Muslim patients, families, and communities face unique
                  needs and barriers.
                </p>

                <p className="iampcn-paragraph">
                  This work aims to better understand those needs, inform
                  culturally and religiously appropriate approaches to care, and
                  build knowledge and resources that are accessible, relevant,
                  and practical for Muslim communities across the United States.
                </p>

                <div className="iampcn-sectionDivider" />
              </article>

              {/* SECTION: Our Journey: A Decade of Iterative Workshop Development */}
              <article className="iampcn-contentBlock">
                <h2 className="iampcn-sectionHeading">
                  Our Journey: A Decade of Iterative Workshop Development
                  (2014–2023)
                </h2>

                <p className="iampcn-paragraph">
                  The I AM PCN project builds on a decade of iterative workshop
                  development, community engagement, and collaboration with
                  diverse Muslim community partners, healthcare providers, and
                  scholars. Over time, this work has refined its focus, informed
                  by participant feedback, and helped shape a more targeted and
                  impactful project (I AM PCN).
                </p>

                <div className="iampcn-sectionDivider" />
              </article>

              {/* SECTION: Narrowing the Focus: The I AM PCN Project */}
              <article className="iampcn-contentBlock">
                <h2 className="iampcn-sectionHeading">
                  Narrowing the Focus: The I AM PCN Project
                </h2>

                <p className="iampcn-paragraph">
                  From this broader body of work, the Investigating American
                  Muslim Palliative &amp; Hospice Care Needs (I AM PCN) project
                  emerged to specifically examine the palliative and hospice care
                  experiences, needs, and perspectives of Muslim Americans. The
                  project uses community engagement, interviews, and educational
                  workshops to identify key priorities, challenges, and
                  opportunities for more inclusive, culturally responsive care.
                </p>

                <div className="iampcn-sectionDivider" />
              </article>

              {/* SECTION: What Makes I AM PCN Unique */}
              <article className="iampcn-contentBlock">
                <h2 className="iampcn-sectionHeadingDark">
                  What Makes I AM PCN Unique
                </h2>

                <ul className="iampcn-bulletList">
                  <li className="iampcn-bulletItem">
                    <span className="iampcn-bulletMarker">■</span>
                    <span>
                      Focuses on the lived experiences and perspectives of
                      Muslim Americans
                    </span>
                  </li>
                  <li className="iampcn-bulletItem">
                    <span className="iampcn-bulletMarker">■</span>
                    <span>
                      Integrates Islamic ethical and religious considerations in
                      EOL care
                    </span>
                  </li>
                  <li className="iampcn-bulletItem">
                    <span className="iampcn-bulletMarker">■</span>
                    <span>
                      Uses community engagement and educational workshops to
                      inform practical resources
                    </span>
                  </li>
                  <li className="iampcn-bulletItem">
                    <span className="iampcn-bulletMarker">■</span>
                    <span>
                      Bridges research, education, and real-world application
                      for patients, families, and providers
                    </span>
                  </li>
                </ul>

                {/* PUBLICATION / GUIDEBOOK COVERS */}
                <div className="iampcn-booksGrid">
                  <div className="row g-3 g-md-4">
                    <div className="col-sm-6">
                      <div className="iampcn-bookCard">
                        <div className="iampcn-bookImgWrap">
                          <img
                            src={asset(
                              "/images/i-am-pcn/hd_book-palliative-perspectives.png"
                            )}
                            alt="Islamic Perspectives on Palliative & End-of-Life Care"
                            className="iampcn-bookImg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="iampcn-bookCard">
                        <div className="iampcn-bookImgWrap">
                          <img
                            src={asset(
                              "/images/i-am-pcn/hd_book-end-of-life-decisions.png"
                            )}
                            alt="Islamic Bioethics of End-of-Life Healthcare Decisions: A Guide for Patients, Families and Healthcare Professionals"
                            className="iampcn-bookImg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* RIGHT SIDEBAR COLUMN */}
            <aside className="col-lg-4">
              <div className="iampcn-sidebarWrapper">
                {/* SIDEBAR CARD 1: Project Goals */}
                <div className="iampcn-sidebarCard">
                  <h3 className="iampcn-sidebarCardTitle">Project Goals:</h3>
                  <div className="iampcn-badgeList">
                    {PROJECT_GOALS.map((goal, idx) => (
                      <div key={idx} className="iampcn-badgeRow">
                        <div className="iampcn-badgeNum" aria-hidden="true">
                          {goal.num}
                        </div>
                        <div className="iampcn-badgeText">{goal.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SIDEBAR CARD 2: Core Activities */}
                <div className="iampcn-sidebarCard">
                  <h3 className="iampcn-sidebarCardTitle">Core Activities:</h3>
                  <div className="iampcn-badgeList">
                    {CORE_ACTIVITIES.map((act, idx) => (
                      <div key={idx} className="iampcn-badgeRow">
                        <div className="iampcn-badgeNum" aria-hidden="true">
                          {act.num}
                        </div>
                        <div className="iampcn-badgeText">{act.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SIDEBAR NAVIGATION PILLS */}
                <div className="iampcn-navPillsList">
                  {SIDEBAR_LINKS.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="iampcn-navPillItem"
                    >
                      <span className="iampcn-navPillTitle">{link.title}</span>
                      <span className="iampcn-navPillArrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  ))}
                </div>

                {/* SIDEBAR CARD 3: Get Involved */}
                <div className="iampcn-sidebarCard iampcn-getInvolvedCard">
                  <h3 className="iampcn-sidebarCardTitle">Get Involved</h3>
                  <p className="iampcn-getInvolvedDesc">
                    Want to learn more or support this work?
                  </p>
                  <Link href="/contact" className="iampcn-btnGetInvolved">
                    Get in touch with us{" "}
                    <i className="fa-solid fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. PROJECT DISSEMINATION SECTION
          ==================================================================== */}
      <section className="iampcn-disseminationSection">
        <div className="container">
          <div className="iampcn-sectionHeader mb-4">
            <h2 className="iampcn-sectionHeading">Project Dissemination</h2>
          </div>

          <div className="iampcn-disseminationCard">
            <div className="row g-4 align-items-center">
              {/* Left Poster Image */}
              <div className="col-md-5 col-lg-4 text-center">
                <div className="iampcn-posterWrap">
                  <img
                    src={asset("/images/i-am-pcn/hd_dissemination-poster.png")}
                    alt="Islamic Bioethics & End-of-Life Healthcare Decisions Workshop Poster"
                    className="iampcn-posterImg"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Center Divider on Desktop */}
              <div className="col-md-1 d-none d-md-flex justify-content-center">
                <div className="iampcn-disseminationDivider" />
              </div>

              {/* Right Event Content */}
              <div className="col-md-6 col-lg-7">
                <div className="iampcn-disseminationContent">
                  <h3 className="iampcn-disseminationTitle">
                    Islamic Bioethics &amp; End-of-Life Healthcare Decisions
                  </h3>
                  <p className="iampcn-disseminationLocation">
                    Islamic Society of Milwaukee
                  </p>
                  <p className="iampcn-disseminationDate">January 2026</p>

                  <a
                    href="#meet-the-team"
                    className="iampcn-btnMeetTeam"
                  >
                    Meet The Project Team{" "}
                    <i className="fa-solid fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. MEET THE PROJECT TEAM
          ==================================================================== */}
      <section id="meet-the-team" className="iampcn-teamSection">
        <div className="container">
          <div className="iampcn-sectionHeader mb-4">
            <h2 className="iampcn-sectionHeading">Meet The Project Team</h2>
          </div>

          <div className="row g-3 g-md-4">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="col-6 col-md-3">
                <div className="iampcn-teamTile">
                  <div className="iampcn-teamPhotoWrap">
                    <img
                      src={asset(member.image)}
                      alt={member.name}
                      className="iampcn-teamPhoto"
                      loading="lazy"
                    />
                  </div>
                  <div className="iampcn-teamContent">
                    <h3 className="iampcn-teamMemberName">{member.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. SUPPORTED BY (CANCER RESEARCH UK)
          ==================================================================== */}
      <section className="iampcn-funderSection">
        <div className="container">
          <h2 className="iampcn-funderHeading">Supported by</h2>
          <div className="iampcn-funderLogoWrap">
            <img
              src={asset("/images/i-am-pcn/cancer-research-uk.svg")}
              alt="Cancer Research UK"
              className="iampcn-funderLogo"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. FULL-WIDTH CRIMSON CALLOUT BANNER
          ==================================================================== */}
      <section className="iampcn-bannerSection">
        <div className="container">
          <div className="iampcn-bannerCard">
            <div className="row g-4 align-items-center">
              {/* Left Column Heading */}
              <div className="col-lg-5">
                <h3 className="iampcn-bannerTitle">
                  Advancing
                  <br />
                  Culturally Responsive
                  <br />
                  End-of-Life Care
                </h3>
              </div>

              {/* Vertical Divider */}
              <div className="col-lg-1 d-none d-lg-flex justify-content-center">
                <div className="iampcn-bannerDivider" />
              </div>

              {/* Right Column Text & Action */}
              <div className="col-lg-6">
                <p className="iampcn-bannerDesc">
                  Support research, education, and community engagement to
                  improve palliative and hospice care for Muslim Americans.
                </p>
                <Link href="/donate" className="iampcn-bannerBtn">
                  Support This Work{" "}
                  <i className="fa-solid fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. SUBSCRIBE TO OUR NEWSLETTER SECTION
          ==================================================================== */}
      <section className="iampcn-newsletterSection">
        <div className="container">
          <div className="iampcn-newsletterCard">
            <h3 className="iampcn-newsletterTitle">
              Subscribe to our newsletter
            </h3>

            <form
              action="#"
              method="POST"
              className="iampcn-newsletterForm"
            >
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control iampcn-formInput"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control iampcn-formInput"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control iampcn-formInput iampcn-formTextarea"
                  placeholder="Message"
                  rows={3}
                />
              </div>

              <div className="text-center">
                <button type="submit" className="iampcn-btnSubmit">
                  Submit Now <i className="fa-solid fa-arrow-right ms-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
