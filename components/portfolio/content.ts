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
    also: "Also built: battle chatter, where soldiers call out to each other and answer back so a squad sounds like it's working together.",
    pieces: [
      {
        title: "Rex",
        meta: "Companion behavior / C++",
        description:
          "The dog who opens DMZ. He waits for the player, then leads them through the opening story that sets up the whole mode. I worked on making his turns believable and keeping him in step with the player, because the story depends on the player getting attached to him in the first few minutes. Small details do that work: a dog who notices when you fall behind and waits. Getting people attached to an AI character is powerful, and worth being deliberate about.",
        media: {
          type: "video",
          src: "/portfolio/rex-dmz.mp4",
          poster: "/portfolio/rex-dmz-poster.jpg",
          alt: "Rex the dog runs ahead of the player through a forest, across a river, to a crashed aircraft",
        },
      },
      {
        title: "Attack dogs",
        meta: "Animation state machine, behavior tree / C++",
        description:
          "Campaign attack dogs that patrol, investigate, pursue and attack, appearing in several missions including Hired Gun. They run on an animation state machine and a behavior tree, on a quadruped base shared with the K9 robots, and there's a version that works alongside a handler. When a dog lunges, the player can fight it off with a well-timed button press, and the dog backs off to give them a moment before coming again. Pacing that back-and-forth is as much behavior design as combat.",
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
          "Explosive robot dogs in DMZ. Same base as the attack dogs, retuned to move like machines: more direct, no hesitation, no backing off. One behavior system, two very different characters.",
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
          "Walk and run animations stay in sync by marking four poses in every step: each foot landing and each foot passing the other. Animators placed these marks by hand, and the old automatic tool broke on noisy motion capture. I rebuilt it to treat the distance between the feet as a wave, smooth the noise with an RBF kernel (a technique borrowed from machine learning), and read the poses from its peaks and crossings. It takes over the tedious marking without taking control away: there's no training data or black box, so animators can see why every mark lands where it does and fix any they disagree with.",
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
        meta: "Driving, seating, aiming / C++",
        description:
          "AI that drives, rides and fights from more than 20 vehicles, helicopters included, each with its own design and animations. It runs through the whole game: DMZ's convoys and patrols, and many campaign missions, including one that opens with a firefight in traffic. I moved the system from GSC, Call of Duty's scripting language, to C++ for performance, and rebuilt how soldiers decide to switch into a lean-out seat to shoot and how they get out again. I also made their aim smoother against moving targets, worked on driving, obstacle avoidance and when soldiers get in and out, and added a feature that lets them jump out before the vehicle stops.",
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
          "How easily can a text-to-image model be steered away from a starting image? We used CNN features and linear regression to predict it. The strongest predictor was whether the image was real or AI-generated: generated images behave differently, which matters more every year: as more of the images online are generated, models increasingly learn from, and get steered by, their own output.",
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
          "Single-direction and bidirectional LSTMs trained on pop and rock lyrics, comparing how genre and training length change what they write. After about 25 epochs validation loss turns upward: the models stop learning how lyrics work and start memorizing the ones they've seen. A small version of a bigger question: when a generative model writes, how much is it making and how much is it copying the people it learned from?",
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
        title: "Card companion",
        meta: "Interaction design, computer vision / JavaScript",
        status: "Prototype",
        description:
          "A practice partner for kids who communicate with picture cards (PECS). A therapist sets it up, the child holds a card up to the camera, and a character I drew responds. Under the hood it's a small image classifier that learns each child's own cards, plus hand-designed behavior like the AI I build for game characters. No chatbot: everything it can say is on a short list the therapist can read and edit, \"no\" always stops it, and video never leaves the device. It gives kids extra practice between sessions and reports back to the therapist, who stays in charge. Designed with Claire Niehaus, who studies autism therapy at USC.",
        media: {
          type: "image",
          src: "/portfolio/card-companion.jpg",
          alt: "A hand-drawn pink character waving as big blue bubbles float up, with the caption: You want big blue bubbles!",
          width: 1200,
          height: 760,
        },
        links: [
          { label: "Try the prototype", href: "/portfolio/card-companion.html" },
          { label: "Print the test cards", href: "/portfolio/card-companion-cards.pdf" },
        ],
      },
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
        description:
          "An algorithm that finds faces and human silhouettes in photos of clouds and mountains: teaching a computer to see things the way people do, mistakes included.",
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
