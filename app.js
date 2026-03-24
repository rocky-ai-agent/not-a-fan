const sportProfiles = {
  college: {
    key: "college",
    label: "College hoops",
    shortLabel: "College hoops",
    pill: "College hoops mode",
    heroLede:
      "One safe opener, one easy follow-up, and one local angle for bracket talk in about ten seconds.",
    heroProof:
      "Made for the exact moment somebody turns to you and says, \"Did your bracket get smoked too?\"",
    selectorHelper:
      "Start with College hoops for the safest default.",
    confidenceNote:
      "In tournament season, broad bracket pain sounds smarter than fake matchup analysis.",
    bestRoom: "Office chat, group text, or any room hijacked by bracket talk.",
    safeLine:
      "I don't pretend I know every team — I just ask who killed your bracket and let people vent.",
    safeContext:
      "Safe because it works with March Madness chatter whether the other person watched every game or none of them.",
    followUp: "Who do you still have alive, or is your bracket already a crime scene?",
    localAngle:
      "If they want more, keep it on bracket pain, one upset everybody remembers, or which conference people are mad at.",
    situation: "Office kitchens, awkward client chat, and group texts that suddenly turn into bracket talk.",
    personalizeTitle: "Want a sharper hometown angle?",
    personalizeDescription:
      "Start with the default line. If you want a more local version, enter a common sports market and the example updates instantly. If we do not cover your city yet, we fall back on purpose instead of bluffing.",
    cityPrompt: "City is optional.",
    note: "Human city names only. We cover the major sports markets and use a deliberate broad fallback for everything else."
  },
  nba: {
    key: "nba",
    label: "NBA",
    shortLabel: "NBA",
    pill: "NBA mode",
    heroLede:
      "One safe opener, one easy follow-up, and one local angle for NBA talk in about ten seconds.",
    heroProof:
      "Made for the exact moment somebody turns to you and says, \"You buying this team in the playoffs or not?\"",
    selectorHelper:
      "Choose NBA for playoff pressure, stars, or who looks built for a long series.",
    confidenceNote:
      "For NBA talk, one clean opinion about pressure or depth beats fake film-study nonsense.",
    bestRoom: "Office kitchen, client dinner, or bar-TV playoff conversation.",
    safeLine:
      "With the NBA I usually say a team looks scary until they have to win the same matchup four times.",
    safeContext:
      "Safe because it sounds like you understand playoff pressure without pretending you tracked every game.",
    followUp: "Who actually looks built for a seven-game series instead of one hot week?",
    localAngle:
      "If they want more, stay on stars, depth, and whether you'd trust that team late in Game 6.",
    situation: "Office kitchens, client dinners, and group texts that suddenly turn into playoff talk.",
    personalizeTitle: "Want a sharper local NBA angle?",
    personalizeDescription:
      "Use the NBA line first. If you want it to sound more hometown-specific, enter a common sports market and the example sharpens without turning into fake expert talk.",
    cityPrompt: "City is optional.",
    note: "Human city names only. Major markets only. We keep the fallback broad instead of bluffing."
  },
  mlb: {
    key: "mlb",
    label: "MLB",
    shortLabel: "MLB",
    pill: "MLB mode",
    heroLede:
      "One safe opener, one easy follow-up, and one local angle for baseball talk in about ten seconds.",
    heroProof:
      "Made for the exact moment somebody turns to you and says, \"It's early, but are you buying this team?\"",
    selectorHelper:
      "Choose MLB for long-season talk, hot starts, and October trust issues.",
    confidenceNote:
      "For baseball talk, patience and expectations sound more believable than pretending you know the full bullpen.",
    bestRoom: "Office chat, patio drinks, or background-TV baseball talk.",
    safeLine:
      "With baseball I usually go with, 'Ask me again in June' because every team looks alive for one week and cooked the next.",
    safeContext:
      "Safe because it fits almost any MLB conversation without forcing you into player-specific trivia.",
    followUp: "Does this look real to you, or is it still the part of the season where fans talk themselves into anything?",
    localAngle:
      "If they want more, keep it on whether the lineup feels real, whether the pitching holds up, and how jumpy that fan base gets.",
    situation: "Office chat, patio drinks, and background-TV baseball conversation.",
    personalizeTitle: "Want a sharper local baseball angle?",
    personalizeDescription:
      "Start with the MLB line. Then add a city only if you want the hometown version to feel sharper and more believable.",
    cityPrompt: "City is optional.",
    note: "Human city names only. Major markets only. We use a broad fallback on purpose."
  },
  nfl: {
    key: "nfl",
    label: "NFL",
    shortLabel: "NFL",
    pill: "NFL mode",
    heroLede:
      "One safe opener, one easy follow-up, and one local angle for football talk in about ten seconds.",
    heroProof:
      "Made for the exact moment somebody turns to you and says, \"So are you buying the hype this year?\"",
    selectorHelper:
      "Choose NFL for hype, quarterback trust issues, and season optimism.",
    confidenceNote:
      "For football chatter, expectations and skepticism land better than pretending you studied every snap.",
    bestRoom: "Office kitchen, client lunch, or sports-bar TV conversation.",
    safeLine:
      "With football I usually say every fan base is excited in August and mad at the offensive line by October.",
    safeContext:
      "Safe because it works in NFL conversations almost anywhere without making you fake film-room confidence.",
    followUp: "Who do you actually trust once the preseason optimism wears off?",
    localAngle:
      "If they want more, keep it on quarterback trust, line play, and whether the hype feels earned yet.",
    situation: "Office kitchens, client lunches, and group texts that suddenly become quarterback talk.",
    personalizeTitle: "Want a sharper local football angle?",
    personalizeDescription:
      "Use the NFL line first. Add a city only if you want the local version underneath. Same idea, less generic.",
    cityPrompt: "City is optional.",
    note: "Human city names only. Major markets only. Broad fallback if we do not cover it."
  },
  nhl: {
    key: "nhl",
    label: "NHL",
    shortLabel: "NHL",
    pill: "NHL mode",
    heroLede:
      "One safe opener, one easy follow-up, and one local angle for hockey talk in about ten seconds.",
    heroProof:
      "Made for the exact moment somebody turns to you and says, \"So is this team actually built for a playoff run?\"",
    selectorHelper:
      "Choose NHL for playoff grind, depth, and hot-goalie talk.",
    confidenceNote:
      "For hockey talk, effort, depth, and playoff nerves sound smarter than bluffing line combinations.",
    bestRoom: "Office chat, arena-adjacent bar talk, or background-TV playoff conversation.",
    safeLine:
      "With hockey I usually say everybody feels great until the goalie has one bad week and the whole mood changes.",
    safeContext:
      "Safe because it sounds normal in NHL talk without requiring you to fake deep hockey knowledge.",
    followUp: "Who actually looks sturdy enough for two straight months of playoff hockey?",
    localAngle:
      "If they want more, keep it on goalie trust, depth, and whether that team looks built for ugly playoff games.",
    situation: "Office chat, playoff bar talk, and group texts that suddenly care about overtime hockey.",
    personalizeTitle: "Want a sharper local hockey angle?",
    personalizeDescription:
      "Start with the NHL line. Then add a city if you want the local market mood layered underneath.",
    cityPrompt: "City is optional.",
    note: "Human city names only. Major markets only. Broad fallback if the city is outside coverage."
  }
};

