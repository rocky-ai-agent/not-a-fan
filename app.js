const profileLibrary = {
  default: {
    label: "Broad default",
    heroLede:
      "Not a Fan gives you one safe opener, one easy follow-up, and one local angle so you can survive office chat, client dinners, group texts, and the bar TV in about ten seconds.",
    heroProof: "Made for the exact moment somebody turns to you and says, “Did you catch the game?”",
    confidenceNote:
      "Short, believable lines land better than fake expert takes.",
    bestRoom: "Mixed office chat, group text, or background-TV bar talk.",
    safeLine:
      "This time of year I just ask who ruined everyone's bracket and go from there.",
    safeContext:
      "Safe because it works whether the room means March Madness, a local team, or whatever game is on behind you.",
    followUp: "Who is still alive in your bracket?",
    localAngle:
      "Keep it broad, keep it believable, and let the real fan fill in the details.",
    savedValue: "",
    fallbackHint: "Currently using the broad default",
    note: "Human city names only. We cover the major sports markets and use a deliberate broad fallback for everything else."
  },
  atlanta: {
    label: "Atlanta, GA",
    teams: "the Braves, Falcons, or Hawks",
    vibe: "Atlanta sports chat has confidence, caution, and one fan ready to say this year feels different.",
    proof: "Made for office kitchens, airport bars, and the second somebody brings up the Braves or asks if the Falcons finally feel stable.",
    confidence: "In Atlanta, broad momentum reads beat pretending you tracked every inning or snap.",
    room: "Office chat, client dinner, or sports-on-TV small talk before the real fan takes over.",
    line: "Atlanta sports people always sound one good week away from believing everything is finally lining up.",
    context: "Safe because it sounds local without forcing you to fake specifics.",
    followUp: "So what has more real optimism right now, the Braves or the version of the Falcons people want to believe in?",
    angle: "Atlanta is easier if you keep it on expectations, not stat sheets.",
    savedValue: "Atlanta"
  },
  boston: {
    label: "Boston, MA",
    teams: "the Celtics, Bruins, Patriots, or Red Sox",
    vibe: "Boston sports talk feels survivable instead of like a quiz with consequences.",
    proof: "Made for team lunches, post-work drinks, and any room where someone is one sentence away from explaining a playoff path.",
    confidence: "In Boston, short reactions sound smarter than fake certainty.",
    room: "Team lunch, bar TV conversation, or a group chat after work.",
    line: "Boston sports people always sound calm right before they start explaining a playoff path in alarming detail.",
    context: "Safe because it flatters local seriousness without making you prove expertise.",
    followUp: "Does this actually feel like a real contender year or just regular-season confidence?",
    angle: "Boston is safer when you respect the stakes, say less, and let the real fan fill the silence.",
    savedValue: "Boston"
  },
  chicago: {
    label: "Chicago, IL",
    teams: "the Bears, Bulls, Cubs, or Blackhawks",
    vibe: "Chicago sports chatter does not become a conversation you have to fake your way through.",
    proof: "Made for office kitchens, client dinners, and the second somebody decides the Bulls, Cubs, or Bears are now table conversation.",
    confidence: "Short, believable lines still beat fake deep-cut opinions in Chicago.",
    room: "Office kitchen, client small talk, or a bar TV conversation that needs one clean line.",
    line: "Chicago sports people can pivot from cautious hope to full therapy session in about thirty seconds.",
    context: "Safe because it sounds local without pretending you watched every minute last night.",
    followUp: "So where is the real patience level right now, the Bears, the Bulls, or everybody?",
    angle: "Chicago is safer when you keep it broad: Bulls drift, Cubs hope, move on.",
    savedValue: "Chicago"
  },
  dallas: {
    label: "Dallas-Fort Worth, TX",
    teams: "the Cowboys, Mavericks, Rangers, or Stars",
    vibe: "Dallas sports talk has equal parts swagger, stress, and one loud opinion about the Cowboys.",
    proof: "Made for office chat, client lunches, and any room where somebody acts like the Cowboys are always the center of the sports universe.",
    confidence: "In Dallas, emotional truth sounds more believable than fake detail.",
    room: "Office kitchen, business dinner, or bar TV small talk.",
    line: "In Dallas somebody can bring up the Cowboys in April and act like it is still the main event.",
    context: "Safe because it sounds like you understand the market without claiming homework.",
    followUp: "What has people more skeptical right now, the Cowboys hype cycle or everything else?",
    angle: "Dallas works when you acknowledge the Cowboys gravity and then leave room for the real fan to rant.",
    savedValue: "Dallas"
  },
  denver: {
    label: "Denver, CO",
    teams: "the Nuggets, Broncos, Avalanche, or Rockies",
    vibe: "Denver sports chatter is calmer on the surface and still weirdly intense once somebody gets going.",
    proof: "Made for office chat, brewery patios, and the second a Broncos or Nuggets conversation finds you.",
    confidence: "Denver is better with broad temperature checks than fake insider takes.",
    room: "Office kitchen, patio drinks, or background-TV conversation.",
    line: "Denver sports people can sound chill right up until you mention the Broncos and then the volume changes.",
    context: "Safe because it feels local without demanding specific receipts.",
    followUp: "So what actually has more real confidence right now, the Nuggets standard or Broncos optimism?",
    angle: "Denver is safest when you keep it on expectations and avoid pretending you know every roster move.",
    savedValue: "Denver"
  },
  detroit: {
    label: "Detroit, MI",
    teams: "the Lions, Tigers, Pistons, or Red Wings",
    vibe: "Detroit sports talk has real edge because hope finally feels less theoretical there.",
    proof: "Made for office chatter, neighborhood bars, and any room where Lions optimism is either sincere or a setup.",
    confidence: "In Detroit, honest mood-reading beats fake expertise.",
    room: "Office chat, post-work drinks, or group text spillover.",
    line: "Detroit sports people finally sound like hope is allowed again, which still catches everyone off guard.",
    context: "Safe because it acknowledges the mood without claiming you watched all of it.",
    followUp: "Does the city feel more invested in the Lions staying real or the Tigers mattering again?",
    angle: "Detroit works when you respect that fans have earned the right to be suspicious and excited at the same time.",
    savedValue: "Detroit"
  },
  houston: {
    label: "Houston, TX",
    teams: "the Astros, Texans, or Rockets",
    vibe: "Houston sports talk usually sounds measured until somebody decides it is time to defend the Astros or sell Texans optimism.",
    proof: "Made for office chat, client dinners, and any room where Astros expectations or Texans momentum becomes the topic.",
    confidence: "In Houston, broad confidence reads sound smarter than fake specifics.",
    room: "Office lunch, airport bar, or group chat that suddenly turns into sports talk.",
    line: "Houston sports people can make confidence sound casual even when the expectations are doing a lot of work.",
    context: "Safe because it feels local without trapping you in details.",
    followUp: "What feels more real right now, Astros standards or Texans momentum?",
    angle: "Houston is safer when you keep it on expectations and let someone else start naming players.",
    savedValue: "Houston"
  },
  losangeles: {
    label: "Los Angeles, CA",
    teams: "the Lakers, Dodgers, Rams, Clippers, or Kings",
    vibe: "Los Angeles sports chatter can turn from casual to tribal faster than people admit.",
    proof: "Made for office chat, client drinks, and the second someone asks if you saw the Lakers or Dodgers.",
    confidence: "In L.A., broad mood reads sound better than pretending you track every game.",
    room: "Office kitchen, dinner conversation, or TV-on-in-the-background bar talk.",
    line: "L.A. sports talk is relaxed right up until you pick the wrong team to sound casual about.",
    context: "Safe because it sounds local without trapping you in a Lakers-versus-everybody argument.",
    followUp: "So what pulls more energy right now, Lakers drama or Dodgers expectations?",
    angle: "Los Angeles is safer when you acknowledge the spotlight and let the real fan handle the specifics.",
    savedValue: "Los Angeles"
  },
  miami: {
    label: "Miami, FL",
    teams: "the Heat, Dolphins, Panthers, or Marlins",
    vibe: "Miami sports talk is stylish on the surface and still serious once somebody starts talking expectations.",
    proof: "Made for office chat, client dinners, and any room where the Heat or Dolphins suddenly become the social assignment.",
    confidence: "Miami is better with broad confidence checks than fake technical analysis.",
    room: "Office kitchen, networking event, or bar conversation with a game on.",
    line: "Miami sports people can make contender talk sound casual even when the expectations are doing all the heavy lifting.",
    context: "Safe because it feels local without pretending you lived inside the highlights.",
    followUp: "What actually feels sturdier right now, Heat culture or Dolphins optimism?",
    angle: "Miami works when you stay on swagger and expectations, not Xs and Os.",
    savedValue: "Miami"
  },
  minneapolis: {
    label: "Minneapolis-St. Paul, MN",
    teams: "the Vikings, Timberwolves, Twins, or Wild",
    vibe: "Twin Cities sports talk always carries a little hope and a little emotional weather preparedness.",
    proof: "Made for office chat, neighborhood bars, and the second Vikings or Wolves talk arrives.",
    confidence: "In the Twin Cities, broad emotional reads beat fake specifics.",
    room: "Office kitchen, happy hour, or post-game text spillover.",
    line: "Minnesota sports people can sound optimistic and emotionally braced at the same time, which is honestly a skill.",
    context: "Safe because it sounds local without making you prove anything.",
    followUp: "So what feels more dangerous right now, real hope or getting too comfortable too early?",
    angle: "Minnesota is safer when you respect the emotional history and keep your take light.",
    savedValue: "Minneapolis"
  },
  newyork: {
    label: "New York, NY",
    teams: "the Knicks, Yankees, Mets, Jets, Giants, Rangers, or Islanders",
    vibe: "New York sports chatter does not turn into a test you forgot to study for.",
    proof: "Made for office kitchens, client small talk, and the second somebody decides to ask about the Knicks or Yankees.",
    confidence: "Broad emotional reads sound more believable in New York than pretending you watched four full games this week.",
    room: "Office kitchen, group chat, or pre-dinner sports-on-TV conversation.",
    line: "This time of year New York sports people somehow have basketball stress and baseball hope at the exact same time.",
    context: "Safe because it sounds local without claiming you watched every minute of anything.",
    followUp: "So what has people more stressed right now, the Knicks or everything else?",
    angle: "New York works when you acknowledge playoff nerves plus baseball optimism and then stop before it becomes debate club.",
    savedValue: "New York"
  },
  philadelphia: {
    label: "Philadelphia, PA",
    teams: "the Eagles, Phillies, Sixers, or Flyers",
    vibe: "Philadelphia sports talk is direct, suspicious, and ready to argue with your tone if needed.",
    proof: "Made for office chat, neighborhood bars, and the second somebody decides to test how serious you are about Philly sports.",
    confidence: "In Philly, broad honesty lands better than fake confidence.",
    room: "Office kitchen, client dinner, or game-on-in-the-background conversation.",
    line: "Philadelphia sports people can hear fake confidence from across the room, so broad honesty is the safer play.",
    context: "Safe because it sounds local without inviting an interrogation.",
    followUp: "So what feels more stable right now, Phillies confidence or the city's ability to trust any of this?",
    angle: "Philadelphia is safer when you respect the edge, keep it brief, and let the loudest real fan take it from there.",
    savedValue: "Philadelphia"
  },
  phoenix: {
    label: "Phoenix, AZ",
    teams: "the Suns, Cardinals, Diamondbacks, or Coyotes-shaped emotional scar tissue",
    vibe: "Phoenix sports talk usually starts sunny and turns tense once expectations show up.",
    proof: "Made for office chat, patio drinks, and any room where someone brings up the Suns or whether Arizona fans can relax yet.",
    confidence: "Phoenix is better with broad mood reads than fake detail.",
    room: "Office kitchen, networking chat, or game-on-at-the-bar conversation.",
    line: "Phoenix sports people can sound hopeful and battle-tested in the same sentence and honestly that tracks.",
    context: "Safe because it feels local without pretending you watched every possession.",
    followUp: "What feels more fragile right now, Suns confidence or Arizona sports peace in general?",
    angle: "Phoenix works when you acknowledge the nerves, avoid fake specifics, and move on.",
    savedValue: "Phoenix"
  },
  sanfrancisco: {
    label: "Bay Area, CA",
    teams: "the Warriors, 49ers, Giants, A's, or Sharks",
    vibe: "Bay Area sports talk usually mixes confidence, tech-brain analysis, and one person already thinking three seasons ahead.",
    proof: "Made for office chat, client dinners, and the second someone opens a Warriors or 49ers conversation like it is product strategy.",
    confidence: "In the Bay, broad confidence checks beat fake detail.",
    room: "Office kitchen, startup happy hour, or sports-on-TV background chatter.",
    line: "Bay Area sports people can make a normal game conversation sound like a long-term systems review.",
    context: "Safe because it sounds local without forcing you into debate mode.",
    followUp: "So what has the higher expectation tax right now, the 49ers or whatever version of the Warriors people still believe in?",
    angle: "The Bay is safer when you keep it on standards and expectations, not fake analysis.",
    savedValue: "San Francisco"
  },
  seattle: {
    label: "Seattle, WA",
    teams: "the Seahawks, Mariners, Kraken, or Storm",
    vibe: "Seattle sports talk sounds calm until the optimism and dread start sharing a seat.",
    proof: "Made for office chat, coffee-shop side talk, and the second somebody brings up the Mariners or Seahawks.",
    confidence: "Seattle is better with broad emotional reads than fake specifics.",
    room: "Office kitchen, happy hour, or casual group conversation.",
    line: "Seattle sports people have perfected sounding hopeful and guarded at the exact same time.",
    context: "Safe because it acknowledges the mood without pretending you tracked every game.",
    followUp: "What feels more real right now, Mariners optimism or Seahawks patience?",
    angle: "Seattle is safest when you keep it light and let the real fan decide how deep to go.",
    savedValue: "Seattle"
  },
  stlouis: {
    label: "St. Louis, MO",
    teams: "the Cardinals, Blues, or City SC",
    vibe: "St. Louis sports talk is more serious than outsiders expect and people notice if you bluff.",
    proof: "Made for office chat, family parties, and any room where Cardinals standards or Blues opinions show up fast.",
    confidence: "In St. Louis, respectful broad takes work better than fake depth.",
    room: "Office kitchen, patio chat, or TV-on-in-the-background conversation.",
    line: "St. Louis sports people can make normal conversation sound like a standards meeting, especially if the Cardinals come up.",
    context: "Safe because it respects the market without inviting a fact check.",
    followUp: "So what feels more touchy right now, Cardinals expectations or the city's patience level?",
    angle: "St. Louis works when you acknowledge the standards and keep your take short.",
    savedValue: "St. Louis"
  },
  washington: {
    label: "Washington, DC",
    teams: "the Commanders, Nationals, Capitals, or Wizards",
    vibe: "DC sports talk usually sounds rational for about ten seconds and then somebody gets personal about the Commanders.",
    proof: "Made for office chat, networking events, and the second Commanders or Capitals talk sneaks into the room.",
    confidence: "In DC, broad realism sounds better than fake certainty.",
    room: "Office kitchen, client dinner, or after-work drinks.",
    line: "DC sports people can sound professionally composed right up until the Commanders enter the conversation.",
    context: "Safe because it feels local without making you fake insider status.",
    followUp: "What actually feels more stable right now, Commanders optimism or the city's ability to trust it?",
    angle: "DC is safer when you keep it on belief versus skepticism and avoid pretending you know the roster.",
    savedValue: "Washington, DC"
  }
};

