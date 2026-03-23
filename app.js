const profiles = {
  default: {
    label: "Chicago, IL",
    askFirst: "Open with the bracket line, then pause before you say anything extra.",
    keepGoing: "Ask who is still alive in their bracket and let somebody else explain the chaos.",
    localMove:
      "If the room wants local texture, pivot to the Bulls or early baseball optimism instead of acting like you watched everything.",
    confidenceNote:
      "Works in a generic office conversation and still sounds natural if someone cares a lot more than you do.",
    bestRoom: "Mixed office chat, group text, or background-TV bar talk.",
    exitRampTitle: "Leave yourself an exit in every answer.",
    exitRampText:
      "Chicago sports talk gets more believable when you sound lightly aware, not deeply committed.",
    safeLine:
      "This time of year I just ask who ruined everyone's bracket and go from there.",
    safeContext:
      "Safe because it works whether the room is talking March Madness, a hot local team, or tonight's schedule.",
    talkingPoints: [
      {
        topic: "College hoops",
        heat: "Everyone has an opinion",
        title: "March Madness is in the upset stage now.",
        summary:
          "Even casual fans are checking scores because one busted bracket can dominate an entire office conversation.",
        followUps: [
          "Ask who they still have alive in their bracket.",
          "If you need a quick reaction: say the tournament gets fun once the favorites start wobbling."
        ],
        safeLine:
          "At this point nobody's bracket is clean, so people are mostly competing on vibes.",
        names: [
          { label: "Cooper Flagg", say: "KOO-per flag" },
          { label: "Rick Pitino", say: "Rick pih-TEE-noh" }
        ]
      },
      {
        topic: "Local angle",
        heat: "Easy Chicago entry point",
        title: "The Bulls are still hovering in play-in range.",
        summary:
          "That means Chicago basketball talk is less about title hopes and more about whether the team can stay interesting deep enough into spring.",
        followUps: [
          "Say it feels like a team that can win one fun game and then stress everyone out.",
          "If someone wants specifics, ask whether they trust the late-game offense."
        ],
        safeLine:
          "The Bulls always seem one hot week away from dragging everyone back in.",
        names: [
          { label: "Coby White", say: "KOH-bee white" },
          { label: "Nikola Vucevic", say: "NEE-koh-lah VOO-cheh-vich" }
        ]
      },
      {
        topic: "Baseball ramp-up",
        heat: "Useful before Opening Day",
        title: "Baseball optimism season is almost here.",
        summary:
          "You do not need projections. You just need to know this is when fans talk themselves into a fresh start and a healthier roster.",
        followUps: [
          "Mention that every baseball fan believes spring fixed at least one problem.",
          "Ask whether this feels like a real season or another wait-until-summer year."
        ],
        safeLine:
          "Baseball in March is mostly hope and roster math, which is honestly a pretty good combination.",
        names: [
          { label: "Shota Imanaga", say: "SHOH-tah ee-mah-NAH-gah" },
          { label: "Seiya Suzuki", say: "SAY-yah soo-ZOO-kee" }
        ]
      }
    ],
    seasons: [
      {
        league: "College Basketball",
        state: "Tournament mode",
        summary:
          "This is the loudest sport in casual settings right now because brackets turn non-fans into temporary analysts.",
        watchingFor: "Upsets, bracket damage, and who suddenly looks underseeded.",
        survivalMove: "Ask one person who their Final Four pick is and let the room split itself."
      },
      {
        league: "NBA",
        state: "Stretch-run scoreboard watching",
        summary:
          "Fans are checking standings, resting stars, and arguing about whether a team is peaking at the right time.",
        watchingFor: "Play-in positioning, health, and one player getting impossibly hot.",
        survivalMove: "Say every contender feels one ankle tweak away from chaos."
      },
      {
        league: "MLB",
        state: "Preseason optimism",
        summary:
          "Baseball talk is soft-launching before the regular season takes over. This is the easiest moment to sound pleasant without knowing much.",
        watchingFor: "Opening Day lineups, rotation guesses, and overconfident spring narratives.",
        survivalMove: "Say baseball hope is strongest before the weather even cooperates."
      },
      {
        league: "NHL",
        state: "Playoff race tightening",
        summary:
          "Hockey fans are either stress-checking the wild card math or talking themselves into the idea that momentum matters now.",
        watchingFor: "Goalie form, last wild-card spots, and possible first-round matchups.",
        survivalMove: "Ask who nobody wants to face once the playoffs start."
      }
    ],
    deeperDives: [
      {
        title: "How to sound normal after your opener",
        description:
          "After you drop the safe line, your job is not to explain sports. Your job is to ask one short follow-up that sounds interested and then hand off the floor.",
        prompts: [
          "Was that as wild as it looked?",
          "Is this actually a big deal or just a loud sports-week thing?",
          "Who is everybody blaming for that?"
        ]
      },
      {
        title: "What people mean by 'the season starts now'",
        description:
          "They usually mean the schedule has become emotionally legible. Brackets matter, playoff seeding matters, and every game suddenly gets framed like a referendum.",
        prompts: [
          "So this is when the casual people finally tune in?",
          "Feels like every sport has its own fake calm before the real drama."
        ]
      },
      {
        title: "Premium-ready audio rehearsal",
        description:
          "Future premium mode can read you the line, the names, and the follow-up in a natural cadence for the walk from the elevator to the meeting room.",
        prompts: [
          "You are thirty seconds from sounding prepared.",
          "City-aware prompts will slot in local teams automatically."
        ]
      }
    ]
  },
  newyork: {
    label: "New York, NY",
    askFirst: "Use the local tension line, then stop before it turns into a Knicks or Yankees debate.",
    keepGoing: "Ask whether people are more stressed about basketball now or more hopeful about baseball.",
    localMove:
      "New York works best when you acknowledge the city is balancing playoff nerves with spring optimism.",
    confidenceNote:
      "Believable in Manhattan office chatter because it sounds local without pretending you watched full games.",
    bestRoom: "Office kitchen, group chat, or pre-dinner sports-on-TV conversation.",
    exitRampTitle: "Sound local, not encyclopedic.",
    exitRampText:
      "In New York, broad emotional reads land better than stat-heavy takes if you are clearly not the sports person.",
    safeLine:
      "This time of year New York sports people somehow have basketball stress and baseball hope at the exact same time.",
    safeContext:
      "Safe because it sounds local without claiming you watched every minute of anything.",
    talkingPoints: [
      {
        topic: "Knicks watch",
        heat: "Local default",
        title: "Knicks talk is mostly about whether this group looks built for May.",
        summary:
          "The tone is hopeful but guarded. Fans like the ceiling, but nobody wants to get too loud before the playoff bracket settles.",
        followUps: [
          "Ask whether the team finally has enough shot creation for a real run.",
          "A neutral line: the Knicks feel serious when the defense travels."
        ],
        safeLine:
          "The Knicks have reached that dangerous stage where optimism sounds reasonable.",
        names: [
          { label: "Jalen Brunson", say: "JAY-len BRUN-son" },
          { label: "Mikal Bridges", say: "mih-KAL BRID-jiz" }
        ]
      },
      {
        topic: "Yankees season ramp",
        heat: "Always usable",
        title: "Yankees conversations start before the weather cooperates.",
        summary:
          "You do not need a stat. You need to know fans are already calibrating expectations around stars, health, and October pressure.",
        followUps: [
          "Ask whether the roster feels deeper this year.",
          "Safe stance: Yankees conversations never stay casual for long."
        ],
        safeLine:
          "Yankees optimism is never quiet, even before the season really settles in.",
        names: [
          { label: "Giancarlo Stanton", say: "jee-AHN-car-loh STAN-ton" },
          { label: "Gerrit Cole", say: "GAIR-it kohl" }
        ]
      },
      {
        topic: "March Madness",
        heat: "Universal",
        title: "Bracket talk still does the social heavy lifting.",
        summary:
          "Even in a city with pro-team gravity, tournament chaos is the easiest neutral conversation starter.",
        followUps: [
          "Ask who ruined their bracket first.",
          "Say every office pool becomes a personality test by this point."
        ],
        safeLine:
          "March Madness is the one sports conversation where everyone suddenly has a theory.",
        names: [
          { label: "Dan Hurley", say: "Dan HER-lee" },
          { label: "Tom Izzo", say: "Tom IZZ-oh" }
        ]
      }
    ]
  },
  boston: {
    label: "Boston, MA",
    askFirst: "Lead with the playoff-path line, then let the actual fan decide how intense the next minute gets.",
    keepGoing: "Ask whether this team feels truly dangerous or just regular-season good.",
    localMove:
      "Boston chatter gets safer when you frame it around playoff seriousness instead of pretending you know every matchup.",
    confidenceNote:
      "This lands because it respects how seriously Boston takes contender talk without requiring you to prove expertise.",
    bestRoom: "Team lunch, bar TV conversation, or a group chat after work.",
    exitRampTitle: "Respect the stakes without pretending expertise.",
    exitRampText:
      "Boston fans can smell fake confidence fast, so shorter reactions are safer than hard opinions.",
    safeLine:
      "Boston sports people always sound calm right before they start explaining a playoff path in alarming detail.",
    safeContext:
      "Safe because it flatters local seriousness without making you prove any expertise.",
    talkingPoints: [
      {
        topic: "Celtics pulse",
        heat: "Strong local gravity",
        title: "Celtics talk is less about making the playoffs and more about looking inevitable.",
        summary:
          "That changes the conversation. Fans are debating readiness, matchups, and whether the team feels ruthless enough.",
        followUps: [
          "Ask whether this is the best version of the core yet.",
          "A low-risk line: the Celtics look like a team people would rather avoid."
        ],
        safeLine:
          "The Celtics have entered that phase where anything short of a deep run feels like a story.",
        names: [
          { label: "Jayson Tatum", say: "JAY-son TAY-tum" },
          { label: "Kristaps Porzingis", say: "KRIS-taps por-ZING-iss" }
        ]
      },
      {
        topic: "Bruins watch",
        heat: "Quietly useful",
        title: "Bruins conversations get sharper once playoff math feels real.",
        summary:
          "People start talking about goaltending, matchups, and whether the team looks built for a heavy series.",
        followUps: [
          "Ask who they would least want to see in round one.",
          "A safe line: hockey confidence always sounds temporary until a series starts."
        ],
        safeLine:
          "The Bruins feel like one of those teams nobody wants to deal with in a long series.",
        names: [
          { label: "David Pastrnak", say: "DAY-vid PAS-ter-nak" },
          { label: "Jeremy Swayman", say: "JER-uh-mee SWAY-man" }
        ]
      },
      {
        topic: "Red Sox optimism",
        heat: "Seasonal reset",
        title: "Baseball hope arrives fast when the weather starts hinting at spring.",
        summary:
          "You can sound informed by acknowledging the reset without pretending you have lineup takes ready.",
        followUps: [
          "Ask whether this year feels transitional or legitimately promising.",
          "Mention that baseball fans always sound happiest before the first prolonged slump."
        ],
        safeLine:
          "Red Sox optimism is one of the first signs Boston thinks winter is ending.",
        names: [
          { label: "Rafael Devers", say: "rah-fah-EL DEV-ers" },
          { label: "Triston Casas", say: "TRISS-ton KAH-sas" }
        ]
      }
    ]
  }
};

