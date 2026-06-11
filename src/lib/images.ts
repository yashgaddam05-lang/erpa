/**
 * Centralized Unsplash photo URLs for use across the ERPA site.
 * All URLs point to real Unsplash photos with size and quality parameters
 * optimized for web delivery (w=800, q=80).
 *
 * Usage example:
 *   import { photos } from "@/lib/images";
 *   <PhotoCard src={photos.teamMeeting} alt="Team meeting" />
 */

export const photos = {
  // Team & Office
  teamMeeting:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  officeModern:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  teamCollaboration:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  consultantWorking:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",

  // Industries
  university:
    "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
  governmentBuilding:
    "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80",
  hospital:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  restaurant:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",

  // Technology
  serverRoom:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  cloudComputing:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  dashboard:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  aiTech:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",

  // Abstract/Patterns
  abstractBlue:
    "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80",
  networkLines:
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",

  // People
  businessWoman:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  businessMan:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  diverseTeam:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  presentationRoom:
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
} as const;

export type PhotoKey = keyof typeof photos;