const marketSuggestions = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Boston",
  "Dallas",
  "Philadelphia",
  "Washington, DC",
  "Atlanta",
  "Houston",
  "Phoenix",
  "Detroit",
  "Miami"
];

const cityAliases = {
  atl: "atlanta",
  atlanta: "atlanta",
  alpharetta: "atlanta",
  marietta: "atlanta",
  boston: "boston",
  cambridge: "boston",
  somerville: "boston",
  chicago: "chicago",
  evanston: "chicago",
  naperville: "chicago",
  dallas: "dallas",
  plano: "dallas",
  frisco: "dallas",
  arlington: "dallas",
  "fort worth": "dallas",
  denver: "denver",
  boulder: "denver",
  aurora: "denver",
  detroit: "detroit",
  "ann arbor": "detroit",
  dearborn: "detroit",
  houston: "houston",
  sugarland: "houston",
  "sugar land": "houston",
  katy: "houston",
  la: "losangeles",
  "los angeles": "losangeles",
  pasadena: "losangeles",
  inglewood: "losangeles",
  miami: "miami",
  miamibeach: "miami",
  "miami beach": "miami",
  fortlauderdale: "miami",
  "fort lauderdale": "miami",
  minneapolis: "minneapolis",
  "st paul": "minneapolis",
  "saint paul": "minneapolis",
  nyc: "newyork",
  manhattan: "newyork",
  brooklyn: "newyork",
  queens: "newyork",
  bronx: "newyork",
  "new york": "newyork",
  philadelphia: "philadelphia",
  philly: "philadelphia",
  phoenix: "phoenix",
  scottsdale: "phoenix",
  tempe: "phoenix",
  mesa: "phoenix",
  sf: "sanfrancisco",
  "san francisco": "sanfrancisco",
  oakland: "sanfrancisco",
  sanjose: "sanfrancisco",
  "san jose": "sanfrancisco",
  seattle: "seattle",
  bellevue: "seattle",
  tacoma: "seattle",
  "st louis": "stlouis",
  "saint louis": "stlouis",
  "st. louis": "stlouis",
  dc: "washington",
  dmv: "washington",
  washington: "washington",
  "washington dc": "washington",
  "washington, dc": "washington",
  alexandria: "washington",
  arlingtonva: "washington",
  "arlington va": "washington"
};

