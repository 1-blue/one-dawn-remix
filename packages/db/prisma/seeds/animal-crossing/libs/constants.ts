/** 주민 종족 목록 */
export const VILLAGER_SPECIES = [
  "Bird",
  "Squirrel",
  "Pig",
  "Bear cub",
  "Gorilla",
  "Alligator",
  "Koala",
  "Eagle",
  "Anteater",
  "Penguin",
  "Bull",
  "Mouse",
  "Cat",
  "Horse",
  "Hamster",
  "Kangaroo",
  "Wolf",
  "Chicken",
  "Elephant",
  "Rhinoceros",
  "Lion",
  "Sheep",
  "Deer",
  "Tiger",
  "Dog",
  "Bear",
  "Cow",
  "Hippo",
  "Duck",
  "Goat",
  "Ostrich",
  "Rabbit",
  "Frog",
  "Octopus",
  "Monkey",
] as const;

/** 주민 성격 목록 */
export const VILLAGER_PERSONALITY = [
  "Jock",
  "Cranky",
  "Peppy",
  "Big sister",
  "Lazy",
  "Normal",
  "Snooty",
  "Smug",
] as const;

/** 주민 성별 목록 */
export const VILLAGER_GENDER = ["Male", "Female"] as const;

/** 주민 생일 월 목록 */
export const VILLAGER_BIRTHDAY_MONTH = [
  "August",
  "January",
  "July",
  "April",
  "",
  "October",
  "June",
  "November",
  "February",
  "March",
  "September",
  "December",
  "May",
] as const;

/** 주민 생일 일 목록 */
export const VILLAGER_BIRTHDAY_DAY = [
  "11",
  "27",
  "2",
  "21",
  "",
  "18",
  "9",
  "19",
  "8",
  "16",
  "4",
  "30",
  "24",
  "22",
  "6",
  "20",
  "31",
  "28",
  "23",
  "7",
  "15",
  "5",
  "10",
  "3",
  "25",
  "12",
  "13",
  "29",
  "1",
  "26",
  "14",
  "17",
] as const;

/** 주민 첫 등장 게임 목록 */
export const VILLAGER_DEBUT = [
  "DNM",
  "AC",
  "E_PLUS",
  "NH",
  "PC",
  "WA",
  "WW",
  "CF",
  "NL",
  "HHD",
  "FILM",
  "NLWA",
  "DNM+",
] as const;

/** 주민 생일 별자리 목록 */
export const VILLAGER_SIGN = [
  "Leo",
  "Aquarius",
  "Cancer",
  "Taurus",
  "Capricorn",
  "Libra",
  "Gemini",
  "Scorpio",
  "Pisces",
  "Virgo",
  "Sagittarius",
  "Aries",
] as const;

/** 주민 취미 목록 */
export const VILLAGER_HOBBY = [
  "Nature",
  "Fitness",
  "Play",
  "Education",
  "Fashion",
  "Music",
] as const;

/** 주민 좋아하는 색상 목록 */
export const VILLAGER_FAV_COLORS = [
  "Aqua",
  "Green",
  "Black",
  "Blue",
  "Pink",
  "White",
  "Red",
  "Yellow",
  "Brown",
  "Colorful",
  "Orange",
  "Purple",
  "Gray",
  "Beige",
] as const;

/** 주민 좋아하는 스타일 목록 */
export const VILLAGER_FAV_STYLES = [
  "Active",
  "Cute",
  "Cool",
  "Simple",
  "Elegant",
  "Gorgeous",
] as const;

