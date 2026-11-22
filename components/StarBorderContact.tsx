import { readFileSync } from "fs";
import { join } from "path";

/** Contact section star frame — twinkle keyframes live in the SVG. */
export function StarBorderContact() {
  const svg = readFileSync(join(process.cwd(), "public/images/decor/star-border-2.svg"), "utf8");

  return (
    <div
      className="contact-star-border pointer-events-none absolute top-1/2 left-1/2 z-0 w-[min(104vw,720px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.42] max-sm:w-[min(100vw,460px)] lg:w-[min(104vw,760px)] [&_svg]:h-auto [&_svg]:w-full [&_svg]:drop-shadow-[0_0_48px_rgba(143,180,255,0.22)]"
      aria-hidden
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}