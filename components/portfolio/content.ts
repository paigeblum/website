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
  span?: boolean; // show across the full width in the extra-figures grid
};

export type Project = {
  slug: string;
  name: string;
  desc: string; // a few plain words, shown under the name in the sidebar
  kind: string; // small label above the title: where and when
  lede: string; // one plain sentence: what is this?
  hero?: Figure; // omitted when the page is a `gallery`
  tags?: string[]; // short chips shown at a glance
  rows: { label: string; text: string; figure?: Figure }[]; // a figure shows right under its row
  gallery?: Figure[][]; // rows of pictures that share one height; replaces hero, tags and rows
  more?: Figure[]; // extra images or clips, shown below the rows
  radiance?: { caption: string }; // shows the live Radiance sketch after `more`
  links?: { label: string; href: string }[];
};

export const groups: { label: string; slugs: string[] }[] = [
  { label: "At Infinity Ward", slugs: ["quadrupeds", "vehicles", "foot-phase"] },
  { label: "Prototypes", slugs: ["card-companion", "dancing-leg"] },
  { label: "Research", slugs: ["steerable-images", "lyric-rnns"] },
  { label: "Art", slugs: ["art"] },
];

// Order here is the order of the "Next" button.
export const projects: Project[] = [
  {
    slug: "quadrupeds",
    tags: ["C++", "Behavior trees", "Animation state machines"],
    name: "Quadrupeds",
    desc: "Four-legged AI, Call of Duty",
    kind: "Call of Duty: Modern Warfare 4 / Campaign and DMZ / 2026",
    lede: "Behavior AI for the four-legged characters in Call of Duty (quadrupeds): the companion dog who leads you, the attack dogs, and the robot dogs.",
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
    tags: ["C++", "GSC scripting"],
    name: "AI and vehicles",
    desc: "Vehicle AI, Call of Duty",
    kind: "Call of Duty: Modern Warfare 4 / Campaign and DMZ / 2026",
    lede: "AI that lets enemy soldiers drive, ride and fight from more than 20 vehicles, helicopters included.",
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
    tags: ["Python", "RBF kernel"],
    name: "Foot phase tool",
    desc: "Animation tool",
    kind: "Infinity Ward / Animation tooling / Python",
    lede: "An animation tool that finds the key poses in a walk or run, so animators don't have to mark them by hand.",
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
    tags: ["JavaScript", "TensorFlow.js", "Image classifier"],
    name: "Card companion",
    desc: "Picture-card companion",
    kind: "Prototype / Designed with Claire Niehaus",
    lede: "A practice partner for children who communicate with picture cards, designed with a USC student who studies autism therapy.",
    hero: {
      media: {
        type: "video",
        src: "/portfolio/card-companion-demo.mp4",
        poster: "/portfolio/card-companion-demo-poster.jpg",
        alt: "Screen recording of the Card Companion: teaching it the child's cards, holding up a bubbles card to the camera, the pink character answering, and the therapist's session summary",
      },
      caption:
        "In this video: setup teaches it a child's own cards, a card held to the camera gets a response from the character, and the therapist's session summary follows.",
    },
    rows: [
      {
        label: "The starting point",
        text: "Many children on the autism spectrum don't use spoken language, and a common way to give them a voice is PECS, the Picture Exchange Communication System. The child hands a picture card of something they want to another person, who responds right away. It was developed in 1985 at the Delaware Autism Program, and it matters because the child is the one who starts the conversation, which earlier methods often didn't ask of them. I wanted to build a way for a child to practice that exchange between sessions with a therapist.",
      },
      {
        label: "Who I designed with",
        text: "I'm a game AI engineer, and I came to this knowing nothing about autism therapy. My friend Claire Niehaus, who is studying autism-related therapy at USC, became my guide. I asked her the questions I would have gotten wrong alone, like what kind of movement a child expects back when they present a card. Her answers changed the design in four ways.",
      },
      {
        label: "Every child is different",
        text: "Claire told me that every child needs and wants something different, and that the first step of the process is meeting the child and putting together a basic set of cards. So I made everything customizable per child. A therapist or parent fills in a short profile (the child's name, real items to match, how much the character moves, the pace), and every answer changes how the companion behaves. The cards it recognizes are the child's own.",
      },
      {
        label: "Sound is a choice",
        text: "She also told me that some children respond to sound and others don't. I added a sound setting with three levels (off, soft or normal), and with sound off the words appear on screen and music is shown as notes.",
      },
      {
        label: "A character made for them",
        text: "Claire told me which shapes children tend to gravitate toward, and that guided how I drew the character.",
        figure: {
          media: {
            type: "image",
            src: "/portfolio/card-companion.jpg",
            alt: "A hand-drawn pink character waving as big blue bubbles float up, with the caption: You want big blue bubbles!",
            width: 1200,
            height: 760,
          },
          caption: "The character answers a “bubbles” card with “You want big blue bubbles!”",
        },
      },
      {
        label: "Start with first words",
        text: "My first prototype included words like \"yes\". Claire explained that isn't part of the first step of training, and that the tool should help children practice their first words rather than teach anything complex from the start. I narrowed it to simple first cards: bubbles, music, no, help and dog.",
      },
      {
        label: "How it works",
        text: "In a short guided setup, a few seconds of video teaches it each of the child's own cards. A small image recognizer (MobileNet) turns every camera frame into a set of numbers, and a nearest-neighbor classifier (it compares what it sees to the examples it was taught) decides which card is being held. It also learns what \"no card\" looks like, so it only responds when a card is held still for about a second and it is at least 80% sure. The response itself comes from hand-designed behavior, the same kind of character AI I build for games, so every reaction is predictable.",
      },
      {
        label: "Designed for safety",
        text: "Because the user is a child, I decided what it must never do. It is not a chatbot and nothing it says is generated: it can only say what is on a short Responses list that the therapist can read and edit. It never goes online after setup, because the vision model downloads once and then runs on the device. It never stores or sends video. It never prompts or pressures the child and waits for them to start, and the word \"no\" always stops everything instantly. A grown-up brings the real items and the therapist reads the session summary, so it supports the people in a child's life and does not replace them.",
      },
      {
        label: "What happened",
        text: "Claire showed it to a child, who responded well. They engaged with it and enjoyed presenting cards.",
      },
      {
        label: "Built with",
        text: "JavaScript, TensorFlow.js, MobileNet (a small image-recognition network) and a nearest-neighbor classifier. Card pictures are from MyPECS.",
      },
    ],
    links: [
      { label: "Try the prototype", href: "/portfolio/card-companion.html" },
      { label: "Print the test cards", href: "/portfolio/card-companion-cards.pdf" },
    ],
  },
  {
    slug: "dancing-leg",
    tags: ["Python", "Motion matching", "In progress"],
    name: "Dancing leg",
    desc: "Predicting a missing leg",
    kind: "In progress / Motion matching / Python",
    lede: "A system that predicts how a missing lower leg would move, using only the rest of a dancer's body.",
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
    tags: ["PyTorch", "CNN features", "Linear regression"],
    name: "Steerable images",
    desc: "AI image research",
    kind: "Senior capstone research / Colgate University / 2024",
    lede: "Research on how easily an AI image generator can be steered away from a starting image.",
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
    tags: ["TensorFlow", "LSTM"],
    name: "Lyric RNNs",
    desc: "Neural nets writing lyrics",
    kind: "TensorFlow / 2023",
    lede: "An experiment training neural networks to write song lyrics, and watching for the moment they start copying.",
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
    gallery: [
      [
        {
          media: {
            type: "image",
            src: "/portfolio/art/watercolor-sea.jpg",
            alt: "Watercolor of a pink sea creature covered in white dots, with a small orange fish, against blue and violet water",
            width: 2000,
            height: 1400,
          },
          caption: "Watercolor and ink",
        },
        {
          media: {
            type: "image",
            src: "/portfolio/art/watercolor-profile.jpg",
            alt: "Watercolor and ink of a blue figure in profile with a many-colored jester crown, facing a rainbow-washed form",
            width: 1700,
            height: 884,
          },
          caption: "Watercolor and ink",
        },
      ],
      [
        {
          media: {
            type: "image",
            src: "/portfolio/art/stained-glass-leaves.jpg",
            alt: "Stained glass panel of red and orange leaves on green glass, hanging in a sunny window",
            width: 1024,
            height: 768,
          },
          caption: "Stained glass",
        },
        {
          media: {
            type: "image",
            src: "/portfolio/art/stained-glass-leaves-design.jpg",
            alt: "Screenshot of Glass Eye 2000 design software showing the leaves panel with every glass piece numbered",
            width: 1024,
            height: 768,
          },
          caption: "Stained glass, in design software",
        },
      ],
      [
        {
          media: {
            type: "image",
            src: "/portfolio/art/stained-glass-sun-valley.jpg",
            alt: "Stained glass panel of a sun over a green ski mountain with a Sun Valley banner, hanging in a snowy window",
            width: 1024,
            height: 768,
          },
          caption: "Stained glass",
        },
        {
          media: {
            type: "image",
            src: "/portfolio/art/stained-glass-sun-valley-angle.jpg",
            alt: "The Sun Valley stained glass panel seen from the side on a windowsill, showing its red glass frame",
            width: 768,
            height: 1024,
          },
          caption: "Stained glass",
        },
      ],
      [
        {
          media: {
            type: "image",
            src: "/portfolio/art/stained-glass-geometric.jpg",
            alt: "Square stained glass panel with a pink pinwheel flower inside a blue diamond, set in a yellow circle",
            width: 768,
            height: 1024,
          },
          caption: "Stained glass",
        },
        {
          media: {
            type: "image",
            src: "/portfolio/art/stained-glass-green-circle.jpg",
            alt: "Round stained glass piece in shades of green with one clear strip, hanging in front of a blue sky",
            width: 768,
            height: 1024,
          },
          caption: "Stained glass",
        },
      ],
    ],
    rows: [],
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
    src: "/portfolio/art/stained-glass-leaves.jpg",
    alt: "Stained glass panel of red and orange leaves on green glass",
    medium: "Stained glass",
    width: 1024,
    height: 768,
    row: 2,
  },
  {
    src: "/portfolio/art/stained-glass-sun-valley.jpg",
    alt: "Stained glass panel of a sun over a green ski mountain with a Sun Valley banner",
    medium: "Stained glass",
    width: 1024,
    height: 768,
    row: 2,
  },
  {
    src: "/portfolio/art/stained-glass-geometric.jpg",
    alt: "Square stained glass panel with a pink pinwheel flower inside a blue diamond",
    medium: "Stained glass",
    width: 768,
    height: 1024,
    row: 3,
  },
  {
    src: "/portfolio/art/stained-glass-green-circle.jpg",
    alt: "Round stained glass piece in shades of green with one clear strip",
    medium: "Stained glass",
    width: 768,
    height: 1024,
    row: 3,
  },
];
