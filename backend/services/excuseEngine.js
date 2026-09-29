const SITUATION_TEMPLATES = {
  "I'm late": {
    innocent: [
      "I’m so sorry I’m running behind. There was unexpected track maintenance on the commuter line.",
      "My building's elevator got temporarily paused for an inspection right as I stepped in.",
      "I had to pull over to safely assist an elderly neighbor with their recycling bin."
    ],
    casual: [
      "Running a few minutes behind—traffic turned into a parking lot out of nowhere.",
      "Lost track of time finishing up a quick call, heading your way right now!",
      "Missed the previous green light cycle twice in a row, be there in ten."
    ],
    desperate: [
      "I am so mortified! My alarm decided to update its audio pack silently at 6 AM and went off on mute!",
      "I sprinted out the door but my shoelace snapped in a tragic knot disaster that required emergency scissors!",
      "Please don't be mad—I ran back three times because I swore I left the kitchen stove on!"
    ],
    detailed: [
      "At 8:14 AM my GPS detected an overturned delivery truck on 4th avenue, recalculating my ETA through 14 side streets.",
      "A software glitch on the subway card reader failed three consecutive taps, requiring a manual override by transit staff.",
      "My tire pressure monitoring sensor flashed 18 PSI on the front left wheel, forcing a mandatory detour to the air pump."
    ],
    unhinged: [
      "A rogue pigeon flew into my living room, made aggressive eye contact, and refused to leave until I negotiated with half a bagel.",
      "I accidentally got on an express metro going the exact opposite direction and ended up assisting a municipal street magician.",
      "My roomba escaped through the garage door and led the neighborhood watch on a 45-minute low-speed pursuit."
    ]
  },
  "Can't make it": {
    innocent: [
      "I've come down with a sudden fever and doctor recommends I stay horizontal today.",
      "A family obligation that couldn't be rescheduled just popped up for this afternoon.",
      "I have an urgent appointment that was bumped forward due to a cancellation."
    ],
    casual: [
      "Something last minute came up on my end so I won't be able to make it today.",
      "Completely swamped with a personal errand that ran way overtime, so sorry to miss out!",
      "Not feeling 100% today, going to take it easy and catch you next time."
    ],
    desperate: [
      "I am heartbroken to say this, but my apartment bathroom pipe just developed a violent opinion about my floor!",
      "My key snapped completely inside the deadbolt lock at a 45-degree angle and I am currently trapped inside!",
      "You will not believe the chaos here—the locksmith says it's a 3-hour wait minimum!"
    ],
    detailed: [
      "A microburst localized directly over my block knocked a branch onto the service drop, requiring an electrical utility crew.",
      "My pet ingested approximately 4 square inches of wrapping ribbon, prompting an immediate veterinary triage visit.",
      "I received an emergency recall notice on my vehicle braking actuator that legally invalidates road operation."
    ],
    unhinged: [
      "I accidentally signed an ironclad 24-hour non-disclosure agreement with a mystery film production crew outside my stoop.",
      "A family of territorial raccoons has claimed squatter's rights on my porch and won't permit egress.",
      "I experienced a brief temporal displacement during a nap and woke up convinced it was already Thursday."
    ]
  },
  "Missed a deadline": {
    innocent: [
      "My home internet experienced an ISP outage right as I was packaging the final upload.",
      "The file export took considerably longer than anticipated due to uncompressed rendering assets.",
      "I misunderstood the cut-off timezone as PST instead of EST; sending through immediately!"
    ],
    casual: [
      "Just polishing up the final review points now, sending the deck over in a few moments.",
      "Had to run through one final QA pass to ensure nothing slipped through the cracks.",
      "Almost done—just formatting the summary tables for easier readability."
    ],
    desperate: [
      "My entire system crashed at 98% compilation and the autosave file was held hostage by cloud syncing!",
      "I have been fighting an automatic Windows update that restarted my workstation without consent!",
      "I was working straight through the night and my laptop power brick suddenly emitted a sad electronic spark!"
    ],
    detailed: [
      "A memory leak in node process PID 28419 starved the V8 heap at 3.8GB, corrupting the uncommitted working directory.",
      "The Git remote branch rejected the push due to conflicting detached HEAD history from an earlier rebase.",
      "The cloud object storage bucket responded with 503 Slow Down rate-limiting during the multipart file upload."
    ],
    unhinged: [
      "My cat walked across the keyboard and initiated an unrecoverable format script on the exact folder.",
      "The deadline exists in a parallel timeline where I submitted this three hours ago with honors.",
      "A solar flare triggered a single-event bit flip that inverted the deadline date in my calendar app."
    ]
  },
  "Didn't reply": {
    innocent: [
      "I saw this while running between meetings and completely thought I had hit send!",
      "My notifications were silenced during a doctor's visit and I just opened the app now.",
      "Your message got buried under an influx of two-factor authentication codes."
    ],
    casual: [
      "Hey! Totally thought I replied to this earlier, sorry about that.",
      "Just seeing this now—crazy busy morning on my end!",
      "Phone was on silent in my bag all afternoon, what's up?"
    ],
    desperate: [
      "I typed out a full, three-paragraph, heartfelt response in my head and was 100% convinced you had read it!",
      "My phone slipped between the car seats into the black hole realm where pens and coins go!",
      "I dropped my phone into the laundry basket and only found it during the spin cycle!"
    ],
    detailed: [
      "An automated iOS Focus filter routed all non-VIP notifications to a digest folder scheduled for 10:00 PM.",
      "My carrier conducted cellular tower beam-forming maintenance between 12:00 and 16:30, dropping push tokens.",
      "A messaging app update corrupted the local SQLite cache, requiring a database re-index before messages loaded."
    ],
    unhinged: [
      "I entered a deep meditative trance contemplating your message and lost contact with physical reality.",
      "A crow swooped down and tapped my screen, accidentally archiving our entire chat history.",
      "I was abducted by intrusive thoughts regarding whether reply emojis are legally binding in civil court."
    ]
  },
  "Forgot something": {
    innocent: [
      "I placed it in a special spot so I wouldn't lose it, and that spot was so secure that even I cannot find it.",
      "My morning routine was scrambled due to an unexpected phone call right before leaving.",
      "I had everything packed except the one item sitting right by the front entryway mirror."
    ],
    casual: [
      "Totally slipped my mind while rushing out the door, grabbing it as soon as I get back!",
      "Left it sitting on the counter like a champion, will bring it tomorrow for sure.",
      "Brain momentarily paused while packing my bag, completely my bad!"
    ],
    desperate: [
      "I held it in my hands four minutes before leaving and somehow physics temporarily ceased to operate!",
      "I tore apart my entire living room searching for it and my cat was sitting on it the entire time!",
      "My morning coffee failed to kick in until 11:30 AM, leaving my working memory purely ornamental!"
    ],
    detailed: [
      "The item was placed inside an auxiliary compartment of my backpack that I failed to inspect during transit.",
      "An unexpected change in morning departure schedule by 14 minutes compressed my checklist execution buffer.",
      "I cross-referenced the packing list against yesterday's manifest instead of today's itinerary."
    ],
    unhinged: [
      "It vanished into the Bermuda triangle of my coat pocket, which has developed its own gravitational pull.",
      "I suspect an elf or miniature poltergeist relocated it to test my emotional resilience.",
      "The object achieved sentience and decided it was not emotionally ready to attend today's gathering."
    ]
  },
  "Need to leave early": {
    innocent: [
      "I have an immovable dentist follow-up that was rescheduled three months ago.",
      "A delivery requiring an adult signature is slated to arrive during the upcoming 2-hour window.",
      "I need to assist a family member who has an early medical transport scheduled."
    ],
    casual: [
      "Have a quick personal commitment I need to duck out for shortly, will catch up on email tonight!",
      "Need to head out a bit earlier today to beat some scheduled bridge maintenance traffic.",
      "Wrapping up my part now since I have to step away for a scheduled appointment."
    ],
    desperate: [
      "My landlord just alerted all tenants of an emergency water valve shut-off and impending pipe inspection!",
      "My pet sitter just sent a photo with zero context and two exclamation points, I have to sprint home!",
      "My refrigerator started making a sound like a small jet engine and I cannot leave it unattended!"
    ],
    detailed: [
      "The municipal gas supplier requires home access between 15:00 and 16:30 for mandatory meter calibration.",
      "A smart home leak sensor detected 0.8 liters of standing water near the washing machine sump pump.",
      "A scheduled pharmacy medication refill window closes strictly at 17:00 with zero grace period."
    ],
    unhinged: [
      "My astrological chart specifically warned me that remaining past 3:30 PM would trigger financial ruin.",
      "I have an appointment with a paranormal investigator regarding the scratching sound inside my air fryer.",
      "My psychic called to inform me that my presence is required elsewhere for cosmic equilibrium."
    ]
  }
};

