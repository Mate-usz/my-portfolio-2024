/*
 * English content. Mirrors it.js key by key — if you add a key here, add it there.
 * Same caveats as it.js: kitchen specs/skills to confirm, kitchen.logRows[].dough
 * left empty on purpose until the real numbers are at hand.
 */

const en = {
  nav: {
    kitchen: "Kitchen",
    work: "Work",
    services: "Services",
    contact: "Contact",
  },
  labels: {
    email: "EMAIL",
    phone: "PHONE",
    github: "GITHUB",
    linkedin: "LINKEDIN",
    delivery: "delivery",
    team: "team",
    client: "client",
    via: "through",
  },
  footer: "© 2026 mateuszrodz.com",

  home: {
    name: "Mateusz Rodz",
    kicker:
      "Perugia, Italy - software developer for clients, kitchen on Saturdays",
    bioA: "Developer in Perugia. Two years in consultancy on portals for Unicredit, AXA, BNP and ITAS, in teams of three to twelve people. Since 2024 I work for myself: web apps, Shopify stores and a few games.",
    bioB: "Outside work I bake and build games. Pizza on Saturdays, GameJams when they come round. Same habit in all of it: get the details right and hand it over finished.",
    seekTitle: "What are you looking for?",
    seekSub: "Three doors. Take the one that fits.",
    doors: [
      {
        title: "Services",
        body: "Bug fixes, performance and landing pages, delivered in 48-72 hours.",
        meta: "from €50",
        href: "/services",
      },
      {
        title: "Experience",
        body: "Banking and insurance portals in consultancy, then my own projects since 2024.",
        meta: "2022 - 2026",
        href: "/work",
      },
      {
        title: "Kitchen",
        body: "Pizza, pastry and bread, logged bake by bake. Open to kitchen work.",
        meta: "since 2023",
        href: "/bakery",
      },
    ],
  },

  kitchen: {
    metaTitle: "Kitchen",
    metaDescription:
      "Mateusz Rodz's culinary portfolio: pizza, cornetti, pan brioche and bread baked at home since 2023, with the full bake log. Open to kitchen work or a stage around Perugia, Italy.",
    title: "Bread, pizza and pastry",
    lead: "I have been baking at home since late 2023, self-taught: pizza above all, then cornetti, pan brioche and bread. I photograph and note down nearly every bake, the good ones and the bad. I am looking for a kitchen where I can learn the professional side properly.",
    availTitle: "Available",
    avail: "Part time or full time possible · Perugia and around",
    cta: "Write to me",
    gallery: "Recent bakes",
    galleryLead: [
      { c: "Margherita pizza", s: "03.2026" },
      { c: "Cornetti", s: "05.2026" },
      { c: "First country loaf", s: "02.2026" },
    ],
    galleryRest: [
      { c: "Pan brioche" },
      { c: "Spicy salami pizza" },
      { c: "Giant cornetto, pastry cream" },
      { c: "Mini cornetti" },
      { c: "Tuna and onion pizza" },
    ],
    what: "What I make",
    cats: [
      {
        title: "Pizza",
        body: "The dough I make most often, since 2023. Margherita, tuna and onion, four cheeses: I change the toppings and keep the dough fixed until it comes out the way I want.",
        spec: "Round and pan · baking stone · home oven",
      },
      {
        title: "Pastry and enriched doughs",
        body: "Regular cornetti and giant ones, pan brioche plain or filled with chocolate. This is the part that taught me patience with proving times.",
        spec: "Cornetti · pan brioche · filled brioche",
      },
      {
        title: "Bread",
        body: "The most recent chapter: the first country loaf is from February 2026. Every bake logged with whatever did not work, so I do not repeat it.",
        spec: "Country loaf · rolls · focaccia",
      },
    ],
    log: "Bake log",
    logNote:
      "I write down every bake: what I did, how it came out, what went wrong. These are the last few months.",
    logFoot:
      "The full notebook goes back to November 2023 — every bake photographed.",
    archiveCta: "Open the bake archive",
    archiveHref: "/sfornati",
    logRows: [
      {
        date: "14.05.26",
        name: "Cornetti",
        dough: "",
        note: "Delicious, good rise in the oven",
      },
      {
        date: "28.03.26",
        name: "Pizza night",
        dough: "",
        note: "Margherita, cheeses, spicy salami and crisps",
      },
      {
        date: "28.03.26",
        name: "Pan brioche",
        dough: "",
        note: "Pan brioche and brioche on the same day",
      },
      {
        date: "15.03.26",
        name: "Brioche",
        dough: "",
        note: "Plain ones, did not feel like laminating",
      },
      {
        date: "09.03.26",
        name: "Rolls",
        dough: "",
        note: "Only good warm, unfortunately",
      },
      {
        date: "05.02.26",
        name: "Country loaf",
        dough: "",
        note: "The first one. Needs a longer bake",
      },
    ],
    ask: "What I am looking for",
    askBody:
      "A place in a bakery, pizzeria or pastry kitchen. I am not asking to be paid to learn on your time: I show up early, clean as I go, and I already know how to handle dough and a timetable. Coming from software, I am also happy to fix your website while I am at it.",
    skills: "Where I am solid",
    skillsList: [
      "Mixing by hand, start to tray",
      "Reading a fermentation",
      "Shaping and stretching",
      "Baking on a stone",
      "Working clean, mise en place",
      "Weighing and scaling recipes",
    ],
  },

  archive: {
    metaTitle: "Bake archive",
    metaDescription:
      "Mateusz Rodz's complete bake archive: every bake photographed since November 2023, month by month, with notes on what worked and what did not.",
    title: "Bake archive",
    lead: "Every bake, from the first to the latest. Not a highlight reel: the failed attempts are in here too, because those are the ones I learned from. Click a photo to see it full size.",
    railTitle: "How to read it",
    rail: "It starts in November 2023 and runs down to today, month by month. The notes in the margin mark a change of kit or method: those are the points where the results shift.",
    backCta: "Back to the kitchen",
    jumpCta: "Jump to the latest bakes",
    photosLabel: "photos",
    close: "Close",
    prev: "Previous",
    next: "Next",
    // le note delle foto restano in italiano: sono appunti veri, non testi di sito
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },

  services: {
    metaTitle: "Services",
    metaDescription:
      "Web work for small businesses: bug fixes, landing pages, bookings and Shopify stores. One fixed price agreed up front, delivered in 2 days to 3 weeks.",
    title: "Websites and web apps for small businesses",
    lead: "I build and fix websites for people who run a business and have nobody in-house to do it. You deal with me directly, start to finish. Small jobs are usually done in two or three days.",
    railTitle: "How I work",
    rail: "I answer within a day. After a short call you get one fixed price, in writing. Invoiced with Italian P.IVA.",
    cta: "Ask for a quote",
    what: "What you can hire me for",
    packages: [
      {
        name: "Fix & Boost",
        price: "from €50",
        body: "Something is broken or slow. I find the cause, fix it, and tell you what it was without the jargon.",
        spec: "bugs, speed, mobile layout",
        delivery: "2 days",
      },
      {
        name: "Landing page",
        price: "from €300",
        body: "One page that explains what you do and gets people to call or book. I help you get the words in order too.",
        spec: "design and build, responsive, analytics",
        delivery: "5 days",
      },
      {
        name: "Landing with bookings",
        price: "from €500",
        body: "The page plus a booking system that works, wired to your calendar or your inbox.",
        spec: "forms, calendar, email alerts",
        delivery: "8 days",
      },
      {
        name: "Shopify store",
        price: "from €900",
        body: "A shop that actually sells. Theme built around your brand, products loaded properly, payments and shipping set up. Then I teach you to run it yourself.",
        spec: "Shopify theme, product import, payments, shipping",
        delivery: "3 weeks",
        premium: "Premium",
      },
    ],
    booking: {
      title: "Book a free call",
      lead: "Thirty minutes, no strings: you tell me what you need and I tell you whether I can do it, what it costs and how long it takes. If it is not my kind of job I will say so straight away.",
      serviceLabel: "SERVICE",
      servicePlaceholder: "Pick one",
      serviceOther: "Not sure yet",
      nameLabel: "FULL NAME",
      namePlaceholder: "Jane Doe",
      emailLabel: "EMAIL",
      emailPlaceholder: "you@example.com",
      detailsLabel: "A LINE OR TWO ABOUT IT · OPTIONAL",
      detailsPlaceholder:
        "e.g. the site got slow after I uploaded the product photos",
      submit: "Book the call",
      sending: "Sending…",
      successTitle: "Got it",
      successBody:
        "I will write within one working day with two or three possible slots. If anything else comes to mind meanwhile, just reply to that email.",
      errorRequired:
        "I need a service, a name and an email to get back to you.",
      errorEmail: "That email address does not look right.",
      errorSend:
        "Could not send. Try again in a moment, or write to me directly at",
      note: "I use these details only to reply to you: no newsletter, no lists.",
      noteLink: "How I handle data",
    },
    how: "How it works",
    steps: [
      {
        n: "01",
        title: "A thirty-minute call",
        body: "You tell me the problem. I ask what the site has to do for you. No written brief needed.",
      },
      {
        n: "02",
        title: "A fixed price",
        body: "Written scope and one number, same day. No hourly surprises.",
      },
      {
        n: "03",
        title: "I build, you watch it live",
        body: "A link you can open from your phone, updated as I go.",
      },
      {
        n: "04",
        title: "Handover",
        body: "Everything in your accounts, not mine. I show you how to change the text yourself.",
      },
    ],
    proof: "Recent jobs",
    proofNote:
      "Real jobs, not demos: a construction machinery shop on Shopify, a handmade skateboard store with Stripe payments, and a web app that runs a page per client.",
    jobs: [
      { name: "RSVmotori", spec: "Shopify, dynamic forms at signup" },
      { name: "Kobocraft", spec: "Stripe, board customiser" },
      { name: "heyHuby", spec: "Next.js, a page per client" },
    ],
    no: "What I don't take on",
    noBody:
      "I do not do monthly SEO, logos, or digging through plugins on a site someone else built. If it is outside what I am good at I will say so and send you to someone better. Quicker for both of us.",
  },

  work: {
    metaTitle: "Work",
    metaDescription:
      "Mateusz Rodz's track record: portals for Unicredit, AXA, BNP and ITAS in consultancy since 2022, then web apps, e-commerce and games on his own since 2024.",
    title: "From banking portals to projects of my own",
    lead: "I started in consultancy on portals for Unicredit, AXA, BNP and ITAS, inside teams of three to twelve people. Since 2024 I work for myself: web apps, e-commerce, and a few games. Based in Perugia, available remotely.",
    railTitle: "Details",
    rail: "Perugia, Italy. Italian native, Polish as a family language, English B1-B2. Open to development contracts, remote or here.",
    cta: "Get in touch",
    own: "On my own, since 2024",
    ownList: [
      {
        when: "12.2025 - ongoing",
        name: "heyHuby",
        kind: "solo",
        body: "A web app that gathers everything important about a client, a brand or a company in one place. Each client gets their own page, can point it at their own domain and customise the content entirely.",
        stack: "Next.js, TypeScript, Supabase",
      },
      {
        when: "04.2026 - 05.2026",
        name: "Blog AI",
        kind: "solo",
        body: "An app that hooks up multiple domains with DNS record checks and issues the SSL certificate through certbot. Themeable, with articles written by hand or generated from a topic through the OpenAI API.",
        stack: "Next.js, Node, OpenAI, certbot",
      },
      {
        when: "03.2026 - 04.2026",
        name: "DailyUs",
        kind: "personal project",
        body: "A mobile app meant to give couples something extra. I used AI to work out the direction and to implement some of the solutions.",
        stack: "mobile, AI",
      },
      {
        when: "07.2025 - 08.2025",
        name: "RSVmotori",
        kind: "solo",
        body: "A construction machinery shop on Shopify with custom elements and an app with dynamic forms, so registration could collect information Shopify does not handle on its own.",
        stack: "Shopify, Liquid, custom app",
      },
      {
        when: "02.2025 - 06.2025",
        name: "Advergame",
        kind: "solo",
        body: "A short 2D adventure puzzle for an album release, with four easter eggs pointing fans back to older records.",
        stack: "2D game dev",
      },
      {
        when: "03.2024 - 05.2024",
        name: "Kobocraft",
        kind: "solo",
        body: "A handmade skateboard shop where customers build their own board by dragging stickers and entering their NFT codes. I improved stability and load times, integrated Stripe, and cleaned up parts of the experience without touching the client's design.",
        stack: "frontend, React, Nodejs, Stripe",
      },
      {
        when: "02.2024 - 03.2024",
        name: "Tetris mobile multiplayer",
        kind: "solo",
        body: "I worked on this Unity3D mobile game: bug fixing and reworked server communication to bring latency down.",
        stack: "Unity3D",
      },
    ],
    clients: "In consultancy, 2022 to 2024",
    clientList: [
      {
        when: "10.2023 - 05.2024",
        name: "Unicredit portal",
        team: "12",
        client: "Unicredit Czechia",
        via: "Be",
        body: "A portal serving several user types, with internal messaging, client management and a multilingual notification and push system.",
      },
      {
        when: "05.2023 - 09.2023",
        name: "Portal migration",
        team: "5",
        client: "ITAS / Reply",
        via: "Lipari Technology",
        body: "Part of the team that migrated the portal onto a new React frontend.",
      },
      {
        when: "02.2023 - 09.2023",
        name: "Notification system",
        team: "3",
        client: "AXA / Reply",
        via: "Lipari Technology",
        body: "Frontend development on the notification system, alongside maintenance of the whole codebase.",
      },
      {
        when: "02.2022 - 09.2023",
        name: "TPV",
        team: "3",
        client: "BNP / Reply",
        via: "Lipari Technology",
        body: "A CRM for managing and filling in records for clients and contracts. The hardest part was a section with dynamic entry of beneficiaries, one to N, each with its own runtime validation inside a multi-section form.",
      },
    ],
    stack: "Stack",
    stacks: [
      {
        t: "Frontend",
        items: [
          "React, Next.js",
          "Angular",
          "TypeScript, JavaScript",
          "CSS, SCSS, TailwindCSS",
        ],
      },
      {
        t: "Backend",
        items: [
          "C#, Node.js",
          "Java, Spring Boot",
          "REST APIs",
          "MySQL, MongoDB, Supabase",
        ],
      },
      {
        t: "Tools and method",
        items: ["Git, GitHub", "CI/CD", "Agile, Scrum", "Unity3D, GameMaker"],
      },
    ],
    off: "Outside work",
    offList: [
      {
        t: "Games",
        body: "In my own time I build games, either mine or rebuilding mechanics that stuck with me. I join GameJams when I can: forty-eight hours to make a game from nothing on a theme handed out minutes before. Several titles are published on mobile stores and itch.io, built in Unity3D or GameMaker, and I recently picked C++ back up to write myself a small 2D engine.",
      },
      {
        t: "Creator",
        body: "When an idea is worth telling, I make a video about it on YouTube.",
      },
      {
        t: "Trading cards",
        body: "For three years now I have run a small store selling off my old Pokémon collections and a few Magic boxes.",
      },
    ],
    close:
      "The full CV is a PDF if you need it. Otherwise write to me and I will answer within a day.",
    cvLabel: "Download the CV (PDF)",
  },
};

export default en;
