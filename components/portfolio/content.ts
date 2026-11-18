// All portfolio content lives here. Edit text, swap media, reorder or delete
// entries in this file and the page updates. Nothing unreleased goes in here.

export type Piece = {
  title: string;
  meta: string; // short facts: role, tools, year
  description: string;
  // Path under /public (e.g. "/portfolio/dogs.mp4") or leave undefined to show a placeholder.
  // Images need width and height (in pixels) so they keep their own proportions.
  // For "youtube", src is the video ID. start and end (in seconds) pick the segment that plays.
  media?: {
    type: "video" | "image" | "youtube";
    src: string;
    alt: string;
    width?: number;
    height?: number;
    start?: number;
    end?: number;
    poster?: string; // still frame shown before a video loads
  };
  placeholder?: string; // a note on what media to add. Not shown on the page.
  links?: { label: string; href: string }[];
  status?: string; // e.g. "In progress"
  hidden?: boolean; // kept here for later (e.g. a case study page) but not shown
};

export type Group = {
  id: string;
  title: string;
  note?: string;
  also?: string; // one line under the section, for work without its own entry
  pieces: Piece[];
};

export const groups: Group[] = [
  {
    id: "mw4",
    title: "Call of Duty: Modern Warfare 4",
    note: "AI Gameplay Engineer, Infinity Ward. Campaign and DMZ. 2026.",
    also: "Also built: battle chatter between soldiers.",
    pieces: [
      {
        title: "Rex",
        meta: "Companion behavior / C++",
        description:
          "The dog who opens DMZ. In the first mission the player follows Rex as he runs ahead through the forest, crosses the river and leads them to the crash site.",
        media: {
          type: "video",
          src: "/portfolio/rex-dmz.mp4",
          poster: "/portfolio/rex-dmz-poster.jpg",
          alt: "Rex the dog runs ahead of the player through a forest, across a river, to a crashed aircraft",
        },
      },
      {
        title: "Attack dogs",
        meta: "Behavior, locomotion, attacks / C++",
        description:
          "AI for the attack dogs in the campaign. They run on a quadruped base shared with the K9 robots, each with its own behavior, animation and movement.",
        media: {
          type: "video",
          src: "/portfolio/dogs-hired-gun.mp4",
          poster: "/portfolio/dogs-hired-gun-poster.jpg",
          alt: "An attack dog lunges at the player, is knocked away, gets back up and comes again, in the campaign mission Hired Gun",
        },
      },
      {
        title: "K9 robots",
        meta: "Behavior, locomotion, attacks / C++",
        description:
          "Explosive robot dogs in DMZ that charge the player and self-destruct. Same base as the attack dogs, tuned to move and fight like machines.",
        media: {
          type: "video",
          src: "/portfolio/k9-robots-dmz.mp4",
          poster: "/portfolio/k9-robots-dmz-poster.jpg",
          alt: "K9 robot dogs charge across a shopping mall atrium toward the player, and one detonates",
        },
      },
      {
        title: "Foot phase annotator",
        meta: "Animation tooling / Python",
        description:
          "Walk and run animations are kept in sync by marking four poses in every step: each foot landing and each foot passing the other. Animators placed these marks by hand, and the old automatic tool broke on noisy motion capture. I rebuilt it to treat the distance between the feet as a wave, smooth out the noise, and read the poses from its peaks and crossings. It now marks most cycles on its own, more accurately than the tool it replaced.",
        media: {
          type: "image",
          src: "/portfolio/foot-phase-diagram.svg",
          alt: "Diagram: the distance between the feet over one step forms a wave; its crossings mark each foot passing and its peaks mark each foot landing",
          width: 1600,
          height: 900,
        },
      },
      {
        title: "AI and vehicles",
        meta: "Driving, seating, entering, exiting / C++",
        description:
          "AI that drives, rides and fights from vehicles, used by the patrols and convoys that move through DMZ. I also refactored the system that moves soldiers between seats.",
        media: {
          type: "video",
          src: "/portfolio/vehicles-dmz.mp4",
          poster: "/portfolio/vehicles-dmz-poster.jpg",
          alt: "An enemy vehicle pulls up on a road and soldiers jump out and spread into cover",
        },
      },
      {
        hidden: true,
        title: "Battle chatter",
        meta: "Dialogue system / C++",
        description:
          "Soldiers call out to each other in combat and answer back, so a squad sounds like it is working together.",
        placeholder: "Clip with audio: a firefight with callouts",
      },
    ],
  },
  {
    id: "research",
    title: "Research",
    pieces: [
      {
        title: "What Makes an Image Steerable?",
        meta: "Senior capstone research, Colgate University / With Emily Kociubes and Nyah Harrison / PyTorch / 2024",
        description:
          "Can you predict how easily a text-to-image model can be steered away from a starting image? CNNs and linear regression on image features, comparing real and AI-generated images.",
        media: {
          type: "image",
          src: "/portfolio/thesis-poster.jpg",
          alt: "Research poster: Exploring Generative AI, What Makes an Image Steerable?",
          width: 2400,
          height: 1953,
        },
        links: [
          { label: "Read paper", href: "/thesis.pdf" },
          { label: "Poster", href: "/thesis-poster.pptx" },
        ],
      },
      {
        title: "Lyric generation with RNNs",
        meta: "LSTM / TensorFlow / 2023",
        description:
          "Single-direction and bidirectional LSTMs trained on pop and rock lyrics, comparing how genre and training length change what they write. Validation loss turns upward after about 25 epochs, where the models begin to overfit.",
        media: {
          type: "image",
          src: "/portfolio/lyric-loss.png",
          alt: "Training and validation loss over 50 epochs for single-direction and bidirectional models on rock lyrics",
          width: 1400,
          height: 568,
        },
        links: [
          {
            label: "Read article",
            href: "https://medium.com/@paigemblum/lyric-generation-with-recurrent-neural-networks-dfedfc0b7d33",
          },
          { label: "Code", href: "https://github.com/gillianfeder/SongLyricsML" },
        ],
      },
    ],
  },
  {
    id: "experiments",
    title: "Experiments",
    pieces: [
      {
        title: "Dancing leg",
        meta: "Motion matching / Python",
        status: "In progress",
        description:
          "Predicting what a missing lower leg would do during dance, from the motion of the rest of the body.",
        media: {
          type: "image",
          src: "/portfolio/dancing-leg.gif",
          alt: "Animated skeleton dancing, seen from the front and side, with the real lower leg in black and three predicted versions in color",
          width: 700,
          height: 440,
        },
      },
      {
        title: "Faces in nature",
        meta: "Computer vision / Python",
        status: "In progress",
        description: "An algorithm that finds faces and human silhouettes in photos of clouds and mountains.",
        placeholder: "Images: photos with the faces it found",
      },
    ],
  },
];

