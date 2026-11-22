import { readFileSync } from "fs";
import { join } from "path";

const decorPath = (file: string) => join(process.cwd(), "public/images/decor", file);

const iconShell =
  "[&_svg]:h-auto [&_svg]:w-full drop-shadow-[0_0_12px_rgba(143,180,255,0.45)]";

function InlineDecorIcon({
  file,
  className,
  ariaLabel,
  decor = false,
}: {
  file: string;
  className: string;
  ariaLabel: string;
  decor?: boolean;
}) {
  const svg = readFileSync(decorPath(file), "utf8");

  return (
    <div
      className={`icon ${iconShell} ${decor ? "section-decor" : ""} ${className}`}
      {...(decor
        ? { "aria-hidden": true }
        : { role: "img" as const, "aria-label": ariaLabel })}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export function PlanetIcon({ className = "", decor = false }: { className?: string; decor?: boolean }) {
  return (
    <InlineDecorIcon
      file="ringed-planet.svg"
      ariaLabel="Small ringed planet with a moon"
      decor={decor}
      className={`w-[clamp(240px,min(72vw,520px),520px)] drop-shadow-[0_0_16px_rgba(143,180,255,0.55)] ${className}`}
    />
  );
}

export function SatelliteIcon({ className = "", decor = false }: { className?: string; decor?: boolean }) {
  return (
    <InlineDecorIcon
      file="satellite.svg"
      ariaLabel="Small satellite with solar panels"
      decor={decor}
      className={`w-[clamp(140px,min(20vw,220px),220px)] ${className}`}
    />
  );
}

export function ConstellationIcon({ className = "", decor = false }: { className?: string; decor?: boolean }) {
  return (
    <InlineDecorIcon
      file="constellation.svg"
      ariaLabel="Small constellation of connected stars"
      decor={decor}
      className={`w-[clamp(180px,min(32vw,320px),320px)] ${className}`}
    />
  );
}

export function CometIcon({ className = "", decor = false }: { className?: string; decor?: boolean }) {
  return (
    <InlineDecorIcon
      file="comet.svg"
      ariaLabel="Comet drawn as a trail of twinkling stars"
      decor={decor}
      className={`w-[clamp(180px,min(32vw,320px),320px)] ${className}`}
    />
  );
}

export function RadioTowerIcon({ className = "", decor = false }: { className?: string; decor?: boolean }) {
  return (
    <InlineDecorIcon
      file="radio-tower.svg"
      ariaLabel="Small radio tower sending out signal waves"
      decor={decor}
      className={`mx-auto mb-2 block w-[clamp(88px,min(13vw,148px),148px)] ${className}`}
    />
  );
}