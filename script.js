/* ═══════════════════════════════════════════════════════════
   MARVEL STUDIOS · ECHOES OF STRUGGLE — FULL SCRIPT
   ═══════════════════════════════════════════════════════════ */

gsap.registerPlugin(ScrollTrigger, TextPlugin);
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ══════════════════════════════════════════
   CHARACTER DATA — ALL MCU HEROES
══════════════════════════════════════════ */
const CHARACTERS = [
  {
    id: 'iron-man', name: 'IRON MAN', alias: 'Tony Stark',
    color: '#e62429', colorSecondary: '#f5b31c',
    image: 'iron man.png',
    quote: '"I watched my inventions destroy lives. Now I carry that guilt inside a suit of armor."',
    quoteRef: '— DEMONS OF THE PAST',
    powers: ['Genius Intellect','Arc Reactor','Powered Armor','Weapons Systems','Flight'],
    story: 'Tony Stark was a genius inventor and billionaire industrialist who built an empire on weapons manufacturing. Captured in Afghanistan, he built the first Iron Man suit to escape. He shut down his weapons division and dedicated his life to protecting the world. He ultimately sacrificed himself to save the universe from Thanos, snapping away the Mad Titan at the cost of his own life.',
  },
  {
    id: 'captain-america', name: 'CAPTAIN AMERICA', alias: 'Steve Rogers',
    color: '#1a56db', colorSecondary: '#ef3e42',
    image: 'captain America.png',
    quote: '"I woke up from a dream. Everyone I loved is gone. But the fight… the fight is all I have left."',
    quoteRef: '— THE MAN OUT OF TIME',
    powers: ['Super Soldier Serum','Vibranium Shield','Peak Human Strength','Tactical Genius','Indomitable Will'],
    story: 'Steve Rogers was a frail young man from Brooklyn chosen for the Super Soldier program. He fought HYDRA in WWII, crashed into the Arctic, and was frozen for 70 years. Awakening in the modern world, he led the Avengers. After defeating Thanos, Steve traveled back in time to live the life he never had with Peggy Carter.',
  },
  {
    id: 'thor', name: 'THOR', alias: 'God of Thunder',
    color: '#3b82f6', colorSecondary: '#fbbf24',
    image: 'thor.png',
    quote: '"I am not the king my father was. I lost my home, my brother, my worth. Am I still worthy?"',
    quoteRef: '— FALLEN GOD',
    powers: ['God-Level Strength','Mjolnir & Stormbreaker','Lightning Control','Flight','Near-Immortality'],
    story: 'Thor, the God of Thunder and prince of Asgard, was banished to Earth by Odin to learn humility. He defended Earth as an Avenger, but lost his mother, father, hammer, eye, and watched Asgard destroyed. His brother Loki died saving him from Thanos. Thor fell into depression after failing to stop the Snap, but found redemption in the final battle.',
  },
  {
    id: 'spider-man', name: 'SPIDER-MAN', alias: 'Peter Parker',
    color: '#ef4444', colorSecondary: '#3b82f6',
    image: 'spiderman.png',
    quote: '"No matter how fast I am, I can\'t save everyone. And the city I love… sometimes fears me."',
    quoteRef: '— THE WEIGHT OF RESPONSIBILITY',
    powers: ['Spider-Sense','Wall-Crawling','Web-Slinging','Enhanced Agility','Iron Spider Suit'],
    story: 'Peter Parker was bitten by a radioactive spider, gaining superhuman abilities. After his Uncle Ben was killed, he learned that with great power comes great responsibility. Mentored by Tony Stark, Peter fought in Civil War, battled the Vulture, and helped defeat Thanos. Despite losing his mentor and facing identity exposure, he continues to be the friendly neighborhood Spider-Man.',
  },
  {
    id: 'doctor-strange', name: 'DOCTOR STRANGE', alias: 'Stephen Strange',
    color: '#f97316', colorSecondary: '#fbbf24',
    image: 'doctor stranger.png',
    quote: '"I saw 14 million futures. In only one we win. The weight of that secret is crushing."',
    quoteRef: '— THE SOLITARY VISION',
    powers: ['Sorcerer Supreme','Time Stone','Astral Projection','Dimensional Portals','Spell Casting'],
    story: 'Dr. Stephen Strange was a brilliant but arrogant neurosurgeon whose hands were destroyed in a car accident. He traveled to Kamar-Taj and discovered the mystic arts. During the battle against Thanos, Strange viewed 14 million possible futures, finding only one where they won. He gave up the Time Stone to save Tony Stark, knowing it was the only path to victory.',
  },
  {
    id: 'black-panther', name: 'BLACK PANTHER', alias: "T'Challa",
    color: '#8b5cf6', colorSecondary: '#a78bfa',
    image: 'black panter.png',
    quote: '"A king must lead his people into the future, but my father\'s shadow haunts every step."',
    quoteRef: '— LEGACY & LOSS',
    powers: ['Heart-Shaped Herb','Vibranium Suit','Enhanced Senses','Tactical Genius','Wakandan Tech'],
    story: "T'Challa became king of Wakanda after his father T'Chaka was killed. He struggled with his father's legacy and the revelation that led to Killmonger's vendetta. After defeating Killmonger, T'Challa opened Wakanda to the world. He led Wakanda's forces in the final battle against Thanos.",
  },
  {
    id: 'hulk', name: 'HULK', alias: 'Bruce Banner',
    color: '#22c55e', colorSecondary: '#16a34a',
    image: 'hulk.png',
    quote: '"The angrier I get, the stronger I become. But what if I can never find peace?"',
    quoteRef: '— RAGE WITHIN',
    powers: ['Unlimited Strength','Gamma Radiation','Regeneration','Rage Amplification','Smart Hulk Intelligence'],
    story: 'Dr. Bruce Banner was exposed to massive gamma radiation, transforming him into the Hulk. For years he ran from the military and tried to cure himself. He eventually merged his intelligence with Hulk\'s strength, becoming "Smart Hulk." He performed the Snap that brought everyone back from Thanos\'s erasure, though it permanently damaged his arm.',
  },
  {
    id: 'thanos', name: 'THANOS', alias: 'The Mad Titan',
    color: '#7c3aed', colorSecondary: '#fbbf24',
    image: 'thonas.png',
    quote: '"I am inevitable. But at what cost? The universe balanced, yet I am alone."',
    quoteRef: '— THE MAD TITAN',
    powers: ['Infinity Gauntlet','Superhuman Strength','Tactical Genius','Reality Manipulation','Eternal Durability'],
    story: 'Thanos witnessed his world collapse from overpopulation and dedicated himself to eliminating half of all life. He gathered the six Infinity Stones, sacrificing his adopted daughter Gamora for the Soul Stone. With a snap of his fingers, he erased half of all living beings. He was ultimately defeated and turned to dust by Iron Man\'s snap.',
  },
  {
    id: 'black-widow', name: 'BLACK WIDOW', alias: 'Natasha Romanoff',
    color: '#dc2626', colorSecondary: '#6b7280',
    image: 'https://cdn.marvel.com/content/1x/011blw_ons_crd_04.webp',
    quote: '"I have red in my ledger. I\'d like to wipe it out."',
    quoteRef: '— THE WEIGHT OF THE PAST',
    powers: ['Master Spy','Expert Martial Artist','Widow\'s Bite','Tactical Genius','Multilingual'],
    story: 'Natasha Romanoff was trained from childhood in the Red Room as a Soviet spy and assassin. She defected to S.H.I.E.L.D. and became one of the founding Avengers. She sacrificed herself on Vormir so Clint could obtain the Soul Stone, giving her life to undo the Snap.',
  },
  {
    id: 'hawkeye', name: 'HAWKEYE', alias: 'Clint Barton',
    color: '#6366f1', colorSecondary: '#a5b4fc',
    image: 'https://cdn.marvel.com/content/1x/hawkeye_ons_crd_01.webp',
    quote: '"I\'m just a guy with a bow. But I never miss."',
    quoteRef: '— THE MARKSMAN',
    powers: ['Master Archer','Expert Martial Artist','Tactical Genius','Trick Arrows','Ronin Skills'],
    story: 'Clint Barton is the world\'s greatest archer and a founding Avenger. After losing his family to the Snap, he became the vigilante Ronin, hunting criminals across the world. He was brought back by Natasha and helped reverse the Snap in the final battle against Thanos.',
  },
  {
    id: 'scarlet-witch', name: 'SCARLET WITCH', alias: 'Wanda Maximoff',
    color: '#dc2626', colorSecondary: '#f87171',
    image: 'https://cdn.marvel.com/content/1x/012scw_ons_crd_03.webp',
    quote: '"I can\'t control it. The chaos magic… it controls me."',
    quoteRef: '— CHAOS INCARNATE',
    powers: ['Chaos Magic','Reality Warping','Telekinesis','Mind Control','Hex Bolts'],
    story: 'Wanda Maximoff gained her powers through HYDRA experimentation with the Mind Stone. She lost her brother Pietro, her love Vision, and her children. Grief drove her to create the Hex around Westview. She became the Scarlet Witch, the most powerful magic user in the MCU, capable of rewriting reality itself.',
  },
  {
    id: 'vision', name: 'VISION', alias: 'The Synthezoid',
    color: '#7c3aed', colorSecondary: '#fbbf24',
    image: 'https://cdn.marvel.com/content/1x/013vis_ons_crd_01-1.webp',
    quote: '"What is grief, if not love persevering?"',
    quoteRef: '— LOVE BEYOND DEATH',
    powers: ['Mind Stone','Density Manipulation','Phasing','Energy Beams','Synthetic Intelligence'],
    story: 'Vision was created from the Mind Stone, Tony Stark\'s JARVIS AI, and vibranium. He became an Avenger and fell in love with Wanda Maximoff. Thanos ripped the Mind Stone from his head, killing him. Wanda later recreated him in the Hex, and a new White Vision was reactivated by S.W.O.R.D.',
  },
  {
    id: 'ant-man', name: 'ANT-MAN', alias: 'Scott Lang',
    color: '#ef4444', colorSecondary: '#fbbf24',
    image: 'https://cdn.marvel.com/content/1x/010ant_ons_crd_05.webp',
    quote: '"I\'m just a regular guy who got a second chance. I\'m not going to waste it."',
    quoteRef: '— THE UNLIKELY HERO',
    powers: ['Pym Particle Suit','Size Manipulation','Ant Communication','Quantum Realm Access','Combat Skills'],
    story: 'Scott Lang was a thief who was given the Ant-Man suit by Hank Pym. He used his powers to protect his daughter Cassie and fight alongside the Avengers. He discovered the Quantum Realm and proposed the time heist that allowed the Avengers to reverse the Snap.',
  },
  {
    id: 'captain-marvel', name: 'CAPTAIN MARVEL', alias: 'Carol Danvers',
    color: '#3b82f6', colorSecondary: '#fbbf24',
    image: 'https://cdn.marvel.com/content/1x/008cmv_ons_crd_05.webp',
    quote: '"I\'ve been fighting with one hand tied behind my back. What happens when I\'m finally free?"',
    quoteRef: '— HIGHER, FURTHER, FASTER',
    powers: ['Photon Energy Blasts','Binary Form','Flight','Superhuman Strength','Space Travel'],
    story: 'Carol Danvers was a U.S. Air Force pilot who gained powers from a Tesseract-powered engine explosion. She spent years as a Kree warrior before recovering her memories and choosing to protect the universe. She is one of the most powerful beings in the MCU.',
  },
  {
    id: 'war-machine', name: 'WAR MACHINE', alias: 'James Rhodes',
    color: '#6b7280', colorSecondary: '#ef4444',
    image: 'https://cdn.marvel.com/content/1x/042wmr_ons_crd_04.webp',
    quote: '"I\'m not Iron Man. But I\'ll do what needs to be done."',
    quoteRef: '— IRON PATRIOT',
    powers: ['War Machine Armor','Heavy Weaponry','Military Training','Flight','Combat Systems'],
    story: 'James Rhodes is Tony Stark\'s best friend and a decorated U.S. Air Force officer. He took one of Tony\'s suits and became War Machine, serving as a government-sanctioned hero. He fought alongside the Avengers in every major battle and was paralyzed by Vision during Civil War.',
  },
  {
    id: 'falcon', name: 'FALCON', alias: 'Sam Wilson',
    color: '#ef4444', colorSecondary: '#fbbf24',
    image: 'https://cdn.marvel.com/content/1x/cap_ons_crd_01.webp',
    quote: '"The legacy of that shield is complicated. But I\'m ready to carry it."',
    quoteRef: '— THE NEW CAPTAIN AMERICA',
    powers: ['EXO-7 Falcon Wings','Redwing Drone','Combat Training','Tactical Genius','New Captain America Shield'],
    story: 'Sam Wilson was a pararescueman who became the Falcon using experimental EXO-7 wings. He became Steve Rogers\'s closest ally and fought in every major Avengers battle. Steve Rogers passed the Captain America shield to Sam, who eventually accepted the mantle.',
  },
  {
    id: 'winter-soldier', name: 'WINTER SOLDIER', alias: 'Bucky Barnes',
    color: '#6b7280', colorSecondary: '#3b82f6',
    image: 'https://cdn.marvel.com/content/1x/015wsb_ons_crd_03.webp',
    quote: '"I remember all of them. Every face. Every name. That\'s my punishment."',
    quoteRef: '— THE GHOST OF HYDRA',
    powers: ['Vibranium Arm','Super Soldier Serum','Expert Assassin','Combat Mastery','HYDRA Training'],
    story: 'Bucky Barnes was Steve Rogers\'s best friend who fell from a train in WWII and was captured by HYDRA. They turned him into the Winter Soldier, a brainwashed assassin. Steve helped him break free from HYDRA\'s programming. Bucky eventually became the White Wolf and fought alongside the Avengers.',
  },
  {
    id: 'loki', name: 'LOKI', alias: 'God of Mischief',
    color: '#16a34a', colorSecondary: '#fbbf24',
    image: 'https://cdn.marvel.com/content/1x/017lok_ons_crd_03.webp',
    quote: '"I am Loki of Asgard, and I am burdened with glorious purpose."',
    quoteRef: '— THE TRICKSTER GOD',
    powers: ['Sorcery & Illusions','Shapeshifting','Frost Giant Physiology','Scepter Control','Cunning Intellect'],
    story: 'Loki is the adopted son of Odin and brother of Thor. He discovered he was a Frost Giant and felt betrayed, leading him to attempt to conquer Earth. He later allied with Thanos before ultimately sacrificing himself to save Thor. A variant of Loki escaped with the Tesseract and was captured by the TVA.',
  },
  {
    id: 'guardians', name: 'STAR-LORD', alias: 'Peter Quill',
    color: '#f97316', colorSecondary: '#ef4444',
    image: 'https://cdn.marvel.com/content/1x/021slq_ons_crd_03.webp',
    quote: '"I\'m not from Earth. I\'m from Missouri."',
    quoteRef: '— GUARDIAN OF THE GALAXY',
    powers: ['Celestial Heritage','Element Guns','Jet Boots','Translator Implant','Outlaw Tactics'],
    story: 'Peter Quill was abducted from Earth as a child and raised by the Ravagers. He became Star-Lord, leader of the Guardians of the Galaxy. He helped defeat Ronan, Ego, and Thanos. His impulsive decision on Titan nearly cost the universe everything, but he redeemed himself in the final battle.',
  },
  {
    id: 'shang-chi', name: 'SHANG-CHI', alias: 'Shang-Chi',
    color: '#f59e0b', colorSecondary: '#ef4444',
    image: 'https://cdn.marvel.com/content/1x/242shc_ons_crd_01.webp',
    quote: '"My father built me into a weapon. I choose what I aim at."',
    quoteRef: '— MASTER OF THE TEN RINGS',
    powers: ['Ten Rings','Master Martial Artist','Chi Manipulation','Tactical Combat','Dragon Rider'],
    story: 'Shang-Chi was trained from childhood by his father Xu Wenwu, the immortal wielder of the Ten Rings. He fled to San Francisco to escape his destiny, but was pulled back when his father sought to open the Dark Gate. Shang-Chi defeated his father and claimed the Ten Rings, becoming a new hero for the MCU.',
  }
];