const cityProfiles = {
  default: {
    label: "Broad default",
    savedValue: "",
    fallbackHint: "Currently using the broad default"
  },
  atlanta: {
    label: "Atlanta, GA",
    savedValue: "Atlanta",
    sportLines: {
      college: {
        line: "In Atlanta, college hoops talk gets loud fast once somebody decides the SEC was either disrespected or totally fake.",
        followUp: "So are Atlanta people on the 'just take the good teams' side, or is this the annual chaos-bracket performance?",
        angle: "In Atlanta, keep it on the SEC, bracket damage, and one team everybody suddenly has a strong opinion about.",
        context: "Safe because it sounds local without pretending you watched every game."
      },
      nba: {
        line: "Atlanta NBA talk usually lands on the Hawks being one real run away from making the whole city care again.",
        followUp: "Do Hawks fans actually think this is building into something, or is it another fake little run?",
        angle: "With Atlanta NBA talk, stay on momentum, expectations, and whether the Hawks feel stuck in the middle again.",
        context: "Safe because it feels local without trapping you in roster specifics."
      },
      mlb: {
        line: "Atlanta baseball talk usually starts from the assumption that the Braves are supposed to be good and anything less is annoying.",
        followUp: "Does this Braves team feel actually dangerous, or just good enough to keep the pressure high?",
        angle: "In Atlanta baseball talk, keep it on standards, October expectations, and how little patience people have for a cold stretch.",
        context: "Safe because the Braves are the obvious gravity well without you needing deep details."
      },
      nfl: {
        line: "Atlanta football talk always has one person saying the Falcons finally make sense and another person flatly refusing to buy it.",
        followUp: "So do Falcons fans actually trust this version, or is it still mostly defensive optimism?",
        angle: "With Atlanta football, keep it on trust, quarterback belief, and whether people are ready to get hurt again.",
        context: "Safe because it sounds like you understand the city's rhythm without bluffing specifics."
      },
      nhl: {
        line: "Atlanta hockey talk is basically a choice between making a Thrashers joke and finding out who is still weirdly sincere about it.",
        followUp: "If Atlanta got a team back, would people actually go all in, or just enjoy the joke for a while?",
        angle: "For Atlanta hockey talk, keep it light, a little nostalgic, and do not act like there is a current local beat to follow.",
        context: "Safe because it acknowledges the market reality instead of pretending there is a live NHL beat there."
      }
    }
  },
  boston: {
    label: "Boston, MA",
    savedValue: "Boston",
    sportLines: {
      college: {
        line: "In Boston, bracket talk somehow turns into a referendum on whether you respect basketball seriousness quickly enough.",
        followUp: "So is this a trust-the-bluebloods year or a chaos year?",
        angle: "Boston college hoops talk is safer when you sound calm and let someone else get intense.",
        context: "Safe because it flatters the room's seriousness without making you prove expertise."
      },
      nba: {
        line: "Boston NBA talk is calm right up until somebody starts mapping the Celtics playoff path like a military exercise.",
        followUp: "Does this Celtics group actually feel title-clean or just good enough to raise stress levels?",
        angle: "Boston NBA is safer when you respect the stakes and say less.",
        context: "Safe because it sounds local without forcing you into film-room cosplay."
      },
      mlb: {
        line: "Boston baseball talk always sounds like Red Sox expectations are either completely back or one week from collapse.",
        followUp: "Does this feel like a real Red Sox year or just the city talking itself into one?",
        angle: "Boston baseball is safer when you stay on expectations and history, not specifics.",
        context: "Safe because local mood does most of the work."
      },
      nfl: {
        line: "Boston football talk still carries the Patriots standard even when everybody knows the room changed years ago.",
        followUp: "What actually feels more real right now, Patriots patience or Patriots delusion?",
        angle: "Boston football works when you acknowledge the old standard and the current reality without overdoing either.",
        context: "Safe because it sounds like you know the market's emotional baseline."
      },
      nhl: {
        line: "Boston hockey talk gets serious fast because Bruins expectations are treated like civic business.",
        followUp: "Do Bruins people actually trust this group in a playoff series?",
        angle: "Boston hockey is safer when you stay on trust, depth, and playoff nerves.",
        context: "Safe because it respects how seriously the city takes hockey without bluffing specifics."
      }
    }
  },
  chicago: {
    label: "Chicago, IL",
    savedValue: "Chicago",
    sportLines: {
      college: {
        line: "Chicago bracket talk usually turns into people talking themselves into the Big Ten and immediately regretting it.",
        followUp: "So is this a 'trust the Big Ten' year, or are we doing the annual heartbreak routine again?",
        angle: "In Chicago, keep college hoops talk on Big Ten trust issues, bracket pain, and one upset everybody is still mad about.",
        context: "Safe because it sounds familiar without making you fake game-by-game knowledge."
      },
      nba: {
        line: "Chicago NBA talk can go from 'maybe the Bulls have something' to full group therapy in about thirty seconds.",
        followUp: "What is lower right now: Bulls patience, or Bulls standards?",
        angle: "With Chicago NBA talk, stay on patience, direction, and whether anybody really believes the Bulls have a plan.",
        context: "Safe because it sounds local without claiming you watched every possession."
      },
      mlb: {
        line: "Chicago baseball talk is easy because Cubs optimism and White Sox misery are usually both available within one sentence.",
        followUp: "Which side of town feels less exhausting right now?",
        angle: "In Chicago baseball talk, stay on the city split, mood, and whether anyone on the South Side still has patience left.",
        context: "Safe because the city split gives you a believable lane without trivia."
      },
      nfl: {
        line: "Chicago football talk is usually one part quarterback hope and two parts people waiting for the Bears to ruin it.",
        followUp: "Do Bears fans actually feel better, or is this just the pleasant stage before panic returns?",
        angle: "With Chicago football, keep it on quarterback hope, franchise trust issues, and how fast the room can turn.",
        context: "Safe because it sounds like you know the city's tone without pretending to study tape."
      },
      nhl: {
        line: "Chicago hockey talk still has Blackhawks memory in it, even when everybody knows this is not the glory-years version.",
        followUp: "Does anybody in Chicago think the Blackhawks are actually turning a corner yet?",
        angle: "In Chicago hockey talk, stay on timeline, expectations, and whether the rebuild feels real yet.",
        context: "Safe because it acknowledges the market without overselling your knowledge."
      }
    }
  },
  dallas: {
    label: "Dallas-Fort Worth, TX",
    savedValue: "Dallas",
    sportLines: {
      college: {
        line: "Dallas bracket talk always sounds a little like football people applying full confidence to a sport they barely watched in January.",
        followUp: "So is this a chalk bracket year, or is everybody already rehearsing their 'I saw the upset coming' line?",
        angle: "In Dallas, keep college hoops talk on bracket confidence, one upset pick, and who is acting way too sure of themselves.",
        context: "Safe because it sounds plausible without making you fake scouting knowledge."
      },
      nba: {
        line: "Dallas NBA talk usually starts with the Mavs and ends with somebody insisting one star can drag the whole operation into June.",
        followUp: "Do Mavs fans actually trust the whole setup, or just the guy carrying the conversation?",
        angle: "With Dallas NBA talk, stay on star power, support around it, and whether people trust the team around the headline name.",
        context: "Safe because it feels local without trapping you in lineup specifics."
      },
      mlb: {
        line: "Dallas baseball talk is easier because Rangers confidence always sounds casual, even when expectations are doing all the work.",
        followUp: "Does this Rangers team feel sturdy to you, or just explosive enough to keep everybody talking?",
        angle: "In Dallas baseball talk, stay on confidence, October expectations, and whether the Rangers still feel dangerous.",
        context: "Safe because it sounds local without making you fake homework."
      },
      nfl: {
        line: "In Dallas, somebody can bring up the Cowboys in April and still talk like it is the only sport on earth.",
        followUp: "What is stronger right now: Cowboys belief, or Cowboys fatigue?",
        angle: "With Dallas football, acknowledge the Cowboys gravity, ask one trust question, and let the actual fan take over.",
        context: "Safe because the Cowboys suck all the oxygen out of the room for you."
      },
      nhl: {
        line: "Dallas hockey talk is one of those things outsiders underestimate until Stars fans start sounding serious immediately.",
        followUp: "Do Stars fans actually trust this team for a real run, or just respect that it is always around?",
        angle: "In Dallas hockey talk, stay on seriousness, playoff trust, and whether the Stars feel built for another long spring.",
        context: "Safe because it respects the market without bluffing detail."
      }
    }
  },
  denver: {
    label: "Denver, CO",
    savedValue: "Denver",
    sportLines: {
      college: {
        line: "Denver bracket talk stays mellow until somebody decides Mountain West disrespect is now the whole conversation.",
        followUp: "So is this a trust-the-chaos year or a don't-overthink-it year?",
        angle: "Denver college hoops works better as a vibe read than a fake scouting report.",
        context: "Safe because it sounds like you were in the room without bluffing specifics."
      },
      nba: {
        line: "Denver NBA talk is calm right up until somebody asks whether the Nuggets still feel inevitable.",
        followUp: "Do the Nuggets still feel like the standard there or just the safest bet in a messy field?",
        angle: "Denver NBA is safer when you stay on standards and trust, not fake bench analysis.",
        context: "Safe because it sounds local without overreaching."
      },
      mlb: {
        line: "Denver baseball talk usually starts with the Rockies and then everyone remembers why they were trying to stay positive.",
        followUp: "Does anybody there actually believe in a Rockies direction right now?",
        angle: "Denver baseball is safer when you keep it on patience and reality, not details.",
        context: "Safe because the emotional temperature does the work."
      },
      nfl: {
        line: "Denver football talk can sound chill until the Broncos come up and then the whole room shifts posture.",
        followUp: "What feels more real right now, Broncos optimism or Broncos exhaustion?",
        angle: "Denver football works when you stay on belief versus caution.",
        context: "Safe because it sounds like you understand the city's pressure points."
      },
      nhl: {
        line: "Denver hockey talk usually comes with Avalanche expectations baked in whether the room admits it or not.",
        followUp: "Do Avs people actually trust this team in a long playoff run?",
        angle: "Denver hockey is safer when you stay on standards and playoff trust.",
        context: "Safe because it feels local without needing technical hockey detail."
      }
    }
  },
  detroit: {
    label: "Detroit, MI",
    savedValue: "Detroit",
    sportLines: {
      college: {
        line: "Detroit bracket talk usually sounds like Big Ten hope mixed with preemptive disappointment management.",
        followUp: "Does anybody there actually trust the bracket to behave?",
        angle: "Detroit college hoops is safer when you keep it on trust issues and tournament mood.",
        context: "Safe because it sounds believable without specifics."
      },
      nba: {
        line: "Detroit NBA talk still carries a little Pistons scar tissue even when somebody tries to sound optimistic.",
        followUp: "Is there real Pistons patience left or just survival mode?",
        angle: "Detroit NBA works when you stay on timeline and patience instead of fake roster takes.",
        context: "Safe because the city's emotional read does the work."
      },
      mlb: {
        line: "Detroit baseball talk is finally interesting again because Tigers hope no longer feels completely theoretical.",
        followUp: "Do Tigers people actually believe this can stay real?",
        angle: "Detroit baseball is safer when you acknowledge the hope and the caution at the same time.",
        context: "Safe because it sounds local without bluffing specifics."
      },
      nfl: {
        line: "Detroit football talk finally sounds like hope is allowed again, which still throws people off a little.",
        followUp: "Do Lions people feel more confident than nervous right now or not quite?",
        angle: "Detroit football is safest when you respect both the optimism and the trust issues.",
        context: "Safe because it acknowledges the city mood without pretending you know every wrinkle."
      },
      nhl: {
        line: "Detroit hockey talk still carries Red Wings standards even when everybody knows the timeline changed.",
        followUp: "Does Detroit actually feel like the Wings are back on a serious path?",
        angle: "Detroit hockey works when you stay on standards, patience, and whether the arc feels real.",
        context: "Safe because it respects the market's history without overplaying expertise."
      }
    }
  },
  houston: {
    label: "Houston, TX",
    savedValue: "Houston",
    sportLines: {
      college: {
        line: "Houston bracket talk gets real fast because somebody will absolutely treat the Cougars like a civic responsibility.",
        followUp: "Does Houston feel like a real title-town in college hoops right now or just very loud about it?",
        angle: "In Houston college hoops talk, stay on pressure, expectations, and how quickly the whole room starts sounding invested.",
        context: "Safe because it sounds local without making you fake deep matchup takes."
      },
      nba: {
        line: "Houston NBA talk usually sounds measured until somebody decides the Rockets timeline is ahead of schedule.",
        followUp: "Do Rockets people actually trust the climb yet or just like the energy?",
        angle: "Houston NBA is safer when you keep it on trajectory and trust, not fake details.",
        context: "Safe because it feels local without trapping you in roster specifics."
      },
      mlb: {
        line: "Houston baseball talk can sound casual even when Astros expectations are doing all the talking underneath.",
        followUp: "What feels more real right now, Astros standards or Astros fatigue?",
        angle: "In Houston baseball talk, stay on standards, confidence, and whether the Astros still feel like the default serious team in the room.",
        context: "Safe because the Astros give you a believable local lane immediately."
      },
      nfl: {
        line: "Houston football talk usually starts rationally and ends with somebody selling Texans optimism like a growth stock.",
        followUp: "So is Texans momentum actually real or just aggressively marketable right now?",
        angle: "Houston football is safer when you keep it on momentum and trust.",
        context: "Safe because it sounds like you know the city's posture without bluffing specifics."
      },
      nhl: {
        line: "Houston hockey talk is mostly a hypothetical about whether the city would instantly act like it had always cared.",
        followUp: "If Houston got an NHL team tomorrow, how long before people acted like it was life or death?",
        angle: "Houston plus hockey is safer if you keep it hypothetical and a little dry.",
        context: "Safe because there is no need to pretend there is an actual local NHL beat."
      }
    }
  },
  losangeles: {
    label: "Los Angeles, CA",
    savedValue: "Los Angeles",
    sportLines: {
      college: {
        line: "L.A. bracket talk sounds casual right up until somebody turns USC or UCLA into a whole identity discussion.",
        followUp: "So does L.A. actually care about March hoops right now, or only once the games get impossible to ignore?",
        angle: "In L.A., keep college hoops talk on attention level, school energy, and who starts acting serious once the bracket tightens up.",
        context: "Safe because it sounds local without forcing you into school-specific homework."
      },
      nba: {
        line: "L.A. NBA talk feels relaxed right up until you sound casual about the wrong team and start a whole thing.",
        followUp: "What is louder right now: Lakers drama, or actual confidence the Clippers can do something real?",
        angle: "With L.A. NBA talk, keep it on spotlight, pressure, and which team people actually trust once the games matter.",
        context: "Safe because it sounds local without trapping you in a team war."
      },
      mlb: {
        line: "L.A. baseball talk is easy because Dodgers expectations do most of the talking for you before anyone says a word.",
        followUp: "Does this feel like normal Dodgers pressure, or the kind that gets weird early?",
        angle: "In L.A. baseball talk, stay on expectation tax, October pressure, and whether anyone trusts calm to last.",
        context: "Safe because everybody already knows where the gravity is."
      },
      nfl: {
        line: "L.A. football talk still feels a little optional until the Rams get good enough for people to have real opinions again.",
        followUp: "Do people there actually care right now, or just enough to produce opinions on command?",
        angle: "With L.A. football, keep it on attention level, credibility, and whether the market feels locked in or just mildly interested.",
        context: "Safe because it sounds honest about the market."
      },
      nhl: {
        line: "L.A. hockey talk gets serious faster than outsiders expect once Kings fans decide you are worth explaining things to.",
        followUp: "Do the Kings actually feel dangerous there right now, or just respectable?",
        angle: "In L.A. hockey talk, stay on seriousness, playoff credibility, and whether the Kings feel worth getting invested in.",
        context: "Safe because it respects the local lane without bluffing details."
      }
    }
  },
  miami: {
    label: "Miami, FL",
    savedValue: "Miami",
    sportLines: {
      college: {
        line: "Miami bracket talk usually sounds stylish until somebody starts arguing whether the ACC deserves trust again.",
        followUp: "So is this a trust-the-bracket year or a chaos year with better weather?",
        angle: "Miami college hoops is safer when you keep it on bracket chaos and confidence, not specifics.",
        context: "Safe because it sounds natural without pretending you tracked everything."
      },
      nba: {
        line: "Miami NBA talk can make Heat confidence sound casual even when the pressure level is doing all the work.",
        followUp: "What feels sturdier right now, Heat belief or the mythology around Heat belief?",
        angle: "Miami NBA is safer when you stay on confidence, culture, and whether anybody actually trusts it.",
        context: "Safe because it feels local without needing fake scheme talk."
      },
      mlb: {
        line: "Miami baseball talk usually starts with the Marlins and ends with everyone remembering the city has other priorities.",
        followUp: "Does anyone there actually feel real Marlins momentum or is it still background noise?",
        angle: "Miami baseball is safer when you keep it on attention level and surprise value.",
        context: "Safe because it sounds honest about the market."
      },
      nfl: {
        line: "Miami football talk can make Dolphins optimism sound clean even when everybody knows the trust issues are still in the room.",
        followUp: "Do Dolphins people actually trust this version yet or just enjoy the idea of it?",
        angle: "Miami football works when you stay on swagger versus trust.",
        context: "Safe because the city's tone does most of the work."
      },
      nhl: {
        line: "Miami hockey talk stopped being a novelty once Panthers seriousness became part of the local conversation.",
        followUp: "Do Panthers people expect another deep run now or still treat it like a surprise?",
        angle: "Miami hockey is safer when you stay on credibility and expectations.",
        context: "Safe because it acknowledges the shift without pretending you know all the line combos."
      }
    }
  },
  minneapolis: {
    label: "Minneapolis-St. Paul, MN",
    savedValue: "Minneapolis",
    sportLines: {
      college: {
        line: "Twin Cities bracket talk always carries a little hope and a little emotional weather preparedness.",
        followUp: "So is this a trust-the-bracket year or a brace-for-impact year?",
        angle: "In Twin Cities college hoops talk, stay on emotional temperature, bracket nerves, and whether anybody really trusts a calm March.",
        context: "Safe because it sounds local without overcommitting."
      },
      nba: {
        line: "Minnesota NBA talk sounds more confident now, but Timberwolves hope still comes with a backup plan emotionally.",
        followUp: "Do Wolves people actually trust this level now or still wait for the turn?",
        angle: "Minnesota NBA is safer when you keep it on trust and emotional history.",
        context: "Safe because it feels real without needing technical basketball detail."
      },
      mlb: {
        line: "Minnesota baseball talk usually lands somewhere between Twins competence and weather-related realism.",
        followUp: "Does this Twins group actually feel sturdy enough to trust?",
        angle: "In Minnesota baseball talk, stay on steadiness, trust, and whether the Twins feel solid enough to believe without getting cute.",
        context: "Safe because it sounds like a local read without bluffing specifics."
      },
      nfl: {
        line: "Minnesota football talk can sound optimistic and emotionally braced at the same time, which is honestly impressive.",
        followUp: "Do Vikings people feel real confidence right now or just familiar temptation?",
        angle: "Minnesota football is safer when you respect the hope and the scar tissue equally.",
        context: "Safe because it acknowledges the city's emotional baseline."
      },
      nhl: {
        line: "Minnesota hockey talk is serious because the Wild and the whole State of Hockey thing are never really background noise.",
        followUp: "Do Wild people actually trust this team in a playoff setting?",
        angle: "Minnesota hockey is safer when you respect the identity and avoid pretending you know every line.",
        context: "Safe because it honors the market without bluffing detail."
      }
    }
  },
  newyork: {
    label: "New York, NY",
    savedValue: "New York",
    sportLines: {
      college: {
        line: "New York bracket talk always turns into people pretending they definitely watched enough ball to hate the committee properly.",
        followUp: "So is this a chalk year, or are we doing the annual fake-genius sleeper routine?",
        angle: "In New York, keep college hoops talk on bracket stress, committee complaints, and who suddenly thinks they found the trap game.",
        context: "Safe because it sounds like you know the room without claiming too much."
      },
      nba: {
        line: "New York NBA talk is never calm because the Knicks can turn one good week into civic destiny or public panic.",
        followUp: "What is louder right now: actual Knicks confidence, or emergency Knicks expectation management?",
        angle: "With New York NBA talk, stay on pressure, expectations, and how quickly the city can turn one win into a parade route.",
        context: "Safe because it feels local without pretending you watched four games this week."
      },
      mlb: {
        line: "New York baseball talk is easy because Yankees standards and Mets emotional weather are both always in season.",
        followUp: "Which side feels more stable right now: Yankees standards, or Mets hope?",
        angle: "In New York baseball talk, stay on pressure, overreaction, and which fan base seems more tired this week.",
        context: "Safe because the city does half the writing for you."
      },
      nfl: {
        line: "New York football talk is basically Jets hope and Giants skepticism trying to coexist in the same sentence.",
        followUp: "What feels more fragile right now: Jets belief, or Giants patience?",
        angle: "With New York football, keep it on quarterback trust, franchise patience, and which fan base is closer to snapping.",
        context: "Safe because it sounds local without inviting a fact check."
      },
      nhl: {
        line: "New York hockey talk can go tribal immediately depending on whether Rangers energy or Islanders grievance shows up first.",
        followUp: "Who feels more real there right now: the Rangers, or the Islanders case their fans keep trying to make?",
        angle: "In New York hockey talk, acknowledge the tribal part, ask who feels real, and stop before you accidentally pick a side too hard.",
        context: "Safe because it sounds like you know the city's split loyalties."
      }
    }
  },
  philadelphia: {
    label: "Philadelphia, PA",
    savedValue: "Philadelphia",
    sportLines: {
      college: {
        line: "Philly bracket talk is direct enough that fake confidence gets detected almost immediately.",
        followUp: "So is this a trust-the-bracket year or a throw-the-bracket-in-the-river year?",
        angle: "Philly college hoops is safer when you keep it honest and broad.",
        context: "Safe because it sounds normal without inviting interrogation."
      },
      nba: {
        line: "Philly NBA talk can hear fake confidence from across the room, especially if the Sixers come up.",
        followUp: "Do Sixers people actually trust this setup right now or are they just trying not to say the quiet part out loud?",
        angle: "Philly NBA is safer when you stay on trust and nerves, not fake detail.",
        context: "Safe because it sounds local without getting you cross-examined."
      },
      mlb: {
        line: "Philly baseball talk is easier because Phillies confidence and the city's ability to get tense are both always available.",
        followUp: "What feels more stable right now, Phillies belief or Philadelphia's emotional regulation?",
        angle: "Philly baseball works when you stay on confidence and edge.",
        context: "Safe because it respects the market without overreaching."
      },
      nfl: {
        line: "Philadelphia football talk is direct, suspicious, and ready to argue with your tone if needed.",
        followUp: "Do Eagles people actually feel calm right now or just louder than the rest of us?",
        angle: "Philly football is safer when you respect the edge and keep your take short.",
        context: "Safe because it sounds local without inviting a full audit."
      },
      nhl: {
        line: "Philly hockey talk gets intense fast because Flyers patience is not a naturally abundant resource.",
        followUp: "Does anyone there really think the Flyers timeline is clean yet?",
        angle: "Philly hockey is safer when you stay on patience and edge, not specifics.",
        context: "Safe because it fits the market mood without bluffing detail."
      }
    }
  },
  phoenix: {
    label: "Phoenix, AZ",
    savedValue: "Phoenix",
    sportLines: {
      college: {
        line: "Phoenix bracket talk usually has one person acting calm and another person treating Arizona basketball stress like a full-time identity.",
        followUp: "So is this an Arizona trust year, or are we already back to bracket anxiety?",
        angle: "In Phoenix, keep college hoops talk on Arizona nerves, bracket expectations, and who is pretending to be calm.",
        context: "Safe because it sounds plausible without needing deep college hoops detail."
      },
      nba: {
        line: "Phoenix NBA talk can sound hopeful and emotionally pre-braced in the same sentence, which honestly fits.",
        followUp: "What feels more fragile right now: Suns confidence, or Arizona sports peace in general?",
        angle: "With Phoenix NBA talk, stay on pressure, trust, and how quickly the Suns can make people feel nervous again.",
        context: "Safe because it feels local without pretending you watched every possession."
      },
      mlb: {
        line: "Phoenix baseball talk is easier now because the Diamondbacks feel real enough that people are not forcing the optimism anymore.",
        followUp: "Do Diamondbacks fans trust this to stay real, or does it still feel a little like a nice surprise?",
        angle: "In Phoenix baseball talk, stay on credibility, momentum, and whether this feels like a real window or just a fun stretch.",
        context: "Safe because it sounds local without player-specific homework."
      },
      nfl: {
        line: "Phoenix football talk usually starts sunny and gets tense the second somebody asks if the Cardinals are actually going anywhere.",
        followUp: "Do Cardinals fans actually buy this direction, or do they just need a reason to stay engaged?",
        angle: "With Phoenix football, keep it on hope, trust issues, and whether anyone believes the plan is more than marketing yet.",
        context: "Safe because it acknowledges the market without bluffing specifics."
      },
      nhl: {
        line: "Phoenix hockey talk has a weird aftertaste now because everybody still has Coyotes-shaped scar tissue.",
        followUp: "Does Arizona even want to talk hockey seriously right now, or mostly re-litigate what happened?",
        angle: "In Phoenix hockey talk, keep it on the weirdness, the loss, and do not act like there is a normal market mood right now.",
        context: "Safe because it matches the market reality."
      }
    }
  },
  sanfrancisco: {
    label: "Bay Area, CA",
    savedValue: "San Francisco",
    sportLines: {
      college: {
        line: "Bay Area bracket talk can sound like a systems review with bonus complaints about the selection committee.",
        followUp: "So is this a trust-the-models year or a chaos year pretending to be data-driven?",
        angle: "In Bay Area college hoops talk, stay on bracket logic theater, confidence, and who suddenly sounds like they brought a model to lunch.",
        context: "Safe because it sounds local without requiring actual spreadsheet receipts."
      },
      nba: {
        line: "Bay Area NBA talk can turn a normal Warriors conversation into a long-term organizational philosophy meeting.",
        followUp: "What has the higher expectation tax right now, the Warriors brand or the actual roster reality?",
        angle: "Bay Area NBA is safer when you keep it on standards and timeline, not fake rotation talk.",
        context: "Safe because it feels local without forcing you into debate mode."
      },
      mlb: {
        line: "Bay Area baseball talk is easy because Giants seriousness and A's emotional residue are both always floating around.",
        followUp: "What feels more alive there right now, Giants belief or everyone still being mad about baseball politics?",
        angle: "Bay Area baseball is safer when you stay on expectations and mood.",
        context: "Safe because it sounds local without trivia."
      },
      nfl: {
        line: "Bay Area football talk usually mixes 49ers confidence with the kind of overanalysis that sounds expensive.",
        followUp: "Do 49ers people still feel like the standard there or just the most exhausting contender?",
        angle: "In Bay Area football talk, stay on expectation tax, trust, and whether the 49ers still feel inevitable or just draining.",
        context: "Safe because it feels local without fake film breakdowns."
      },
      nhl: {
        line: "Bay Area hockey talk is more niche, but Sharks people can still make it sound like a long rebuild discussion you should respect.",
        followUp: "Does anyone there think the Sharks timeline is meaningfully turning yet?",
        angle: "Bay Area hockey is safer when you keep it on timeline and patience.",
        context: "Safe because it respects the market without overdoing it."
      }
    }
  },
  seattle: {
    label: "Seattle, WA",
    savedValue: "Seattle",
    sportLines: {
      college: {
        line: "Seattle bracket talk sounds calm until somebody starts selling a sleeper pick like it is morally correct.",
        followUp: "So is this a smart-chaos bracket year or a keep-it-simple year?",
        angle: "Seattle college hoops is safer when you keep it on vibe and bracket philosophy, not specifics.",
        context: "Safe because it sounds natural without bluffing details."
      },
      nba: {
        line: "Seattle NBA talk is mostly a reminder that the city will absolutely care the second it gets a team back.",
        followUp: "If Seattle had an NBA team tomorrow, how long before the city acted like it had always been the plan?",
        angle: "Seattle plus NBA is safer when you keep it on appetite and anticipation.",
        context: "Safe because the city does not have a current NBA team, so honesty wins."
      },
      mlb: {
        line: "Seattle baseball talk has perfected sounding hopeful and guarded at the exact same time.",
        followUp: "What feels more real right now, Mariners optimism or Mariners trust issues?",
        angle: "In Seattle baseball talk, stay on optimism, trust issues, and whether this version feels safe to believe in yet.",
        context: "Safe because it acknowledges the city's emotional pattern without pretending expertise."
      },
      nfl: {
        line: "Seattle football talk sounds calm until Seahawks expectations show up and then the optimism and dread start sharing a chair.",
        followUp: "Do Seahawks people actually feel patient right now or just temporarily composed?",
        angle: "In Seattle football talk, stay on patience, trust, and how fast composed can turn into loud again.",
        context: "Safe because it feels local without pretending you tracked every snap."
      },
      nhl: {
        line: "Seattle hockey talk still carries Kraken novelty energy, but people have moved well past pretending it is just a mascot story.",
        followUp: "Do Kraken people actually trust this thing to turn serious now?",
        angle: "Seattle hockey is safer when you keep it on growth, credibility, and patience.",
        context: "Safe because it respects the market without bluffing deep knowledge."
      }
    }
  },
  stlouis: {
    label: "St. Louis, MO",
    savedValue: "St. Louis",
    sportLines: {
      college: {
        line: "St. Louis bracket talk is more serious than outsiders expect, especially once local hoops pride shows up.",
        followUp: "So is this a trust-the-bracket year or a everybody-thinks-they-found-the-trap year?",
        angle: "St. Louis college hoops is safer when you sound respectful and broad.",
        context: "Safe because it fits the market without inviting a quiz."
      },
      nba: {
        line: "St. Louis NBA talk is mostly a reminder that the city can care a lot about basketball without having a local team to dump it on.",
        followUp: "If St. Louis had an NBA team tomorrow, would the city be instantly intense about it?",
        angle: "St. Louis plus NBA is safer when you keep it on appetite and basketball seriousness.",
        context: "Safe because there is no need to pretend there is a current local NBA story."
      },
      mlb: {
        line: "St. Louis baseball talk can make normal conversation sound like a standards meeting, especially when the Cardinals come up.",
        followUp: "So what feels more touchy right now, Cardinals expectations or the city's patience level?",
        angle: "St. Louis baseball is safer when you acknowledge the standards and keep your take short.",
        context: "Safe because the Cardinals do the heavy lifting for you."
      },
      nfl: {
        line: "St. Louis football talk is mostly a weird blend of residual bitterness and people pretending they are over it.",
        followUp: "Does St. Louis even want to talk NFL seriously now or just stay mad on principle?",
        angle: "St. Louis plus NFL is safer when you keep it honest and a little dry.",
        context: "Safe because the market reality is messy and bluffing would sound stupid."
      },
      nhl: {
        line: "St. Louis hockey talk is straightforward because Blues people treat seriousness like the default setting.",
        followUp: "Do Blues fans actually trust this group right now or just respect the standard?",
        angle: "St. Louis hockey works when you stay on trust and expectations.",
        context: "Safe because it respects the market without overplaying expertise."
      }
    }
  },
  washington: {
    label: "Washington, DC",
    savedValue: "Washington, DC",
    sportLines: {
      college: {
        line: "DC bracket talk sounds rational for about ten seconds and then somebody starts acting like they solved the whole field.",
        followUp: "So is this a trust-the-committee year or a complain-about-the-committee year?",
        angle: "DC college hoops is safer when you keep it on bracket politics and expectations.",
        context: "Safe because it sounds like a local room without bluffing specifics."
      },
      nba: {
        line: "DC NBA talk usually sounds measured because Wizards conversation is less about hype and more about surviving the timeline.",
        followUp: "Does anyone there actually think the Wizards arc feels clean yet?",
        angle: "DC NBA is safer when you stay on realism and patience.",
        context: "Safe because it feels honest about the market."
      },
      mlb: {
        line: "DC baseball talk is easier because Nationals conversation can still pivot between patience and sudden optimism fast.",
        followUp: "Do Nats people actually feel the rebuild turning or just want to?",
        angle: "DC baseball works when you stay on trajectory and credibility.",
        context: "Safe because it sounds local without pretending to track every inning."
      },
      nfl: {
        line: "DC football talk usually sounds professional right up until the Commanders come up and then somebody gets personal.",
        followUp: "What actually feels more stable right now, Commanders optimism or the city's ability to trust it?",
        angle: "In DC football talk, stay on belief versus skepticism, trust, and how fast polite analysis turns into a real opinion.",
        context: "Safe because it feels local without making you sound like a try-hard."
      },
      nhl: {
        line: "DC hockey talk still carries Capitals standards even when the room knows the era is shifting.",
        followUp: "Do Caps people actually trust this group now or mostly the legacy?",
        angle: "DC hockey is safer when you stay on standard, transition, and whether trust is still there.",
        context: "Safe because it respects the market without deep hockey trivia."
      }
    }
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

const sportStorageKey = "not-a-fan-sport";
const locationStorageKey = "not-a-fan-location";
const signupConfig = {
  endpoint: "https://formsubmit.co/ajax/hello@notafan.app",
  inbox: "hello@notafan.app"
};

let activeSportKey = "college";
let activeCityKey = "default";
let activeLocationLabel = cityProfiles.default.label;
let lastAttemptedLocation = "";

function normalizeLocation(input) {
  return input
    .trim()
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/,/g, "")
    .replace(/\s+/g, " ");
}

function resolveLocation(input) {
  const cleaned = input.trim();
  const normalized = normalizeLocation(input);
  const cityKey = cityProfiles[cityAliases[normalized]] ? cityAliases[normalized] : "default";
  return {
    cleaned,
    normalized,
    cityKey,
    matched: cityKey !== "default"
  };
}

function describeLocationForSignup(cityKey, rawLocation) {
  if (cityKey !== "default") {
    return cityProfiles[cityKey].label;
  }

  if (rawLocation) {
    return `${rawLocation} (broad fallback)`;
  }

  return cityProfiles.default.label;
}

function getCombinedProfile(sportKey, cityKey) {
  const sport = sportProfiles[sportKey];
  const city = cityProfiles[cityKey] || cityProfiles.default;
  const citySport = city.sportLines?.[sportKey];

  return {
    heroLede: sport.heroLede,
    heroProof: citySport ? `${sport.heroProof} ${city.label} angle: ${citySport.line}` : sport.heroProof,
    selectorHelper: sport.selectorHelper,
    confidenceNote: sport.confidenceNote,
    bestRoom: sport.bestRoom,
    safeLine: citySport?.line || sport.safeLine,
    safeContext: citySport?.context || sport.safeContext,
    followUp: citySport?.followUp || sport.followUp,
    localAngle: citySport?.angle || sport.localAngle,
    pill: cityKey === "default" ? sport.pill : `${sport.shortLabel} • ${city.label}`,
    personalizeTitle: sport.personalizeTitle,
    personalizeDescription: sport.personalizeDescription,
    cityPrompt: sport.cityPrompt,
    note: sport.note
  };
}

function syncSportButtons() {
  document.querySelectorAll("[data-sport-preset]").forEach((button) => {
    const matches = button.getAttribute("data-sport-preset") === activeSportKey;
    button.classList.toggle("is-active", matches);
    button.setAttribute("aria-pressed", matches ? "true" : "false");
  });
}

function syncCityButtons() {
  document.querySelectorAll("[data-location-preset]").forEach((button) => {
    const matches = resolveLocation(button.getAttribute("data-location-preset")).cityKey === activeCityKey && activeCityKey !== "default";
    button.classList.toggle("is-active", matches);
    button.setAttribute("aria-pressed", matches ? "true" : "false");
  });
}

function renderState(options = {}) {
  const profile = getCombinedProfile(activeSportKey, activeCityKey);
  const isDefaultCity = activeCityKey === "default";
  const fallbackCity = options.fallbackCity || "";
  const isFallback = Boolean(fallbackCity) && isDefaultCity;
  const sport = sportProfiles[activeSportKey];

  document.getElementById("selector-helper").textContent = profile.selectorHelper;
  document.getElementById("safe-line-text").textContent = `"${profile.safeLine}"`;
  document.getElementById("safe-line-context").textContent = isFallback
    ? `No dedicated ${fallbackCity} script yet. ${sport.shortLabel} stays broad on purpose.`
    : profile.safeContext;
  document.getElementById("location-pill").textContent = isFallback
    ? `${sport.shortLabel} · ${fallbackCity}`
    : profile.pill;
  document.getElementById("location-saved").textContent = isFallback
    ? `${fallbackCity} saved. Using the broad city fallback on purpose.`
    : isDefaultCity
      ? `${profile.cityPrompt} Broad default is active.`
      : `City refinement on: ${cityProfiles[activeCityKey].label}`;
  document.getElementById("hero-follow-up").textContent = profile.followUp;
  document.getElementById("hero-local-angle").textContent = isFallback
    ? `If someone wants a ${fallbackCity} angle, stay broad and let the real fan supply the city details.`
    : profile.localAngle;
  document.getElementById("confidence-note").textContent = profile.confidenceNote;
  document.getElementById("best-room").textContent = profile.bestRoom;
  document.getElementById("personalize-title").textContent = profile.personalizeTitle;
  document.getElementById("cta-location").value = `${sport.label}${activeLocationLabel && activeLocationLabel !== cityProfiles.default.label ? ` | ${activeLocationLabel}` : ""}`;

  syncSportButtons();
  syncCityButtons();
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

function applySport(sportKey, options = {}) {
  activeSportKey = sportProfiles[sportKey] ? sportKey : "college";
  window.localStorage.setItem(sportStorageKey, activeSportKey);
  renderState(options);

  document.getElementById("selector-helper").classList.add("is-visible");

  if (!options.silent) {
    showToast(`${sportProfiles[activeSportKey].label} selected`);
  }
}

function applyLocation(rawValue, options = {}) {
  const result = resolveLocation(rawValue);
  const savedValue = result.cleaned || cityProfiles[result.cityKey].savedValue;
  document.getElementById("location-input").value = savedValue;
  lastAttemptedLocation = result.cleaned;
  activeCityKey = result.cityKey;
  activeLocationLabel = describeLocationForSignup(result.cityKey, result.cleaned);

  if (savedValue) {
    window.localStorage.setItem(locationStorageKey, savedValue);
  } else {
    window.localStorage.removeItem(locationStorageKey);
  }

  renderState({ fallbackCity: result.matched ? "" : result.cleaned });

  if (!options.silent) {
    showToast(
      result.matched
        ? `City set to ${cityProfiles[result.cityKey].label}`
        : result.cleaned
          ? `${result.cleaned} saved with broad fallback`
          : "Using the broad city default"
    );
  }
}

async function handleCtaSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("cta-form");
  const input = document.getElementById("email");
  const submitButton = document.getElementById("cta-submit");
  const fallbackMessage = document.getElementById("cta-fallback-message");
  const email = input.value.trim();

  input.value = email;
  if (!input.reportValidity()) {
    return;
  }

  fallbackMessage.hidden = true;
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  const payload = {
    email,
    location: document.getElementById("cta-location").value,
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

    const wrap = document.querySelector(".cta-form-wrap");
    wrap.innerHTML = `
      <div class="signup-success" role="status" aria-live="polite">
        <p class="signup-success-heading">You’re in.</p>
        <p class="signup-success-body">Each weekday morning you’ll get one safe opener, one follow-up, and one local angle. The one above is ready right now.</p>
      </div>
    `;
  } catch (error) {
    fallbackMessage.hidden = false;
    showToast(error.message || "Something went wrong — try again.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send me the weekday lines";
  }
}

function renderSuggestionList() {
  const list = document.getElementById("location-suggestions");
  list.innerHTML = marketSuggestions.map((market) => `<option value="${market}"></option>`).join("");
}

function wireEvents() {
  document.getElementById("copy-safe-line").addEventListener("click", () => {
    const combined = getCombinedProfile(activeSportKey, activeCityKey);
    copyText(combined.safeLine, "Safe line copied");
  });

  document.getElementById("play-safe-line").addEventListener("click", () => {
    const combined = getCombinedProfile(activeSportKey, activeCityKey);
    speakText(combined.safeLine, "safe line");
  });

  document.querySelector(".sport-picks").addEventListener("click", (event) => {
    const preset = event.target.closest("[data-sport-preset]");
    if (!preset) {
      return;
    }

    applySport(preset.getAttribute("data-sport-preset"));
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

  const savedSport = window.localStorage.getItem(sportStorageKey);
  activeSportKey = sportProfiles[savedSport] ? savedSport : "college";

  const savedLocation = window.localStorage.getItem(locationStorageKey) || "";
  const locationResult = resolveLocation(savedLocation);
  document.getElementById("location-input").value = savedLocation;
  lastAttemptedLocation = locationResult.cleaned;
  activeCityKey = locationResult.cityKey;
  activeLocationLabel = describeLocationForSignup(locationResult.cityKey, locationResult.cleaned);

  renderState({ fallbackCity: locationResult.matched ? "" : locationResult.cleaned });
  wireEvents();
}

init();
