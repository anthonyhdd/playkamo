/**
 * One page per surface people actually point a phone at.
 *
 * The rule for adding one: it earns a URL only if the advice is genuinely different from
 * every other entry. "Brick" and "concrete" both look grey and are completely different
 * problems — brick has a repeating grid you can hide an outline in, concrete is a flat
 * field where only stains help. "Beige carpet" and "grey carpet" are the same problem and
 * would be two thin pages. If you cannot write the paragraph that only applies here, the
 * page does not exist.
 */
export const surfaces = [
  {
    slug: 'hide-a-kamo-on-brick',
    linkText: 'Brick wall',
    cardLine: 'A repeating grid of mortar lines — the easiest outline to disappear into.',
    h1: 'Hiding a kamo on a brick wall',
    title: 'How to hide a kamo on a brick wall — the mortar line does the work',
    description:
      'Brick is one of the friendliest surfaces in KAMO: a repeating grid, strong colour variation and ready-made lines to break an outline against. Where to place it and what still gives it away.',
    standfirst: 'Forgiving colour, ready-made lines, and one very common mistake.',
    sections: [
      {
        h2: 'Why brick is forgiving',
        paras: [
          'Brick gives you two things at once: <strong>colour variation you can be sloppy inside</strong>, and a grid of mortar lines you can hide an edge against. No two bricks in a wall are the same shade, so an imperfect red-brown reads as just another brick rather than as a mistake. That tolerance is rare — on a painted wall the same error is instantly visible.',
          'The mortar is the real gift. A kamo standing in the middle of a brick face is a shape on a plain rectangle. The same kamo straddling a mortar line has its outline cut in two by something the eye already expects to see there.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Look for places where the wall is already interrupted:'],
        list: [
          'Straddling a vertical mortar joint, so the line runs through the figure',
          'In the shadow under a projecting course or a windowsill',
          'Against a patch of efflorescence or water staining — free camouflage',
          'Where a downpipe or cable meets the wall and the eye is already busy',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Two things. First, <strong>painting one flat brick-red across the whole figure</strong>: real brick is darker at the joints and lighter in the middle of each face, so a single tone reads as a sticker. Second, <strong>ignoring the mortar colour</strong> — if a mortar line crosses the kamo and you painted brick over it, you have drawn a break in a line the eye follows, which is worse than not hiding at all.',
          'Old, weathered brick is easier than new brick. New brick is uniform, and uniform is always harder.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is painted brick easier or harder?',
        a: 'Harder. Paint flattens the colour variation that makes raw brick forgiving, and you are back to matching one exact tone. The mortar lines still help with the outline.',
      },
    ],
    related: ['hide-a-kamo-on-concrete', 'hide-a-kamo-on-a-white-wall'],
  },

  {
    slug: 'hide-a-kamo-in-gravel',
    linkText: 'Gravel',
    cardLine: 'Maximum noise. Almost any paint job works — the danger is the shadow.',
    h1: 'Hiding a kamo in gravel',
    title: 'How to hide a kamo in gravel — the most forgiving surface there is',
    description:
      'Gravel is the easiest surface in KAMO: dense random detail means a rough paint job reads as more stones. The catch is depth — a kamo sitting on top of gravel casts a shadow that no colour fixes.',
    standfirst: 'The most forgiving surface in the game, and the one place colour is not the problem.',
    sections: [
      {
        h2: 'Why gravel is easy',
        paras: [
          'Gravel is <strong>dense random detail</strong>: hundreds of small edges, dozens of shades, no pattern for the eye to lock onto. Anything you paint that is roughly the right family of greys and browns becomes another stone. This is the surface to use when you want a high score without much patience.',
          'It is also the surface where a fast, scruffy paint job beats a careful one. Smooth gradients look wrong here; blotches look right.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Use the size of the stones. A kamo among pea gravel reads as a big object; the same kamo among fist-sized stones reads as one of them.'],
        list: [
          'Nestled between two larger stones so the outline is broken on both sides',
          'In the darker band where gravel meets a kerb or a step',
          'On a patch with mixed stone sizes rather than a graded, uniform area',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Depth, not colour. Gravel has real three-dimensional shadows between the stones, and a kamo painted perfectly but <strong>sitting flat on top</strong> has no shadow of its own, which makes it read as a decal on a photograph. Place it low, in a dip, where the surrounding shadow does the work.',
          'The other giveaway is scale: paint detail that is finer than the stones around it and the eye picks out the one area that is suspiciously smooth.',
        ],
      },
    ],
    related: ['hide-a-kamo-in-sand', 'hide-a-kamo-on-fallen-leaves'],
  },

  {
    slug: 'hide-a-kamo-in-grass',
    linkText: 'Grass',
    cardLine: 'Green everywhere, but the blades run in one direction and your paint should too.',
    h1: 'Hiding a kamo in grass',
    title: 'How to hide a kamo in grass — direction matters more than green',
    description:
      'Grass looks like an easy green field and behaves like a directional texture. How to paint with the blades, why mown lawn is harder than long grass, and the shadow that gives a kamo away.',
    standfirst: 'Everyone paints it green. The ones that disappear are painted with the grain.',
    sections: [
      {
        h2: 'Grass is a direction, not a colour',
        paras: [
          'A lawn is not a green surface, it is <strong>thousands of thin lines all leaning the same way</strong>. Paint a smooth green kamo and it will sit on top of that texture like a bead. The hides that vanish carry streaks in the same direction as the blades — vertical where the grass stands, laid over where it has been walked on.',
          'Colour is the easy part: grass is never one green. It runs from yellow at the base to blue-green at the tips, and dead blades run through it in tan. Copy three of those, not one.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Long grass is far easier than a mown lawn, because a mown lawn is a flat even field with nothing to break an outline.'],
        list: [
          'At the edge of a border, where grass meets soil or paving',
          'In a tuft that stands taller than the rest',
          'Where a mowing stripe changes direction, so the eye is already crossing a line',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'In bright sun a kamo on a lawn casts a hard shadow across the blades, and no amount of green fixes a shadow. Shoot in the shade, or on an overcast day, and the same hide is twice as good. <strong>Overcast light is the grass player\'s friend.</strong>',
        ],
      },
    ],
    related: ['hide-a-kamo-on-fallen-leaves', 'hide-a-kamo-on-tree-bark'],
  },

  {
    slug: 'hide-a-kamo-on-wood-grain',
    linkText: 'Wood grain',
    cardLine: 'A desk or table: strong parallel lines that either swallow the figure or frame it.',
    h1: 'Hiding a kamo on wood grain',
    title: 'How to hide a kamo on a wooden desk or table — follow the grain',
    description:
      'Wood grain is the surface most people try first because it is the one in front of them. It works, but only if the lines you paint continue the lines behind the figure.',
    standfirst: 'The surface everyone tries first, because it is already under the phone.',
    sections: [
      {
        h2: 'Continue the lines, do not invent them',
        paras: [
          'Wood is a set of long parallel lines with knots and colour bands running through them. The whole trick is <strong>continuity</strong>: a grain line that runs into the kamo must come out the other side in the right place. Get that right and the figure stops being an object; get it wrong and you have drawn attention to exactly where it is, because the eye follows lines and notices where they break.',
          'This is why wood rewards care in a way gravel does not. There is no noise to hide behind — only alignment.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Pick the busiest part of the board, not the cleanest.'],
        list: [
          'Over a knot, where the grain already swirls and nothing has to line up',
          'On the seam between two planks',
          'Along the dark edge where the tabletop meets its edge banding',
          'Under the natural shadow of a laptop, a mug or a book',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Sheen. A varnished tabletop reflects the window, and that reflection moves across the surface but not across your painted figure, so the kamo shows up as the one matte patch on a glossy board. Matte or oiled wood is much kinder. If the table is glossy, <strong>turn until the reflection is off the area you are hiding in</strong> before you start painting.',
        ],
      },
    ],
    related: ['hide-a-kamo-on-a-cluttered-desk', 'hide-a-kamo-on-a-bookshelf'],
  },

  {
    slug: 'hide-a-kamo-on-carpet',
    linkText: 'Carpet & rugs',
    cardLine: 'A patterned rug is a cheat code. A plain one is nearly the hardest surface there is.',
    h1: 'Hiding a kamo on carpet or a rug',
    title: 'How to hide a kamo on a rug — patterned is a cheat code, plain is brutal',
    description:
      'Carpet splits into two completely different games. A patterned rug hides almost anything; a plain one is as hard as a bare wall. How to tell which you are on, and what to do about it.',
    standfirst: 'Two surfaces wearing the same name, and they need opposite tactics.',
    sections: [
      {
        h2: 'Patterned rug: the closest thing to a cheat code',
        paras: [
          'A patterned rug gives you <strong>strong shapes, several colours and hard edges</strong> in the same square foot. Land a kamo where two motifs meet, copy both, and the figure disappears into the design — the eye reads it as another element of the pattern, which is exactly what it now is.',
          'Busy kilims, Persian designs and geometric prints are the best surfaces in the whole game for a beginner. Take the win.',
        ],
      },
      {
        h2: 'Plain carpet: a wall on the floor',
        paras: [
          'A flat beige or grey carpet is an even field with no lines to break, which puts it in the same difficulty bracket as a painted wall. You have exactly two tools left: <strong>pile direction</strong> — the light and dark bands left by a vacuum or a footprint — and any shadow you can find.',
        ],
        list: [
          'Straddle the boundary between two vacuum stripes',
          'Push into the shadow along a skirting board or under a chair leg',
          'Use the darker crushed patch of a footprint',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Texture scale. Carpet pile is fine and slightly fuzzy, so a hard-edged paint job reads as a sticker even when the colour is perfect. Soften the boundary of the figure and let the colour bleed slightly past the outline.',
        ],
      },
    ],
    related: ['hide-a-kamo-on-a-white-wall', 'hide-a-kamo-on-fabric'],
  },

  {
    slug: 'hide-a-kamo-on-tiles',
    linkText: 'Tiles',
    cardLine: 'A hard grid with grout lines — great for outlines, punishing for colour.',
    h1: 'Hiding a kamo on tiles',
    title: 'How to hide a kamo on tiles — great lines, unforgiving colour',
    description:
      'Bathroom and kitchen tiles give you a perfect grid to break an outline against, and a flat uniform colour that punishes any error. How to play the grout instead of the tile.',
    standfirst: 'Play the grout, not the tile.',
    sections: [
      {
        h2: 'The grid helps, the colour does not',
        paras: [
          'Tile is a contradiction: <strong>the best outline-breaking lines in any indoor surface</strong>, attached to <strong>the least forgiving colour field</strong>. Every tile is the same shade by design, so a kamo that is one step too warm or too dark stands out the way it would on a painted wall.',
          'So stop trying to win on colour. Win on the grout: place the figure so a grout line runs straight through it and paint that line across the figure in the right place. A continued line does more for a hide than a perfect colour match ever will.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Corners and transitions are where tiles stop being uniform.'],
        list: [
          'On the cross where four tiles meet',
          'In the internal corner where a wall meets the floor',
          'Against a mould-darkened or discoloured grout run — variation you did not have to invent',
          'Behind the shadow line of a shower tray or a plinth',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Reflection, badly. Glossy tiles carry a bright highlight in a predictable place, and a painted figure has none. Either include the highlight in what you paint, or place the kamo <strong>in the part of the tile field that is already out of the reflection</strong>. Matte or textured tiles are much easier.',
        ],
      },
    ],
    related: ['hide-a-kamo-on-a-kitchen-counter', 'hide-a-kamo-on-a-white-wall'],
  },

  {
    slug: 'hide-a-kamo-on-concrete',
    linkText: 'Concrete',
    cardLine: 'Looks plain, is not: every stain, crack and pour line is a place to hide.',
    h1: 'Hiding a kamo on concrete',
    title: 'How to hide a kamo on concrete — hunt for the stains',
    description:
      'Concrete reads as a flat grey field, which makes it look hard. In practice it is covered in stains, cracks and pour lines, and every one of them is somewhere to hide a kamo.',
    standfirst: 'Reads as a flat grey field. It is nothing of the kind — look closer.',
    sections: [
      {
        h2: 'There is no such colour as concrete grey',
        paras: [
          'The mistake is painting a mid-grey and expecting it to work. Real concrete carries <strong>rust runs, oil marks, tyre rubber, moss in the damp corners, and patches that dried a different shade</strong>. Pick one of those and paint that, not the average.',
          'Old concrete is dramatically easier than new. A fresh slab is closer to a painted wall in difficulty; a twenty-year-old yard is closer to gravel.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Everything that interrupts the pour is an opportunity.'],
        list: [
          'On an expansion joint or a saw cut — a hard line to break the outline against',
          'On the edge of an oil stain, where the colour changes anyway',
          'In a crack with weeds or moss in it',
          'Where the slab meets a kerb and picks up a permanent shadow',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'A perfectly even paint job. Concrete is mottled at a fine scale, so an area of dead-flat colour the size of a figure is the one thing on that slab that looks manufactured. <strong>Add mottling even where you do not think you need it.</strong>',
          'The finish matters as much as the age. A power-floated garage floor is almost polished — smooth, uniform and reflective enough to behave like a tiled surface, which puts it near the bottom of the difficulty list. A brushed or tamped finish has directional ridges you can paint along, and a scattering of exposed aggregate you can copy.',
          'One last thing worth doing before you paint: check whether the slab is damp. Concrete dries in patches, and a drying edge gives you a soft tonal boundary running across the surface — one of the few gradients on an otherwise even field, and a good place to lose an outline.',
        ],
      },
    ],
    related: ['hide-a-kamo-on-asphalt', 'hide-a-kamo-on-brick'],
  },

  {
    slug: 'hide-a-kamo-on-tree-bark',
    linkText: 'Tree bark',
    cardLine: 'Deep vertical ridges and real shadow. The best outdoor surface for a beginner.',
    h1: 'Hiding a kamo on tree bark',
    title: 'How to hide a kamo on tree bark — deep ridges do half the work',
    description:
      'Bark has what most surfaces lack: real depth. The ridges cast their own shadows, which means a kamo tucked into one is half hidden before you paint anything.',
    standfirst: 'The one surface that comes with its own shadows built in.',
    sections: [
      {
        h2: 'Depth is the whole point',
        paras: [
          'Most surfaces are flat, so the shadow a figure casts is the thing that gives it away. Bark is the exception: it is <strong>already full of deep vertical grooves with genuine shadow inside them</strong>. Place a kamo in a groove and its own shadow becomes indistinguishable from the ones around it.',
          'Oak, plane and pine are ideal — deep fissures, strong tonal range. Birch and young beech are much harder: smooth, pale, and closer to a painted post than to bark.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Go vertical, and go where the trunk stops being regular.'],
        list: [
          'Inside a fissure so the ridges frame the figure on both sides',
          'At a branch junction, where the pattern breaks up naturally',
          'On a patch of lichen or moss, which gives you a second colour to work with',
          'Just below a knot or an old pruning scar',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Painting horizontal marks on a vertical texture. Bark runs up and down; any stroke that runs across it is a line that exists nowhere else on the tree, and the eye finds it in under a second. <strong>Every stroke follows the trunk.</strong>',
        ],
      },
    ],
    related: ['hide-a-kamo-on-fallen-leaves', 'hide-a-kamo-in-grass'],
  },

  {
    slug: 'hide-a-kamo-on-fallen-leaves',
    linkText: 'Fallen leaves',
    cardLine: 'Chaos in three colours. Easy to blend, easy to overdo.',
    h1: 'Hiding a kamo on fallen leaves',
    title: 'How to hide a kamo in fallen leaves — chaos with a scale problem',
    description:
      'Leaf litter is one of the most forgiving surfaces in KAMO, as long as the marks you paint are the same size as the leaves. Get the scale wrong and it stands out in a field of noise.',
    standfirst: 'Forgiving on colour, unforgiving on scale.',
    sections: [
      {
        h2: 'Copy the size, not just the colour',
        paras: [
          'Leaf litter gives you overlapping shapes in tan, rust, brown and yellow, with hard edges and deep gaps — the sort of chaos that hides almost anything. The one rule that decides the round is <strong>scale</strong>: paint marks the same size as the leaves in frame. Fine speckle on top of hand-sized leaves reads as a smooth blob, which in a field of hard edges is instantly the odd one out.',
          'Wet leaves are easier than dry. They darken, the colour range narrows and the highlights disappear, which means fewer things to match.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Depth is free here, so use it.'],
        list: [
          'Half under a leaf, so a real edge cuts across the figure',
          'In the dark gap between two overlapping layers',
          'At the edge of a drift, where the litter thins into soil',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'A figure that is too clean. Leaves are torn, curled and blotched, and a kamo with smooth even colour looks like a plastic toy dropped on a forest floor — which, visually, is exactly what it is. <strong>Break the edges up.</strong>',
          'Season changes the difficulty more than anything else. Early autumn litter is a riot of yellow, orange, green and red, and a kamo carrying two of those colours is already gone. By late winter the same ground is uniformly brown and half-rotted, the contrast has collapsed, and you are back to matching a single muddy tone with nothing to hide behind.',
        ],
      },
    ],
    related: ['hide-a-kamo-on-tree-bark', 'hide-a-kamo-in-gravel'],
  },

  {
    slug: 'hide-a-kamo-in-sand',
    linkText: 'Sand',
    cardLine: 'Almost one colour, but ripples and footprints give you the lines you need.',
    h1: 'Hiding a kamo in sand',
    title: 'How to hide a kamo in sand — ripples beat colour',
    description:
      'Sand is close to a single colour, which makes it look easy and play hard. The ripples, footprints and damp patches are what actually hide a kamo on a beach.',
    standfirst: 'Looks like the easiest surface on the beach. It is the one that punishes flat light.',
    sections: [
      {
        h2: 'One colour, many tones',
        paras: [
          'Sand is nearly monochrome, so you cannot rely on colour variation the way you can on gravel or leaves. What sand has instead is <strong>tone</strong>: dry sand is pale, damp sand is two stops darker, and every ripple has a lit side and a shaded side. Painting a kamo one flat beige ignores all of it.',
          'Work the tonal map. If the figure spans a ripple, its top should be paler than its base, exactly like the ridge behind it.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Anywhere the surface has been disturbed.'],
        list: [
          'In the trough of a ripple, where there is real shadow',
          'On the tide line where wet meets dry and the tone changes anyway',
          'Inside a footprint — a ready-made shadowed depression',
          'Among shell fragments or dried seaweed for extra detail',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Hard midday sun. On a flat beach at noon, a kamo casts a sharp dark shadow onto a pale even field and nothing you paint will fix it. <strong>Late afternoon light, with the ripples throwing their own long shadows, is when sand becomes a good surface.</strong>',
          'Grain size is the other thing worth checking before you commit. Fine, pale, wind-blown sand is close to snow in difficulty: smooth, bright and featureless. Coarse sand mixed with shell grit and small pebbles behaves like gravel, and gravel is the friendliest surface in the game — so walk twenty metres up the beach before deciding the round is hard.',
        ],
      },
    ],
    related: ['hide-a-kamo-in-gravel', 'hide-a-kamo-in-snow'],
  },

  {
    slug: 'hide-a-kamo-in-snow',
    linkText: 'Snow',
    cardLine: 'The brightest surface in the game — and the one where shadows are blue, not grey.',
    h1: 'Hiding a kamo in snow',
    title: 'How to hide a kamo in snow — the shadows are blue',
    description:
      'Snow is the brightest, flattest surface you can point a phone at, and the one where the usual grey-shadow instinct is wrong. What to paint, and why fresh snow is harder than old.',
    standfirst: 'Bright, flat, and full of a colour most people forget to paint.',
    sections: [
      {
        h2: 'Shadows on snow are blue',
        paras: [
          'The instinct is to paint white with grey shading. On snow that is wrong: snow in shadow is <strong>lit by the sky, so its shadows are distinctly blue</strong>, sometimes strongly so. A kamo shaded in neutral grey looks dirty against real snow — the one dull object in a bright scene.',
          'The second surprise is that pure white is rarely right either. Snow under a low sun runs warm, almost cream, on the lit side.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Fresh snow is a smooth even field, which makes it one of the harder surfaces. Old snow is much better.'],
        list: [
          'In a boot print, which gives depth and a blue shadow at once',
          'At the edge of a cleared path where snow meets tarmac or grit',
          'Against the grey-brown crust of ploughed or melting snow',
          'Where a branch or a fence casts a long shadow across the surface',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Exposure. Phones underexpose snow, so the whole frame comes out grey and your carefully matched figure is matched to a lie. Tap to expose on the snow before you start, and paint against what you can actually see on screen.',
        ],
      },
    ],
    related: ['hide-a-kamo-in-sand', 'hide-a-kamo-on-a-white-wall'],
  },

  {
    slug: 'hide-a-kamo-on-a-bookshelf',
    linkText: 'Bookshelf',
    cardLine: 'Vertical bands of colour and real shadow between the spines.',
    h1: 'Hiding a kamo on a bookshelf',
    title: 'How to hide a kamo on a bookshelf — live in the gap between spines',
    description:
      'A shelf of books is a row of hard vertical colour bands with dark gaps between them. It is one of the best indoor surfaces, if you stop trying to match a single spine.',
    standfirst: 'One of the best surfaces in the house, and it is already behind you.',
    sections: [
      {
        h2: 'Bands, not blocks',
        paras: [
          'A bookshelf is a sequence of narrow vertical bands, each a different colour, separated by <strong>genuinely dark gaps</strong>. Those gaps are what make it good: real shadow, at the right scale, in a straight line — everything you need to cut an outline in half.',
          'The classic mistake is placing the kamo flat against one spine and matching that colour. That works only if the figure is narrower than the book. Most of the time it spans two or three spines, so it needs two or three colours in the right order.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Use the mess, not the tidy run.'],
        list: [
          'Straddling the gap between two spines, so the dark line runs through the figure',
          'In front of a row of books lying flat, where the lines already change direction',
          'Among ornaments, plants and photo frames, where the eye is already sorting shapes',
          'On a lower shelf where the light drops off and everything is muddier',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Straight edges in the wrong place. Book spines are strictly vertical; any painted boundary that leans, or any colour band that stops halfway up, breaks the one rule this surface enforces. <strong>Keep every transition vertical and full height.</strong>',
        ],
      },
    ],
    related: ['hide-a-kamo-on-a-cluttered-desk', 'hide-a-kamo-on-wood-grain'],
  },

  {
    slug: 'hide-a-kamo-on-a-cluttered-desk',
    linkText: 'A cluttered desk',
    cardLine: 'Where most first rounds happen. Clutter helps, but only the right kind.',
    h1: 'Hiding a kamo on a cluttered desk',
    title: 'How to hide a kamo on a messy desk — clutter is not automatically camouflage',
    description:
      'The desk is where most first rounds happen. Clutter helps, but only when it gives you overlap and shadow — a tidy desk with three objects on it is harder than a bare wall.',
    standfirst: 'Where nearly every first round happens, and where the results are wildly inconsistent.',
    sections: [
      {
        h2: 'Clutter is not automatically camouflage',
        paras: [
          'A desk with three neat objects on a clear surface is <strong>worse</strong> than a plain wall: the eye scans four distinct shapes, and yours is the fourth. What helps is not the number of objects but whether they <strong>overlap and cast shadows onto each other</strong>. A tangle of cables, a stack of paper and an open notebook give you edges, depth and half a dozen colours in one square foot.',
          'So before placing anything, ask whether the area you have chosen has real occlusion in it. If it does not, move ten centimetres to somewhere that does.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Look for places where something is already partly hidden.'],
        list: [
          'Half behind a mug, a monitor foot or a laptop hinge',
          'In the cable nest behind the keyboard',
          'On the corner of a stack of paper, so an edge crosses the figure',
          'In the shadow under a desk lamp arm',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Desk lamps. A single strong light source throws one hard shadow in one direction, and every real object on the desk obeys it. A kamo painted without that shadow — or with a shadow pointing the wrong way — breaks the only physical rule the scene has. <strong>Check which way everything else\'s shadow falls, then match it.</strong>',
        ],
      },
    ],
    related: ['hide-a-kamo-on-wood-grain', 'hide-a-kamo-on-a-bookshelf'],
  },

  {
    slug: 'hide-a-kamo-on-a-kitchen-counter',
    linkText: 'Kitchen counter',
    cardLine: 'Speckled worktops are ideal. Anything glossy is a trap.',
    h1: 'Hiding a kamo on a kitchen counter',
    title: 'How to hide a kamo on a kitchen worktop — speckle good, gloss bad',
    description:
      'Kitchen worktops split cleanly: a speckled granite-effect surface is one of the best indoor hides, and a glossy white one is among the worst. How to tell and what to do.',
    standfirst: 'The material decides the round before you touch anything.',
    sections: [
      {
        h2: 'Speckle is the whole game',
        paras: [
          'A speckled worktop — granite, quartz, the laminate that imitates them — is <strong>fine random detail at exactly the right scale</strong>, which is the same thing that makes gravel easy, in a surface that happens to be at chest height with good light on it. Copy three tones of the speckle and a kamo disappears fast.',
          'Plain matte surfaces in white, black or a solid colour are the opposite: nothing to hide in, and every error visible. If you have a choice of counters, this one decision matters more than anything you do afterwards.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Kitchens are full of edges and objects; use them.'],
        list: [
          'Against the upstand where the counter meets the wall',
          'Beside a chopping board or a bread bin, in its shadow',
          'On the darker band under a wall cupboard, out of the downlight',
          'On a section with crumbs, marks or a coffee ring — free texture',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Downlights. Kitchen ceilings are full of small bright spots that produce hard highlights and multiple crossing shadows, and reproducing several shadow directions on one small figure is nearly impossible. <strong>Move to a part of the counter that is evenly lit</strong>, or work with the under-cabinet light only.',
        ],
      },
    ],
    related: ['hide-a-kamo-on-tiles', 'hide-a-kamo-on-a-cluttered-desk'],
  },

  {
    slug: 'hide-a-kamo-on-fabric',
    linkText: 'Fabric & denim',
    cardLine: 'Folds create their own shadows — the best of them beat any paint job.',
    h1: 'Hiding a kamo on fabric',
    title: 'How to hide a kamo on fabric — the folds do the hiding',
    description:
      'Denim, a sofa, a duvet: fabric hides a kamo through its folds rather than its colour. Where to place the figure, and why a stretched flat sheet is much harder than a rumpled one.',
    standfirst: 'Colour barely matters here. Geometry does.',
    sections: [
      {
        h2: 'Rumpled beats flat, every time',
        paras: [
          'A stretched flat sheet is a plain field — as hard as a wall. A rumpled one is <strong>a landscape of ridges and valleys with real shadow in it</strong>, and shadow is the thing that hides a three-dimensional figure. Before anything else, disturb the fabric so it has folds in the area you plan to use.',
          'Denim adds something extra: a fine diagonal weave and pale wear lines along the seams and creases. Copy the diagonal, not just the blue.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Put the figure where the cloth is already doing something.'],
        list: [
          'In the valley of a fold, so it sits in existing shadow',
          'Along a seam, where a hard line crosses the figure',
          'On a patterned throw or a printed cushion, where the design breaks the outline',
          'Where two different fabrics meet — sofa and cushion, jeans and shoe',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Sharpness. Fabric is soft and slightly fuzzy at every edge, and phone cameras render it that way. A crisply painted figure with a clean boundary is the only sharp thing in a soft photograph, and the eye finds it immediately.',
          'Weave scale is the other trap. Chunky knitwear, corduroy and towelling all have texture big enough to see at arm\'s length, which means a smooth painted figure sitting on them reads as a hole in the fabric. Copy the ribs or the loops at the size they actually appear, and let a couple of them run across the kamo.',
        ],
      },
    ],
    related: ['hide-a-kamo-on-carpet', 'hide-a-kamo-on-a-cluttered-desk'],
  },

  {
    slug: 'hide-a-kamo-on-asphalt',
    linkText: 'Asphalt & road',
    cardLine: 'Coarse aggregate, oil marks and paint lines. Better than it looks.',
    h1: 'Hiding a kamo on asphalt',
    title: 'How to hide a kamo on asphalt — coarser than concrete, and kinder',
    description:
      'Road surface looks like flat black and behaves like coarse gravel glued in place: aggregate, oil stains, tyre polish and paint lines all give you somewhere to hide a kamo.',
    standfirst: 'Reads as flat black. Up close it is coarse gravel that stopped moving.',
    sections: [
      {
        h2: 'It is gravel, held still',
        paras: [
          'Asphalt is stone aggregate in bitumen, so at the scale of a small figure it has <strong>the same random speckle that makes gravel easy</strong> — just flatter and darker. That makes it much more forgiving than concrete, where the surface is smoother and errors show.',
          'The trap is painting it as black. Asphalt is rarely black: it is grey where it has weathered, near-white where tyres have polished it, and blue-grey in the wet.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Roads are covered in interruptions.'],
        list: [
          'On the edge of a painted line, where two colours meet',
          'On an oil or tar patch — a colour change that costs you nothing',
          'On a repair seam, where old and new asphalt meet in a hard line',
          'In the gutter, where grit and shadow collect',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Wet asphalt. Once the surface is wet it becomes a mirror, carrying reflected sky and streetlights that a painted figure cannot reproduce. <strong>Dry road, or find a dry patch.</strong>',
          'Age matters too. A freshly laid road is close to uniform — fine aggregate, even bitumen, no wear — and behaves much more like concrete. What you want is a surface that has been driven on for years: the bitumen has worn back to expose the stones, the wheel tracks are polished pale, and the centre of the lane is a different tone from the edges.',
          'One warning that has nothing to do with the game: pavements and gutters are fine, live carriageways are not. A hide is worth about a minute of your attention, which is a minute you are not spending on traffic. Do it on the kerb side.',
        ],
      },
    ],
    related: ['hide-a-kamo-on-concrete', 'hide-a-kamo-in-gravel'],
  },

  {
    slug: 'hide-a-kamo-on-a-white-wall',
    linkText: 'A plain white wall',
    cardLine: 'Hard mode. One tone, no lines, nowhere to hide — read this before you try.',
    h1: 'Hiding a kamo on a plain white wall',
    title: 'How to hide a kamo on a plain wall — the hardest surface in the game',
    description:
      'A flat evenly-lit wall gives you no texture, no lines and no shadow. It is the hardest surface in KAMO. If you insist on trying, here is the only way it works.',
    standfirst: 'The hardest surface in the game. This page is mostly about why.',
    sections: [
      {
        h2: 'Why it is so hard',
        paras: [
          'Every other surface offers at least one of three things: texture to be sloppy inside, lines to break an outline against, or shadow to sit in. <strong>A plain, evenly-lit wall offers none of them.</strong> Your colour is either exactly right or visibly wrong, and even when it is right the figure keeps its own silhouette, which is what people actually spot.',
          'This is also why a wall punishes the natural instinct. People choose it because it looks simple. Simple for you is simple for the seeker.',
        ],
      },
      {
        h2: 'The only things that work',
        paras: ['If you are going to do it anyway, find the one part of the wall that is not perfectly plain.'],
        list: [
          'The corner where two walls meet, or where the wall meets the ceiling',
          'The soft gradient near a lamp, where brightness changes across the surface',
          'A light switch, socket, radiator or picture hook to break the outline against',
          'Scuffs, dents and old filler — the only texture the wall has',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'The gradient. Walls are never one brightness: they are lighter near a window and darker toward the floor and corners. A kamo painted one flat tone is correct in exactly one spot and wrong everywhere else. <strong>Paint the gradient across the figure</strong>, lighter on the side facing the light.',
          'Honestly, the better move is to point somewhere else. A wall is a good place to learn what texture is worth.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is there any wall that works?',
        a: 'Textured ones. Woodchip, rough render, exposed plaster and old brick that has been painted all keep some surface relief, which is enough to be sloppy inside. It is the smooth modern emulsion that is brutal.',
      },
    ],
    related: ['hide-a-kamo-on-brick', 'hide-a-kamo-on-carpet'],
  },

  {
    slug: 'hide-a-kamo-on-marble',
    linkText: 'Marble',
    cardLine: 'Veins are lines you did not have to draw. Follow them exactly.',
    h1: 'Hiding a kamo on marble',
    title: 'How to hide a kamo on marble — the veins are the whole trick',
    description:
      'Marble gives you dramatic dark veins running through a pale field: the strongest lines of any smooth surface. Continue them across the figure and it disappears; break one and it is over.',
    standfirst: 'The strongest lines you will find on a smooth surface — and they must line up.',
    sections: [
      {
        h2: 'Continue the vein or lose the round',
        paras: [
          'Marble is a pale field crossed by <strong>strong, irregular, high-contrast veins</strong>. That contrast is a gift, because it gives the eye something to follow instead of your figure. It is also a trap: veins are the most conspicuous feature on the surface, so a vein that runs into the kamo and does not come out the other side is a break in the single most visible line in the frame.',
          'Place the figure so at least one vein crosses it, then paint that vein through the figure in the position and thickness it would have had.',
        ],
      },
      {
        h2: 'Where to place it',
        paras: ['Pick the busy part of the slab.'],
        list: [
          'Where two or three veins converge and the pattern is already chaotic',
          'On a dark, heavily-veined area rather than a clean pale field',
          'At the edge of the slab, where it meets an upstand or a sink cutout',
        ],
      },
      {
        h2: 'What gives it away',
        paras: [
          'Polish. Marble is usually glossy, and gloss carries reflections that move as you tilt the phone — reflections a painted figure will never have. Either shoot at an angle where the reflection is out of frame, or use honed marble if you have it.',
        ],
      },
    ],
    related: ['hide-a-kamo-on-a-kitchen-counter', 'hide-a-kamo-on-tiles'],
  },
];
