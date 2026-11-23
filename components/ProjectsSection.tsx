import Image from "next/image";
import Link from "next/link";
import { moaaGutenbergBlocks, projects } from "@/lib/content";
import { SECTION_SPACE, WRAP } from "@/lib/layout";
import { ConstellationIcon } from "@/components/illustrations";

const PLACEHOLDER_STACK = ["[Tech 1]", "[Tech 2]", "[Tech 3]"] as const;

function projectLiveHref(href: string) {
  return href.trim();
}

function ProjectRow({
  project,
  index,
  showBlocks,
}: {
  project: (typeof projects)[number];
  index: number;
  showBlocks?: boolean;
}) {
  const liveHref = projectLiveHref(project.href);
  const hasLive = liveHref.length > 0;
  const github =
    "secondaryLink" in project && project.secondaryLink ? project.secondaryLink : null;
  const builtWith =
    "builtWith" in project && project.builtWith ? project.builtWith : PLACEHOLDER_STACK;

  const shotMedia = (
    <span className="work-shot-media">
      <Image
        src={project.image}
        alt={project.alt}
        width={1600}
        height={1000}
        sizes="(max-width: 1024px) 100vw, clamp(300px, 36vw, 520px)"
        priority={index === 0}
      />
    </span>
  );

  return (
    <article className="work-prow">
      <div className="work-shot-slot">
        {hasLive ? (
          <Link
            href={liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="work-shot"
            aria-label={`${project.title}: see it live`}
          >
            {shotMedia}
          </Link>
        ) : (
          <div className="work-shot work-shot--static">{shotMedia}</div>
        )}
      </div>

      <div className="work-txt">
        <span className="mono work-tag">{project.tag}</span>
        <h3 className="disp work-title">{project.title}</h3>
        <p className="work-tagline">{project.desc}</p>
        <ul className="work-stack mono" aria-label="Tech stack">
          <li className="work-stack-label">Built with</li>
          {builtWith.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="work-links mono">
          {hasLive ? (
            <Link
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="work-link nl nl-ice"
              aria-label={`${project.title}: see it live`}
            >
              See it live <span className="go">↗</span>
            </Link>
          ) : null}
          {github ? (
            <Link
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="work-link nl nl-ice"
              aria-label={`${project.title}: GitHub repository`}
            >
              {github.label} <span className="go">↗</span>
            </Link>
          ) : (
            <Link
              href="#"
              className="work-link nl nl-ice"
              aria-label={`${project.title}: GitHub repository (placeholder)`}
            >
              GitHub <span className="go">↗</span>
            </Link>
          )}
        </div>
      </div>

      {showBlocks ? (
        <div className="work-more work-more--full">
          <p className="work-more-label mono">+ 2 custom Gutenberg blocks</p>
          <div className="work-more-inner">
            {moaaGutenbergBlocks.map((block) => (
              <div key={block.name} className="work-mini mono">
                <div className="work-mini-copy">
                  <span className="work-block-name">{block.name}</span>
                  <p className="work-block-desc">{block.desc}</p>
                </div>
                <div className="work-mini-links">
                  <Link
                    href={block.live}
                    className="work-link nl nl-ice"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${block.name} on the museum website`}
                  >
                    See it live <span className="go">↗</span>
                  </Link>
                  <Link
                    href={block.github}
                    className="work-link nl nl-ice"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${block.name} source code on GitHub`}
                  >
                    GitHub <span className="go">↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="work" className={`relative z-[1] ${SECTION_SPACE}`}>
      <div className={WRAP}>
        <ConstellationIcon className="section-icon-above max-lg:block lg:hidden" />
        <div className="work-section-head work-section-head--decor items-start">
          <ConstellationIcon
            decor
            className="work-section-constellation pointer-events-none z-0 hidden opacity-95 lg:block"
          />
          <div className="relative z-[1] min-w-0">
            <p className="mono section-eyebrow">{"2 // Selected work"}</p>
            <h2 className="section-title m-0">
              Personal <span className="scr">projects</span>
            </h2>
          </div>
          <p className="work-intro relative z-[1] lg:shrink-0 lg:text-right">
            Independent projects exploring modern front-end and full-stack development
          </p>
        </div>

        <div className="work-prows">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={index}
              showBlocks={project.title === "Museum of Ancient Arts"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}