const storageKey = "not-a-fan-location";
const signupConfig = {
  endpoint: "https://formsubmit.co/ajax/hello@notafan.app",
  inbox: "hello@notafan.app"
};
let activeProfileKey = "default";
let activeLocationLabel = profileLibrary.default.label;
let lastAttemptedLocation = "";

function buildProfile(base) {
  if (!base.teams) {
    return base;
  }

  return {
    label: base.label,
    heroLede: `Not a Fan gives you one safe opener, one easy follow-up, and one local angle so ${base.vibe}`,
    heroProof: base.proof,
    confidenceNote: base.confidence,
    bestRoom: base.room,
    safeLine: base.line,
    safeContext: base.context,
    followUp: base.followUp,
    localAngle: base.angle,
    savedValue: base.savedValue,
    fallbackHint: `Currently tuned to ${base.label}`,
    note: `Try ${base.teams}. Major-market shortcuts only. No giant dropdown nonsense.`
  };
}

const profiles = Object.fromEntries(
  Object.entries(profileLibrary).map(([key, value]) => [key, buildProfile(value)])
);

function normalizeLocation(input) {
  return input
    .trim()
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/,/g, "")
    .replace(/\s+/g, " ");
}

function resolveLocation(input) {
  const normalized = normalizeLocation(input);
  const profileKey = profiles[cityAliases[normalized]] ? cityAliases[normalized] : "default";
  return {
    cleaned: input.trim(),
    normalized,
    profileKey,
    matched: profileKey !== "default"
  };
}

