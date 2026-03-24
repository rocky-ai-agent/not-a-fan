const profiles = {
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
    savedValue: ""
  },
  chicago: {
    label: "Chicago, IL",
    heroLede:
      "Not a Fan gives you one safe opener, one easy follow-up, and one local angle so Chicago sports chatter does not become a conversation you have to fake your way through.",
    heroProof: "Made for office kitchens, client dinners, and the second somebody decides the Bulls, Cubs, or Bears are now table conversation.",
    confidenceNote:
      "Short, believable lines still beat fake deep-cut opinions in Chicago.",
    bestRoom: "Office kitchen, client small talk, or a bar TV conversation that needs one clean line.",
    safeLine:
      "Chicago sports people can pivot from cautious hope to full therapy session in about thirty seconds.",
    safeContext:
      "Safe because it sounds local without pretending you watched every minute last night.",
    followUp: "So where is the real patience level right now, the Bears, the Bulls, or everybody?",
    localAngle:
      "Chicago is safer when you keep it broad: Bulls drift, Cubs hope, move on.",
    savedValue: "Chicago"
  },
  newyork: {
    label: "New York, NY",
    heroLede:
      "Not a Fan gives you one safe opener, one easy follow-up, and one local angle so New York sports chatter does not turn into a test you forgot to study for.",
    heroProof: "Made for office kitchens, client small talk, and the second somebody decides to ask about the Knicks or Yankees.",
    confidenceNote:
      "Broad emotional reads sound more believable in New York than pretending you watched four full games this week.",
    bestRoom: "Office kitchen, group chat, or pre-dinner sports-on-TV conversation.",
    safeLine:
      "This time of year New York sports people somehow have basketball stress and baseball hope at the exact same time.",
    safeContext:
      "Safe because it sounds local without claiming you watched every minute of anything.",
    followUp: "So what has people more stressed right now, the Knicks or everything else?",
    localAngle:
      "New York works when you acknowledge playoff nerves plus baseball optimism and then stop before it becomes debate club.",
    savedValue: "New York"
  },
  boston: {
    label: "Boston, MA",
    heroLede:
      "Not a Fan gives you one safe opener, one easy follow-up, and one local angle so Boston sports talk feels survivable instead of like a quiz with consequences.",
    heroProof: "Made for team lunches, post-work drinks, and any room where someone is one sentence away from explaining a playoff path.",
    confidenceNote:
      "In Boston, short reactions sound smarter than fake certainty.",
    bestRoom: "Team lunch, bar TV conversation, or a group chat after work.",
    safeLine:
      "Boston sports people always sound calm right before they start explaining a playoff path in alarming detail.",
    safeContext:
      "Safe because it flatters local seriousness without making you prove expertise.",
    followUp: "Does this actually feel like a real contender year or just regular-season confidence?",
    localAngle:
      "Boston is safer when you respect the stakes, say less, and let the real fan fill the silence.",
    savedValue: "Boston"
  }
};

const locationAliases = {
  chicago: "chicago",
  "60601": "chicago",
  "60602": "chicago",
  "60603": "chicago",
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
const signupConfig = {
  endpoint: "https://formsubmit.co/ajax/hello@notafan.app",
  inbox: "hello@notafan.app"
};
let activeProfileKey = "default";

function resolveProfile(input) {
  const normalized = input.trim().toLowerCase();
  return profiles[locationAliases[normalized]] ? locationAliases[normalized] : "default";
}

function resolveProfileFromSaved(input) {
  return input ? resolveProfile(input) : "default";
}

function renderProfile(profileKey) {
  activeProfileKey = profileKey;
  const profile = profiles[profileKey];
  const isDefault = profileKey === "default";

  document.getElementById("hero-lede").textContent = profile.heroLede;
  document.getElementById("hero-proof").textContent = profile.heroProof;
  document.getElementById("safe-line-text").textContent = `"${profile.safeLine}"`;
  document.getElementById("safe-line-context").textContent = profile.safeContext;
  document.getElementById("location-pill").textContent = isDefault
    ? "Default local angle: broad and safe"
    : `Personalized for ${profile.label}`;
  document.getElementById("location-saved").textContent = isDefault
    ? "Currently using the broad default"
    : `Currently tuned to ${profile.label}`;
  document.getElementById("hero-follow-up").textContent = profile.followUp;
  document.getElementById("hero-local-angle").textContent = profile.localAngle;
  document.getElementById("confidence-note").textContent = profile.confidenceNote;
  document.getElementById("best-room").textContent = profile.bestRoom;
  document.getElementById("cta-location").value = profile.label;
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
    const matches = resolveProfile(button.getAttribute("data-location-preset")) === profileKey;
    button.classList.toggle("is-active", matches);
    button.setAttribute("aria-pressed", matches ? "true" : "false");
  });
}

function applyLocation(rawValue) {
  const cleaned = rawValue.trim();
  const profileKey = resolveProfile(cleaned);
  const savedValue = cleaned || profiles[profileKey].savedValue;
  document.getElementById("location-input").value = savedValue;

  if (cleaned) {
    window.localStorage.setItem(storageKey, savedValue);
  } else {
    window.localStorage.removeItem(storageKey);
  }

  renderProfile(profileKey);
  showToast(
    profileKey === "default"
      ? "Using the broad default"
      : `Local view set to ${profiles[profileKey].label}`
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
    location: profiles[activeProfileKey].label,
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
    document.getElementById("cta-location").value = profiles[activeProfileKey].label;
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
  const savedLocation = window.localStorage.getItem(storageKey);
  const profileKey = resolveProfileFromSaved(savedLocation);
  document.getElementById("location-input").value = savedLocation || "";
  renderProfile(profileKey);
  wireEvents();
}

init();