const seasonFallback = profiles.default.seasons;
const deeperDives = profiles.default.deeperDives;

const locationAliases = {
  chicago: "default",
  "60601": "default",
  "60602": "default",
  "60603": "default",
  "10001": "newyork",
  "10012": "newyork",
  nyc: "newyork",
  "new york": "newyork",
  manhattan: "newyork",
  boston: "boston",
  "02108": "boston",
  "02110": "boston",
  cambridge: "boston"
};

const storageKey = "not-a-fan-location";
let activeProfileKey = "default";

function resolveProfile(input) {
  const normalized = input.trim().toLowerCase();
  return profiles[locationAliases[normalized]] ? locationAliases[normalized] : "default";
}

function resolveProfileFromSaved(input) {
  return input ? resolveProfile(input) : "default";
}

function formatToday() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  }).format(new Date());
}

function renderProfile(profileKey) {
  activeProfileKey = profileKey;
  const profile = profiles[profileKey];
  const talkingPoints = profile.talkingPoints || profiles.default.talkingPoints;
  const leadPoint = talkingPoints[0];
  const localPoint = talkingPoints[1] || talkingPoints[0];

  document.getElementById("safe-line-text").textContent = `"${profile.safeLine}"`;
  document.getElementById("safe-line-context").textContent = profile.safeContext;
  document.getElementById("location-pill").textContent = `Dialed to ${profile.label}`;
  document.getElementById("location-saved").textContent = `Saved to ${profile.label}`;
  document.getElementById("hero-ask-first").textContent = profile.askFirst;
  document.getElementById("hero-if-they-keep-going").textContent = profile.keepGoing;
  document.getElementById("hero-local-move").textContent = profile.localMove;
  document.getElementById("confidence-note").textContent = profile.confidenceNote;
  document.getElementById("best-room").textContent = profile.bestRoom;
  document.getElementById("hero-follow-up").textContent = leadPoint.followUps[0];
  document.getElementById("hero-backup-line").textContent = leadPoint.safeLine;
  document.getElementById("hero-local-angle").textContent = `${localPoint.title} ${localPoint.safeLine}`;
  document.getElementById("local-angle-title").textContent = `${localPoint.topic} is your clean local angle.`;
  document.getElementById("local-angle-text").textContent = localPoint.summary;
  document.getElementById("exit-ramp-title").textContent = profile.exitRampTitle;
  document.getElementById("exit-ramp-text").textContent = profile.exitRampText;
  document.getElementById("today-date").textContent = formatToday();
  document.getElementById("primary-move-title").textContent = "Ask one follow-up";
  document.getElementById("primary-move-text").textContent = leadPoint.followUps[0];
  document.getElementById("snapshot-local-title").textContent = `${profile.label} is the believable setting.`;
  document.getElementById("snapshot-local-text").textContent = profile.localMove;
  syncPresetButtons(profileKey);

  renderTalkingPoints(talkingPoints);
  renderSeasons(profile.seasons || seasonFallback);
  renderDeeperDives(deeperDives);
}

