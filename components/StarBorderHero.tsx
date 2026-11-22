import { readFileSync } from "fs";
import { join } from "path";

/** Hero star frame — twinkle keyframes are defined inside the SVG. */
export function StarBorderHero() {
  const svg = readFileSync(join(process.cwd(), "public/images/decor/star-border.svg"), "utf8");

  return (
    <div
      className="hero-star-border pointer-events-none absolute top-1/2 left-1/2 z-0 w-[min(102vw,740px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.42] max-sm:w-[min(98vw,500px)] lg:w-[min(100vw,680px)] [&_svg]:h-auto [&_svg]:w-full [&_svg]:drop-shadow-[0_0_48px_rgba(143,180,255,0.22)]"
      aria-hidden
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}