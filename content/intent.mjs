/**
 * Pages that answer a question someone typed, rather than pages that describe the product.
 *
 * House rule for this cluster: say where KAMO does NOT fit. A page that answers "what are
 * the AR camera games on iPhone" with six paragraphs about KAMO is not an answer, it is an
 * ad wearing an answer's clothes, and readers and search engines both work that out fast.
 */
export const intent = [
  {
    slug: 'camouflage-app-for-iphone',
    linkText: 'Camouflage apps for iPhone',
    cardLine: 'Three different things go by that name. Only one of them is a game.',
    h1: 'Camouflage apps for iPhone: what people actually mean',
    title: 'Camouflage app for iPhone — the three different things people mean',
    description:
      'Searching for a camouflage app turns up camo-pattern wallpaper makers, photo filters and one actual game. What each of them does, and which one you probably wanted.',
    standfirst: 'The phrase covers three unrelated things. Work out which one you want first.',
    sections: [
      {
        h2: 'The three things called a camouflage app',
        paras: [
          'Search that phrase and you get an unhelpful mix, because three unrelated categories share the name:',
        ],
        list: [
          '<strong>Pattern generators</strong> — make a camo print for a wallpaper, a sticker or a design mockup. No camera involved.',
          '<strong>Camo filters</strong> — overlay a camouflage texture onto a photo of you or an object. It is a skin, not a hiding place.',
          '<strong>Camouflage games</strong> — you actually have to make something disappear into a real background, and you get judged on whether it worked.',
        ],
      },
      {
        h2: 'If you wanted the game',
        paras: [
          'The distinguishing feature of the third category is that <strong>there is a right answer</strong>. A filter always looks like a filter; a camouflage game only works if the thing genuinely stops being visible, which means you are matching real colours in real light with real shadows.',
          'KAMO is that: you drop a small figure into the live camera view, paint it with the colours around it until you cannot find it yourself, and get a score for how well you blended. Then you send the shot to someone and watch them fail.',
        ],
      },
      {
        h2: 'If you wanted one of the other two',
        paras: [
          'Then KAMO is the wrong app and you should stop reading. It cannot generate a camo pattern, it will not apply a camo texture to a portrait, and it has no export for print. Those are pattern and filter tools, and there are plenty of them.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does it work on any background?',
        a: 'It works best on anything with texture — brick, gravel, bark, a patterned rug. A flat evenly-lit wall is the hardest surface there is; see <a href="/hides/">the surface guides</a>.',
      },
      { q: 'Is it free?', a: 'Yes, free to download with no signup. KAMO+ is an optional upgrade.' },
    ],
    related: ['hide-and-seek-game-app', 'ar-camera-games-for-iphone'],
  },

  {
    slug: 'hide-and-seek-game-app',
    linkText: 'Hide-and-seek game apps',
    cardLine: 'Most are multiplayer chases. The other kind hides an object in a photo.',
    h1: 'Hide-and-seek game apps: two very different genres',
    title: 'Hide and seek game app — the two genres, and which one you want',
    description:
      'Hide-and-seek apps split into multiplayer chase games where you run and hide as a character, and photo games where you hide an object for someone else to find. They have almost nothing in common.',
    standfirst: 'Two genres, one name, and they want completely different things from you.',
    sections: [
      {
        h2: 'The chase kind',
        paras: [
          'The bigger genre is <strong>multiplayer prop-hunt</strong>: you and other players are in a 3D map, some hide as objects, someone seeks, there is a timer. It is a lobby game — it needs other people online at the same time as you, it is played in sessions of several minutes, and the fun is in movement and panic.',
          'If that is what you want, KAMO is not it. It has no live lobby, no running, no map.',
        ],
      },
      {
        h2: 'The photo kind',
        paras: [
          'The other kind is asynchronous and physical: you <strong>hide something in a real scene</strong>, capture it, and hand it to someone else to search. There is no lobby, because the game is a picture. The seeker plays whenever they open the message.',
          'KAMO is this kind. You place a small figure in your camera view, paint it until it merges with whatever is behind it, and send the shot as a link. The friend does not need the app to play — they get the photo in a browser and hunt for the figure there, and the reveal wipes across to show where it was.',
        ],
      },
      {
        h2: 'Which one suits you',
        paras: [
          'Ask how much simultaneity you want. If you like the idea of everyone being in the same room at once, the chase games are better built for it. If your friends are scattered across time zones and the group chat is where things actually happen, the photo kind wins, because <strong>nobody has to be free at the same time</strong>.',
        ],
      },
    ],
    related: ['games-to-play-over-text', 'games-like-meccha-chameleon'],
  },

  {
    slug: 'games-like-meccha-chameleon',
    linkText: 'Games like Meccha Chameleon',
    cardLine: 'What the hide-and-spot loop feels like elsewhere, on PC and on a phone.',
    h1: 'Games like Meccha Chameleon',
    title: 'Games like Meccha Chameleon — where else the hide-and-spot loop lives',
    description:
      'The appeal is a specific loop: something is hidden in plain sight and someone has to find it. Where that loop shows up elsewhere, and what is available on a phone.',
    standfirst: 'The loop, not the chameleon, is what people are actually looking for.',
    sections: [
      {
        h2: 'What the loop actually is',
        paras: [
          'Strip the theme away and the appeal is small and precise: <strong>an object is present in a scene, deliberately hard to see, and someone has to find it</strong> — plus the moment it snaps into view. That is why the clips travel; the reveal does the work, not the graphics.',
          'Once you name the loop, you can find it in places that look nothing alike: hidden-object puzzles, "spot the difference", camouflage photography, those wildlife photos where a bird is somewhere in the bark.',
        ],
      },
      {
        h2: 'On a phone',
        paras: [
          'The awkward fact is that <strong>the game itself has no official iOS version</strong> — it is a PC title. Anything on the App Store using that name is not from its developer. We wrote the longer answer on <a href="/meccha-chameleon-app/">whether there is a Meccha Chameleon app</a>.',
          'KAMO is the closest thing built for a camera: point at any surface, drop a figure in, paint it until it disappears, then challenge someone. It is a different game by different people — the shared part is the loop, not the content.',
        ],
      },
      {
        h2: 'What is genuinely different about doing it on a camera',
        paras: [
          'In a made-for-PC game the scene is authored: someone designed the level so that a good hide exists. On a camera, <strong>nobody has designed anything</strong> — you have to find the good surface yourself, which turns out to be most of the skill. That is why the surface guides exist at all.',
        ],
      },
    ],
    related: ['hide-and-seek-game-app', 'what-is-a-kamo'],
  },

  {
    slug: 'ar-camera-games-for-iphone',
    linkText: 'AR camera games',
    cardLine: 'Most need ARKit and a newer phone. Not all camera games are AR games.',
    h1: 'AR camera games on iPhone — and the ones that are not AR',
    title: 'AR camera games for iPhone — what needs ARKit and what doesn’t',
    description:
      'Camera games and AR games are not the same category. What ARKit-based games require from your phone, what a plain camera game needs instead, and why the difference matters on older hardware.',
    standfirst: 'The distinction matters mostly if your phone is a few years old.',
    sections: [
      {
        h2: 'AR games and camera games are not the same thing',
        paras: [
          'A true AR game uses <strong>ARKit</strong> to understand the room: it finds floors and walls, tracks the phone in space, and anchors objects so they stay put as you walk around. That is what makes creatures sit convincingly on your table — and it costs battery, needs decent light, and works properly only on reasonably recent hardware.',
          'A camera game may use none of that. It can simply put something on top of the live view and let you interact with it. Less impressive in a trailer, dramatically less demanding in practice.',
        ],
      },
      {
        h2: 'Where KAMO sits',
        paras: [
          'KAMO is the second kind. There is <strong>no room scanning, no plane detection and no LiDAR requirement</strong> — it runs on the ordinary camera on iOS 15.1 and up. What matters for a good hide is the surface you point at and the light on it, not what your phone knows about the geometry of your kitchen.',
          'The honest trade-off: a kamo does not stay anchored in space the way an ARKit object does. You compose the shot, you hide the figure, you capture it. It is closer to photography than to a room-scale AR experience, and it is deliberate — it means the game works on an old phone in a dim room.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need a phone with LiDAR?',
        a: 'No. KAMO uses the ordinary camera. If your phone can take a photo, it can play.',
      },
      { q: 'What iOS version does it need?', a: 'iOS 15.1 or later, iPhone only.' },
    ],
    related: ['camouflage-app-for-iphone', 'hidden-object-games-with-your-own-photos'],
  },

  {
    slug: 'hidden-object-games-with-your-own-photos',
    linkText: 'Hidden object games, but your photos',
    cardLine: 'Classic hidden-object games ship their scenes. This one makes you author them.',
    h1: 'Hidden object games that use your own photos',
    title: 'Hidden object games with your own photos — authoring instead of solving',
    description:
      'Classic hidden-object games ship hand-drawn scenes you search. A camera version flips it: you build the puzzle, someone else solves it, and the difficulty is your responsibility.',
    standfirst: 'The genre flipped: you make the puzzle, someone else solves it.',
    sections: [
      {
        h2: 'The usual shape of the genre',
        paras: [
          'A hidden-object game normally hands you an illustrated scene and a list: find the key, the pocket watch, the pair of scissors. The scenes are authored, the difficulty is tuned, and you consume levels until they run out. It is a solving experience, and a finite one.',
        ],
      },
      {
        h2: 'What changes when the scene is yours',
        paras: [
          'Point a camera instead and the roles invert. <strong>You become the author</strong>, and the interesting decisions move to your end: which surface, where exactly, how well camouflaged, how cruel to be. The game stops being a supply of levels and becomes a thing you make.',
          'That also means the difficulty is on you, and it is easy to get wrong in both directions. A figure three pixels wide behind a table leg wins the round and ruins the game; one sitting in the open is not a puzzle at all. The sweet spot is about twenty seconds of real looking.',
        ],
      },
      {
        h2: 'How KAMO does it',
        paras: [
          'You place a small figure in the live camera view, paint it with the colours of whatever is behind it until it merges, and a score tells you how well you blended. Then it becomes a link: the person you send it to hunts for the figure <strong>in their browser, without installing anything</strong>, and the reveal wipes across to show them where it was.',
        ],
      },
    ],
    related: ['games-to-play-over-text', 'hide-and-seek-game-app'],
  },

  {
    slug: 'what-is-a-kamo',
    linkText: 'What is a kamo?',
    cardLine: 'The name of the little figure you hide — and why it has one.',
    h1: 'What is a kamo?',
    title: 'What is a kamo? The little figure you hide, and why it has a name',
    description:
      'A kamo is the small figure you drop into a real photo and paint until it vanishes. What it is, what it is not, and what naming it changes about the game.',
    standfirst: 'Short answer: the thing you hide.',
    sections: [
      {
        h2: 'The short answer',
        paras: [
          'A <strong>kamo</strong> is the small figure you place into your camera view and paint until it disappears into whatever is behind it. One kamo per round. You hide a kamo; someone else tries to spot it.',
          'It is not a character with a story, it does not level up, and there is no collection of them. It is a shape whose entire job is to become invisible and then, at the reveal, to stop being invisible.',
        ],
      },
      {
        h2: 'Why the thing has a name at all',
        paras: [
          'Because "the figure" and "the little guy" are descriptions, and descriptions do not survive being passed between people. A named thing does. When someone says <em>I hid a kamo in the gravel outside my flat</em>, the sentence carries the game with it — which is more than "I used that camouflage app" ever manages.',
          'It is also the reason the copy across the app, the store listing and this site says the same word every time. A name only becomes a word if nobody keeps swapping it for a synonym.',
        ],
      },
      {
        h2: 'What a round with one looks like',
        paras: [
          'Point at a surface with some texture. Place the kamo against an existing edge so its outline is broken. Copy the colours immediately around it onto the figure until your own eye loses track of it — that is the actual test, not the score. Then send it, and watch someone search a photo of your desk for far longer than they expected.',
        ],
      },
    ],
    related: ['games-like-meccha-chameleon', 'is-kamo-free'],
  },

  {
    slug: 'games-to-play-over-text',
    linkText: 'Games to play over text',
    cardLine: 'Nobody has to be online at the same time. That is the whole design constraint.',
    h1: 'Games to play over text',
    title: 'Games to play over text — the asynchronous kind that actually survive',
    description:
      'Games played through a message thread live or die on one rule: nobody should have to be free at the same time. What that rules out, what it leaves, and where a photo hide fits.',
    standfirst: 'One constraint decides everything: no one should have to be online at the same moment.',
    sections: [
      {
        h2: 'The constraint that kills most of them',
        paras: [
          'The reason so many "games to play over text" die after two rounds is that they secretly assume both people are available. Twenty questions stalls when one of you goes to sleep. Word chains rot when someone answers eleven hours late.',
          'The ones that survive share a shape: <strong>one person makes a thing, the other consumes it whenever they like, and the turn is complete</strong>. No live back-and-forth required, no state to remember.',
        ],
      },
      {
        h2: 'What survives',
        paras: ['A few formats genuinely work asynchronously:'],
        list: [
          'Photo challenges — one picture, one question, answered whenever',
          'Guess-the-place from a cropped image',
          'Daily-puzzle score sharing, where the game does the scheduling',
          'Hide-an-object shots, which are photo challenges with a right answer',
        ],
      },
      {
        h2: 'Why a hide fits the format well',
        paras: [
          'A KAMO hide is a link. Your friend taps it in the thread, searches the photo <strong>in their browser with nothing installed</strong>, and the reveal shows where the figure was. Making one takes about a minute; playing one takes twenty seconds, at whatever hour they get to it.',
          'That is the whole reason it works in a group chat: the cost of a turn is low at both ends, and neither end has to be awake.',
        ],
      },
    ],
    related: ['games-to-play-in-a-group-chat', 'games-for-long-distance-friends'],
  },

  {
    slug: 'is-kamo-free',
    linkText: 'Is KAMO free?',
    cardLine: 'Yes — with the paid part described plainly, including what it does not unlock.',
    h1: 'Is KAMO free?',
    title: 'Is KAMO free? What you get, and exactly what KAMO+ adds',
    description:
      'KAMO is free to download and play with no signup. KAMO+ is optional. Here is precisely what the free version does, what the upgrade adds, and what it does not.',
    standfirst: 'Yes. Here is the paid part, stated plainly.',
    sections: [
      {
        h2: 'What free actually gets you',
        paras: [
          'The whole game: place a kamo, paint it, get scored, capture the reveal, send it as a link, and play hides other people have shared. <strong>No account, no email, no signup</strong> — you open it and you are in.',
          'Free exports carry a small KAMO watermark, and you get a working set of brushes and colours rather than the full set.',
        ],
      },
      {
        h2: 'What KAMO+ adds',
        paras: ['The upgrade is about comfort and craft, not about unlocking the game:'],
        list: [
          'Every brush size',
          'The full colour palette',
          'More time to paint each round',
          'Exports without the KAMO watermark',
        ],
      },
      {
        h2: 'What it costs, and what it does not do',
        paras: [
          'KAMO+ Weekly is an auto-renewable subscription at $2.99 per week; KAMO Lifetime is a one-time purchase that never renews. Prices vary by region and the exact price is always shown in the app before you buy, and a subscription can be cancelled any time in your Apple Account settings.',
          'What it does not do: it does not buy you a better score, more levels, or content the free version cannot see. If someone finds your kamo, paying would not have saved you — see <a href="/how-to-hide-a-kamo/">the hiding guide</a> instead.',
          'It also changes nothing for the people you play with. Hides you send open in a browser for free, whether or not you subscribed, and a friend playing one has no way of knowing which version made it. The only thing they might notice is the watermark on a free export.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need an account?',
        a: 'No. There is no registration and no login, and the privacy policy explains what that means for your data.',
      },
      {
        q: 'Does the person I challenge have to pay, or install anything?',
        a: 'Neither. A hide is a link that opens in any browser.',
      },
    ],
    related: ['what-is-a-kamo', 'camouflage-app-for-iphone'],
  },
];
