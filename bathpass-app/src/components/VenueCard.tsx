import Link from "next/link";
import type { Venue } from "@/data/venues";

export default function VenueCard({ venue }: { venue: Venue }) {
  return (
    <Link href={`/venues/${venue.slug}`} className="card group block overflow-hidden">
      <div className="relative overflow-hidden rounded-t-[12px]">
        <img
          src={venue.heroImage}
          alt={venue.name}
          className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <span className="pill pill-white text-[13px] font-semibold">
            {venue.baseCreditCost} cr
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-semibold text-black leading-snug">
            {venue.name}
          </h3>
        </div>
        <p className="text-[13px] text-ash">{venue.neighborhood}, {venue.borough}</p>

        <p className="text-sm text-silver leading-relaxed mt-3 line-clamp-2">
          {venue.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {venue.amenities.slice(0, 3).map((a) => (
            <span key={a} className="text-[11px] font-medium text-ash px-2.5 py-1 bg-cloud rounded-md">
              {a}
            </span>
          ))}
          {venue.amenities.length > 3 && (
            <span className="text-[11px] text-silver px-2 py-1">
              +{venue.amenities.length - 3}
            </span>
          )}
        </div>

        {venue.socialSlots && (
          <div className="mt-4 pt-3 border-t border-mist flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full border-[1.5px] border-white"
                  style={{ background: `hsl(${130 + i * 20}, ${25 + i * 3}%, ${68 - i * 4}%)` }}
                />
              ))}
            </div>
            <span className="text-xs text-ash">Members going this week</span>
          </div>
        )}
      </div>
    </Link>
  );
}