// Pieces with the same row number sit side by side at one shared height.
export type Artwork = {
  src: string;
  alt: string;
  medium: string;
  title?: string;
  width: number;
  height: number;
  row: number;
};

// Shown without captions for now. Title and medium are kept here for later.
export const artworks: Artwork[] = [
  {
    src: "/portfolio/art/watercolor-sea.jpg",
    alt: "Watercolor of a pink sea creature covered in white dots, with a small orange fish, against blue and violet water",
    medium: "Watercolor and ink",
    width: 2000,
    height: 1400,
    row: 1,
  },
  {
    src: "/portfolio/art/watercolor-profile.jpg",
    alt: "Watercolor and ink of a blue figure in profile with a many-colored jester crown, facing a rainbow-washed form with a small blue shape between them",
    medium: "Watercolor and ink",
    width: 1700,
    height: 884,
    row: 1,
  },
  {
    src: "/portfolio/art/stained-glass-flowers.jpg",
    alt: "Stained glass panel of red and orange flowers on green glass",
    medium: "Stained glass",
    width: 1960,
    height: 1545,
    row: 2,
  },
  {
    src: "/portfolio/art/stained-glass-geometric.jpg",
    alt: "Square stained glass panel with a pink pinwheel flower around a blue center, inside a blue diamond, set in a yellow circle",
    medium: "Stained glass",
    width: 1780,
    height: 1780,
    row: 2,
  },
  {
    src: "/portfolio/art/stained-glass-sun-valley.jpg",
    alt: "Stained glass panel of a sun over a green ski mountain with a Sun Valley banner",
    medium: "Stained glass",
    width: 1976,
    height: 1318,
    row: 2,
  },
];