const MCU_PROJECTS = [
  { date: '1943–1945', title: 'Captain America: The First Avenger', type: 'Film', note: 'Steve Rogers becomes a Super Soldier during World War II.', characters: ['captain-america', 'winter-soldier'] },
  { date: '1946', title: 'Agent Carter — Season 1', type: 'Series', note: 'Peggy Carter continues her work for the SSR after the war.', characters: [] },
  { date: '1946', title: 'Agent Carter — One-Shot', type: 'Special', note: 'Peggy Carter takes on a new mission for the SSR.', characters: [] },
  { date: '1947', title: 'Agent Carter — Season 2', type: 'Series', note: 'Peggy’s investigations take her to Los Angeles.', characters: [] },
  { date: '1995', title: 'Captain Marvel', type: 'Film', note: 'Carol Danvers discovers the truth about her past.', characters: ['captain-marvel', 'nick-fury'] },
  { date: '2010', title: 'Iron Man', type: 'Film', note: 'Tony Stark builds the first Iron Man armor.', characters: ['iron-man', 'war-machine'] },
  { date: '2010', title: 'Iron Man 2', type: 'Film', note: 'Tony faces new threats as the Avengers initiative takes shape.', characters: ['iron-man', 'war-machine', 'black-widow'] },
  { date: '2010', title: 'The Incredible Hulk', type: 'Film', note: 'Bruce Banner searches for a cure while evading the military.', characters: ['hulk', 'iron-man'] },
  { date: '2010', title: 'Marvel One-Shot: A Funny Thing Happened on the Way to Thor’s Hammer', type: 'Special', note: 'Agent Coulson encounters trouble on the road to New Mexico.', characters: [] },
  { date: '2010', title: 'Marvel One-Shot: The Consultant', type: 'Special', note: 'S.H.I.E.L.D. agents discuss a new recruit after the events of The Incredible Hulk.', characters: [] },
  { date: '2011', title: 'Thor', type: 'Film', note: 'Thor is banished to Earth and learns what it means to be worthy.', characters: ['thor', 'hawkeye', 'loki'] },
  { date: '2012', title: 'The Avengers', type: 'Film', note: 'Earth’s first team of Avengers faces Loki and the Chitauri.', characters: ['iron-man', 'captain-america', 'thor', 'hulk', 'black-widow', 'hawkeye', 'loki', 'thanos'] },
  { date: '2012', title: 'Marvel One-Shot: Item 47', type: 'Special', note: 'A Chitauri weapon left behind after the Battle of New York causes trouble.', characters: [] },
  { date: '2013', title: 'Thor: The Dark World', type: 'Film', note: 'Thor and Loki confront the Dark Elves and the Aether.', characters: ['thor', 'loki', 'captain-america'] },
  { date: '2013', title: 'Iron Man 3', type: 'Film', note: 'Tony Stark reckons with the cost of being Iron Man.', characters: ['iron-man', 'war-machine', 'hulk'] },
  { date: '2013', title: 'Marvel One-Shot: All Hail the King', type: 'Special', note: 'Trevor Slattery’s story continues after Iron Man 3.', characters: [] },
  { date: '2014', title: 'Captain America: The Winter Soldier', type: 'Film', note: 'Steve and Natasha uncover a conspiracy inside S.H.I.E.L.D.', characters: ['captain-america', 'black-widow', 'falcon', 'winter-soldier'] },
  { date: '2014', title: 'Guardians of the Galaxy', type: 'Film', note: 'A band of outlaws unite to protect the galaxy.', characters: ['guardians', 'thanos'] },
  { date: '2014', title: 'Guardians of the Galaxy Vol. 2', type: 'Film', note: 'The Guardians discover the truth about Peter Quill’s family.', characters: ['guardians'] },
  { date: '2014', title: 'I Am Groot — Season 1', type: 'Animated series', note: 'Groot’s short adventures take place around the Guardians’ early journeys.', characters: ['guardians'] },
  { date: '2014', title: 'I Am Groot — Season 2', type: 'Animated series', note: 'More short adventures with Baby Groot.', characters: ['guardians'] },
  { date: '2015', title: 'Avengers: Age of Ultron', type: 'Film', note: 'The Avengers face Ultron and meet Wanda and Vision.', characters: ['iron-man', 'captain-america', 'thor', 'hulk', 'black-widow', 'hawkeye', 'scarlet-witch', 'vision', 'falcon', 'war-machine', 'thanos'] },
  { date: '2015', title: 'Ant-Man', type: 'Film', note: 'Scott Lang takes on the Ant-Man suit.', characters: ['ant-man', 'falcon'] },
  { date: '2015', title: 'Daredevil — Season 1', type: 'Series', note: 'Matt Murdock protects Hell’s Kitchen.', characters: [] },
  { date: '2015', title: 'Jessica Jones — Season 1', type: 'Series', note: 'Jessica Jones confronts a dangerous figure from her past.', characters: [] },
  { date: '2016', title: 'Daredevil — Season 2', type: 'Series', note: 'Daredevil’s pursuit of justice brings him into conflict with the Punisher.', characters: [] },
  { date: '2016', title: 'Luke Cage — Season 1', type: 'Series', note: 'Luke Cage becomes a reluctant protector of Harlem.', characters: [] },
  { date: '2016', title: 'Iron Fist — Season 1', type: 'Series', note: 'Danny Rand returns to New York with the power of the Iron Fist.', characters: [] },
  { date: '2016', title: 'Captain America: Civil War', type: 'Film', note: 'The Avengers split over the Sokovia Accords.', characters: ['iron-man', 'captain-america', 'spider-man', 'black-panther', 'black-widow', 'hawkeye', 'scarlet-witch', 'vision', 'ant-man', 'falcon', 'winter-soldier', 'war-machine'] },
  { date: '2016', title: 'Black Widow', type: 'Film', note: 'Natasha confronts the Red Room between Civil War and Infinity War.', characters: ['black-widow'] },
  { date: '2016', title: 'Black Panther', type: 'Film', note: 'T’Challa returns to Wakanda to claim the throne.', characters: ['black-panther', 'winter-soldier'] },
  { date: '2016', title: 'Spider-Man: Homecoming', type: 'Film', note: 'Peter Parker balances high school with his new life as Spider-Man.', characters: ['spider-man', 'iron-man'] },
  { date: '2016–2017', title: 'Doctor Strange', type: 'Film', note: 'Stephen Strange discovers the mystic arts.', characters: ['doctor-strange', 'thor'] },
  { date: '2017', title: 'Thor: Ragnarok', type: 'Film', note: 'Thor races to save Asgard from destruction.', characters: ['thor', 'hulk', 'loki', 'doctor-strange'] },
  { date: '2017', title: 'The Defenders', type: 'Series', note: 'Daredevil, Jessica Jones, Luke Cage and Iron Fist unite.', characters: [] },
  { date: '2017', title: 'The Punisher — Season 1', type: 'Series', note: 'Frank Castle uncovers the conspiracy behind his family’s murder.', characters: [] },
  { date: '2017', title: 'Jessica Jones — Season 2', type: 'Series', note: 'Jessica investigates the experiment that gave her powers.', characters: [] },
  { date: '2017', title: 'Luke Cage — Season 2', type: 'Series', note: 'Luke faces new threats to Harlem and his reputation.', characters: [] },
  { date: '2017', title: 'Iron Fist — Season 2', type: 'Series', note: 'Danny Rand continues to defend New York.', characters: [] },
  { date: '2017', title: 'Daredevil — Season 3', type: 'Series', note: 'Matt Murdock returns to Hell’s Kitchen after a near-fatal battle.', characters: [] },
  { date: '2018', title: 'Ant-Man and the Wasp', type: 'Film', note: 'Scott and Hope race to bring Janet van Dyne home.', characters: ['ant-man'] },
  { date: '2018', title: 'The Punisher — Season 2', type: 'Series', note: 'Frank Castle is drawn back into a dangerous fight.', characters: [] },
  { date: '2018', title: 'Jessica Jones — Season 3', type: 'Series', note: 'Jessica faces a new serial killer and her own limits.', characters: [] },
  { date: '2018', title: 'Avengers: Infinity War', type: 'Film', note: 'The Avengers and Guardians try to stop Thanos from collecting the Stones.', characters: ['iron-man', 'captain-america', 'thor', 'hulk', 'spider-man', 'doctor-strange', 'black-panther', 'thanos', 'black-widow', 'scarlet-witch', 'vision', 'ant-man', 'war-machine', 'falcon', 'winter-soldier', 'loki', 'guardians'] },
  { date: '2018 / 2023', title: 'Avengers: Endgame', type: 'Film', note: 'The surviving Avengers attempt to reverse the Snap.', characters: ['iron-man', 'captain-america', 'thor', 'hulk', 'spider-man', 'doctor-strange', 'black-panther', 'thanos', 'black-widow', 'hawkeye', 'scarlet-witch', 'ant-man', 'captain-marvel', 'war-machine', 'falcon', 'winter-soldier', 'loki', 'guardians'] },
  { date: '2023', title: 'WandaVision', type: 'Series', note: 'Wanda and Vision’s story continues after the Blip.', characters: ['scarlet-witch', 'vision'] },
  { date: '2024', title: 'The Falcon and the Winter Soldier', type: 'Series', note: 'Sam Wilson and Bucky Barnes reckon with Captain America’s legacy.', characters: ['falcon', 'winter-soldier'] },
  { date: '2024', title: 'Shang-Chi and the Legend of the Ten Rings', type: 'Film', note: 'Shang-Chi is pulled back into the Ten Rings organization.', characters: ['shang-chi', 'hulk', 'captain-marvel'] },
  { date: '2024', title: 'Eternals', type: 'Film', note: 'The Eternals emerge from the shadows to face a world-changing threat.', characters: [] },
  { date: '2024', title: 'Spider-Man: Far From Home', type: 'Film', note: 'Peter Parker tries to take a break after the events of Endgame.', characters: ['spider-man'] },
  { date: '2024', title: 'Spider-Man: No Way Home', type: 'Film', note: 'Peter’s identity crisis opens the door to the multiverse.', characters: ['spider-man', 'doctor-strange'] },
  { date: '2024', title: 'Doctor Strange in the Multiverse of Madness', type: 'Film', note: 'Stephen Strange confronts the dangers of the multiverse.', characters: ['doctor-strange', 'scarlet-witch'] },
  { date: '2024', title: 'Hawkeye', type: 'Series', note: 'Clint Barton teams up with Kate Bishop in New York.', characters: ['hawkeye'] },
  { date: '2024', title: 'Echo', type: 'Series', note: 'Maya Lopez returns home and confronts her family’s past.', characters: [] },
  { date: '2025', title: 'Moon Knight', type: 'Series', note: 'Marc Spector and Steven Grant uncover an ancient Egyptian mystery.', characters: [] },
  { date: '2025', title: 'She-Hulk: Attorney at Law', type: 'Series', note: 'Jennifer Walters navigates life as a lawyer with Hulk-like powers.', characters: ['hulk'] },
  { date: '2025', title: 'Ms. Marvel', type: 'Series', note: 'Kamala Khan discovers her powers and her family history.', characters: ['captain-marvel'] },
  { date: '2025', title: 'Thor: Love and Thunder', type: 'Film', note: 'Thor’s search for inner peace is interrupted by a new enemy.', characters: ['thor', 'guardians'] },
  { date: '2025', title: 'Werewolf by Night', type: 'Special', note: 'A group of monster hunters compete for a powerful relic.', characters: [] },
  { date: '2025', title: 'The Guardians of the Galaxy Holiday Special', type: 'Special', note: 'The Guardians plan a Christmas surprise for Peter Quill, before Vol. 3.', characters: ['guardians'] },
  { date: '2025', title: 'Black Panther: Wakanda Forever', type: 'Film', note: 'Wakanda grieves T’Challa and faces a new power from the sea.', characters: [] },
  { date: '2025', title: 'Ant-Man and the Wasp: Quantumania', type: 'Film', note: 'The Ant-Man family is pulled into the Quantum Realm.', characters: ['ant-man'] },
  { date: '2025', title: 'Guardians of the Galaxy Vol. 3', type: 'Film', note: 'The Guardians rally to protect one of their own.', characters: ['guardians'] },
  { date: '2025', title: 'Secret Invasion', type: 'Series', note: 'Nick Fury confronts a Skrull infiltration of Earth.', characters: ['war-machine'] },
  { date: '2026', title: 'The Marvels', type: 'Film', note: 'Carol Danvers, Monica Rambeau and Kamala Khan find their powers entangled.', characters: ['captain-marvel'] },
  { date: '2026', title: 'Agatha All Along', type: 'Series', note: 'Agatha Harkness sets out on the Witches’ Road.', characters: [] },
  { date: '2025', title: 'Ironheart', type: 'Series', note: 'Riri Williams returns to Chicago and explores the tension between technology and magic.', characters: [] },
  { date: '2025–2026', title: 'Daredevil: Born Again — Season 1', type: 'Series', note: 'Matt Murdock and Wilson Fisk collide again in New York.', characters: [] },
  { date: '2026', title: 'Daredevil: Born Again — Season 2', type: 'Series', note: 'Matt Murdock’s fight against Wilson Fisk continues.', characters: [] },
  { date: '2026', title: 'Wonder Man', type: 'Series', note: 'Actor Simon Williams pursues a role that changes his life.', characters: [] },
  { date: '2026', title: 'Captain America: Brave New World', type: 'Film', note: 'Sam Wilson steps fully into the role of Captain America.', characters: ['falcon'] },
  { date: '2026', title: 'Thunderbolts*', type: 'Film', note: 'A team of unlikely operatives is drawn into a dangerous mission.', characters: ['winter-soldier'] },
  { date: '2026', title: 'The Punisher: One Last Kill', type: 'Special', note: 'Frank Castle returns for a standalone Marvel Television special.', characters: [] },
  { date: '2028', title: 'Spider-Man: Brand New Day', type: 'Film', note: 'Peter Parker faces a new chapter, years after the events of No Way Home.', characters: ['spider-man'] },
  { date: '1960s · alternate universe', title: 'The Fantastic Four: First Steps', type: 'Film · alternate universe', note: 'The Fantastic Four’s retro-futuristic world is a separate universe.', characters: [], nonLinear: true },
  { date: 'Multiple eras', title: 'Eyes of Wakanda', type: 'Animated anthology', note: 'Wakandan stories span multiple centuries and do not fit one single point in the timeline.', characters: ['black-panther'], nonLinear: true },
  { date: 'Alternate universe', title: 'Your Friendly Neighborhood Spider-Man — Seasons 1–2', type: 'Animated series · alternate universe', note: 'An animated Spider-Man origin set in a different universe from the live-action MCU.', characters: ['spider-man'], nonLinear: true },
  { date: 'Multiple universes', title: 'What If…? — Seasons 1–3', type: 'Animated anthology', note: 'The Watcher explores branching realities across the multiverse.', characters: ['iron-man', 'captain-america', 'thor', 'hulk', 'spider-man', 'doctor-strange', 'black-panther', 'thanos', 'black-widow', 'hawkeye', 'scarlet-witch', 'vision', 'ant-man', 'captain-marvel', 'war-machine', 'falcon', 'winter-soldier', 'loki', 'guardians'], nonLinear: true },
  { date: 'Multiple universes', title: 'Marvel Zombies', type: 'Animated series · alternate universe', note: 'A darker branch of the What If…? multiverse.', characters: ['scarlet-witch', 'captain-america', 'spider-man'], nonLinear: true },
  { date: 'Multiple universes', title: 'Deadpool & Wolverine', type: 'Film · multiverse', note: 'Wade Wilson and Logan travel through the multiverse.', characters: [], nonLinear: true },
  { date: '2012 branch', title: 'Loki — Seasons 1–2', type: 'Series · multiverse', note: 'A variant escapes the Battle of New York and is taken by the TVA.', characters: ['loki'], nonLinear: true }
];