const CHAOS_POOL = [
  "My neighbor's emotional support parrot flew onto my balcony and started confessing municipal white-collar crimes in French.",
  "A runaway robotic lawnmower breached my front garden and severed the fiber optic cables of my entire personality.",
  "I attempted to parallel park, panicked under peer pressure, and drove to a neighboring zip code to regroup emotionally.",
  "A murder of crows took offense to the color of my trench coat and held an aerial demonstration outside my driveway.",
  "I accidentally locked myself inside my own walk-in pantry and had to signal for help with a flashlight through the keyhole.",
  "My microwave made a noise resembling a 1998 dial-up modem and I had to supervise it with a fire extinguisher until cool.",
  "I took a sip of lukewarm tap water, choked on air, and experienced a 30-minute spiritual crisis on the hallway rug."
];

function normalizeTone(tone) {
  if (!tone) return 'casual';
  const lower = tone.toLowerCase();
  if (lower.includes('innocent')) return 'innocent';
  if (lower.includes('desperate')) return 'desperate';
  if (lower.includes('detailed')) return 'detailed';
  if (lower.includes('unhinged')) return 'unhinged';
  return 'casual';
}

function calculateScores(toneKey, believabilityLevel) {
  let believabilityScore = 80;
  let dramaScore = 30;
  let chaosScore = 20;

  switch (toneKey) {
    case 'innocent':
      believabilityScore = 92;
      dramaScore = 15;
      chaosScore = 10;
      break;
    case 'casual':
      believabilityScore = 85;
      dramaScore = 25;
      chaosScore = 15;
      break;
    case 'desperate':
      believabilityScore = 72;
      dramaScore = 80;
      chaosScore = 55;
      break;
    case 'detailed':
      believabilityScore = 95;
      dramaScore = 45;
      chaosScore = 35;
      break;
    case 'unhinged':
      believabilityScore = 24;
      dramaScore = 95;
      chaosScore = 98;
      break;
  }

  // Adjust for believability slider level (1: innocent, 2: suspicious, 3: specific, 4: unhinged)
  if (believabilityLevel === 4) {
    believabilityScore = Math.min(believabilityScore, 30);
    chaosScore = Math.max(chaosScore, 90);
    dramaScore = Math.max(dramaScore, 85);
  } else if (believabilityLevel === 1) {
    believabilityScore = Math.max(believabilityScore, 88);
    chaosScore = Math.min(chaosScore, 18);
  }

  return {
    believabilityScore: Math.min(99, Math.max(5, believabilityScore + Math.floor(Math.random() * 6 - 3))),
    dramaScore: Math.min(99, Math.max(5, dramaScore + Math.floor(Math.random() * 6 - 3))),
    chaosScore: Math.min(99, Math.max(5, chaosScore + Math.floor(Math.random() * 6 - 3)))
  };
}

