const CONTENT = {
  name: "James Emmanuel Paul Yambasu",
  handle: "barjona_",
  role: "Survey Researcher & Data Analyst",
  tagline: "Survey researcher and data analyst, Freetown, Sierra Leone",
  images: { headshot: "images/james.jpg", headshotAlt: "James Emmanuel Paul Yambasu", resume: "James_Yambasu_Resume.pdf" },
  hero: {
    heading: "I turn messy field data into decisions people can act on.",
    sub: "Survey design, field research, data cleaning, analysis and research writing.",
    stats: [
      { number: "132", label: "survey responses cleaned in a single audit" },
      { number: "29", label: "structural errors fixed in a live XLSForm" },
      { number: "4", label: "bounties won on Learn2Earn" }
    ]
  },
  about: {
    heading: "About",
    paragraphs: [
      "I am a Mathematics and Statistics student at Fourah Bay College, University of Sierra Leone, with a minor in Geology.",
      "I work across survey design, fieldwork, KoboToolbox auditing, data cleaning, analysis and research writing.",
      "I also work as a Personal Assistant to a research consultant at IMACS, providing administrative support."
    ]
  },
  cleaning: {
    heading: "What cleaning actually looks like",
    intro: "Here is a small invented survey dataset before and after cleaning. No real respondent data is shown.",
    note: "Sample rows. No real respondent data is shown.",
    columns: ["_id", "district", "interview_date", "age", "business", "monthly_revenue", "phone"],
    before: [
      ["001", "freetown", "12/03/2026", "34", "Retail", "Le 1,200,000", "076 123456"],
      ["002", "FREETOWN ", "2026-03-13", "thirty", "retail ", "850000", "+23276123457"],
      ["002", "Wstern Area", "13-03-2026", "", "Tailoring", "N/A", "076123458"],
      ["004", "Western Area Rural", "03/14/2026", "41", "tailoring", "Le900,000", ""],
      ["005", "western area rural", "", "29", "Retail", "1.1m", "076 123 460"]
    ],
    after: [
      ["001", "Western Area Urban", "2026-03-12", "34", "Retail", "1200000", "+23276123456"],
      ["002", "Western Area Urban", "2026-03-13", "30", "Retail", "850000", "+23276123457"],
      ["003", "Western Area Rural", "2026-03-13", "(missing)", "Tailoring", "(missing)", "+23276123458"],
      ["004", "Western Area Rural", "2026-03-14", "41", "Tailoring", "900000", "(missing)"],
      ["005", "Western Area Rural", "2026-03-15", "29", "Retail", "1100000", "+23276123460"]
    ],
    faults: [
      { label: "Duplicate key", text: "Duplicate submissions were identified and re-keyed rather than silently dropped." },
      { label: "Inconsistent districts", text: "District spellings were standardised to coded values." },
      { label: "Mixed date formats", text: "Dates were standardised to ISO 8601." },
      { label: "Numbers stored as text", text: "Text values and currency symbols were parsed into usable numeric values." },
      { label: "Missing values", text: "Missing values were flagged rather than invented." },
      { label: "Phone formats", text: "Phone numbers were normalised to E.164 format." }
    ]
  },
  chart: {
    heading: "STAT 225: Time Series Analysis",
    caption: "Weekly height of a live plant measured over twelve weeks and modelled as a growth curve.",
    yLabel: "Height (cm)", xLabel: "Week", series: "Measured height",
    data: [{x:1,y:2.1},{x:2,y:3.4},{x:3,y:5.2},{x:4,y:7.8},{x:5,y:11},{x:6,y:14.9},{x:7,y:19.2},{x:8,y:23.4},{x:9,y:27.1},{x:10,y:30},{x:11,y:31.9},{x:12,y:32.8}],
    annotation: "Growth flattens out from week 10. That plateau is what the model had to capture."
  },
  cases: {
    heading: "Projects in detail",
    items: [
      { title: "CESSAURA: an order page for a French curls seller", org: "CESSAURA, Grafton", period: "November 2026", link: "https://cessaura.github.io/", source: "https://github.com/cessaura/cessaura.github.io", metrics: [{number:"100",label:"accessibility score"},{number:"~175 KB",label:"page weight"},{number:"8",label:"colours with live totals"}], problem: "Cess sells French curls by the packet in Grafton. Her buyers needed to see the colours, work out a price and order without a long WhatsApp back-and-forth, on phones with slow data.", approach: ["Built an order box: pick a colour from photos of her own bundles, choose 24 or 30 inch and the number of packets, and WhatsApp opens with the order and total already written.", "Added one-tap Orange Money and Afrimoney, cash on delivery, her exact map pin and a Krio version of every line.", "Kept the page under 200 KB without a framework or web fonts, and tested it on a simulated 3G phone."], result: "The site is live under her own name with a GitHub business profile, and it scores 100 for accessibility." },
      { title: "Relyn's Wear: a catalogue page for a Goderich tailor", org: "Relyn's Wear, Goderich", period: "October 2026", link: "https://relynswear.github.io/", source: "https://github.com/relynswear/relynswear.github.io", metrics: [{number:"10",label:"styles with order buttons"},{number:"100",label:"accessibility score"},{number:"EN / Krio",label:"language switch"}], problem: "Relyn needed one page customers could share that shows her styles, her hours and how to find the shop.", approach: ["Turned her catalogue into cards with an order button that opens WhatsApp with the style already named.", "Found the shop from her Google Maps pin and wrote the directions from Zion Academy, the nearest landmark.", "Added a live open or closed sign, Orange Money and a Krio version of the page."], result: "The site is live under the business name with its own GitHub profile." },
      { title: "Market validation survey for a Pan-African commerce platform", org: "Big Markit", period: "March 2026", metrics: [{number:"29",label:"form errors fixed"},{number:"132",label:"responses cleaned"},{number:"0",label:"responses lost"}], problem: "A digital commerce platform needed a tested survey instrument and an analysis-ready dataset.", approach: ["Built and deployed the survey through KoboCollect.", "Audited the XLSForm and corrected structural errors.", "Cleaned and standardised 132 responses."], result: "Delivered an analysis-ready dataset and written findings." }
    ]
  },
  focus: { heading: "What I work on", areas: [{title:"Survey design and data cleaning",text:"Building and auditing XLSForms and turning raw KoboCollect exports into analysis-ready datasets."},{title:"Field research",text:"Designing and running surveys for NGOs and research firms."},{title:"Research writing",text:"Literature reviews and research summaries on gender equality and social equity."},{title:"Websites for small businesses",text:"Small, fast pages in English and Krio where customers can order and pay with one tap, even on a weak network."}] },
  skills: { heading: "Skills and tools", groups: [{label:"Research",items:["Survey design","XLSForm auditing","Field enumeration","Market validation","Literature review"]},{label:"Data",items:["Data cleaning","Dataset merging","Statistical analysis","Time series","Reporting"]},{label:"Tools",items:["KoboToolbox","KoboCollect","Microsoft Excel"]},{label:"Web",items:["Mobile-first landing pages","GitHub Pages","Lighthouse and accessibility testing"]},{label:"Languages",items:["English","Krio"]}] },
  experience: { heading: "Experience", items: [{period:"2026 to present",title:"Personal Assistant to the Technical Assistant",org:"IMACS",text:"Administrative support to a research consultant, including written meeting and workshop debriefs."},{period:"Jan 2026 to present",title:"Undergraduate Research Fellow",org:"International Youth Council on Gender Equality",text:"Reviewing and synthesising literature on gender equality and social equity."},{period:"2026 to present",title:"Freelance Survey Researcher & Data Analyst",org:"Upwork · MoCTI Learn2Earn",text:"Independent survey design, data cleaning and reporting."},{period:"2025",title:"Field Enumerator",org:"Budget Advocacy Network",text:"Structured field data collection in KoboCollect."}] },
  education: { heading: "Education and certification", items: [{period:"2024 to 2028",title:"BSc Mathematics & Statistics, minor in Geology",org:"Fourah Bay College, University of Sierra Leone",text:"Undergraduate student."},{period:"2026",title:"Learn2Earn Programme, Cohort 2",org:"MoCTI / UNICEF",text:"Freelancing and data modules completed."}] },
  projects: { heading: "Other recent work", items: [{title:"Gender equality research summaries",text:"Literature-review pieces written and published to the International Youth Council on Gender Equality's columns."},{title:"GC8 Funding Request Workshop debrief",text:"A multi-day Malaria working group session turned into a written debrief."}] },
  gallery: { heading: "Websites I built", note: "Tap a picture to open it full size in a new tab. Visit site opens the live page. I built both for small businesses in Sierra Leone, and each one is hosted under the owner's name.", items: [{src:"images/cessaura-site.webp",alt:"Two phone screens of the CESSAURA website: the gold crown logo and the order builder with colour swatches",caption:"CESSAURA · French curls, Grafton · cessaura.github.io",href:"https://cessaura.github.io/"},{src:"images/relyns-wear-site.webp",alt:"Two phone screens of the Relyn’s Wear website: the purple and gold hero and the product catalogue",caption:"Relyn’s Wear · bespoke tailor, Goderich · relynswear.github.io",href:"https://relynswear.github.io/"}] },
  wins: { heading: "Learn2Earn bounties won", note: "Four bounties won on the MoCTI Learn2Earn platform.", items: [{rank:"2nd",title:"Tell Your Story",amount:"SLE 376.00"},{rank:"3rd",title:"Entrepreneurial Thinking and Problem-Solving",amount:"SLE 705.00"},{rank:"3rd",title:"Build Your Professional Presence",amount:"SLE 188.00"},{rank:"5th",title:"Client Management and Organisation",amount:"SLE 352.50"}] },
  contact: { heading: "Get in touch", text: "Open to freelance research and data work, scholarships, fellowships and roles in data and public health.", email: "jamesyambasu743@gmail.com", links: [{label:"Email",value:"jamesyambasu743@gmail.com",href:"mailto:jamesyambasu743@gmail.com"},{label:"LinkedIn",value:"View profile",href:"https://www.linkedin.com/in/james-yambasu-117b05322"},{label:"Upwork",value:"View profile",href:"https://www.upwork.com/freelancers/~011d520beafa3fe3fb"},{label:"Learn2Earn (FOW)",value:"Junior · 4 bounties won",href:"https://learn2earn.mocti.gov.sl/u/james-e-paul-yambasu"},{label:"Instagram",value:"@barjona_",href:"https://instagram.com/barjona_"}] }
};