function buildTimeline() {
  const heroSelect = document.getElementById('heroTimelineSelect');
  const timeline = document.getElementById('mcuTimeline');
  const watchOrder = document.getElementById('watchOrderList');
  const watchOrderSidepaths = document.getElementById('watchOrderSidepaths');
  const resultCount = document.getElementById('timelineResultCount');

  CHARACTERS.forEach(character => {
    const option = document.createElement('option');
    option.value = character.id;
    option.textContent = character.name;
    heroSelect.appendChild(option);
  });

  function renderProjects(projects) {
    timeline.replaceChildren();
    resultCount.textContent = `${projects.length} ${projects.length === 1 ? 'story' : 'stories'}`;
    let mainHeadingAdded = false;
    let sidepathHeadingAdded = false;

    projects.forEach((project, index) => {
      if (!project.nonLinear && !mainHeadingAdded) {
        const heading = document.createElement('h3');
        heading.className = 'tl-era';
        heading.textContent = 'THE MCU STORY TIMELINE';
        timeline.appendChild(heading);
        mainHeadingAdded = true;
      } else if (project.nonLinear && !sidepathHeadingAdded) {
        const heading = document.createElement('h3');
        heading.className = 'tl-era';
        heading.textContent = 'PARALLEL TIMELINES & ANTHOLOGIES';
        timeline.appendChild(heading);
        sidepathHeadingAdded = true;
      }

      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.classList.add('visible');
      item.dataset.year = project.date;
      item.dataset.projectIndex = String(index + 1);
      item.setAttribute('aria-label', `${project.date}: ${project.title}, ${project.type}`);

      const dot = document.createElement('div');
      dot.className = 'tl-dot';

      const content = document.createElement('div');
      content.className = 'tl-content';

      const heading = document.createElement('h3');
      heading.append(document.createTextNode(project.title));

      const kind = document.createElement('span');
      kind.className = 'tl-kind';
      kind.textContent = project.type;
      heading.appendChild(kind);

      const detail = document.createElement('p');
      detail.textContent = project.note;

      content.append(heading, detail);
      item.append(dot, content);
      timeline.appendChild(item);
    });
  }

  function renderWatchOrder() {
    watchOrder.replaceChildren();
    watchOrderSidepaths.replaceChildren();
    MCU_PROJECTS.filter(project => !project.nonLinear).forEach(project => {
      const item = document.createElement('li');
      const title = document.createElement('span');
      title.append(document.createTextNode(project.title));

      const kind = document.createElement('span');
      kind.className = 'watch-kind';
      kind.textContent = `${project.type} · ${project.date}`;
      title.appendChild(kind);
      item.appendChild(title);
      watchOrder.appendChild(item);
    });
    MCU_PROJECTS.filter(project => project.nonLinear).forEach(project => {
      const item = document.createElement('li');
      const title = document.createElement('span');
      title.append(document.createTextNode(project.title));

      const kind = document.createElement('span');
      kind.className = 'watch-kind';
      kind.textContent = `${project.type} · ${project.note}`;
      title.appendChild(kind);
      item.appendChild(title);
      watchOrderSidepaths.appendChild(item);
    });
  }

  heroSelect.addEventListener('change', () => {
    const selectedCharacter = heroSelect.value;
    const projects = selectedCharacter === 'all'
      ? MCU_PROJECTS
      : MCU_PROJECTS.filter(project => project.characters.includes(selectedCharacter));
    renderProjects(projects);
  });

  renderProjects(MCU_PROJECTS);
  renderWatchOrder();
}

