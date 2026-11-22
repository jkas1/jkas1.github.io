const W1_MASK =
  "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221600%22%20height%3D%221200%22%3E%3Cfilter%20id%3D%22f%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.0025%200.006%22%20numOctaves%3D%224%22%20seed%3D%227%22%20stitchTiles%3D%22stitch%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%202.7%200%200%200%20-1.08%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23f%29%22%2F%3E%3C%2Fsvg%3E')";

const W2_MASK =
  "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221300%22%20height%3D%221000%22%3E%3Cfilter%20id%3D%22f%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.004%200.009%22%20numOctaves%3D%224%22%20seed%3D%2223%22%20stitchTiles%3D%22stitch%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%202.7%200%200%200%20-1.08%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23f%29%22%2F%3E%3C%2Fsvg%3E')";

const wispMaskStyle = (mask: string) =>
  ({
    WebkitMaskImage: mask,
    maskImage: mask,
  }) as const;

export function CloudTextureBackground() {
  return (
    <div aria-hidden="true" className="cloudwrap">
      <div className="wisp w1" style={wispMaskStyle(W1_MASK)} />
      <div className="wisp w2" style={wispMaskStyle(W2_MASK)} />
    </div>
  );
}