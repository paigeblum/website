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
    lede: "I built the AI for the dogs and robot dogs in Call of Duty: the companion who leads you, the attackers, and the robots.",
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
      {
        label: "The three dogs",
        text: "Rex is an attack dog we modified to be the player's companion in the opening of DMZ. The robot dogs and the bio dog each had their own designer, and each wanted something different.",
      },
      {
        label: "Where you meet them",
        text: "In the campaign, K9 German Shepherds show up early in Hired Gun and can be sneaked past without a fight. Attack dogs come after you in Defection while you plant explosives at the North Korean airbase, and two more guard the garage near the end of Escape. In DMZ, Rex is with you in the opening mission, and robot dogs charge at players.",
      },
      {
        label: "One system, three dogs",
        text: "Rex, the robot dogs and the bio dog (our base attack dog) each have their own behavior tree (the logic that decides what to do next) and animation set, but all share one animation state machine (the logic that switches between movements). Their attacks differ: robot dogs fire tasers and explode, the campaign's attack dogs perform synced takedowns, and there is also a regular attack that isn't synced. I was the only engineer on the dogs and worked with a different designer on each kind, so the system had to be readable to all of them, and I built it as a base for any four-legged character in future games.",
      },
      {
        label: "The hard part: melee",
        text: "A dog's bite had to start close enough to feel fair, always connect with the player wherever they moved, and still miss if the player maneuvered quickly. My first version used a charge-to-melee state with an animation that plays once, but the distance to cover is different every time. I found it needed a looping animation to fill that gap, then reworked the system to support every attack style.",
      },
      {
        label: "Reuse over rewrite",
        text: "Much of our AI code was written for soldiers, and some of it caused bugs on dogs. We would rather reuse code than rewrite what already exists, so I tracked down those cases and made the dogs share it.",
      },
      {
        label: "Why it matters",
        text: "Rex appears in the first DMZ mission, so a player's attachment to him is part of the story's opening. Small details do that work, like a dog who notices when you fall behind and waits.",
      },
      {
        label: "Built with",
        text: "C++ (the game engine's language), behavior trees, and animation state machines.",
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
    lede: "I own the AI that lets enemy soldiers drive, ride and shoot from more than 20 vehicles, helicopters included.",
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
      {
        label: "What I built",
        text: "In Call of Duty, enemy soldiers drive trucks, ride in them, shoot from them and fly helicopters. I am the engineer who owns the AI behind all of it. I rewrote the core of the system in C++ so it runs faster and is easier to extend, while designers keep working in the game's scripting language (GSC), so I built the tools that let them do that. On top of that I rebuilt how soldiers choose a seat to shoot from and how they get out, made their aim hold steady against moving targets, and added a feature that lets them jump out before the vehicle has stopped.",
      },
      {
        label: "Scale",
        text: "It has to work for more than 20 different vehicles, each built and animated differently. You meet it all over the game: the convoys and patrols in DMZ, and many campaign missions, including one that opens with a firefight in traffic.",
      },
      {
        label: "Making gunners feel alive",
        text: "One problem I fixed myself: in Entrenched, the mission with the trenches, you can see enemy gunners up close. They used to be a still body with a cannon sticking out, which felt uncanny and was hard to read. I built a feature that animates the barrel procedurally and plays specific reactions on the gunner's body, so the gun and the gunner move together. It improved the view from third person and from first person. It took riggers, designers and animators working together to get the animations that suited it.",
      },
      {
        label: "The hands problem",
        text: "A smaller bug, but a visible one: when a turret swung back and forth, the gunner's hands slid off it and left a gap. I fixed it with inverse kinematics, a technique that makes a hand reach a target, so the hands stay on the turret as it moves.",
      },
      {
        label: "Built with",
        text: "C++, and GSC, the scripting language the system started in.",
      },
    ],
  },
  {
    slug: "foot-phase",
    tags: ["Python", "RBF kernel"],
    name: "Foot phase tool",
    desc: "Animation tool",
    kind: "Infinity Ward / Animation tooling / Python",
    lede: "I built a tool that finds the footsteps in a walk or run automatically, so animators no longer mark them by hand.",
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
        text: "To blend one walk or run animation into another smoothly, the game needs to know where the feet are in each step. Every cycle gets four marks: right foot down, left foot down, and each foot passing the other. Animators placed those marks by hand, or relied on an older algorithm that broke whenever the motion data was noisy. I built a tool that finds them automatically.",
      },
      {
        label: "The idea",
        text: "Every walk cycle follows a pattern. The distance between the feet rises and falls like a wave, and its peaks and crossings are the four marks. I kept the old algorithm's starting idea (track the distance between the feet and how fast it changes) and rebuilt everything else.",
      },
      {
        label: "Smoothing the noise",
        text: "Raw motion data is full of tiny bumps, and the old algorithm placed marks on them. I used a smoothing technique from machine learning (a radial basis function) to draw a clean line through the data. Each animation has its own curve, so I wrote a step that picks how wavy the smooth line should be by minimizing its error against the data, to avoid fitting too loosely or too tightly.",
      },
      {
        label: "Better derivatives",
        text: "Some marks were still landing in the wrong place because the slopes of the curve were being calculated with slow hand-written loops. Switching to Python's numerical packages made them far more accurate.",
      },
      {
        label: "Naming each pose",
        text: "Once the marks landed in the right places, the next step was labeling them. A mark that lines up with an inflection point of the foot-position curve is a foot landing, and the slope's direction says which foot. A mark that lines up with an inflection point of the velocity curve is a foot crossing, and the same logic names the foot.",
      },
      {
        label: "What it does for animators",
        text: "Instead of hand-placing notes on thousands of animations, an animator clicks a button, a new track of marks appears in the animation editor, and they adjust any that look off. It is also much more accurate than the algorithm it replaced. Every mark can be traced to a peak or crossing on the curve, so it is easy to see why it landed where it did.",
      },
      {
        label: "Where it stops",
        text: "It works on most animations. Some have a stretch of nearly still, slightly noisy motion at the start or end, which can create false markers. That is rare, and I proposed letting animators drop notes where markers should start and end.",
      },
      {
        label: "Built with",
        text: "Python, an RBF kernel (a smoothing technique from machine learning), and Python's numerical packages.",
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
        text: "Claire was able to watch a child try it, and it was a great experience for them. They smiled and laughed while presenting cards, and afterward went back to practicing with their therapist.",
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
        label: "The question",
        text: "Image generators like DALL-E follow some prompts better than others. Steerability measures how few prompts it takes to get the image you want. We asked whether a model could predict how steerable an image is from the image alone.",
      },
      {
        label: "How we tested it",
        text: "We started from ArtWhisperer, a public dataset of more than 51,000 human attempts to steer an AI image generator toward a target picture. We trained two models on it: linear regression on yes or no features of each image (does it show nature, people, a city), and a convolutional neural network (CNN) that looks at the raw picture, resized to 128 by 128 pixels and trained for 10 epochs.",
      },
      {
        label: "What we found",
        text: "Both models predicted well: the CNN's mean squared error was under 0.0001, and the linear model's was 0.002. The most influential feature was whether an image was real or AI-generated, and the models were least accurate on real images. Our results matched ArtWhisperer's: nature and city images were more steerable (weights of 0.035 and 0.041), and art and fantasy images less (-0.023 and -0.056).",
      },
      {
        label: "Why it matters",
        text: "Understanding which features raise or lower steerability shows where text-to-image models can improve. That can cut the time and resources it takes to produce custom images for advertising, media and art.",
      },
      {
        label: "Honest limits",
        text: "The linear model's R-squared was 0.14, so those yes or no features explain only part of steerability, and we didn't have the time or resources to find out why certain features matter. Next steps: look for other features with a domain expert, add feature extraction inside the CNN, and have people interact with the images to measure their perceptions in real time.",
      },
      {
        label: "How we worked",
        text: "Emily Kociubes, Nyah Harrison and I did all of it together. We would meet up and divide the work, then share our progress and give each other opinions, and spent a lot of time just working through problems in a room together.",
      },
      {
        label: "Built with",
        text: "PyTorch, CNN features (what an image-recognition network sees), and linear regression.",
      },
    ],
    links: [
      { label: "Read the paper", href: "/thesis.pdf" },
      { label: "See the poster", href: "/thesis-poster.pptx" },
    ],
  },
  {
    slug: "lyric-rnns",
    tags: ["Python", "Keras", "Bidirectional LSTM"],
    name: "Lyric RNNs",
    desc: "Neural nets writing lyrics",
    kind: "Course project / Neural networks and deep learning / 2023",
    lede: "Neural networks trained to write song lyrics in the style of pop and progressive rock.",
    hero: {
      media: {
        type: "image",
        src: "/portfolio/lyric-loss.png",
        alt: "Training and validation loss over 50 epochs for single-direction and bidirectional models on rock lyrics",
        width: 1400,
        height: 568,
      },
      caption:
        "Training loss keeps falling in both models, but validation loss turns upward after about 25 epochs, a sign they have started memorizing the training lyrics. We stopped at 25.",
    },
    rows: [
      {
        label: "",
        text: "This was our final project for a deep learning course, built with Gillian Feder and Charlotte Ryan. We love music, and we wanted to see whether a recurrent neural network (a network that remembers the earlier words it has read) could write lyrics in the style of a genre, and what its output would say about that genre.",
      },
      {
        label: "",
        text: "We split a Kaggle dataset of 830 songs into pop and progressive rock. We wanted to generate a whole verse instead of a line or two, so each complete line became one token. That exposed a bug where the last line of one song ran into the first line of the next, which we fixed by adding a line break to a copy of the data.",
      },
      {
        label: "",
        text: "We trained a standard LSTM (a type of recurrent network built to remember across long stretches of text) and a bidirectional LSTM, which also reads the lyrics in reverse. The loss plots favored the bidirectional one. Because validation loss started climbing after about 25 epochs, we cut training to 25 epochs and lowered the batch size to limit overfitting.",
      },
      {
        label: "",
        text: "To write, each model got seed lines, from common lyric openings to the start of a Shakespeare poem to verses from other genres, and predicted the next five words at three temperatures (a setting that lets less likely words in as it rises). The high-temperature output was the most interesting. Some of it rhymed or nearly rhymed. The rock model leaned toward nature words like sun, stars and skylines, along with eyes and time, and the pop model toward more explicit words.",
      },
      {
        label: "",
        text: "Pop had more than 19,000 lines to learn from and rock about 10,000, which may have affected how well each model captured its genre. Next, we wanted to try less structured sequences, train first on a general text dataset, and convert audio to text to build a bigger dataset.",
      },
      {
        label: "Built with",
        text: "Python and Keras, using a standard LSTM and a bidirectional LSTM.",
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