function resolveProfileFromSaved(input) {
  return input ? resolveLocation(input) : { cleaned: "", normalized: "", profileKey: "default", matched: false };
}

function describeLocationForSignup(profileKey, rawLocation) {
  if (profileKey !== "default") {
    return profiles[profileKey].label;
  }

  if (rawLocation) {
    return `${rawLocation} (broad fallback)`;
  }

  return profiles.default.label;
}

function renderProfile(profileKey, options = {}) {
  activeProfileKey = profileKey;
  const profile = profiles[profileKey];
  const isDefault = profileKey === "default";
  const fallbackCity = options.fallbackCity || "";
  const isFallback = Boolean(fallbackCity) && isDefault;

  document.getElementById("hero-lede").textContent = profile.heroLede;
  document.getElementById("hero-proof").textContent = profile.heroProof;
  document.getElementById("safe-line-text").textContent = `"${profile.safeLine}"`;
  document.getElementById("safe-line-context").textContent = isFallback
    ? `No dedicated ${fallbackCity} script yet. This is the deliberate broad angle: safe, normal, and usable anywhere.`
    : profile.safeContext;
  document.getElementById("location-pill").textContent = isFallback
    ? `Using the national angle for ${fallbackCity}`
    : isDefault
      ? "Default local angle: broad and safe"
      : `Personalized for ${profile.label}`;
  document.getElementById("location-saved").textContent = isFallback
    ? `${fallbackCity} saved. Using the broad version on purpose.`
    : profile.fallbackHint;
  document.getElementById("hero-follow-up").textContent = profile.followUp;
  document.getElementById("hero-local-angle").textContent = isFallback
    ? `If someone wants a ${fallbackCity} angle, say you are taking the broad version and let the real fan supply the local details.`
    : profile.localAngle;
  document.getElementById("confidence-note").textContent = profile.confidenceNote;
  document.getElementById("best-room").textContent = profile.bestRoom;
  document.getElementById("cta-location").value = describeLocationForSignup(profileKey, fallbackCity || lastAttemptedLocation);
  document.getElementById("location-note").textContent = isFallback
    ? `${fallbackCity} is outside the current market set. We save it anyway and use the broad script instead of pretending we know that market.`
    : profile.note;
  syncPresetButtons(profileKey);
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

function syncPresetButtons(profileKey) {
  document.querySelectorAll("[data-location-preset]").forEach((button) => {
    const matches = resolveLocation(button.getAttribute("data-location-preset")).profileKey === profileKey;
    button.classList.toggle("is-active", matches);
    button.setAttribute("aria-pressed", matches ? "true" : "false");
  });
}

function applyLocation(rawValue) {
  const result = resolveLocation(rawValue);
  const savedValue = result.cleaned || profiles[result.profileKey].savedValue;
  document.getElementById("location-input").value = savedValue;
  lastAttemptedLocation = result.cleaned;
  activeLocationLabel = describeLocationForSignup(result.profileKey, result.cleaned);

  if (savedValue) {
    window.localStorage.setItem(storageKey, savedValue);
  } else {
    window.localStorage.removeItem(storageKey);
  }

  renderProfile(result.profileKey, { fallbackCity: result.matched ? "" : result.cleaned });
  showToast(
    result.matched
      ? `Local view set to ${profiles[result.profileKey].label}`
      : result.cleaned
        ? `${result.cleaned} saved with the broad fallback`
        : "Using the broad default"
  );
}

async function handleCtaSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("cta-form");
  const input = document.getElementById("email");
  const submitButton = document.getElementById("cta-submit");
  const meta = document.getElementById("cta-meta");
  const email = input.value.trim();

  input.value = email;
  if (!input.reportValidity()) {
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  const payload = {
    email,
    location: activeLocationLabel,
    source: "notafan.app early access",
    _subject: "Not a Fan early access request",
    _template: "table",
    _captcha: "false"
  };

  try {
    const response = await fetch(signupConfig.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMessage = typeof result.message === "string" ? result.message : "Signup failed";
      throw new Error(errorMessage);
    }

    form.reset();
    document.getElementById("cta-location").value = activeLocationLabel;
    meta.textContent = `Request sent. If this is the first submission, ${signupConfig.inbox} still needs to confirm FormSubmit's activation email.`;
    meta.classList.add("is-live");
    showToast("Request sent");
  } catch (error) {
    meta.textContent = `Signup isn't fully armed yet. First fix: activate FormSubmit in ${signupConfig.inbox}. Then submissions work without mailto nonsense.`;
    meta.classList.remove("is-live");
    showToast(error.message || "Signup failed");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Get early access";
  }
}

function renderSuggestionList() {
  const list = document.getElementById("location-suggestions");
  list.innerHTML = marketSuggestions.map((market) => `<option value="${market}"></option>`).join("");
}

function wireEvents() {
  document.getElementById("copy-safe-line").addEventListener("click", () => {
    copyText(profiles[activeProfileKey].safeLine, "Safe line copied");
  });

  document.getElementById("play-safe-line").addEventListener("click", () => {
    speakText(profiles[activeProfileKey].safeLine, "safe line");
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

  document.getElementById("cta-form").addEventListener("submit", handleCtaSubmit);
}

function init() {
  renderSuggestionList();
  const savedLocation = window.localStorage.getItem(storageKey);
  const result = resolveProfileFromSaved(savedLocation);
  document.getElementById("location-input").value = savedLocation || "";
  lastAttemptedLocation = result.cleaned;
  activeLocationLabel = describeLocationForSignup(result.profileKey, result.cleaned);
  renderProfile(result.profileKey, { fallbackCity: result.matched ? "" : result.cleaned });
  wireEvents();
}

init();
