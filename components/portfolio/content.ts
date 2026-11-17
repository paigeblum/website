// All portfolio content lives here. Edit text, swap media, reorder or delete
// entries in this file and the page updates. Nothing unreleased goes in here.

export type Piece = {
  title: string;
  meta: string; // short facts: role, tools, year
  description: string;
  // Path under /public (e.g. "/portfolio/dogs.mp4") or leave undefined to show a placeholder.
  // Images need width and height (in pixels) so they keep their own proportions.
  media?: { type: "video" | "image"; src: string; alt: string; width?: number; height?: number };
  placeholder?: string; // what should go here, shown until media is added
  links?: { label: string; href: string }[];
  status?: string; // e.g. "In progress"
};

export type Group = {
  id: string;
  title: string;
  note?: string;
  pieces: Piece[];
};

export const groups: Group[] = [
  {
    id: "mw4",
    title: "Call of Duty: Modern Warfare 4",
    note: "AI Gameplay Engineer, Infinity Ward. Campaign and DMZ. 2026.",
    pieces: [
      {
        title: "Dogs and K9 robots",
        meta: "Behavior, locomotion, attacks / C++",
        description:
          "AI for the attack dogs in the campaign and the K9 robots in DMZ. Both are built on one quadruped base, each with its own behavior, animation and movement. Also Rex, the tracker dog in the DMZ opening mission.",
        placeholder: "Clip: a dog and a K9 robot, recorded from the shipped game",
      },
      {
        title: "AI and vehicles",
        meta: "Driving, entering, exiting / C++",
        description:
          "AI that drives vehicles, and soldiers that get in, ride and get out of them. Used by the patrols and convoys that move through the DMZ map.",
        placeholder: "Clip: a patrol pulling up and soldiers dismounting",
      },
      {
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
        meta: "Senior thesis, Colgate University / With Emily Kociubes and Nyah Harrison / PyTorch / 2024",
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
          { label: "Read thesis", href: "/thesis.pdf" },
          { label: "Poster", href: "/thesis-poster.pptx" },
        ],
      },
      {
        title: "Lyric generation with RNNs",
        meta: "LSTM / TensorFlow / 2023",
        description:
          "LSTM models trained on pop and rock lyrics, comparing how genre and training length change what they write.",
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
        placeholder: "Clip or interactive demo: predicted leg next to the original motion",
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

// wide: true gives a piece its own full-width row.
export type Artwork = { src: string; alt: string; medium: string; title?: string; width: number; height: number; wide?: boolean };

// Shown without captions for now. Title and medium are kept here for later.
export const artworks: Artwork[] = [
  {
    src: "/portfolio/art/watercolor-sea.jpg",
    alt: "Watercolor of a pink sea creature covered in white dots, with a small orange fish, against blue and violet water",
    medium: "Watercolor and ink",
    width: 2000,
    height: 1400,
  },
  {
    src: "/portfolio/art/stained-glass-flowers.jpg",
    alt: "Stained glass panel of red and orange flowers on green glass",
    medium: "Stained glass",
    width: 1960,
    height: 1545,
  },
  {
    src: "/portfolio/art/stained-glass-sun-valley.jpg",
    alt: "Stained glass panel of a sun over a green ski mountain with a Sun Valley banner",
    medium: "Stained glass",
    width: 1976,
    height: 1318,
  },
  {
    src: "/portfolio/art/sketchbook-mixed-media.jpg",
    alt: "Sketchbook spread with painted fruit, a bird on collaged dictionary pages, and looping colored lines",
    medium: "Mixed media, sketchbook",
    width: 1910,
    height: 1408,
  },
  {
    src: "/portfolio/art/watercolor-profile.jpg",
    alt: "Watercolor and ink of a blue figure in profile with a many-colored jester crown, facing a rainbow-washed form with a small blue shape between them",
    medium: "Watercolor and ink",
    width: 1700,
    height: 884,
    wide: true,
  },
];
