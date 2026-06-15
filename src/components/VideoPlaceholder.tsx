/**
 * VideoPlaceholder – a visual-only video thumbnail with play button overlay.
 * Does not play any video; it is a decorative placeholder for the ERPA site.
 *
 * Usage example:
 *   import VideoPlaceholder from "@/components/VideoPlaceholder";
 *   import { photos } from "@/lib/images";
 *
 *   <VideoPlaceholder
 *     title="How ERPA transformed public sector IT"
 *     thumbnail={photos.presentationRoom}
 *     duration="3:42"
 *   />
 */

import Image from "next/image";

export interface VideoPlaceholderProps {
  /** Headline shown at the bottom-left of the card. */
  title: string;
  /** Absolute URL to the thumbnail image (Unsplash or similar). */
  thumbnail: string;
  /** Optional duration badge shown at the bottom-right (e.g. "4:12"). */
  duration?: string;
}

/**
 * Accessibility notes:
 * - role="img" on the root element exposes the card as a non-interactive graphic
 *   since no real video interaction is available.
 * - The play icon is hidden from screen readers with aria-hidden.
 * - A descriptive aria-label is composed from title + duration.
 */
export default function VideoPlaceholder({
  title,
  thumbnail,
  duration,
}: VideoPlaceholderProps) {
  const ariaLabel = duration
    ? `Video thumbnail: ${title} (${duration})`
    : `Video thumbnail: ${title}`;

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="group relative aspect-video overflow-hidden rounded-2xl cursor-default select-none"
    >
      {/* Thumbnail image */}
      <Image
        src={thumbnail}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      {/* Dark overlay – brightens slightly on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30"
      />

      {/* Centered play button */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
          {/* Triangle play icon drawn with borders */}
          <div
            className="ml-1 h-0 w-0"
            style={{
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderLeft: "18px solid #002e5d",
            }}
          />
        </div>
      </div>

      {/* Bottom-left: title */}
      <p className="absolute bottom-3 left-3 max-w-[70%] text-sm font-semibold leading-snug text-white drop-shadow">
        {title}
      </p>

      {/* Bottom-right: duration badge */}
      {duration && (
        <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
          {duration}
        </span>
      )}
    </div>
  );
}