/** 주민 자주내는 소리 목록 */
export const VILLAGER_CATCHPHRASE = [
  "ace",
  "aye aye",
  "sidekick",
  "snuffle",
  "ayyyeee",
  "it'sa me",
  "guvnor",
  "graaagh",
  "cuz",
  "snorty",
  "chuurp",
  "macmoo",
  "cannoli",
  "me meow",
  "gumdrop",
  "nipper",
  "honk",
  "pah",
  "cheekers",
  "my pet",
  "foxtrot",
  "b-b-baby",
  "beaker",
  "skree-haw",
  "WHONK",
  "merci",
  "daahling",
  "kablang",
  "growf",
  "cubby",
  "bingo",
  "whiskers",
  "saltlick",
  "chicklet",
  "eeks",
  "uh-hoo",
  "alrighty",
  "bloop",
  "eekers",
  "glimmer",
  "squirt",
  "villain",
  "quacko",
  "dagnaabit",
  "dawg",
  "my dear",
  "nutlet",
  "quite so",
  "peach",
  "pthhpth",
  "deelish",
  "yip yip",
  "human",
  "baboom",
  "munchie",
  "schnort",
  "uh-oh",
  "cheeseball",
  "eat it",
  "cluckadoo",
  "gruff",
  "hipster",
  "pardner",
  "shredded",
  "tee-hee",
  "ROOOOOWF",
  "captain",
  "WHEE",
  "ten-hut",
  "nuh uh",
  "sweetie",
  "nougat",
  "hulaaaa",
  "little one",
  "baaaby",
  "feathers",
  "donk donk",
  "highness",
  "blargh",
  "fromage",
  "flap flap",
  "urgh",
  "pound cake",
  "tralala",
  "what what",
  "rookie",
  "la baa",
  "harrumph",
  "zoink",
  "aiya",
  "sparkles",
  "hopalong",
  "ooh la la",
  "thump",
  "sugar",
  "clip clawp",
  "stubble",
  "hot dog",
  "doyoing",
  "coooooool",
  "check it",
  "arfer",
  "oui oui",
  "sweatband",
  "as if",
  "brainfreeze",
  "shearly",
  "nyoink",
  "fuzzball",
  "rockin'",
  "ah-CHOO",
  "bow-WOW",
  "woowoo",
  "whatevs",
  "gronk",
  "monch",
  "derrrr",
  "no doy",
  "ya know",
  "woo-oo",
  "ohmmm",
  "old bunny",
  "indeedaroo",
  "squeaky",
  "wee one",
  "burrrn",
  "dribbit",
  "greenhorn",
  "doodle-duh",
  "puh-lease",
  "li'l one",
  "tenderfoot",
  "tooooot",
  "unh-hunh",
  "chow down",
  "fuzzy",
  "yeah buddy",
  "lambchop",
  "aloha",
  "cha-chomp",
  "dearie",
  "mimimi",
  "bucko",
  "rerack",
  "cha",
  "pinky",
  "powderpuff",
  "karat",
  "crushy",
  "ducky",
  "goshers",
  "uff da",
  "brrrmph",
  "oh ewe",
  "fribbit",
  "precious",
  "honeybun",
  "snortie",
  "mon chou",
  "snacky",
  "mochi",
  "ribbette",
  "stretch",
  "quacker",
  "woof",
  "mate",
  "buh-kay",
  "indeed",
  "yelp",
  "grrr",
  "grumble",
  "bleh eh eh",
  "h-h-h-hon",
  "hammie",
  "snort",
  "groovy",
  "beach bum",
  "uni-wow",
  "snoozit",
  "natch",
  "thumper",
  "slushie",
  "schnozzle",
  "hopper",
  "snortle",
  "waddler",
  "roadie",
  "gleam",
  "ya feel",
  "zut alors",
  "croak-kay",
  "heeeeeyy",
  "nee-deep",
  "bzzert",
  "bleeeeeck",
  "myohmy",
  "dahling",
  "glitter",
  "rainbow",
  "meooo-OH",
  "purrty",
  "wingo",
  "no doubt",
  "bitty",
  "weeweewee",
  "psst",
  "wut",
  "kitty cat",
  "child",
  "mrowrr",
  "strudel",
  "cluckling",
  "grah grah",
  "alpha",
  "flexin'",
  "lion cub",
  "toady",
  "squinky",
  "precisely",
  "ah-rooooo",
  "bonbon",
  "badoom",
  "hoo hoo ha",
  "cacaw",
  "rrr-owch",
  "snoooink",
  "chips",
  "woo woof",
  "yippee",
  "duckling",
  "schep",
  "quackpth",
  "honey",
  "non",
  "pouches",
  "tootie",
  "blurp",
  "gabeesh",
  "sulky",
  "pompom",
  "wee baby",
  "sundae",
  "toasty",
  "shortcake",
  "mweee",
  "tweedledee",
  "ahhhhhh",
  "cottontail",
  "quackulous",
  "mew",
  "myawn",
  "quackidee",
  "pffffft",
  "g'tang",
  "shorty",
  "cagey",
  "nightshade",
  "malarkey",
  "kid",
  "po po",
  "moolah",
  "yawwwn",
  "niblet",
  "hoof hoo",
  "amigo",
  "sucker",
  "whiffa",
  "sweet pea",
  "purrr",
  "snoot",
  "ol' bear",
  "sooey",
  "snooooof",
  "pal",
  "haaay",
  "kidders",
  "quackle",
  "how-now",
  "yodelay",
  "neighbor",
  "slacker",
  "chipmunk",
  "crunch",
  "li'l bitty baby",
  "shweetie",
  "bud",
  "oh bow",
  "mmmhmm",
  "hurk",
  "sparky",
  "hawkeye",
  "honk honk",
  "wah",
  "chickadee",
  "li'l hare",
  "chicky-poo",
  "rah rah",
  "li'l bear",
  "nutty",
  "ruffian",
  "burrup",
  "brrrrrrrrr",
  "splish",
  "pudgy",
  "mrmpht",
  "kitten",
  "chicken",
  "ridukulous",
  "proper",
  "aaach—",
  "swine",
  "crisp",
  "yo yo yo",
  "ayup yup",
  "cool cat",
  "bigfoot",
  "zzrrbbitt",
  "nutcase",
  "hello",
  "li'l chick",
  "squee",
  "b-b-buddy",
  "la-di-da",
  "hippie",
  "vroom",
  "chaps",
  "le ham",
  "grrrolf",
  "punches",
  "capital",
  "nay",
  "silly",
  "spaaace",
  "mango",
  "li'l ears",
  "mush",
  "nutmeg",
  "pipsqueak",
  "speedy",
  "hoppity",
  "y'all",
  "zip zoom",
  "cheeky",
  "cardio",
  "baa baa baa",
  "bawwww",
  "okaaay",
  "zzzook",
  "airmail",
  "hoo-rah",
  "bunyip",
  "sniffff",
  "tarnation",
  "like whoa",
  "punk",
  "snork",
  "frappe",
  "zort",
  "krzzt",
  "baa-dabing",
  "skraaaaw",
  "GAAHHH",
  "stuffin'",
  "mrooooo",
  "sunshine",
  "hubbub",
  "boing",
  "moocher",
  "me-WOW",
  "sluuuurp",
  "chimpy",
  "ya heard",
  "reeeeOWR",
  "kerPOW",
  "nice nice",
  "grooof",
  "picante",
  "teacup",
  "wuwu",
  "bunbun",
  "pine nut",
  "pushy",
  "ribbit",
  "me-YOWZA",
  "snoutie",
  "fuzzers",
  "twinkles",
  "cheepers",
  "grrrRAH",
  "grooomph",
  "blih",
  "baaaffo",
  "cud",
  "sugar cube",
  "piffle",
  "nyet",
  "so it goes",
  "wuh",
  "pockets",
  "grr-ribbit",
  "quaa",
  "lambkins",
  "snappy",
  "bo peep",
  "hay-OK",
  "snarrrl",
  "tsk tsk",
  "pronk",
  "zoozooroo",
] as const;

