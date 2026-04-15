import { ImageResponse } from "next/og";

export const alt = "Bathpass — Membership for Bathhouse Culture";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #8BA68B 0%, #6B8E6B 40%, #4A6B4A 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontSize: 120,
              fontWeight: 800,
              color: "#1A1A1A",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            bathpass
          </span>
          <span
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#FAF9F7",
              letterSpacing: "0.5px",
              marginTop: "8px",
            }}
          >
            Membership for Bathhouse Culture
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