export function generateExcuse({ situation, believability = 2, tone = "casual", recipient = "Boss" }) {
  const sit = situation || "I'm late";
  const toneKey = normalizeTone(tone);
  const templates = SITUATION_TEMPLATES[sit] || SITUATION_TEMPLATES["I'm late"];
  const list = templates[toneKey] || templates.casual;
  const rawText = list[Math.floor(Math.random() * list.length)];

  // Recipient contextual tailoring
  let tailoredText = rawText;
  if (recipient === "Boss" && toneKey === 'innocent') {
    tailoredText = `Good morning. ${rawText} I will be logging on remotely to keep deliverables on schedule.`;
  } else if (recipient === "Teacher" && toneKey === 'innocent') {
    tailoredText = `Dear Professor, ${rawText} I have reviewed the syllabus and will submit the coursework as soon as possible.`;
  } else if (recipient === "Friend" && toneKey === 'casual') {
    tailoredText = `Hey! ${rawText} Drinks are on me next time!`;
  }

  const scores = calculateScores(toneKey, parseInt(believability, 10));
  const refId = `#EX-${Math.floor(1000 + Math.random() * 9000)}`;

  return {
    id: `excuse-${Date.now()}`,
    text: tailoredText,
    situation: sit,
    tone: tone,
    recipient: recipient,
    believabilityLevel: believability,
    ref: refId,
    timestamp: new Date().toISOString(),
    metrics: scores,
    certifiedStamp: scores.believabilityScore > 60 ? "Certified Plausible" : "Barely Legal"
  };
}

export function generateChaosPanic() {
  const text = CHAOS_POOL[Math.floor(Math.random() * CHAOS_POOL.length)];
  const cooked = Math.floor(82 + Math.random() * 12); // 82 - 93%

  return {
    excuse: text,
    cookedPercentage: cooked,
    situationStatus: "Catastrophic",
    brainActivity: "Questionable",
    timeLeft: "Absolutely not enough",
    recoveryOdds: "12%",
    metrics: {
      believability: Math.floor(65 + Math.random() * 20),
      drama: Math.floor(60 + Math.random() * 30),
      chaos: Math.floor(50 + Math.random() * 45)
    },
    ref: `#CH405-99${Math.floor(Math.random() * 10)}`,
    emergencyLevel: "Level 3 Emergency"
  };
}

export function escalateChaos() {
  const unhingedList = [
    "My neighbor's emotional support parrot flew onto my balcony and started confessing municipal white-collar crimes in French.",
    "A rogue flock of geese blockaded the municipal rotary and held a ceremonial trial regarding my trespassing.",
    "I took a sip of tap water, choked on air, and experienced a 30-minute spiritual breakdown on the carpet."
  ];
  const text = unhingedList[Math.floor(Math.random() * unhingedList.length)];

  return {
    excuse: text,
    cookedPercentage: 99,
    situationStatus: "Unrecoverable",
    brainActivity: "Non-Existent",
    timeLeft: "Negative 4 hours",
    recoveryOdds: "1%",
    metrics: {
      believability: 12,
      drama: 98,
      chaos: 99
    },
    ref: `#CH405-999`,
    emergencyLevel: "Level 5 Unhinged"
  };
}