/* ══════════════════════════════════════════
   LOADER
══════════════════════════════════════════ */
function initLoader() {
  const loader = document.getElementById('loader');
  const bar = document.getElementById('loaderBar');
  const pct = document.getElementById('loaderPercent');
  const video = document.getElementById('loaderVideo');
  const audio = document.getElementById('loaderAudio');
  const skipButton = document.getElementById('loaderSkip');
  if (prefersReducedMotion) {
    bar.style.width = '100%';
    pct.textContent = '100%';
    video.pause();
    audio.pause();
    loader.style.display = 'none';
    initApp();
    return;
  }

  let finished = false;
  let waitingForPlay = false;
  let audioNeedsGesture = false;
  let interval;

  const finishIntro = () => {
    if (finished) return;
    finished = true;
    clearInterval(interval);
    video.pause();
    audio.pause();
    gsap.to(loader, {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: () => {
        loader.style.display = 'none';
        initApp();
      }
    });
  };

  const playIntroAudio = () => {
    audio.play().then(() => {
      audioNeedsGesture = false;
      if (!waitingForPlay) skipButton.textContent = 'SKIP INTRO';
    }).catch(error => {
      if (error.name === 'NotAllowedError') {
        audioNeedsGesture = true;
        if (!waitingForPlay) skipButton.textContent = 'ENABLE AUDIO';
        console.warn('Intro audio autoplay was blocked; waiting for a user gesture.');
        return;
      }
      console.error('The intro audio could not be played.', error);
    });
  };

  const startIntro = () => {
    loader.classList.add('is-intro');
    skipButton.hidden = false;
    skipButton.textContent = 'SKIP INTRO';
    video.currentTime = 0;
    audio.currentTime = 0;
    waitingForPlay = true;
    playIntroAudio();
    video.play().then(() => {
      waitingForPlay = false;
      skipButton.textContent = audioNeedsGesture ? 'ENABLE AUDIO' : 'SKIP INTRO';
    }).catch(error => {
      if (error.name === 'NotAllowedError') {
        waitingForPlay = true;
        skipButton.textContent = 'PLAY INTRO';
        console.warn('Intro autoplay was blocked; waiting for a user gesture.');
        return;
      }
      console.error('The intro video could not be played.', error);
      finishIntro();
    });
  };

  skipButton.addEventListener('click', () => {
    if (waitingForPlay) {
      audio.currentTime = 0;
      playIntroAudio();
      video.play().then(() => {
        waitingForPlay = false;
        skipButton.textContent = audioNeedsGesture ? 'ENABLE AUDIO' : 'SKIP INTRO';
      }).catch(error => {
        console.error('The intro video could not be started.', error);
        finishIntro();
      });
      return;
    }

    if (audioNeedsGesture) {
      playIntroAudio();
      return;
    }

    finishIntro();
  });
  video.addEventListener('ended', finishIntro, { once: true });
  video.addEventListener('error', () => {
    console.error('The intro video failed to load.', video.error);
    finishIntro();
  }, { once: true });

  let progress = 0;

  interval = setInterval(() => {
    progress += Math.random() * 4 + 1;
    if (progress >= 100) { progress = 100; clearInterval(interval); }
    bar.style.width = progress + '%';
    pct.textContent = Math.floor(progress) + '%';
    if (progress === 100) {
      setTimeout(() => {
        gsap.to('.loader-content', {
          opacity: 0,
          duration: 0.35,
          ease: 'power2.inOut',
          onComplete: startIntro
        });
      }, 400);
    }
  }, 40);
}

