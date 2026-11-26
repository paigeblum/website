// All portfolio content lives here. Edit text, swap media, reorder or delete
// projects in this file and the pages update. Nothing unreleased goes in here.
//
// Every project is one page at /portfolio/<slug>. The first project in
// `projects` is also what /portfolio itself shows.
//
// Writing rule for every project: someone who has never heard of it, and does
// not work in the field, should understand what it is from the first sentence
// (`lede`), know what to look at from the caption under each image or clip,
// and never have to look up a term (define jargon in place, in brackets).

export type Media = {
  type: "video" | "image";
  src: string; // path under /public
  alt: string;
  poster?: string; // still frame shown before a video loads
  width?: number; // images need their pixel size so they keep their proportions
  height?: number;
};

export type Figure = {
  media: Media;
  caption: string; // say what to look at, not just what it is
};

export type Project = {
  slug: string;
  name: string;
  desc: string; // a few plain words, shown under the name in the sidebar
  kind: string; // small label above the title: where and when
  lede: string; // one plain sentence: what is this?
  hero: Figure;
  rows: { label: string; text: string }[];
  more?: Figure[]; // extra images or clips, shown below the rows
  radiance?: { caption: string }; // shows the live Radiance sketch after `more`
  links?: { label: string; href: string }[];
  thumb: { src: string; fit?: "contain" }; // small image for the sidebar
};

export const groups: { label: string; slugs: string[] }[] = [
  { label: "At Infinity Ward", slugs: ["dogs", "vehicles", "foot-phase"] },
  { label: "Prototypes", slugs: ["card-companion", "dancing-leg"] },
  { label: "Research", slugs: ["steerable-images", "lyric-rnns"] },
  { label: "Art", slugs: ["art"] },
];

