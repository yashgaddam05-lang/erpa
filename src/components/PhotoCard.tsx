/**
 * PhotoCard – a reusable wrapper around next/image for the ERPA site.
 *
 * Usage example:
 *   import PhotoCard from "@/components/PhotoCard";
 *   import { photos } from "@/lib/images";
 *
 *   <PhotoCard
 *     src={photos.teamMeeting}
 *     alt="Team in a meeting room"
 *     aspectRatio="16/9"
 *     overlay
 *     caption="Our expert consultants at work"
 *   />
 */

import Image from "next/image";

/** Maps the aspectRatio prop to a Tailwind aspect-ratio utility class. */
const ASPECT_RATIO_CLASSES: Record<
  NonNullable<PhotoCardProps["aspectRatio"]>,
  string
> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
};

export interface PhotoCardProps {
  /** Absolute URL or local path to the image. Remote URLs must be allowed in next.config.ts. */
  src: string;
  /** Descriptive alt text for accessibility. Use "" for purely decorative images. */
  alt: string;
  /** Aspect ratio of the image container. Defaults to "16/9". */
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4";
  /** When true, renders a bottom-to-top dark gradient over the image. */
  overlay?: boolean;
  /** Optional caption rendered at the bottom-left of the overlay. Requires overlay to be visible. */
  caption?: string;
  /** Additional Tailwind classes applied to the outermost container element. */
  className?: string;
}

/**
 * PhotoCard renders a responsive image inside an aspect-ratio container with
 * optional gradient overlay and caption. The image scales to 105% on hover
 * with a smooth CSS transition for a subtle zoom effect.
 *
 * Accessibility notes:
 * - The Image component forwards `alt` to the underlying <img> element.
 * - When a caption is present it is rendered as a visible <figcaption> inside
 *   a <figure> element for correct semantic structure.
 * - The container uses overflow-hidden so the zoom effect is clipped cleanly.
 */
export default function PhotoCard({
  src,
  alt,
  aspectRatio = "16/9",
  overlay = false,
  caption,
  className = "",
}: PhotoCardProps) {
  const aspectClass = ASPECT_RATIO_CLASSES[aspectRatio];

  const content = (
    <div
      className={[
        "relative overflow-hidden rounded-2xl",
        aspectClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Image with hover zoom */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      {/* Gradient overlay */}
      {overlay && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        />
      )}

      {/* Caption rendered over the overlay */}
      {caption && overlay && (
        <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white drop-shadow-sm">
          {caption}
        </p>
      )}
    </div>
  );

  // Wrap in <figure>/<figcaption> only when there is a visible caption,
  // giving correct semantics for assistive technologies.
  if (caption && overlay) {
    return (
      <figure className="group m-0 p-0">
        {content}
        {/* visually hidden figcaption for screen readers – visible text is in <p> above */}
        <figcaption className="sr-only">{caption}</figcaption>
      </figure>
    );
  }

  return <div className="group">{content}</div>;
}