/* ══════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════ */
function initCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const outer = document.getElementById('cursorOuter');
  const inner = document.getElementById('cursorInner');
  const canvas = document.getElementById('cursorSmoke');
  const ctx = canvas.getContext('2d');
  let mx = 0, my = 0, ox = 0, oy = 0;
  let particles = [];
  let lastParticle = 0;
  let lastFrame = 0;
  let pixelRatio = 1;

  function resizeCanvas() {
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * pixelRatio;
    canvas.height = window.innerHeight * pixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  document.addEventListener('pointermove', e => {
    mx = e.clientX; my = e.clientY;
    gsap.to(inner, { x: mx, y: my, duration: 0.1 });
    const now = performance.now();
    if (e.pointerType === 'mouse' && now - lastParticle > 30) {
      particles.push({
        x: mx, y: my,
        vx: (Math.random() - 0.5) * 0.7,
        vy: -0.5 - Math.random() * 0.8,
        radius: 12 + Math.random() * 14,
        life: 0
      });
      if (particles.length > 55) particles.shift();
      lastParticle = now;
    }
  });

  function lerp(a, b, t) { return a + (b - a) * t; }
  function animateCursor() {
    ox = lerp(ox, mx, 0.12); oy = lerp(oy, my, 0.12);
    outer.style.left = ox + 'px'; outer.style.top = oy + 'px';
    const delta = Math.min((performance.now() - lastFrame) / 1000, 0.05);
    lastFrame = performance.now();
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles = particles.filter(particle => particle.life < 1);
    particles.forEach(particle => {
      particle.life += delta * 1.15;
      particle.x += particle.vx;
      particle.y += particle.vy;
      const radius = particle.radius * (1 + particle.life);
      const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, radius);
      gradient.addColorStop(0, `rgba(185, 190, 202, ${0.15 * (1 - particle.life)})`);
      gradient.addColorStop(0.55, `rgba(112, 115, 126, ${0.07 * (1 - particle.life)})`);
      gradient.addColorStop(1, 'rgba(80, 80, 88, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('button, a, .roster-card, .stone, .timeline-item').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ══════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════ */
function initNav() {
  const nav = document.getElementById('siteNav');
  const navLinks = document.getElementById('navLinks');
  const mobileLinks = document.getElementById('mobileMenuLinks');
  const toggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  const navItems = [
    { label: 'Heroes', target: 'section-roster' },
    { label: 'Characters', target: 'character-sections' },
    { label: 'Shop', target: 'section-shop' },
    { label: 'Infinity Stones', target: 'section-stones' },
    { label: 'Timeline', target: 'section-timeline' }
  ];

  navItems.forEach(item => {
    [navLinks, mobileLinks].forEach(container => {
      const btn = document.createElement('button');
      btn.className = 'nav-link';
      btn.textContent = item.label;
      btn.addEventListener('click', () => {
        const el = document.getElementById(item.target);
        if (el && window.locoScroll) window.locoScroll.scrollTo(el);
        setMenuOpen(false);
      });
      container.appendChild(btn);
    });
  });

  const setMenuOpen = open => {
    mobileMenu.classList.toggle('open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    mobileMenu.inert = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };

  toggle.addEventListener('click', () => setMenuOpen(!mobileMenu.classList.contains('open')));
  mobileMenu.addEventListener('click', e => {
    if (e.target === mobileMenu) setMenuOpen(false);
  });
  mobileMenu.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ══════════════════════════════════════════
   HERO CANVAS — ANIMATED PARTICLE GRID
══════════════════════════════════════════ */
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.7 ? '#e62429' : Math.random() > 0.5 ? '#f5b31c' : '#ffffff';
    }
    update() {
      this.x += this.speedX; this.y += this.speedY;
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        this.x += dx / dist * 1.5;
        this.y += dy / dist * 1.5;
      }
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
    }
  }

  for (let i = 0; i < 180; i++) particles.push(new Particle());

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#e62429';
          ctx.globalAlpha = (1 - dist / 90) * 0.08;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    ctx.globalAlpha = 1;
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }
  animate();
}

/* ══════════════════════════════════════════
   HERO FLOATING PARTICLES (DOM)
══════════════════════════════════════════ */
function initHeroParticles() {
  const container = document.getElementById('heroParticles');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 4 + 2;
    Object.assign(p.style, {
      position: 'absolute',
      width: size + 'px', height: size + 'px',
      borderRadius: '50%',
      background: Math.random() > 0.5 ? 'rgba(230,36,41,0.6)' : 'rgba(245,179,28,0.4)',
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      filter: 'blur(1px)',
      pointerEvents: 'none'
    });
    container.appendChild(p);
    gsap.to(p, {
      y: (Math.random() - 0.5) * 300,
      x: (Math.random() - 0.5) * 200,
      opacity: Math.random() * 0.6 + 0.2,
      duration: Math.random() * 8 + 5,
      repeat: -1, yoyo: true,
      ease: 'sine.inOut',
      delay: Math.random() * 4
    });
  }
}

/* ══════════════════════════════════════════
   ROSTER GRID
══════════════════════════════════════════ */
function buildRosterGrid() {
  const grid = document.getElementById('rosterGrid');
  CHARACTERS.forEach((char, i) => {
    const card = document.createElement('div');
    card.className = 'roster-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Explore ${char.name}, ${char.alias}`);
    card.style.setProperty('--card-color', char.color);

    const bg = document.createElement('div');
    bg.className = 'roster-card-bg';
    if (char.image) bg.style.backgroundImage = `url('${char.image}')`;
    else bg.style.background = `linear-gradient(135deg, ${char.color}33, ${char.colorSecondary}22)`;

    const glow = document.createElement('div');
    glow.className = 'roster-card-glow';

    const num = document.createElement('div');
    num.className = 'roster-card-num';
    num.textContent = String(i + 1).padStart(2, '0');

    const info = document.createElement('div');
    info.className = 'roster-card-info';
    info.innerHTML = `<div class="roster-card-name">${char.name}</div><div class="roster-card-alias">${char.alias}</div>`;

    card.appendChild(bg); card.appendChild(glow); card.appendChild(num); card.appendChild(info);
    card.addEventListener('click', () => openModal(char));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(char);
      }
    });
    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════════
   CHARACTER SECTIONS
══════════════════════════════════════════ */
function buildCharacterSections() {
  const container = document.getElementById('character-sections');

  CHARACTERS.forEach((char, i) => {
    const section = document.createElement('section');
    section.className = 'char-section';
    section.setAttribute('data-scroll-section', '');
    section.id = 'char-' + char.id;
    section.style.setProperty('--char-color', char.color + '55');

    const powersHTML = char.powers.slice(0, 4).map(p => `<span class="power-tag">${p}</span>`).join('');

    section.innerHTML = `
      <div class="char-section-bg" style="background-image:url('${char.image || ''}')"></div>
      <div class="char-section-overlay"></div>
      <div class="char-section-overlay2"></div>
      <div class="char-section-glow"></div>
      ${char.image ? `<img class="char-section-img" src="${char.image}" alt="${char.name}" loading="lazy" />` : ''}
      <div class="char-section-content">
        <div class="char-section-num reveal-left">${String(i + 1).padStart(2, '0')} / ${String(CHARACTERS.length).padStart(2, '0')}</div>
        <h2 class="char-section-title reveal-left">${char.name}</h2>
        <blockquote class="char-section-quote reveal-left">
          ${char.quote}
          <cite>${char.quoteRef}</cite>
        </blockquote>
        <div class="char-section-powers reveal-left">${powersHTML}</div>
        <button class="char-section-btn reveal-left" data-char-id="${char.id}">
          <span>FULL STORY</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    `;

    // Set glow color
    section.querySelector('.char-section-glow').style.background =
      `radial-gradient(circle at 60% 80%, ${char.color}44 0%, transparent 65%)`;

    // Set image glow
    if (char.image) {
      section.querySelector('.char-section-img').style.filter =
        `drop-shadow(0 0 50px ${char.color}66)`;
    }

    // Set num color
    section.querySelector('.char-section-num').style.color = char.color;

    // Set btn color
    const btn = section.querySelector('.char-section-btn');
    btn.style.borderColor = char.color;
    btn.style.color = char.color;
    btn.addEventListener('mouseover', () => { btn.style.background = char.color; btn.style.color = '#fff'; });
    btn.addEventListener('mouseout', () => { btn.style.background = 'transparent'; btn.style.color = char.color; });
    btn.addEventListener('click', () => openModal(char));

    container.appendChild(section);
  });
}

/* ══════════════════════════════════════════
   MODAL
══════════════════════════════════════════ */
function openModal(char) {
  const modal = document.getElementById('charModal');
  document.getElementById('modalImg').src = char.image || '';
  document.getElementById('modalImg').style.display = char.image ? 'block' : 'none';
  document.getElementById('modalImgGlow').style.background =
    `radial-gradient(ellipse at 50% 100%, ${char.color}66 0%, transparent 70%)`;
  document.getElementById('modalTag').textContent = char.alias;
  document.getElementById('modalTag').style.color = char.color;
  document.getElementById('modalName').textContent = char.name;
  document.getElementById('modalQuote').textContent = char.quote;
  document.getElementById('modalQuote').style.borderLeftColor = char.color;
  document.getElementById('modalStory').textContent = char.story;

  const statsEl = document.getElementById('modalStats');
  statsEl.innerHTML = char.powers.map(p =>
    `<span class="modal-stat-tag" style="border-color:${char.color};color:${char.color}">${p}</span>`
  ).join('');

  const abilitiesEl = document.getElementById('modalAbilities');
  abilitiesEl.replaceChildren();
  MCU_PROJECTS
    .filter(project => project.characters.includes(char.id))
    .forEach(project => {
      const appearance = document.createElement('span');
      appearance.className = 'modal-stat-tag';
      appearance.style.cssText = 'border-color:rgba(255,255,255,0.15);color:rgba(255,255,255,0.55);font-size:0.55rem';
      appearance.textContent = project.title;
      abilitiesEl.appendChild(appearance);
    });

  document.getElementById('charModal').style.setProperty('--modal-color', char.color);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('charModal').classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  document.getElementById('charModalBackdrop').addEventListener('click', closeModal);
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ══════════════════════════════════════════
   GSAP HERO ANIMATIONS
══════════════════════════════════════════ */
function initHeroAnimations() {
  if (prefersReducedMotion) {
    document.querySelectorAll('.stat-num').forEach(el => {
      el.textContent = el.dataset.count + '+';
    });
  } else {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' })
      .from('.hero-title-line', { opacity: 0, y: 60, duration: 1, stagger: 0.15, ease: 'power3.out' }, '-=0.4')
      .from('.hero-desc', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .from('.hero-cta-group', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .from('.hero-stats', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.3')
      .from('.hero-main-img', { opacity: 0, x: 80, scale: 0.9, duration: 1.2, ease: 'power3.out' }, '-=1.2')
      .from('.hero-glow-ring', { opacity: 0, scale: 0.5, duration: 1.5, stagger: 0.3, ease: 'power3.out' }, '-=1');

    document.querySelectorAll('.stat-num').forEach(el => {
      const target = parseInt(el.dataset.count);
      gsap.to({ val: 0 }, {
        val: target, duration: 2.5, delay: 1.5, ease: 'power2.out',
        onUpdate: function() { el.textContent = Math.floor(this.targets()[0].val) + '+'; }
      });
    });
  }

  // Hero CTA buttons
  document.getElementById('heroExploreBtn').addEventListener('click', () => {
    const el = document.getElementById('section-roster');
    if (el && window.locoScroll) window.locoScroll.scrollTo(el);
  });
  document.getElementById('heroScrollBtn').addEventListener('click', () => {
    const el = document.getElementById('section-roster');
    if (el && window.locoScroll) window.locoScroll.scrollTo(el);
  });
}

/* ══════════════════════════════════════════
   SCROLL ANIMATIONS — CHARACTER SECTIONS
══════════════════════════════════════════ */
function initScrollAnimations(scroller) {
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal-left, .timeline-item').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  // Roster cards stagger
  gsap.from('.roster-card', {
    scrollTrigger: { trigger: '.roster-grid', scroller, start: 'top 80%' },
    opacity: 0, y: 60, scale: 0.9,
    duration: 0.7, stagger: 0.06, ease: 'power3.out'
  });

  // Character section images parallax + reveal
  document.querySelectorAll('.char-section').forEach(section => {
    const img = section.querySelector('.char-section-img');
    const content = section.querySelector('.char-section-content');
    const revealEls = section.querySelectorAll('.reveal-left');

    if (img) {
      gsap.fromTo(img,
        { opacity: 0, x: 80, scale: 0.88 },
        {
          opacity: 1, x: 0, scale: 1,
          duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: section, scroller, start: 'top 70%' }
        }
      );
      // Subtle parallax
      gsap.to(img, {
        y: -60,
        ease: 'none',
        scrollTrigger: { trigger: section, scroller, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
      });
    }

    revealEls.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0,
          duration: 0.8, delay: i * 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: section, scroller, start: 'top 65%' }
        }
      );
    });
  });

  // Section headers
  gsap.utils.toArray('.section-header:not(.shop-header)').forEach(el => {
    gsap.from(el.children, {
      scrollTrigger: { trigger: el, scroller, start: 'top 80%' },
      opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out'
    });
  });

  // Infinity stones
  gsap.from('.stone', {
    scrollTrigger: { trigger: '.stones-grid', scroller, start: 'top 75%' },
    opacity: 0, y: 50, scale: 0.8,
    duration: 0.7, stagger: 0.1, ease: 'back.out(1.5)'
  });

  // Collectibles enter as a single, staggered gallery.
  gsap.from('.shop-card', {
    scrollTrigger: { trigger: '.shop-grid', scroller, start: 'top 80%' },
    opacity: 0, y: 44, rotateX: 5,
    duration: 0.75, stagger: 0.1, ease: 'power3.out'
  });

  // Timeline items
  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    gsap.fromTo(item,
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0,
        duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: item, scroller, start: 'top 80%' }
      }
    );
  });

}