/** 주민 이름 목록 */
export const VILLAGER_NAMES = [
  "Ace",
  "Admiral",
  "Agent S",
  "Agnes",
  "Aisle",
  "Al",
  "Alfonso",
  "Alice",
  "Alli",
  "Amelia",
  "Anabelle",
  "Analog",
  "Anchovy",
  "Angus",
  "Anicotti",
  "Ankha",
  "Annalisa",
  "Annalise",
  "Antonio",
  "Apollo",
  "Apple",
  "Astrid",
  "Audie",
  "Aurora",
  "Ava",
  "Avery",
  "Axel",
  "Azalea",
  "Aziz",
  "Baabara",
  "Bam",
  "Bangle",
  "Barold",
  "Bea",
  "Beardo",
  "Beau",
  "Becky",
  "Bella",
  "Belle",
  "Benedict",
  "Benjamin",
  "Bertha",
  "Bessie",
  "Bettina",
  "Betty",
  "Bianca",
  "Biff",
  "Big Top",
  "Bill",
  "Billy",
  "Biskit",
  "Bitty",
  "Blaire",
  "Blanche",
  "Bluebear",
  "Bob",
  "Bonbon",
  "Bones",
  "Boomer",
  "Boone",
  "Boots",
  "Boris",
  "Bow",
  "Boyd",
  "Bree",
  "Broccolo",
  "Broffina",
  "Bruce",
  "Bubbles",
  "Buck",
  "Bud",
  "Bunnie",
  "Butch",
  "Buzz",
  "Cally",
  "Camofrog",
  "Canberra",
  "Candi",
  "Carmen",
  "Carmen",
  "Caroline",
  "Carrie",
  "Carrot",
  "Cashmere",
  "Cece",
  "Celia",
  "Cephalobot",
  "Cesar",
  "Chabwick",
  "Chadder",
  "Chai",
  "Champ",
  "Charlise",
  "Chelsea",
  "Cheri",
  "Cherry",
  "Chester",
  "Chevre",
  "Chico",
  "Chief",
  "Chops",
  "Chow",
  "Chrissy",
  "Chuck",
  "Clara",
  "Claude",
  "Claudia",
  "Clay",
  "Cleo",
  "Clyde",
  "Coach",
  "Cobb",
  "Coco",
  "Cole",
  "Colton",
  "Cookie",
  "Cousteau",
  "Cranston",
  "Croque",
  "Cube",
  "Cupcake",
  "Curlos",
  "Curly",
  "Curt",
  "Cyd",
  "Cyrano",
  "Daisy",
  "Deena",
  "Deirdre",
  "Del",
  "Deli",
  "Derwin",
  "Diana",
  "Diva",
  "Dizzy",
  "Dobie",
  "Doc",
  "Dom",
  "Dora",
  "Dotty",
  "Dozer",
  "Drago",
  "Drake",
  "Drift",
  "Ed",
  "Egbert",
  "Elina",
  "Elise",
  "Ellie",
  "Elmer",
  "Eloise",
  "Elvis",
  "Emerald",
  "Epona",
  "Erik",
  "Étoile",
  "Eugene",
  "Eunice",
  "Faith",
  "Fang",
  "Fauna",
  "Felicity",
  "Felyne",
  "Filbert",
  "Filly",
  "Flash",
  "Flip",
  "Flo",
  "Flora",
  "Flossie",
  "Flurry",
  "Francine",
  "Frank",
  "Freckles",
  "Frett",
  "Freya",
  "Friga",
  "Frita",
  "Frobert",
  "Fruity",
  "Fuchsia",
  "Gabi",
  "Gala",
  "Ganon",
  "Gaston",
  "Gayle",
  "Gen",
  "Genji",
  "Gigi",
  "Gladys",
  "Gloria",
  "Goldie",
  "Gonzo",
  "Goose",
  "Graham",
  "Greta",
  "Grizzly",
  "Groucho",
  "Gruff",
  "Gwen",
  "Hambo",
  "Hamlet",
  "Hamphrey",
  "Hank",
  "Hans",
  "Harry",
  "Hazel",
  "Hector",
  "Henry",
  "Hippeux",
  "Holden",
  "Hopkins",
  "Hopper",
  "Hornsby",
  "Huck",
  "Huggy",
  "Hugh",
  "Iggly",
  "Iggy",
  "Ike",
  "Inkwell",
  "Ione",
  "Jacob",
  "Jacques",
  "Jambette",
  "Jane",
  "Jay",
  "Jeremiah",
  "Jitters",
  "Joe",
  "Joey",
  "Jūbei",
  "Judy",
  "Julia",
  "Julian",
  "June",
  "Kabuki",
  "Katt",
  "Keaton",
  "Ken",
  "Ketchup",
  "Kevin",
  "Kid Cat",
  "Kidd",
  "Kiki",
  "Kit",
  "Kitt",
  "Kitty",
  "Klaus",
  "Knox",
  "Kody",
  "Koharu",
  "Kyle",
  "Leigh",
  "Leonardo",
  "Leopold",
  "Lily",
  "Limberg",
  "Lionel",
  "Liz",
  "Lobo",
  "Lolly",
  "Lopez",
  "Louie",
  "Lucha",
  "Lucky",
  "Lucy",
  "Lulu",
  "Lulu",
  "Lyman",
  "Mac",
  "Madam Rosa",
  "Maddie",
  "Maelle",
  "Maggie",
  "Mallary",
  "Maple",
  "Marcel",
  "Marcie",
  "Marcy",
  "Margie",
  "Marina",
  "Marlo",
  "Marshal",
  "Marty",
  "Masa",
  "Mathilda",
  "Medli",
  "Megan",
  "Megumi",
  "Melba",
  "Meow",
  "Merengue",
  "Merry",
  "Midge",
  "Mint",
  "Mira",
  "Miranda",
  "Mitzi",
  "Moe",
  "Molly",
  "Monique",
  "Monty",
  "Moose",
  "Mott",
  "Muffy",
  "Murphy",
  "Nan",
  "Nana",
  "Naomi",
  "Nate",
  "Nibbles",
  "Nindori",
  "Norma",
  "Nosegay",
  "O'Hare",
  "Octavian",
  "Olaf",
  "Olive",
  "Olivia",
  "Opal",
  "Otis",
  "Oxford",
  "Ozzie",
  "Pancetti",
  "Pango",
  "Paolo",
  "Papi",
  "Pashmina",
  "Pate",
  "Patricia",
  "Patty",
  "Paula",
  "Peaches",
  "Peanut",
  "Pecan",
  "Peck",
  "Peewee",
  "Peggy",
  "Pekoe",
  "Penelope",
  "Penny",
  "Petri",
  "Petunia",
  "Phil",
  "Phoebe",
  "Pierce",
  "Pierre",
  "Pietro",
  "Pigleg",
  "Pinky",
  "Piper",
  "Pippy",
  "Plucky",
  "Poko",
  "Pompom",
  "Poncho",
  "Poppy",
  "Portia",
  "Prince",
  "Puck",
  "Puddles",
  "Pudge",
  "Punchy",
  "Purrl",
  "Queenie",
  "Quetzal",
  "Quillson",
  "Quinn",
  "Raddle",
  "Rasher",
  "Raymond",
  "Renée",
  "Reneigh",
  "Rex",
  "Rhoda",
  "Rhonda",
  "Ribbot",
  "Ricky",
  "Rilla",
  "Rio",
  "Rizzo",
  "Roald",
  "Robin",
  "Rocco",
  "Rocket",
  "Rod",
  "Rodeo",
  "Rodney",
  "Rolf",
  "Rollo",
  "Rooney",
  "Rory",
  "Roscoe",
  "Rosie",
  "Roswell",
  "Rowan",
  "Ruby",
  "Rudy",
  "Sally",
  "Samson",
  "Sandy",
  "Sasha",
  "Savannah",
  "Scoot",
  "Shari",
  "Sheldon",
  "Shep",
  "Sherb",
  "Shinabiru",
  "Shino",
  "Shoukichi",
  "Simon",
  "Skye",
  "Sly",
  "Snake",
  "Snooty",
  "Soleil",
  "Sparro",
  "Spike",
  "Spork",
  "Sprinkle",
  "Sprocket",
  "Static",
  "Stella",
  "Sterling",
  "Stinky",
  "Stitches",
  "Stu",
  "Sue E",
  "Sunny",
  "Sven",
  "Sydney",
  "Sylvana",
  "Sylvia",
  "T-Bone",
  "Tabby",
  "Tad",
  "Tammi",
  "Tammy",
  "Tangy",
  "Tank",
  "Tarou",
  "Tasha",
  "Teddy",
  "Tex",
  "Tia",
  "Tiansheng",
  "Tiara",
  "Tiffany",
  "Timbra",
  "Tipper",
  "Toby",
  "Tom",
  "Truffles",
  "Tucker",
  "Tutu",
  "Twiggy",
  "Twirp",
  "Tybalt",
  "Ursala",
  "Valise",
  "Velma",
  "Vesta",
  "Vic",
  "Viché",
  "Victoria",
  "Violet",
  "Vivian",
  "Vladimir",
  "W. Link",
  "Wade",
  "Walker",
  "Walt",
  "Wart Jr.",
  "Weber",
  "Weldon",
  "Wendy",
  "Whitney",
  "Willow",
  "Winnie",
  "Wolfgang",
  "Woolio",
  "Yodel",
  "Yuka",
  "Zell",
  "Zoe",
  "Zucker",
] as const;

