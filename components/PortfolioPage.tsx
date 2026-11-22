import Link from "next/link";
import { experienceItems, stats, toolkitGroups } from "@/lib/content";
import { SECTION_SPACE, WRAP } from "@/lib/layout";
import {
  CometIcon,
  PlanetIcon,
  RadioTowerIcon,
  SatelliteIcon,
} from "@/components/illustrations";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CloudTextureBackground } from "@/components/CloudTextureBackground";
import { StarBorderContact } from "@/components/StarBorderContact";
import { StarBorderHero } from "@/components/StarBorderHero";
import { SiteNav } from "@/components/SiteNav";

export function PortfolioPage() {
  const year = new Date().getFullYear();

  return (
    <div className="page relative isolate w-full bg-bg text-ink">
      <div className="page-sky pointer-events-none absolute inset-0 bg-bg" aria-hidden>
        <CloudTextureBackground />

        <div className="page-sky-stars pointer-events-none absolute inset-0 opacity-85" aria-hidden>
          <div className="sf1" />
          <div className="sf1-b1 sf-bright" />
          <div className="sf2" />
          <div className="sf2-b1 sf-bright" />
          <div className="sf2-b2 sf-bright" />
          <div className="sf2-b3 sf-bright" />
          <div className="sf3-b1 sf-bright" />
          <div className="sf3-b2 sf-bright" />
          <div className="sf3-b3 sf-bright" />
          <div className="sf3-b4 sf-bright" />
          <div className="sf3-b5 sf-bright" />
        </div>
      </div>

      <header id="top" className="relative z-[1] overflow-visible">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <span className="shoot" aria-hidden />

        <SiteNav />

        <section
          className="hero relative z-[2] overflow-hidden pb-[calc(var(--section-space)/2)]"
          data-enter
        >
          <div
            className={`${WRAP} flex min-h-[clamp(640px,calc(min(100vw,680px)*743/730+7rem),920px)] items-center justify-center py-[clamp(32px,6vw,96px)] pb-[clamp(56px,9vw,120px)]`}
          >
            <div className="relative mx-auto w-full max-w-[980px] text-center">
              <StarBorderHero />
              <div className="relative z-[1] min-w-0 px-1">
                <h1 className="disp hero-title m-0 leading-[0.88] tracking-[-0.01em] text-ink max-sm:leading-[0.9]">
                  <span className="block">Julie Kasparian</span>
                </h1>
                <p className="hero-role heading-glow">Front-end Developer</p>
                <p className="mx-auto mt-[clamp(8px,1.6vw,20px)] max-w-[560px] text-[clamp(16px,1.4vw,18px)] leading-relaxed text-body-copy">
                  Five years turning design concepts and client requirements into responsive and accessible
                  websites, from Figma prototypes and custom WordPress themes to modern React applications.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 max-sm:mx-auto max-sm:w-full max-sm:max-w-[min(100%,19rem)] max-sm:flex-col max-sm:items-stretch">
                  <Link
                    className="btn mono max-sm:w-full max-sm:text-center bg-ice px-6 py-3.5 text-[11px] font-medium tracking-[0.16em] text-bg uppercase hover:shadow-[var(--box-shadow-btn-glow)] sm:px-7 sm:py-4 sm:text-[12px]"
                    href="#work"
                  >
                    See selected work
                  </Link>
                  <Link
                    className="btn ghost mono max-sm:w-full max-sm:text-center border border-ice px-6 py-3.5 text-[11px] tracking-[0.16em] text-ice uppercase hover:bg-ice/15 hover:shadow-[var(--box-shadow-btn-glow)] sm:px-7 sm:py-4 sm:text-[12px]"
                    href="#contact"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-bar relative z-[2] border-y border-line bg-bg/55">
            <div
              className="wrap mx-auto grid w-full max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              aria-label="Highlights"
            >
              {stats.map((s, i) => (
                <div
                  key={s.title}
                  className={`stats-cell px-2 py-7 text-center sm:px-4 lg:py-8 ${
                    i % 2 === 0 ? "sm:border-r sm:border-line" : ""
                  } ${i < stats.length - 1 ? "lg:border-r lg:border-line" : ""}`}
                >
                  <p className="disp m-0 mb-2 text-[clamp(1.15rem,1.65vw,1.65rem)] leading-snug tracking-[0.06em] text-ice">
                    {s.title}
                  </p>
                  <p className="mono m-0 text-[12px] tracking-[0.14em] text-muted uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </header>

      <main id="main" className="relative z-[1]">
        <section id="about" className={`relative z-[1] ${SECTION_SPACE}`}>
          <div
            className={`${WRAP} flex flex-col flex-wrap items-start gap-0 lg:gap-x-[72px] lg:gap-y-12 lg:flex-row lg:items-center`}
          >
            <PlanetIcon className="section-icon-above max-lg:block lg:hidden" />
            <div className="min-w-0 w-full max-lg:flex-none lg:flex-[3_1_520px] lg:w-auto">
              <p className="mono section-eyebrow">{"1 // About"}</p>
              <h2 className="section-title max-lg:leading-[1]">
                Get to <span className="scr">know me</span>
              </h2>
              <div className="flex flex-col gap-5 text-[17px] leading-[1.75] text-muted lg:gap-6 lg:leading-[1.8]">
                <p className="m-0">
                  {`I'm a front-end developer with a Bachelor's degree in Computer Science from California State University, Los Angeles.`}
                </p>
                <p className="m-0">
                  Over five years at an internet marketing agency, I worked across the website development
                  process: from translating design concepts into responsive layouts and prototypes to building
                  custom WordPress themes and Gutenberg blocks. I also focused on improving website
                  accessibility, SEO, and performance through technical audits and optimization.
                </p>
                <p className="m-0">
                  {`Beyond my professional WordPress experience, I've continued expanding my front-end development skills through independent projects with React, TypeScript, and Angular, exploring modern frameworks and building interactive web applications.`}
                </p>
              </div>
            </div>
            <div className="hidden w-full min-w-0 justify-center lg:flex lg:flex-[1_1_420px] lg:min-w-[280px]">
              <PlanetIcon className="opacity-95" />
            </div>
          </div>
        </section>

        <ProjectsSection />

        <section id="experience" className={`relative z-[1] ${SECTION_SPACE}`}>
          <div className={WRAP}>
            <SatelliteIcon className="section-icon-above max-lg:block lg:hidden" />
            <p className="mono section-eyebrow">{"3 // Professional Experience"}</p>
            <div className="mb-14 flex w-full flex-col items-start gap-6 lg:flex-row lg:flex-nowrap lg:items-center lg:justify-between lg:gap-0">
              <h2 className="section-heading m-0 w-full max-w-[550px] shrink-0 lg:w-[650px]">
                Front-End <span className="scr">Designer / Developer</span>
              </h2>
              <SatelliteIcon className="mx-auto hidden shrink-0 opacity-95 lg:mx-0 lg:block" />
              <div className="max-w-[320px] shrink-0 text-left">
                <p className="m-0 text-xl font-medium text-ink">imFORZA</p>
                <p className="mt-1 text-[15px] text-muted">Internet Marketing Agency</p>
                <p className="mono mt-3.5 text-[12px] tracking-[0.16em] text-ice">AUG 2021 – NOV 2026</p>
              </div>
            </div>
            <div className="flex flex-wrap border-t border-line">
              {experienceItems.map((item, idx) => (
                <div
                  key={item.n}
                  className={`flex w-full flex-[1_1_280px] gap-4 border-b border-line py-8 sm:gap-6 sm:py-9 lg:flex-[1_1_460px] ${idx % 2 === 0 ? "pr-0 lg:pr-9" : ""}`}
                >
                  <p className="disp experience-index m-0 shrink-0">
                    {item.n}
                  </p>
                  <div>
                    <h3 className="m-0 mb-2.5 text-[clamp(18px,2.2vw,22px)] font-medium leading-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="m-0 text-[15px] leading-relaxed text-muted">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="toolkit" className={`relative z-[1] ${SECTION_SPACE}`}>
          <div className={WRAP}>
            <CometIcon className="section-icon-above max-lg:block lg:hidden" />
            <p className="mono section-eyebrow">{"4 // Toolkit"}</p>
            <div className="relative mb-14">
              <CometIcon
                decor
                className="pointer-events-none absolute top-0 right-0 z-0 hidden w-[clamp(160px,min(28vw,320px),320px)] translate-x-[6%] -translate-y-[38%] opacity-95 lg:block"
              />
              <h2 className="section-title relative z-[1]">
                How I <span className="scr">build</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-11 sm:gap-x-10">
              {toolkitGroups.map((g) => (
                <div
                  key={g.id}
                  className="min-w-0 flex-[1_1_100%] border-t border-ice pt-[18px] sm:flex-[1_1_280px]"
                >
                  <p className="mono toolkit-group-label m-0 mb-[18px] text-[11px] font-medium tracking-[0.22em] text-ice uppercase">
                    {`${g.id} // ${g.title}`}
                  </p>
                  <ul className="mono m-0 list-none p-0 text-sm leading-8 text-ink">
                    {g.items.map((item) => (
                      <li key={item}>› {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="education-card relative mt-16 border border-line bg-bg/55 p-5 sm:p-7 lg:p-9">
              <span
                aria-hidden
                className="absolute top-[-1px] left-[-1px] size-[22px] border-t-2 border-l-2 border-ice"
              />
              <span
                aria-hidden
                className="absolute right-[-1px] bottom-[-1px] size-[22px] border-r-2 border-b-2 border-ice"
              />
              <p className="mono toolkit-group-label education-card-section m-0 text-[11px] font-medium tracking-[0.22em] text-ice uppercase">
                {"G // Education"}
              </p>
              <div className="education-card-grid">
                <div className="education-card-col education-card-col--degree">
                  <p className="mono education-card-label">Degree</p>
                  <p className="disp education-card-degree m-0 text-ink">B.S. Computer Science</p>
                  <p className="education-card-honor m-0 text-muted">Graduated Cum Laude</p>
                </div>
                <div className="education-card-divider" aria-hidden="true" />
                <div className="education-card-col education-card-col--school">
                  <p className="mono education-card-label">School</p>
                  <p className="disp education-card-school m-0 text-ink">
                    California State University, Los Angeles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={`relative z-[1] ${SECTION_SPACE}`}>
          <div
            className={`relative ${WRAP} min-h-[clamp(680px,calc(min(100vw,640px)*369/402+5.5rem),900px)] max-sm:min-h-[clamp(600px,calc(min(98vw,520px)*369/402+5rem),900px)] lg:min-h-[clamp(760px,calc(min(104vw,760px)*369/402+6rem),900px)]`}
          >
            <StarBorderContact />
            <div className="relative z-[1] flex min-h-[inherit] -translate-y-[clamp(16px,4.5vw,52px)] flex-col items-center justify-center text-center max-sm:-translate-y-3">
              <RadioTowerIcon className="opacity-95" />
              <p className="mono section-eyebrow">{"5 // Contact"}</p>
              <h2 className="contact-title heading-glow">
                {`Let's `}
                <span className="scr">connect</span>
              </h2>
              <p className="mx-auto max-w-[480px] px-2 text-base leading-relaxed text-muted sm:text-lg">
                {`Have an opportunity in mind? I'd love to hear about it.`}
              </p>
              <p className="mx-auto mt-4 max-w-[min(100%,34rem)] px-1 sm:mt-8">
                <a
                  className="bigmail disp max-w-full break-all tracking-[0.04em] sm:break-normal"
                  href="mailto:juliekasparian@gmail.com"
                >
                  juliekasparian@gmail.com ↗
                </a>
              </p>
              <div className="mono mt-4 flex flex-wrap justify-center gap-x-5 gap-y-3 text-[11px] tracking-[0.18em] uppercase sm:mt-9 sm:gap-x-8 sm:text-[12px] sm:tracking-[0.2em]">
                <Link
                  className="nl"
                  href="https://linkedin.com/in/juliekasparian"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </Link>
                <Link
                  className="nl"
                  href="/static/Julie_Kasparian_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={`closing mono relative z-[1] border-t border-line py-[22px] pb-11 text-[10px] tracking-[0.16em] text-muted uppercase sm:text-[11px] sm:tracking-[0.18em]`}
      >
        <div
          className={`${WRAP} flex flex-col flex-wrap items-center justify-between gap-3 text-center sm:flex-row sm:items-center sm:text-left`}
        >
          <span>© {year} Julie Kasparian</span>
          <span>Los Angeles, California</span>
        </div>
      </footer>
    </div>
  );
}