/* ══════════════════════════════════════════
   MOUSE PARALLAX ON CHARACTER IMAGES
══════════════════════════════════════════ */
function initMouseParallax() {
  document.addEventListener('mousemove', e => {
    const mx = (e.clientX / window.innerWidth - 0.5) * 20;
    const my = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelectorAll('.char-section-img').forEach(img => {
      gsap.to(img, { x: mx * 0.5, y: my * 0.3, duration: 0.8, ease: 'power2.out' });
    });
    gsap.to('.hero-image-wrap', { x: mx * 0.25, y: my * 0.12, duration: 1, ease: 'power2.out' });
  });
}

/* ══════════════════════════════════════════
   LOCOMOTIVE SCROLL + SCROLLTRIGGER BRIDGE
══════════════════════════════════════════ */
function initScroll() {
  const scrollEl = document.getElementById('scroll-container');
  const loco = new LocomotiveScroll({
    el: scrollEl, smooth: !prefersReducedMotion, multiplier: 0.75,
    smartphone: { smooth: !prefersReducedMotion }, tablet: { smooth: !prefersReducedMotion }
  });
  window.locoScroll = loco;

  loco.on('scroll', ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(scrollEl, {
    scrollTop(v) {
      return arguments.length
        ? loco.scrollTo(v, 0, 0)
        : loco.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: scrollEl.style.transform ? 'transform' : 'fixed'
  });

  ScrollTrigger.addEventListener('refresh', () => loco.update());
  ScrollTrigger.refresh();

  // Nav scroll state via loco
  loco.on('scroll', ({ scroll }) => {
    document.getElementById('siteNav').classList.toggle('scrolled', scroll.y > 60);
  });

  window.addEventListener('resize', () => {
    loco.update(); ScrollTrigger.refresh();
  });

  return scrollEl;
}

/* ══════════════════════════════════════════
   MAIN INIT
══════════════════════════════════════════ */
function initApp() {
  buildRosterGrid();
  buildCharacterSections();
  buildTimeline();
  initModal();
  if (!prefersReducedMotion) {
    initHeroCanvas();
    initHeroParticles();
  }
  initHeroAnimations();
  if (!prefersReducedMotion) initMouseParallax();

  const scroller = initScroll();
  initScrollAnimations(scroller);
  if (!prefersReducedMotion) initCursor();
}

/* ── BOOT ── */
window.addEventListener('DOMContentLoaded', () => {
  initNav();
  initLoader();
});