/** 주민 대사 목록 */
export const VILLAGER_QUOTES = [
  "If you love something, let it go. Then chase it down. What were you thinking?",
  "Only quitters give up.",
  "You gotta put the pedal to the metal!",
  "You reap what you sow.",
  "",
  "Life is a buffet. Always go back for seconds.",
  "Slow and steady wins the race.",
  "Treat others as you would like to be treated.",
  "Think before you act.",
  "Pampering yourself is as important as food, water, and shelter!",
  "Dance like no one's watching!",
  "Why do today what you can put off until tomorrow?",
  "Even strong bulls cry.",
  "The walls have ears.",
  "All that glitters is not gold.",
  "Home is where the heart is.",
  "Let gossip go in one ear and out the other.",
  "Always go for the burn!",
  "What goes up must come down.",
  "One rotten apple spoils the barrel.",
  "The apple doesn't fall far from the tree.",
  "Be the kind of person your future self won't regret having been.",
  "Always keep your cool.",
  "Early to bed, early to rise.",
  "What goes around comes around.",
  "Do not compare a fly with an elephant.",
  "Colorful petals, deep roots.",
  "Don't just follow the flock.",
  "Get while the getting's good.",
  "Don't blink or you'll miss it.",
  "Please DO feed the bears!",
  "The perfect pair complements each other.",
  "Fashion first!",
  "You snooze, you lose.",
  "A fool and his Bells are soon parted.",
  "A glamour shot is worth a thousand words.",
  "Don't put all your eggs in one basket.",
  "A good dog deserves a good treat.",
  "The best part of spring is the picnics!",
  "No time like the present!",
  "There is such a thing as love at first sight.",
  "Eighth place is just the seventh loser.",
  "A big nose never spoiled a handsome face.",
  "Even though there's no 'I' in team, there is a 'me'!",
  "Old dogs can learn new tricks.",
  "Let sleeping dogs lie.",
  "Necessity is the mother of all invention.",
  "Practice makes perfect.",
  "Nothing beats personal experience.",
  "Candy makes the world go 'round.",
  "You only live once...or nine times.",
  "Hindsight is always 20/20.",
  "A snack a day keeps the vacuum away.",
  "Flying is believing.",
  "Never settle for second best.",
  "Strength lies in muscles.",
  "Life's short. Eat chocolate.",
  "There's always time to take a second look.",
  "The gift says more about the giver.",
  "One nap leads to another.",
  "Don't peck the hand that feeds you.",
  "Nobody's perfect.",
  "It's best to keep your lips and purse sealed.",
  "Keep your eyes on the prize.",
  "You're not living unless you're sweating!",
  "Hare today, gone tomorrow.",
  "A house without either a cat or a dog is a sad house indeed.",
  "Pride'll put you in a pickle.",
  "It's always teatime somewhere.",
  "What you can't see can't hurt you.",
  "It's never too late to start over.",
  "The players may change, but the music stays the same.",
  "Absence makes the heart grow fonder.",
  "New brooms sweep clean.",
  "A mother's work is never done.",
  "100% Wool.",
  "Too heads are better than one!",
  "It's the thought that counts.",
  "Take me to your pizza.",
  "As soon as you can grow a mustache, do it.",
  "Live, laugh, lasagna.",
  "Meeting is just the start of us saying goodbye.",
  "He who chases two rabbits catches none.",
  "You'll never get THIS monkey off your back!",
  "Actions speak louder than words.",
  "Always look a gift horse in the mouth.",
  "Good things come in small packages.",
  "One dog barks at something, the rest bark at him.",
  "Sleep early. Wake late.",
  "If you're gonna dream, dream big.",
  "Don't wish it were easier; wish you were better.",
  "You can't have your cake and eat it too.",
  "All good things must come to an end.",
  "A fool and their Bells are soon parted.",
  "Don't judge a rabbit by its ears.",
  "A tiger can't change its stripes.",
  "Life is just a bowl of cherries.",
  "There's something lovable in all of us.",
  "The grass is always greener.",
  "Fool me once, shame on you. Fool me twice, shame on me.",
  "Might makes right.",
  "Don't put off till tomorrow what you can do today.",
  "Little pitchers have big ears.",
  "Make hay while the sun shines.",
  "Don't lose sight of what you're really after.",
  "Jump first, ask questions later.",
  "Hard work beats talent.",
  "Where there's smoke, there's fire.",
  "Sometimes you gotta learn to chill.",
  "If you want to know yourself better, ask your neighbors.",
  "Get fired up!",
  "A Bell saved is a Bell earned.",
  "Do what you want, but do it loud!",
  "Don't punch your nose to spite your face.",
  "It's not always a dog-eat-dog world.",
  "Duck...duck...GOOSE!",
  "Legs of an antelope, heart of an eagle.",
  "The hero is brave in deeds as well as words.",
  "Righty tighty, lefty loosey.",
  "Everything in moderation. Except for snacks.",
  "Sometimes you have to lose to win.",
  "Eyes are the windows to the soul.",
  "Keep it mellow.",
  "Old longings never truly fade.",
  "One cannot live on carrots alone.",
  "Be true to your most shiny self.",
  "The squeaky wheel gets the cheese.",
  "It's always a good hare day.",
  "There is no room for two dragons in one pond.",
  "...Quack.",
  "Always go for the gold!",
  "Beauty is pretty!",
  "You gotta break a few eggs to make an omelet.",
  "Do as I say, not as I do.",
  "You need the sour to highlight the sweet.",
  "The horse doesn't pull the cart, the oats do.",
  "An elephant never forgets.",
  "Better a live coward than a forgotten hero.",
  "Even the wildest horse can be tamed.",
  "If you're afraid of wolves, don't go to the woods.",
  "Who knows what the stars have in store for us?",
  "Imitation is the sincerest form of flattery.",
  "There is a point to every encounter.",
  "Never let your mind be what holds you back.",
  "You mess with the wolf, you get the fangs.",
  "The first step is always the hardest.",
  "Love has no bounds.",
  "Calmly gathering. Ah, the life of a hunter. ♪",
  "Don't go nuts or anything.",
  "One horse against the world.",
  "See no donut, hear no donut, speak no donut.",
  "Always keep a straight face.",
  "Pink is the new black.",
  "Squeak your mind, even if your voice shakes.",
  "You can't have wise folks if you don't have fools too.",
  "Today is the last day of the rest of your life.",
  "Act now before you change your mind!",
  "I'm in the prime of my life.",
  "Don't stray too far from the pack.",
  "You can't learn a life lesson from a fortune cookie.",
  "Don't sweat the small potatoes.",
  "Always aim high!",
  "It takes one to know one.",
  "The more the merrier.",
  "Still waters run deep.",
  "Never be ashamed to pig out.",
  "An ear for an ear makes it hard to hear.",
  "An ounce of prevention is worth a pound of cure.",
  "Fall down seven times, get up eight.",
  "Look at the world through rose-colored glasses.",
  "Smiles are free.",
  "Time is money.",
  "A little bit of happiness is better than a lot of anguish.",
  "Brothers are brothers, cheese is cheese.",
  "Birds of a feather crow together.",
  "Knowledge is power.",
  "The world is a stage.",
  "Those who live in glass houses shouldn't throw stones.",
  "Rocky road is more than just a flavor of ice cream.",
  "Don't burn bridges.",
  "Mind your manners, or someone else will.",
  "The ear's the thing.",
  "Children should be seen and not heard.",
  "One good turn deserves another.",
  "Patience is a virtue for folks with time.",
  "Never say never!",
  "The way to a frog's heart is through his stomach.",
  "Mottoes are for the unoriginal.",
  "You can solve any problem if you just stick to it!",
  "A wise mammal gives danger a wide berth.",
  "Always have a comeback.",
  "You can't hit a mosquito with a horseshoe.",
  "Cold coffee makes for a cold demeanor.",
  "Keep it real. Real chill.",
  "Six of one, half dozen of the other.",
  "The higher you climb, the smaller things look.",
  "A sucker is born every minute.",
  "I was born under a lucky star.",
  "Your greatest strength can be your greatest weakness.",
  "Better to have loved and squawked than to have never loved at all.",
  "It takes more muscles to frown than smile.",
  "He who hesitates has lost.",
  "Sleep before you leap.",
  "When you're a team of one, you're always captain!",
  "Don't get your feathers all ruffled. Just chill.",
  "I'm dancing my dreams away.",
  "Cut once, measure twice... Wait— reverse that.",
  "Never trot when you can prance.",
  "Dream big, expect little.",
  "If you make your opponent flinch, you have already won.",
  "MeowMEOWmeow!",
  "Even in a room full of fools, someone is the smartest.",
  "C'est la vie!",
  "When in doubt, eat a tomato!",
  "Sometimes it's OK to get dirty.",
  "Crime doesn't pay!",
  "Be yourself, everyone else is already taken.",
  "Nothing ventured, nothing gained.",
  "Funny parents have funny kids.",
  "If you want something done well, do it yourself.",
  "Pride goes before a fall.",
  "A chicken's coop is its castle.",
  "The sky's the limit!",
  "Never trust a sheep in wolf's clothing.",
  "That's the way the energy bar crumbles.",
  "The bigger the fish, the bigger your dinner.",
  "Don't jump to conclusions!",
  "Don't build a better mousetrap.",
  "Love is blind.",
  "If it's not one thing, it's another.",
  "Laughter is the best medicine.",
  "Always look both ways before crossing the street.",
  "It's all about the muscle.",
  "Birds of a feather, et cetera, et cetera...",
  "Don't bite the hand that feeds you.",
  "The best is yet to come.",
  "Eucalyptus is the spice of life.",
  "Sometimes life is rough.",
  "The IT revolution is under way.",
  "A wise duck takes care of its bill.",
  "All a plant needs is love...and sun and water and soil.",
  "Purple is the color of royalty.",
  "Waste not, want not.",
  "There's not a dog so bad that he won't wag his tail.",
  "The road to a friend's house is never long.",
  "Keep your feet on the ground.",
  "If you can't say something nice, don't say anything at all.",
  "You gotta walk the walk if you're gonna talk the talk.",
  "Seize the day.",
  "Just wait until I get started!",
  "Nail polish is thicker than water.",
  "A bird on the wing is worth two on the ground.",
  "Take a page out of someone else's book, if it's a good book.",
  "A friend who shares is a friend who cares.",
  "Life is a piece of cake.",
  "A smile increases your face value.",
  "When the world gets cold, just fly south.",
  "Always lead by example.",
  "Always help a friend in need.",
  "If the world is flooded, it will be easy for the duck.",
  "Practice makes purrrfect!",
  "Ignorance is bliss.",
  "Like water off a duck's back.",
  "All publicity is good publicity!",
  "No news is good news.",
  "A cornered rat will summon the courage to bite a cat.",
  "The lion's share goes to the lion.",
  "There's a black sheep in every family.",
  "More money, more problems.",
  "Nanny-nanny boo-boo!",
  "Bread always falls peanut-butter side down.",
  "Moo like there's no tomorrow.",
  "Be true to yourself.",
  "Appearances are, like, totally deceiving.",
  "If you want what you have, then you'll have what you want.",
  "It's not old; it's vintage.",
  "Don't be a sucker!",
  "Keep your nose clean.",
  "Sticky fingers attract bees.",
  "There's an exception to every rule.",
  "However little you think of an elephant, you can't say it won't fill a pot.",
  "Half a loaf is better than none.",
  "Always get it in writing.",
  "A thing of beauty is a joy forever.",
  "When it works, it works.",
  "Never say neigh.",
  "Before you judge someone, walk a mile in their hooves.",
  "A duck won't bite you.",
  "A friend in need is a friend indeed!",
  "Trends always make a comeback.",
  "Every day is a gift.",
  "Never take a nibble when you can take a bite.",
  "Promises are like pie crusts— they're made to be broken.",
  "The best defense is a good offense.",
  "Look behind you.",
  "We're all diamonds in the rough.",
  "Let bygones be bygones.",
  "One mile or a thousand makes no difference to love.",
  "Our DNA is only the beginning of the story.",
  "Best not to say too much.",
  "You can't keep a good bird down.",
  "When someone says fly, you ask how high!",
  "Be the class clown.",
  "Time spent with friends is time well spent.",
  "Where there's life, there's hope.",
  "Fake it till you make it.",
  "Keep your crumbs out of the bed.",
  "Happiness is a rainy day!",
  "Fortune favors the brave!",
  "It's all about positive thinking!",
  "Charity begins at home.",
  "Catch more flies with honey than vinegar.",
  "A bad attitude will land you in the penalty box.",
  "Look before you leap.",
  "There's no such thing as a free lunch.",
  "There's always more fish in the sea!",
  "Let them drink cream.",
  "You never get a second chance to make a first impression.",
  "There is beauty in everything.",
  "Step on a violet, and you'll smell forgiveness.",
  "A healthy mind makes for a healthy body.",
  "Don't judge a book by its cover.",
  "Stay on brand!",
  "Reckless youth makes rueful age.",
  "You can only be you, so be the best you that you can be.",
  "Three wrongs don't make a right, but three rights make a left.",
  "Don't look down your nose at people!",
  "Never rest, never rust.",
  "You gotta break a few shells to get to the nut.",
  "When there's a will, there's a way.",
  "Self-care? Best care.",
  "Evil lurks everywhere.",
  "You must learn to waddle before you can swim.",
  "Always keep your wings manicured so you can fly away.",
  "The only thing to fear is fear itself... and wasps!",
  "Art feeds the soul. So does pizza.",
  "If you can't beat 'em, work harder.",
  "Zzzzzzzzzzzzzzzzz...",
  "Everything is temporary.",
  "Don't skip lunch. Ever.",
  "Bob and weave! Bob and weave!",
  "Set 'em up and knock 'em down.",
  "Trouble rides a fast horse.",
  "One good purr deserves another.",
  "Keep your eyes on the skies.",
  "Refuse to lose.",
  "You can always take the red-eye.",
  "Always land on your feet!",
  "Even the smallest acorn may grow into the tallest tree.",
  "Squeak softly and carry a big stick.",
  "Soaring through the sky takes more than a pair of wings.",
  "Timing is everything.",
  "Keep your chin up!",
  "Some birds avoid the water, ducks look for it.",
  "A good start leads to a good end.",
  "Winners don't quit, and quitters never win.",
  "Even dogs won't get in the middle of true love.",
  "Forty winks is never enough.",
  "Better the demon you know than the one you do not.",
  "Friends go together like peanut butter and bananas.",
  "Love makes the world go 'round.",
  "Don't bite off more than you can chew.",
  "A good ninja is neither seen nor heard.",
  "Request forgiveness, not permission.",
  "Sometimes dreams are merely dreams.",
  "The proof of the pudding is in the eating.",
  "Keep your eye on the ball.",
  "It's never too late for a snack.",
  "Frosting is just the icing on the cake.",
  "Strike while the iron is hot.",
  "Lightning never strikes twice.",
  "100% Natural Fiber.",
  "Discretion is the better part of valor.",
  "If the mask fits, wear it!",
  "A stitch in time saves nine.",
  "As a cow grows, so do its nostrils.",
  "Sail wherever the wind takes you.",
  "Remember to see the forest between the trees.",
  "Hop first; ask questions later.",
  "Don't have a cow.",
  "You can never have too much of a good thing!",
  "Take a leap!",
  "Always be down to monkey around!",
  "If a job is worth doing, do it right!",
  "When life gives you lemons, make lemonade!",
  "Remember to keep your core muscles engaged!",
  "There's no such thing as a safe secret.",
  "No pain, no gain!",
  "Rules were made to be broken.",
  "Tea is a cup of life.",
  "The world is more swole than you will ever fully know.",
  "What is cheap is most costly.",
  "Don't pine for the past.",
  "It takes two to tango.",
  "Toby or not Toby? I don't know, I'm asking you.",
  "There's no use crying over spilled milk.",
  "The best things in life are free.",
  "Time makes fossils of us all.",
  "Even the best of friends start out as strangers.",
  "It's the early bird that catches the worm!",
  "There's no excuse for half-baked potatoes.",
  "Surround yourself with things you love.",
  "Work smarter, not harder.",
  "No sweater off my back.",
  "You mess with the bull, you get the horns.",
  "TWO heads are better than one!",
  "Don't put the cart before the horse.",
  "Pearls are a pink gorilla's best friend.",
  "Onwards and upwards!",
  "Trouble never comes alone.",
  "Walk on the wild side.",
  "Which came first, the seeds or the sunflower?",
  "The dog wags his tail, not for you, but for your bread.",
  "Take the good with the bad.",
  "Age before beauty.",
  "Today's adults are yesterday's children.",
  "Every cloud has a silver lining.",
  "Don't cry wolf unless you mean it.",
  "You can't fight your genes.",
  "Smile, and the world smiles with you.",
  "Don't be afraid to show your fangs.",
  "Beauty is in the eye of the beholder.",
  "Clothes totally make the mammal.",
  "Don't sign until you've read the whole thing.",
  "There's no such thing as luck.",
] as const;
