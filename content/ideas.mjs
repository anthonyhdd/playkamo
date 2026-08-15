/**
 * Use-case pages. These are the most spam-adjacent cluster on the site — "things to do when
 * bored" is a phrase with enormous volume and almost no honesty in the results — so the bar
 * here is that each page has to be worth reading by someone who never installs anything.
 * Ideas first, product last, and never more than one paragraph of product.
 */
export const ideas = [
  {
    slug: 'hide-and-seek-ideas-for-adults',
    linkText: 'Hide-and-seek for adults',
    cardLine: 'The childhood version does not scale. These variants do.',
    h1: 'Hide-and-seek ideas for adults',
    title: 'Hide and seek ideas for adults — variants that survive being over 25',
    description:
      'The childhood game breaks down with adults: too few hiding places, too much standing around. Variants that fix the pacing, from sardines to object hides.',
    standfirst: 'The original breaks in an adult house. These variants do not.',
    sections: [
      {
        h2: 'Why the original stops working',
        paras: [
          'Two reasons, and both are structural. Adults are large, so a normal flat has maybe four viable hiding places and they are exhausted in one round. And the seeker does all the work while everyone else crouches in a wardrobe having no fun — <strong>the standing-around-to-playing ratio is terrible</strong>.',
          'Every good adult variant fixes one of those two problems: it either multiplies the hiding places, or it gives the hiders something to do.',
        ],
      },
      {
        h2: 'Variants that fix the pacing',
        paras: ['Ranked roughly by how little setup they need:'],
        list: [
          '<strong>Sardines.</strong> One person hides, everyone else seeks, and when you find them you get in with them. The last to find the pile loses. It makes the crouching social.',
          '<strong>Object hide.</strong> Hide a small object instead of a person. Suddenly the flat has two hundred hiding places instead of four.',
          '<strong>Hot-and-cold on a timer.</strong> Object hide with the hider allowed to say only "warmer" or "colder", once every ten seconds.',
          '<strong>Photo hide.</strong> Hide something, photograph it, and hand the photo over. The room stays intact and nobody has to be in it.',
        ],
      },
      {
        h2: 'The photo variant, specifically',
        paras: [
          'It is the one that works when people are sitting down, drinking, or not even in the same building. You hide an object in a scene, take the shot, and hand the picture to someone: the whole game fits inside one image.',
          'KAMO is that variant, automated — you place a small figure in the camera view, paint it until it matches its surroundings, and send it as a link that opens in any browser. About a minute to make, twenty seconds to play.',
        ],
      },
    ],
    related: ['games-to-play-at-a-family-gathering', 'party-game-ideas-with-your-phone'],
  },

  {
    slug: 'games-to-play-in-a-group-chat',
    linkText: 'Group chat games',
    cardLine: 'What makes one stick: cheap turns, no schedule, and a visible score.',
    h1: 'Games to play in a group chat',
    title: 'Games to play in a group chat — why most die in two days',
    description:
      'Group chat games have a brutal survival rate. The ones that last share three properties: a cheap turn, no scheduling, and something to compare. What passes the test.',
    standfirst: 'Most last two days. The survivors have three things in common.',
    sections: [
      {
        h2: 'The three properties that decide it',
        paras: ['Watch a chat game die and it is almost always one of these:'],
        list: [
          '<strong>Cheap turns.</strong> If taking part costs more than about a minute, participation collapses to the two most enthusiastic people.',
          '<strong>No scheduling.</strong> The moment a game needs everyone present at once, it becomes an event, and events need organising.',
          '<strong>Something to compare.</strong> A score, a time, a streak. Without it there is nothing to say afterwards, and a game with no aftermath does not come back tomorrow.',
        ],
      },
      {
        h2: 'What passes',
        paras: [
          'Daily puzzles pass all three, which is why score screenshots colonised every group chat on earth. Photo challenges pass — one picture, one question. Guess-the-place from a cropped map pass. Long-form trivia and anything needing a live lobby fail on the second rule.',
          'A useful filter before you introduce anything: <em>can the quietest person in the chat take a turn on a bus without telling anyone in advance?</em> If not, it will not survive the week.',
        ],
      },
      {
        h2: 'Hides as a chat format',
        paras: [
          'A hide is a picture with a right answer, which makes it a photo challenge that can be lost or won. Making one takes about a minute; playing one takes seconds; and because it is a link, <strong>people in the chat who do not have the app can still play it in their browser</strong> — which is usually what kills these things.',
        ],
      },
    ],
    related: ['games-to-play-over-text', 'games-for-long-distance-friends'],
  },

  {
    slug: 'things-to-do-when-bored-with-friends',
    linkText: 'Bored with friends',
    cardLine: 'The real problem is not boredom, it is that nobody wants to decide.',
    h1: 'Things to do when you are bored with friends',
    title: 'Things to do when bored with friends — fix the deciding, not the boredom',
    description:
      'Being bored together is rarely a shortage of options. It is a decision problem: nobody wants to pick, and every suggestion needs agreement. Ideas that need no consensus.',
    standfirst: 'You are not short of options. You are short of someone willing to choose.',
    sections: [
      {
        h2: 'The real problem',
        paras: [
          'Three people on a sofa saying "what do you want to do" are not out of ideas. They are stuck in a <strong>decision problem</strong>: every suggestion requires everyone to agree, agreeing costs social effort, and the cheapest move is always to keep scrolling.',
          'So the ideas that actually rescue an evening share a property: they do not need consent. One person can just start, and joining in is easier than objecting.',
        ],
      },
      {
        h2: 'Things one person can start alone',
        paras: ['No vote required for any of these:'],
        list: [
          'Set a five-minute timer and everyone finds the ugliest object in the room',
          'Pick a random street on a map and guess the country from the first photo',
          'Photograph something in the room extremely close up and make the others name it',
          'Hide a small object in plain sight and let people notice the game happening',
          'Rank everything in one category out loud until someone gets annoyed',
        ],
      },
      {
        h2: 'Why hiding something works so well here',
        paras: [
          'Because the setup is invisible. You are already holding your phone; nobody has to agree to anything; and the first anyone knows about it is being handed a picture and told the thing is in there somewhere. It has <strong>the lowest possible activation cost</strong>, which is exactly what a stalled evening needs.',
          'KAMO makes that a one-minute job: drop a small figure into the camera view, paint it to match whatever is behind it, hand over the phone.',
        ],
      },
    ],
    related: ['hide-and-seek-ideas-for-adults', 'party-game-ideas-with-your-phone'],
  },

  {
    slug: 'games-for-long-distance-friends',
    linkText: 'Long-distance friends',
    cardLine: 'Time zones kill live games. Asynchronous ones are the only ones that last.',
    h1: 'Games for long-distance friends',
    title: 'Games for long-distance friends — time zones decide which ones survive',
    description:
      'When friends live several time zones apart, live games quietly become scheduling. The formats that survive are the ones where a turn can be taken alone, at any hour.',
    standfirst: 'Distance is not the problem. Overlap is.',
    sections: [
      {
        h2: 'Overlap is the constraint, not distance',
        paras: [
          'Friends six time zones apart usually have two or three usable hours a day, and those hours are already spoken for by work, sleep and the people physically nearby. Any game needing both of you at once turns into scheduling, and scheduling is what people stop doing.',
          'So the durable formats are the ones where <strong>a turn is complete when one person finishes it</strong>. The other side picks it up whenever their day starts.',
        ],
      },
      {
        h2: 'Formats that hold up',
        paras: ['These keep working for months rather than weeks:'],
        list: [
          'A shared daily puzzle, where the game itself handles the timing',
          'Photo of the same thing on the same day of the week — a running visual ritual',
          'Guess-my-location from an uninformative crop',
          'Hide an object and hand it over as a picture, with a right answer to settle it',
          'A slow correspondence game with one move a day',
        ],
      },
      {
        h2: 'Why the object hide travels well',
        paras: [
          'It carries a piece of somewhere they have never been. Hiding a figure on your kitchen counter and sending it means the person searching is <strong>looking at your actual kitchen</strong> — the game smuggles in the mundane detail that phone calls never cover.',
          'With KAMO the whole thing is a link, so it works on any phone in any country with nothing to install on the other end.',
        ],
      },
    ],
    related: ['games-to-play-over-text', 'games-to-play-in-a-group-chat'],
  },

  {
    slug: 'party-game-ideas-with-your-phone',
    linkText: 'Party games with a phone',
    cardLine: 'Phones split a room by default. The good ones pass a single screen around.',
    h1: 'Party game ideas that use a phone',
    title: 'Party game ideas with your phone — the ones that don’t split the room',
    description:
      'Most phone party games send everyone into their own screen, which is the opposite of a party. The formats that work use one phone, passed around, with everyone watching.',
    standfirst: 'A phone each is not a party. One phone, passed around, is.',
    sections: [
      {
        h2: 'One screen, not eight',
        paras: [
          'The failure mode of phone party games is obvious the second it happens: everyone looks down, the room goes quiet, and you have replaced a party with eight people on their phones in the same room.',
          'The games that work invert it. <strong>One device, held by one person, with everyone else watching their face.</strong> The phone becomes a prop, not a portal, and the entertainment is the reaction rather than the screen.',
        ],
      },
      {
        h2: 'Formats that keep the room together',
        paras: ['All of these run on a single handset:'],
        list: [
          'Forehead word-guessing, where the holder is the only one who cannot see',
          'Extreme close-up photos of objects in the room, named out loud',
          'Pass-the-photo: one person hides something in a shot, everyone else hunts it while the room heckles',
          'Camera-roll roulette — a random old photo, and the owner has to explain it',
          'Guess the year of a song from three seconds of it',
        ],
      },
      {
        h2: 'Why hiding something is good party material',
        paras: [
          'Because failing at it is public and funny. Someone stares at a photograph of a coffee table for forty seconds while the room shouts at them, and the reveal lands on everyone at once. It has a hard right answer, so there is no arguing, and rounds take under a minute.',
          'KAMO is a fast way to produce those photos: hide a figure in the room you are actually in, and hand the phone over.',
        ],
      },
    ],
    related: ['games-to-play-at-a-family-gathering', 'hide-and-seek-ideas-for-adults'],
  },

  {
    slug: 'games-to-play-at-a-family-gathering',
    linkText: 'Family gatherings',
    cardLine: 'Mixed ages, no rules to explain, and nobody has to leave their chair.',
    h1: 'Games to play at a family gathering',
    title: 'Games for a family gathering — no rules to explain, no chairs to leave',
    description:
      'Family gatherings span sixty years of age and several attention spans. The games that work need no rules explained, no teams, and no one to get up.',
    standfirst: 'Three constraints: mixed ages, no explaining, and nobody moves.',
    sections: [
      {
        h2: 'What a room full of relatives can actually sustain',
        paras: [
          'A gathering is not a games night. People are eating, arriving, holding a baby, or asleep in an armchair. Anything with teams, a rulebook or a scoring system is dead on arrival — <strong>if it takes more than one sentence to explain, it will not start</strong>.',
          'The other constraint is age spread. Whatever it is, an eight-year-old and a seventy-year-old both need to be able to play it without anyone being patronised.',
        ],
      },
      {
        h2: 'Ideas that survive the room',
        paras: ['One sentence of rules each, at most:'],
        list: [
          'Find something in this photo — a picture handed round the table',
          'Guess who this is, from an old family photo nobody has seen in years',
          'What year was this taken, argued about loudly',
          'Name that object, from a very close-up photo of something in the kitchen',
          'Who said it — quotes from earlier in the same afternoon',
        ],
      },
      {
        h2: 'Where a hide fits',
        paras: [
          'It is the "find something in this photo" one, with a guaranteed right answer and a reveal that settles the argument. It works because <strong>the whole game is a picture</strong>: it travels round a table, it needs no explanation beyond "it is in there somewhere", and anyone can hold it.',
          'A hide made in the room everyone is sitting in works best — people recognise the sofa, and it is much funnier when the search is of somewhere they can also see with their eyes.',
        ],
      },
    ],
    related: ['party-game-ideas-with-your-phone', 'hide-and-seek-ideas-for-adults'],
  },
];
