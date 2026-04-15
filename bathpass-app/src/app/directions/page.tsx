import Link from "next/link";

export const metadata = {
  title: "Visual Directions — Bathpass",
};

export default function DirectionsPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] flex items-center justify-center p-8">
      <div className="max-w-3xl w-full">
        <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-4">
          Bathpass — Visual Directions
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-[#111] mb-3" style={{ fontFamily: "system-ui" }}>
          Three directions. Pick the one that feels right.
        </h1>
        <p className="text-[#777] text-base leading-relaxed mb-16 max-w-lg">
          Each direction is a complete homepage with its own palette, typography,
          spacing, and tone. Same content structure, different visual world.
        </p>

        <div className="space-y-6">
          <Link
            href="/directions/a"
            className="block border border-[#e0ddd6] bg-white p-8 hover:border-[#c4a882] hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-[#b08c5a] mb-2 font-medium">
                  Direction A
                </p>
                <h2 className="text-2xl font-semibold text-[#111] mb-2 tracking-tight">
                  Warm Mineral
                </h2>
                <p className="text-sm text-[#777] leading-relaxed max-w-md">
                  Aesop restraint meets Crown Affair warmth. Earthy palette,
                  serif accents, generous whitespace. The most editorial
                  and mature of the three. Feels like a high-end membership
                  you&apos;d find in a design magazine.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="w-6 h-6 rounded-full bg-[#2C2825]" />
                  <span className="w-6 h-6 rounded-full bg-[#B08C5A]" />
                  <span className="w-6 h-6 rounded-full bg-[#E8E3DA]" />
                  <span className="w-6 h-6 rounded-full bg-[#F7F5F0]" />
                  <span className="w-6 h-6 rounded-full bg-[#FFFFFF] border border-[#e0ddd6]" />
                </div>
              </div>
              <span className="text-[#ccc] group-hover:text-[#b08c5a] transition-colors text-2xl">
                &rarr;
              </span>
            </div>
          </Link>

          <Link
            href="/directions/b"
            className="block border border-[#e8e5e0] bg-white p-8 hover:border-[#8BA68B] hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-[#6B8E6B] mb-2 font-medium">
                  Direction B
                </p>
                <h2 className="text-2xl font-semibold text-[#111] mb-2 tracking-tight">
                  Soft Studio
                </h2>
                <p className="text-sm text-[#777] leading-relaxed max-w-md">
                  Glossier clarity meets Vuori ease. Light, airy, and
                  approachable. Rounded corners, soft sage green accent,
                  sans-serif throughout. The friendliest and most
                  immediately inviting of the three.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="w-6 h-6 rounded-full bg-[#1A1A1A]" />
                  <span className="w-6 h-6 rounded-full bg-[#6B8E6B]" />
                  <span className="w-6 h-6 rounded-full bg-[#E8EDE8]" />
                  <span className="w-6 h-6 rounded-full bg-[#FAF9F7]" />
                  <span className="w-6 h-6 rounded-full bg-[#FFFFFF] border border-[#e8e5e0]" />
                </div>
              </div>
              <span className="text-[#ccc] group-hover:text-[#6B8E6B] transition-colors text-2xl">
                &rarr;
              </span>
            </div>
          </Link>

          <Link
            href="/directions/c"
            className="block border border-[#e0e0e0] bg-white p-8 hover:border-[#111] hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-[#555] mb-2 font-medium">
                  Direction C
                </p>
                <h2 className="text-2xl font-semibold text-[#111] mb-2 tracking-tight">
                  Quiet Authority
                </h2>
                <p className="text-sm text-[#777] leading-relaxed max-w-md">
                  Oura trust meets Glossier structure. Near-monochrome with
                  a single warm accent. Sharp geometric type, precise grid,
                  confident negative space. The most product-forward and
                  tech-premium of the three.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="w-6 h-6 rounded-full bg-[#0A0A0A]" />
                  <span className="w-6 h-6 rounded-full bg-[#C4956A]" />
                  <span className="w-6 h-6 rounded-full bg-[#E0E0E0]" />
                  <span className="w-6 h-6 rounded-full bg-[#F5F5F5]" />
                  <span className="w-6 h-6 rounded-full bg-[#FFFFFF] border border-[#e0e0e0]" />
                </div>
              </div>
              <span className="text-[#ccc] group-hover:text-[#111] transition-colors text-2xl">
                &rarr;
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
