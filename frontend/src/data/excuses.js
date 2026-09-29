export const SITUATIONS = [
  "I'm late",
  "Can't make it",
  "Missed a deadline",
  "Didn't reply",
  "Forgot something",
  "Need to leave early"
];

export const TONES = [
  { id: "innocent", label: "😇 Innocent", rotate: "-rotate-1", color: "bg-surface" },
  { id: "casual", label: "🙂 Casual", rotate: "rotate-1", color: "bg-surface" },
  { id: "desperate", label: "😭 Desperate", rotate: "rotate-2", color: "bg-tertiary-container text-on-tertiary-container" },
  { id: "detailed", label: "🧠 Overly Detailed", rotate: "-rotate-2", color: "bg-surface" },
  { id: "unhinged", label: "🤡 Unhinged", rotate: "rotate-1", color: "bg-error-container text-on-error-container" }
];

export const RECIPIENTS = [
  "Friend",
  "Partner",
  "Parent",
  "Teacher",
  "Boss",
  "Coworker",
  "Stranger"
];

export const BELIEVABILITY_LABELS = [
  "🤏 Innocent",
  "Suspicious",
  "Extremely Specific",
  "Absolutely Unhinged 🤯"
];

export const HALL_OF_FAME_EXCUSES = [
  {
    id: 1,
    title: "The pigeon incident",
    description: "A rogue pigeon flew into my living room, stared directly into my soul, and refused to leave until I negotiated with half a bagel.",
    chaos: "⭐ 4.9",
    tag: "Chaos",
    badgeColor: "bg-secondary-container text-on-secondary-container",
    rotate: "rotate-[0.5deg]",
    tapeRotate: "rotate-1"
  },
  {
    id: 2,
    title: "My GPS emotionally betrayed me",
    description: "My navigation rerouted me through an abandoned scenic overlook because it believed I needed a moment of personal reflection.",
    chaos: "🔥 92%",
    tag: "Chaos",
    badgeColor: "bg-primary-fixed text-on-primary-fixed",
    rotate: "rotate-[-1deg]",
    tapeRotate: "-rotate-6"
  },
  {
    id: 3,
    title: "I accidentally entered a different timeline",
    description: "I set three alarms, but daylight saving time occurred in an alternate universe where my phone lives.",
    chaos: "💀 100%",
    tag: "Unhinged",
    badgeColor: "bg-tertiary-container text-on-tertiary-container",
    rotate: "rotate-[1.5deg]",
    tapeRotate: "rotate-3"
  },
  {
    id: 4,
    title: "The neighbor's Wi-Fi funeral",
    description: "My neighbor accidentally unplugged the shared router while hosting a candlelight vigil for their indoor bonsai tree.",
    chaos: "🔥 88%",
    tag: "Specific",
    badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
    rotate: "rotate-[-0.8deg]",
    tapeRotate: "rotate-2"
  }
];

export const CATEGORIES = [
  { id: "late", title: "Running Late", icon: "timer", bg: "bg-secondary-container", hover: "group-hover:bg-secondary-fixed", rotate: "rotate-[-2deg]" },
  { id: "ghosting", title: "Ghosting", icon: "visibility_off", bg: "bg-primary-fixed", hover: "group-hover:bg-primary-fixed-dim", rotate: "rotate-[1deg]" },
  { id: "work", title: "Work", icon: "work", bg: "bg-tertiary-container", hover: "group-hover:bg-tertiary", rotate: "rotate-[-1deg]" },
  { id: "school", title: "School", icon: "school", bg: "bg-secondary-container", hover: "group-hover:bg-secondary-fixed", rotate: "rotate-[2deg]" },
  { id: "social", title: "Social Plans", icon: "groups", bg: "bg-primary-fixed", hover: "group-hover:bg-primary-fixed-dim", rotate: "rotate-[-1.5deg]" },
  { id: "emergency", title: "Emergency", icon: "warning", bg: "bg-error-container", hover: "group-hover:bg-error/30", rotate: "rotate-[1.5deg]" }
];

export const GENERATED_EXCUSES = {
  "I'm late": [
    "I'm so sorry I'm late. I accidentally got on the wrong metro line and ended up two counties over.",
    "My shoelace snapped in a tragic double-knot disaster that required emergency scissors and a deep breath.",
    "A small turtle was crossing the driveway and personal morals prohibited me from reversing without escorting it.",
    "My cat fell asleep on my laptop power cord with such peaceful dignity that moving her felt illegal."
  ],
  "Can't make it": [
    "Something sudden came up that requires my immediate and undivided existential presence.",
    "My key got stuck in the front door lock in a very specific 47-degree angle that a locksmith is currently studying.",
    "I have been afflicted by an unexpected stomach revolt after consuming suspicious leftovers.",
    "A rogue plumbing incident in my apartment unit has temporarily turned my bathroom into a decorative fountain."
  ],
  "Missed a deadline": [
    "My file corrupted during export and the recovery process took 4 hours of intense terminal incantations.",
    "My Wi-Fi decided to take a spontaneous spiritual sabbatical right as the upload hit 99%.",
    "I double-checked the timezone conversion and realized I was operating on UTC+13 time.",
    "An automatic Windows update initiated without consent and held my machine hostage for eternity."
  ],
  "Didn't reply": [
    "I typed out a full, thoughtful reply in my head and genuinely believed I had already sent it.",
    "My phone slipped between the sofa cushions and entered an alternate dimensional rift for 18 hours.",
    "My notification settings decided to mute all incoming transmissions during an impromptu digital detox.",
    "I opened your message while walking, got distracted by an aggressive squirrel, and completely forgot."
  ],
  "Forgot something": [
    "I placed it in a special spot so I wouldn't lose it, and that spot was so secure that even I cannot find it.",
    "It vanished from my bag like a magician's coin; I am currently launching a formal internal investigation.",
    "My morning coffee failed to kick in until 11:30 AM, rendering my short-term memory completely decorative.",
    "I had it in my hands 4 minutes ago, but physics temporarily malfunctioned."
  ],
  "Need to leave early": [
    "My landlord scheduled an unannounced water main inspection and warned of impending structural dampness.",
    "A courier just texted that a temperature-sensitive package requires an immediate signature.",
    "My pet sitter just sent a photo with zero context and two exclamation points.",
    "I have an immovable dentist follow-up that was rescheduled three months ago."
  ]
};

export const CHAOS_EXCUSES = [
  "I’m so sorry I’m late. I accidentally got on the wrong metro and ended up assisting a municipal street magician.",
  "My roomba escaped out the front door and led the neighborhood watch on a 45-minute low-speed pursuit.",
  "I attempted to parallel park, panicked, and drove to a neighboring zip code to regroup emotionally.",
  "A murder of crows took offense to my coat color and held an aerial demonstration outside my driveway.",
  "My microwave made a noise that sounded like dial-up internet and I had to supervise it until cooled.",
  "I accidentally locked myself inside my own balcony and had to signal the postal carrier with a bath towel."
];
