<main>
  <h1>Welcome, Revenant</h1>
  <p>
    This is the concept page of a videogame. In this game, the player takes the
    place of a Revenant Mariner, a dedicated explorer sailing through a deadly
    ocean to discover new lands. It's meant to be a sort of Uncharted Waters
    clone, but without the manual tile-based navigation. The game's mechanics
    will be primarily focused on exploration and discovery, with a secondary
    focus on combat and trading.
  </p>

  <h2>Aetherhaven</h2>
  <img
    src="/city-concept.webp"
    alt="A large fantastical metropolis filled with tall steel and glass spires and arcing multicolored lightning"
  />
  <p>
    Aetherhaven, your home. Surrounded by a sea cloaked in perpetual mist, this
    city is a beacon of advanced magical technologies and towering multicolored
    skyscrapers. It pulses with the energy of arcing lightning and the hum of
    arcane innovations, attracting adventurers, scholars, and mystics from all
    corners of the world. It is a post-scarcity society, with high minded and
    utopian ideals. The people of Aetherhaven are dedicated to the pursuit of
    knowledge and discovery.
  </p>

  <h2>Drifter</h2>
  <img src="/drifter.webp" alt="A small but cleaning looking explorer boat" />
  <p>
    The Drifter is a ship that the player uses to navigate the ocean. It's a
    small, cheap ship that the player will want to replace as soon as possible,
    but an upgraded ship will require more influence and crew to maintain.
  </p>

  <h2>Revenant Mariner</h2>
  <img
    src="/revenant-mariner.webp"
    alt="An adventurous woman with a magical tattoo of a great sea beast"
  />
  <p>
    You, the player. The Revenant Mariner navigates this world with the aid of a
    Revenant's Mark, a powerful magical tattoo that transports the wearer back
    in time any time they die. Revenant Mariners chart and navigate The Lost
    Haze by repeatedly dying and returning to the past. When the tattoo is
    activated, the tattoo is updated with the cause of the Revenant's death, as
    well as the last known direction the Revenant had set off in, and an updated
    count of the number of times the tattoo has triggered.
  </p>

  <h2>The Lost Haze</h2>
  <img
    src="/lost-haze.webp"
    alt="A vast and deadly ocean filled with monsters and storms"
  />
  <p>
    The Lost Haze is a vast and deadly ocean filled with monsters, storms, and
    other dangers. Though it may seem like an ordinary mist-filled ocean at
    first, The Lost Haze is modelled as a gently sloping hyperbolic plane, with
    islands of stability and safety scattered throughout. Due to its hyperbolic
    nature, slight deviations in course lead to massive changes in trajectory,
    making conventional spatial mapping impossible. A Revenant Mariner may only
    navigate The Haze by charting a course in advance and seeing where it leads.
  </p>

  <h2>Gameplay</h2>
  <p>
    The Revenant Mariner navigates the ocean by charting predetermined courses
    and seeing where they lead. In practice, this will essentially be
    implemented as an idle game, where the Revenant Mariner sets a general
    direction, and the game fast-forwards through a series of possible
    algorithmically generated courses with random seeds, telling the Revenant
    what the tattoo shifted to and the number of deaths so far each time. Over
    multiple cycles, the different courses will be plotted on a scatter plot,
    and over time patterns will emerge that allow the player to get a better
    picture of what lies in the Lost Haze, and how far they are from discovering
    a new land. If the Revenant discovers a new land, they will be able to
    explore it. Over time, as new locations are discovered and charted, the
    Revenant will be able to upgrade their ship, hire more crew, purchase and
    commission new ships and fleets, and establish trade routes.
  </p>
</main>

<style>
  main {
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }
</style>