// Order here is the order of the "Next" button.
export const projects: Project[] = [
  {
    slug: "dogs",
    name: "Dogs",
    desc: "Dog AI, Call of Duty",
    kind: "Call of Duty: Modern Warfare 4 / Campaign and DMZ / 2026",
    lede: "Behavior AI for the dogs in Call of Duty: the companion who leads you, the attack dogs, and the robot dogs.",
    thumb: { src: "/portfolio/thumbs/dogs.jpg" },
    hero: {
      media: {
        type: "video",
        src: "/portfolio/rex-dmz.mp4",
        poster: "/portfolio/rex-dmz-poster.jpg",
        alt: "Rex the dog runs ahead of the player through a forest, across a river, to a crashed aircraft",
      },
      caption: "In this clip: Rex runs ahead, then waits when the player falls behind.",
    },
    rows: [
      // TODO(paige): add "What I built" lines for the attack dogs and K9 robots, and "The hard part".
      {
        label: "What I built",
        text: "I worked on making Rex's turns believable and keeping him in step with the player.",
      },
      {
        label: "Why it matters",
        text: "Rex opens DMZ and leads players through the story that sets up the whole mode, so the story depends on the player getting attached to him in the first few minutes. Small details do that work: a dog who notices when you fall behind and waits.",
      },
      {
        label: "Built with",
        text: "C++ (the game engine's language), behavior trees (the logic that decides what a character does next), and animation state machines (how it switches between movements).",
      },
    ],
    more: [
      {
        media: {
          type: "video",
          src: "/portfolio/dogs-hired-gun.mp4",
          poster: "/portfolio/dogs-hired-gun-poster.jpg",
          alt: "An attack dog lunges at the player, is knocked away, gets back up and comes again, in the campaign mission Hired Gun",
        },
        caption:
          "Attack dogs (campaign mission Hired Gun): they patrol, investigate, pursue and attack. When one lunges, the player can fight it off with a well-timed button press, and the dog backs off to give them a moment before coming again.",
      },
      {
        media: {
          type: "video",
          src: "/portfolio/k9-robots-dmz.mp4",
          poster: "/portfolio/k9-robots-dmz-poster.jpg",
          alt: "K9 robot dogs charge across a shopping mall atrium toward the player, and one detonates",
        },
        caption:
          "K9 robots (DMZ): explosive robot dogs on the same base as the attack dogs, retuned to move like machines, more direct, with no hesitation and no backing off.",
      },
    ],
  },
  {
    slug: "vehicles",
    name: "AI and vehicles",
    desc: "Vehicle AI, Call of Duty",
    kind: "Call of Duty: Modern Warfare 4 / Campaign and DMZ / 2026",
    lede: "AI that lets enemy soldiers drive, ride and fight from more than 20 vehicles, helicopters included.",
    thumb: { src: "/portfolio/thumbs/vehicles.jpg" },
    hero: {
      media: {
        type: "video",
        src: "/portfolio/vehicles-dmz.mp4",
        poster: "/portfolio/vehicles-dmz-poster.jpg",
        alt: "An enemy vehicle pulls up on a road and soldiers jump out and spread into cover",
      },
      caption: "In this clip: a vehicle pulls up, and the soldiers jump out and spread into cover.",
    },
    rows: [
      // TODO(paige): add "The hard part".
      {
        label: "What I built",
        text: "I moved the system from GSC to C++ for performance, and rebuilt how soldiers decide to switch into a lean-out seat to shoot and how they get out again. I also made their aim smoother against moving targets, worked on driving, obstacle avoidance and when soldiers get in and out, and added a feature that lets them jump out before the vehicle stops.",
      },
      {
        label: "Scale",
        text: "More than 20 vehicles, each with its own design and animations. The system runs through the whole game: DMZ's convoys and patrols, and many campaign missions, including one that opens with a firefight in traffic.",
      },
      {
        label: "Built with",
        text: "C++, and GSC (Call of Duty's scripting language, which the system started in).",
      },
    ],
  },
  {
    slug: "foot-phase",
    name: "Foot phase tool",
    desc: "Animation tool",
    kind: "Infinity Ward / Animation tooling / Python",
    lede: "An animation tool that finds the key poses in a walk or run, so animators don't have to mark them by hand.",
    thumb: { src: "/portfolio/foot-phase-diagram.svg", fit: "contain" },
    hero: {
      media: {
        type: "image",
        src: "/portfolio/foot-phase-diagram.svg",
        alt: "Diagram: the distance between the feet over one step forms a wave; its crossings mark each foot passing and its peaks mark each foot landing",
        width: 1600,
        height: 900,
      },
      caption:
        "The distance between the feet over one step forms a wave. Where it crosses the middle, one foot passes the other. At the peaks, a foot lands.",
    },
    rows: [
      {
        label: "The problem",
        text: "Walk and run animations stay in sync by marking four poses in every step: each foot landing and each foot passing the other. Animators placed these marks by hand, and the old automatic tool broke on noisy motion capture.",
      },
      {
        label: "What I built",
        text: "I rebuilt it to treat the distance between the feet as a wave, smooth out the noise, and read the poses from the wave's peaks and crossings.",
      },
      {
        label: "Why animators trust it",
        text: "It takes over the tedious marking without taking control away. There's no training data and no black box, so animators can see why every mark lands where it does and fix any they disagree with.",
      },
      {
        label: "Built with",
        text: "Python, and an RBF kernel (a smoothing technique borrowed from machine learning).",
      },
    ],
  },
  {
    slug: "card-companion",
    name: "Card companion",
    desc: "Picture-card companion",
    kind: "Prototype / Designed with Claire Niehaus",
    lede: "A practice partner for children who communicate with picture cards, designed with a USC student who studies autism therapy.",
    thumb: { src: "/portfolio/thumbs/card-companion.jpg" },
    hero: {
      media: {
        type: "image",
        src: "/portfolio/card-companion.jpg",
        alt: "A hand-drawn pink character waving as big blue bubbles float up, with the caption: You want big blue bubbles!",
        width: 1200,
        height: 760,
      },
      caption: "The character answers a “bubbles” card with “You want big blue bubbles!”",
    },
    rows: [
      {
        label: "How it works",
        text: "A therapist sets it up, the child holds a card up to the camera, and a character I drew responds. Under the hood it's a small image classifier that learns each child's own cards, plus hand-designed behavior like the AI I build for game characters.",
      },
      {
        label: "Designed for safety",
        text: "No chatbot. Everything it can say is on a short list the therapist can read and edit, “no” always stops it, and video never leaves the device.",
      },
      {
        label: "What it's for",
        text: "It gives kids extra practice between sessions and reports back to the therapist, who stays in charge.",
      },
      {
        label: "Built with",
        text: "JavaScript, and a small image classifier.",
      },
    ],
    links: [
      { label: "Try the prototype", href: "/portfolio/card-companion.html" },
      { label: "Print the test cards", href: "/portfolio/card-companion-cards.pdf" },
    ],
  },
  {
    slug: "dancing-leg",
    name: "Dancing leg",
    desc: "Predicting a missing leg",
    kind: "In progress / Motion matching / Python",
    lede: "A system that predicts how a missing lower leg would move, using only the rest of a dancer's body.",
    thumb: { src: "/portfolio/thumbs/dancing-leg.jpg" },
    hero: {
      media: {
        type: "image",
        src: "/portfolio/dancing-leg.gif",
        alt: "Animated skeleton dancing, seen from the front and side, with the real lower leg in black and three predicted versions in color",
        width: 700,
        height: 440,
      },
      caption: "The real lower leg is black. The three colored legs are the predictions.",
    },
    rows: [
      // TODO(paige): add "Where it stands" once there is a result to describe.
      {
        label: "What I'm building",
        text: "Predicting what a missing lower leg would do during dance, from the motion of the rest of the body.",
      },
      {
        label: "Built with",
        text: "Python, and motion matching (searching recorded motion for the closest match).",
      },
    ],
  },
  {
    slug: "steerable-images",
    name: "Steerable images",
    desc: "AI image research",
    kind: "Senior capstone research / Colgate University / 2024",
    lede: "Research on how easily an AI image generator can be steered away from a starting image.",
    thumb: { src: "/portfolio/thumbs/steerable-images.jpg" },
    hero: {
      media: {
        type: "image",
        src: "/portfolio/thesis-poster.jpg",
        alt: "Research poster: Exploring Generative AI, What Makes an Image Steerable?",
        width: 2400,
        height: 1953,
      },
      caption: "The research poster for the project.",
    },
    rows: [
      {
        label: "What we found",
        text: "We used CNN features and linear regression to predict how steerable an image is. The strongest predictor was whether the image was real or AI-generated. Generated images behave differently.",
      },
      {
        label: "Why it matters",
        text: "More of the images online are generated every year, so models increasingly learn from, and get steered by, their own output.",
      },
      {
        label: "Built with",
        text: "PyTorch, CNN features (what an image-recognition network sees), and linear regression. With Emily Kociubes and Nyah Harrison.",
      },
    ],
    links: [
      { label: "Read the paper", href: "/thesis.pdf" },
      { label: "See the poster", href: "/thesis-poster.pptx" },
    ],
  },
  {
    slug: "lyric-rnns",
    name: "Lyric RNNs",
    desc: "Neural nets writing lyrics",
    kind: "TensorFlow / 2023",
    lede: "An experiment training neural networks to write song lyrics, and watching for the moment they start copying.",
    thumb: { src: "/portfolio/thumbs/lyric-rnns.jpg" },
    hero: {
      media: {
        type: "image",
        src: "/portfolio/lyric-loss.png",
        alt: "Training and validation loss over 50 epochs for single-direction and bidirectional models on rock lyrics",
        width: 1400,
        height: 568,
      },
      caption:
        "Training loss keeps falling, but validation loss turns upward after about 25 epochs, the point where the models start memorizing.",
    },
    rows: [
      {
        label: "What I did",
        text: "Trained single-direction and bidirectional networks on pop and rock lyrics, to compare how genre and training length change what they write.",
      },
      {
        label: "What happened",
        text: "After about 25 epochs (passes through the training lyrics), the models stop learning how lyrics work and start memorizing the ones they've seen.",
      },
      {
        label: "The bigger question",
        text: "When a generative model writes, how much is it making and how much is it copying the people it learned from?",
      },
      {
        label: "Built with",
        text: "TensorFlow, and LSTM networks (neural networks that read text in order).",
      },
    ],
    links: [
      {
        label: "Read the article",
        href: "https://medium.com/@paigemblum/lyric-generation-with-recurrent-neural-networks-dfedfc0b7d33",
      },
      { label: "See the code", href: "https://github.com/gillianfeder/SongLyricsML" },
    ],
  },
  {
    slug: "art",
    name: "Art",
    desc: "Watercolor, glass, code",
    kind: "Watercolor / Stained glass / Generative",
    lede: "Watercolors, stained glass, and generative art made with code.",
    thumb: { src: "/portfolio/thumbs/art.jpg" },
    hero: {
      media: {
        type: "image",
        src: "/portfolio/art/watercolor-sea.jpg",
        alt: "Watercolor of a pink sea creature covered in white dots, with a small orange fish, against blue and violet water",
        width: 2000,
        height: 1400,
      },
      caption: "Watercolor and ink.",
    },
    rows: [
      {
        label: "Mediums",
        text: "Watercolor and ink, stained glass, and generative art written in p5.js (a JavaScript drawing library).",
      },
    ],
    more: [
      {
        media: {
          type: "image",
          src: "/portfolio/art/watercolor-profile.jpg",
          alt: "Watercolor and ink of a blue figure in profile with a many-colored jester crown, facing a rainbow-washed form with a small blue shape between them",
          width: 1700,
          height: 884,
        },
        caption: "Watercolor and ink.",
      },
      {
        media: {
          type: "image",
          src: "/portfolio/art/stained-glass-flowers.jpg",
          alt: "Stained glass panel of red and orange flowers on green glass",
          width: 1960,
          height: 1545,
        },
        caption: "Stained glass.",
      },
      {
        media: {
          type: "image",
          src: "/portfolio/art/stained-glass-geometric.jpg",
          alt: "Square stained glass panel with a pink pinwheel flower around a blue center, inside a blue diamond, set in a yellow circle",
          width: 1780,
          height: 1780,
        },
        caption: "Stained glass.",
      },
      {
        media: {
          type: "image",
          src: "/portfolio/art/stained-glass-sun-valley.jpg",
          alt: "Stained glass panel of a sun over a green ski mountain with a Sun Valley banner",
          width: 1976,
          height: 1318,
        },
        caption: "Stained glass.",
      },
    ],
    radiance: { caption: "Radiance. Generative art, p5.js. It draws itself, and you can pause or restart it." },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNeighbors(slug: string): { index: number; next: Project } {
  const index = Math.max(0, projects.findIndex((p) => p.slug === slug));
  return { index, next: projects[(index + 1) % projects.length] };
}

// Used by the home page Art section (components/Art.tsx).
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