function renderTalkingPoints(points) {
  const root = document.getElementById("talking-points-list");
  root.innerHTML = "";

  points.forEach((point) => {
    const card = document.createElement("article");
    card.className = "point-card";
    card.innerHTML = `
      <div class="point-topline">
        <span class="point-kicker">${point.topic}</span>
        <span class="heat-pill">${point.heat}</span>
      </div>
      <h3>${point.title}</h3>
      <div class="meta-block point-meta-block">
        <span class="meta-label">Why this is useful</span>
        <p class="point-summary">${point.summary}</p>
      </div>
      <div class="say-line">
        <strong>Say this</strong>
        <span>"${point.safeLine}"</span>
      </div>
      <div class="follow-up-block">
        <span class="meta-label">If they keep going</span>
        <ul class="subtle-list">
          ${point.followUps.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div class="name-row">
        ${point.names
          .map(
            (name) => `
              <div class="name-chip">
                <span>${name.label}</span>
                <button
                  class="audio-button"
                  type="button"
                  data-pronounce="${name.say}"
                  data-name="${name.label}"
                  aria-label="Hear pronunciation for ${name.label}"
                >
                  Say
                </button>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="point-actions">
        <button class="copy-button" type="button" data-copy="${escapeHtml(point.safeLine)}">Copy line</button>
      </div>
    `;
    root.appendChild(card);
  });
}

function renderSeasons(items) {
  const root = document.getElementById("season-list");
  root.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "season-card";
    card.innerHTML = `
      <div class="season-topline">
        <span class="point-kicker">${item.league}</span>
        <span class="heat-pill">${item.state}</span>
      </div>
      <h3>${item.state}</h3>
      <div class="meta-block point-meta-block">
        <span class="meta-label">What this means socially</span>
        <p>${item.summary}</p>
      </div>
      <div class="season-meta">
        <div class="meta-block">
          <span class="meta-label">People are watching for</span>
          <p>${item.watchingFor}</p>
        </div>
        <div class="meta-block">
          <span class="meta-label">Survival move</span>
          <p>${item.survivalMove}</p>
        </div>
      </div>
    `;
    root.appendChild(card);
  });
}

function renderDeeperDives(items) {
  const root = document.getElementById("deep-dive-list");
  root.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "deep-dive-card";
    card.innerHTML = `
      <div class="deep-dive-topline">
        <span class="point-kicker">Keep it moving</span>
      </div>
      <h3>${item.title}</h3>
      <div class="meta-block point-meta-block">
        <span class="meta-label">When to use this</span>
        <p>${item.description}</p>
      </div>
      <ul class="subtle-list">
        ${item.prompts.map((prompt) => `<li>${prompt}</li>`).join("")}
      </ul>
    `;
    root.appendChild(card);
  });
}

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function copyText(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(successMessage));
    return;
  }

  const area = document.createElement("textarea");
  area.value = text;
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
  showToast(successMessage);
}

function speakText(text, label) {
  if (!("speechSynthesis" in window)) {
    showToast(`Audio is unavailable here. Say: ${label || text}`);
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.94;
  utterance.pitch = 1.02;
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
  showToast(label ? `Playing ${label}` : "Playing audio");
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 1800);
}

function wireEvents() {
  document.getElementById("copy-safe-line").addEventListener("click", () => {
    copyText(profiles[activeProfileKey].safeLine, "Safe line copied");
  });

  document.getElementById("play-safe-line").addEventListener("click", () => {
    speakText(profiles[activeProfileKey].safeLine, "safe line");
  });

  document.getElementById("talking-points-list").addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy]");
    if (copyButton) {
      copyText(copyButton.getAttribute("data-copy"), "Talking point copied");
      return;
    }

    const audioButton = event.target.closest("[data-pronounce]");
    if (audioButton) {
      speakText(audioButton.getAttribute("data-pronounce"), audioButton.getAttribute("data-name"));
    }
  });

  document.getElementById("location-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("location-input");
    applyLocation(input.value);
  });

  document.querySelector(".quick-picks").addEventListener("click", (event) => {
    const preset = event.target.closest("[data-location-preset]");
    if (!preset) {
      return;
    }

    const value = preset.getAttribute("data-location-preset");
    document.getElementById("location-input").value = value;
    applyLocation(value);
  });

  document.querySelector(".cta-form button").addEventListener("click", () => {
    showToast("Waitlist capture is a demo for Milestone 3");
  });
}

function syncPresetButtons(profileKey) {
  document.querySelectorAll("[data-location-preset]").forEach((button) => {
    const matches = resolveProfile(button.getAttribute("data-location-preset")) === profileKey;
    button.classList.toggle("is-active", matches);
    button.setAttribute("aria-pressed", matches ? "true" : "false");
  });
}

function applyLocation(rawValue) {
  const cleaned = rawValue.trim();
  const profileKey = resolveProfile(cleaned);
  const savedValue = cleaned || "Chicago";
  document.getElementById("location-input").value = savedValue;
  window.localStorage.setItem(storageKey, savedValue);
  renderProfile(profileKey);
  showToast(`Local view set to ${profiles[profileKey].label}`);
}

function init() {
  const savedLocation = window.localStorage.getItem(storageKey);
  const profileKey = resolveProfileFromSaved(savedLocation);
  if (savedLocation) {
    document.getElementById("location-input").value = savedLocation;
  } else {
    document.getElementById("location-input").value = "Chicago";
  }
  document.getElementById("today-date").textContent = formatToday();
  renderProfile(profileKey);
  wireEvents();
}

init();
